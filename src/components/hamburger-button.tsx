"use client";

import { motion } from "framer-motion";

interface Props {
  open: boolean;
  onClick: () => void;
}

export function HamburgerButton({ open, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="fixed right-6 top-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-background/70 backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground md:right-10 md:top-8 lg:right-14"
    >
      <div className="relative h-3 w-6">
        <motion.span
          animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="absolute left-0 top-0 h-[2px] w-6 bg-current"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
          className="absolute bottom-0 left-0 h-[2px] w-6 bg-current"
        />
      </div>
    </button>
  );
}
