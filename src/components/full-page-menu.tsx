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
          initial={{ clipPath: "circle(0% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%)" }}
          exit={{ clipPath: "circle(0% at 100% 0%)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[90] flex flex-col bg-primary text-primary-foreground"
        >
          <div className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8 lg:px-14">
            <Link
              href="/"
              onClick={onClose}
              className="font-display font-semibold leading-[0.85] tracking-[-0.06em] text-[3.5rem]"
            >
              <span>mink</span>
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px #FFF9E8",
                }}
              >
                code
              </span>
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
                  <span className="w-10 text-xs opacity-50 md:w-14 md:text-sm">
                    [{link.num}]
                  </span>
                  <span className="font-display text-[16vw] leading-[0.95] tracking-tight transition-transform duration-500 group-hover:translate-x-3 md:text-[min(11vw,15vh)]">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid grid-cols-2 gap-6 px-6 pb-8 text-sm md:grid-cols-4 md:px-10 md:pb-10 lg:px-14"
          >
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest opacity-60">
                Reach out
              </p>
              <a href="mailto:hello@minkcode.studio" className="hover:opacity-70">
                hello@minkcode.studio
              </a>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest opacity-60">
                Social
              </p>
              <div className="flex flex-col gap-1">
                <a href="#" className="hover:opacity-70">Instagram</a>
                <a href="#" className="hover:opacity-70">LinkedIn</a>
                <a href="#" className="hover:opacity-70">GitHub</a>
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest opacity-60">
                Studio
              </p>
              <p>Remote · Worldwide</p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-widest opacity-60">
                © 2026 Minkcode
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
