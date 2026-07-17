"use client";

import { motion } from "framer-motion";

interface Props {
  open: boolean;
  onClick: () => void;
}

const lineTransition = { duration: 0.3, ease: [0.65, 0, 0.35, 1] };

export function HamburgerButton({ open, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className={`fixed right-6 top-6 z-[100] flex h-10 w-8 items-center justify-center md:right-10 md:top-8 md:h-12 md:w-9 lg:right-14 transition-colors duration-300 ${
        open ? "text-primary-foreground" : "text-primary"
      }`}
    >
      <div className="flex w-full flex-col gap-[8px]">
        {/* Top line */}
        <motion.span
          animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          transition={lineTransition}
          className="block h-[2px] w-full bg-current"
        />
        {/* Bottom line */}
        <motion.span
          animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          transition={lineTransition}
          className="block h-[2px] w-full bg-current"
        />
      </div>
    </button>
  );
}
