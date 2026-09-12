"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const links = [
  { to: "/work", label: "Work", num: "01" },
  { to: "/services", label: "Services", num: "02" },
  { to: "/about", label: "About", num: "03" },
  { to: "/contact", label: "Contact", num: "04" },
] as const;

interface Props {
  open: boolean;
  onClose: () => void;
}

export function FullPageMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: "circle(0% at var(--menu-origin-x, 100%) var(--menu-origin-y, 0%))" }}
          animate={{ clipPath: "circle(150% at var(--menu-origin-x, 100%) var(--menu-origin-y, 0%))" }}
          exit={{ clipPath: "circle(0% at var(--menu-origin-x, 100%) var(--menu-origin-y, 0%))" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[90] flex flex-col bg-primary text-primary-foreground [--menu-origin-x:calc(100%-40px)] [--menu-origin-y:44px] md:[--menu-origin-x:calc(100%-58px)] md:[--menu-origin-y:56px] lg:[--menu-origin-x:calc(100%-74px)] lg:[--menu-origin-y:56px]"
        >
          <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8 lg:px-14">
            <Link
              href="/"
              onClick={onClose}
              className="block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/logo-horizontal-inverted.svg"
                alt="minkcode"
                className="h-10 w-auto md:h-12"
              />
            </Link>

          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-6 md:px-10 lg:px-14">
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 30, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={link.to}
                  onClick={onClose}
                  className="group flex items-baseline gap-4 border-b border-primary-foreground/15 py-4 md:py-6"
                >
                  <span className="w-10 text-xs opacity-50 transition-opacity duration-500 group-hover:opacity-100 md:w-14 md:text-sm">
                    [{link.num}]
                  </span>
                  <span className="relative block overflow-hidden pr-2 font-display text-[16vw] leading-[0.95] tracking-tight md:text-[min(11vw,15vh)]">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                      {link.label}
                    </span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>


        </motion.div>
      )}
    </AnimatePresence>
  );
}
