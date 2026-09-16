"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

export interface PageTransitionOptions {
  skipBlur?: boolean;
}

interface PageTransitionContextValue {
  transitionTo: (href: string, options?: PageTransitionOptions) => void;
  isTransitioning: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextValue>({
  transitionTo: () => {},
  isTransitioning: false,
});

export function usePageTransition() {
  return useContext(PageTransitionContext);
}

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);
  const targetHrefRef = useRef<string | null>(null);
  const finishViewTransitionRef = useRef<(() => void) | null>(null);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // DOM Refs for the optical blur swipe beam & overlay
  const overlayRef = useRef<HTMLDivElement>(null);
  const blurBeamRef = useRef<HTMLDivElement>(null);

  // Initialize blur elements off-screen to the left
  useEffect(() => {
    if (overlayRef.current && blurBeamRef.current) {
      const winW = typeof window !== "undefined" ? window.innerWidth : 1920;
      gsap.set(overlayRef.current, { display: "none", pointerEvents: "none" });
      gsap.set(blurBeamRef.current, { x: -winW - 100, force3D: true });
    }
  }, []);

  // Cleanup/reset helper
  const completeTransition = useCallback(() => {
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }

    if (finishViewTransitionRef.current) {
      finishViewTransitionRef.current();
      finishViewTransitionRef.current = null;
    }

    if (overlayRef.current && blurBeamRef.current) {
      const winW = typeof window !== "undefined" ? window.innerWidth : 1920;
      gsap.set(overlayRef.current, { display: "none", pointerEvents: "none" });
      gsap.set(blurBeamRef.current, { x: -winW - 100 });
    }

    document.body.style.overflow = "";
    setIsTransitioning(false);
    isTransitioningRef.current = false;
    targetHrefRef.current = null;
  }, []);

  // Trigger navigation with Bou-style wavefront + optical blur swipe
  const transitionTo = useCallback(
    (href: string, options?: PageTransitionOptions) => {
      if (isTransitioningRef.current) return;

      // When navigating from or with the nav menu open, bypass blur swipe
      const shouldSkipBlur =
        options?.skipBlur || document.body.dataset.menuOpen === "true";

      if (shouldSkipBlur) {
        router.push(href);
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        return;
      }

      isTransitioningRef.current = true;
      setIsTransitioning(true);
      targetHrefRef.current = href;

      // Close menu and prevent scroll jitter during wipe
      document.body.style.overflow = "hidden";

      // Safety fallback: ensure transition always concludes
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = setTimeout(() => {
        completeTransition();
      }, 2000);

      const overlay = overlayRef.current;
      const blurBeam = blurBeamRef.current;

      // 1. Play the optical motion-blur wavefront sweep across FULL screen (Left -> Right)
      if (overlay && blurBeam) {
        gsap.set(overlay, { display: "block", pointerEvents: "auto" });

        const winWidth = typeof window !== "undefined" ? window.innerWidth : 1920;
        const beamWidth = blurBeam.offsetWidth || winWidth * 0.65;

        // Start completely off-screen to the left
        gsap.set(blurBeam, { x: -beamWidth - 100, force3D: true });

        // Sweep completely across the entire screen and exit past the right edge
        gsap.to(blurBeam, {
          x: winWidth + 150,
          duration: 0.76,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
          onComplete: () => {
            gsap.set(overlay, { display: "none", pointerEvents: "none" });
            completeTransition();
          },
        });
      }

      // 2. Coordinate with Native View Transitions (Bou wavefront mask)
      const doc = document as unknown as {
        startViewTransition?: (cb: () => Promise<void> | void) => { finished: Promise<void> };
      };

      if (typeof doc.startViewTransition === "function") {
        const routePromise = new Promise<void>((resolve) => {
          finishViewTransitionRef.current = resolve;
        });

        doc.startViewTransition(async () => {
          router.push(href);
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          await routePromise;
        });
      } else {
        // Fallback for browsers without View Transitions
        router.push(href);
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    },
    [router, completeTransition]
  );

  // When pathname updates to the new route, finish the view transition
  useEffect(() => {
    if (!isTransitioningRef.current) return;

    if (finishViewTransitionRef.current) {
      finishViewTransitionRef.current();
      finishViewTransitionRef.current = null;
    }
  }, [pathname]);

  // Global click interception for internal links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }
      if (e.defaultPrevented) return;

      const target = (e.target as HTMLElement | null)?.closest("a");
      if (!target) return;

      // Do not run the blur transition when navigating from inside the full-page nav menu
      // or when the menu is open, so only the menu's own circular closing animation plays out.
      const isFromNavMenu =
        Boolean(target.closest("[data-full-page-menu]")) ||
        document.body.dataset.menuOpen === "true";

      if (isFromNavMenu) {
        return;
      }

      const href = target.getAttribute("href");
      if (!href) return;

      if (
        target.target === "_blank" ||
        target.hasAttribute("download") ||
        target.getAttribute("rel")?.includes("external")
      ) {
        return;
      }

      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      let targetUrl: URL;
      try {
        targetUrl = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (targetUrl.origin !== window.location.origin) return;

      const currentPath = window.location.pathname;
      const currentSearch = window.location.search;
      if (targetUrl.pathname === currentPath && targetUrl.search === currentSearch) {
        if (targetUrl.hash) return;
        return;
      }

      e.preventDefault();
      transitionTo(targetUrl.pathname + targetUrl.search + targetUrl.hash);
    };

    window.addEventListener("click", handleClick, { capture: true });
    return () => {
      window.removeEventListener("click", handleClick, { capture: true });
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    };
  }, [transitionTo]);

  return (
    <PageTransitionContext.Provider value={{ transitionTo, isTransitioning }}>
      {/* 
        Optical Motion-Blur Wavefront Overlay 
        Sweeps from left to right as the new page is revealed through the feathered mask.
      */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="fixed inset-0 z-[100] pointer-events-none overflow-hidden select-none"
        style={{ display: "none" }}
      >
        {/* Full-height blurred beam sweeping left-to-right across the entire screen */}
        <div
          ref={blurBeamRef}
          className="absolute inset-y-0 w-[70vw] min-w-[500px] pointer-events-none will-change-transform"
          style={{
            transform: "translate3d(-100vw, 0, 0)",
            backdropFilter: "blur(28px) saturate(115%)",
            WebkitBackdropFilter: "blur(28px) saturate(115%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 25%, #000 50%, rgba(0,0,0,0.3) 75%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 25%, #000 50%, rgba(0,0,0,0.3) 75%, transparent 100%)",
          }}
        >
          {/* Very light, seamless main blue (#285ccc) atmospheric gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(40, 92, 204, 0.02) 20%, rgba(40, 92, 204, 0.08) 50%, rgba(40, 92, 204, 0.02) 80%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </PageTransitionContext.Provider>
  );
}
