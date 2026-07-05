"use client";

import { motion } from "framer-motion";

const items = [
  "TanStack",
  "Motion",
  "Tailwind",
  "Node",
  "Postgres",
  "Edge",
  "React",
  "Next.js",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12 md:gap-20 md:pr-20">
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-12 font-display text-4xl font-medium uppercase tracking-tight text-primary/30 md:gap-20 md:text-6xl lg:text-7xl"
        >
          {item}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="text-primary"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M12 2 14 10 22 12 14 14 12 22 10 14 2 12 10 10Z"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

export function MarqueeTech() {
  return (
    <section className="relative overflow-hidden border-y border-primary/20 bg-background py-10 md:py-14">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        <Row />
        <Row />
      </motion.div>
    </section>
  );
}
