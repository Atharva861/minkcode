"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const THUMB_W = 5; // px
const MIN_H = 40; // px

export function CustomScrollbar() {
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(MIN_H);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const rafRef = useRef<number | null>(null);
  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartScrollTop = useRef(0);

  const update = useCallback(() => {
    const doc = document.documentElement;
    const winH = window.innerHeight;
    const scrollH = doc.scrollHeight;
    const scrollTop = window.scrollY;

    const tHeight = Math.max(MIN_H, (winH / scrollH) * winH);
    const progress = scrollH > winH ? scrollTop / (scrollH - winH) : 0;
    const tTop = progress * (winH - tHeight);

    setThumbHeight(tHeight);
    setThumbTop(tTop);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll(); // trigger initial update asynchronously
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  // Drag-to-scroll
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;

      const doc = document.documentElement;
      const winH = window.innerHeight;
      const scrollH = doc.scrollHeight;
      const maxThumbTop = winH - thumbHeight;
      const scrollableDist = scrollH - winH;

      const deltaY = e.clientY - dragStartY.current;
      const deltaScroll =
        maxThumbTop > 0 ? (deltaY / maxThumbTop) * scrollableDist : 0;

      window.scrollTo({
        top: dragStartScrollTop.current + deltaScroll,
        behavior: "auto",
      });
    };

    const onPointerUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      setIsGrabbing(false);
      document.body.style.userSelect = "";
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [thumbHeight]);

  const onThumbPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    setIsGrabbing(true);
    dragStartY.current = e.clientY;
    dragStartScrollTop.current = window.scrollY;
    // prevent text selection while dragging
    document.body.style.userSelect = "none";
  };

  return (
    <div
      aria-hidden
      data-custom-scrollbar
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: THUMB_W + 8, // wider hit area than visible bar, easier to grab
        height: "100vh",
        zIndex: 400,
      }}
    >
      <div
        onPointerDown={onThumbPointerDown}
        style={{
          position: "absolute",
          right: 4,
          top: thumbTop,
          width: THUMB_W,
          height: thumbHeight,
          borderRadius: 9999,
          backgroundColor: "var(--color-primary, #285ccc)",
          touchAction: "none",
        }}
      />
    </div>
  );
}
