"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiteFooter } from "./site-footer";

interface Props {
  children: ReactNode;
  index?: string;
}

export function PageShell({ children, index }: Props) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen w-full"
    >
      <div className="flex items-center px-6 pt-6 md:px-10 md:pt-8 lg:px-14">
        <Link href="/" className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/logo-horizontal.svg"
            alt="minkcode"
            className="h-10 w-auto md:h-12"
          />
        </Link>
      </div>
      {index && (
        <span
          className="page-index-label fixed right-6 top-[8rem] z-[100] text-xs uppercase tracking-[0.2em] opacity-60 transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] md:right-10 md:top-[8.5rem] lg:right-14"
        >
          [{index} / Index]
        </span>
      )}
      {children}
      <SiteFooter />
    </motion.main>
  );
}
