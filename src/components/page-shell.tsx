"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiteFooter } from "./site-footer";

interface Props {
  children: ReactNode;
}

export function PageShell({ children }: Props) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen w-full max-w-full overflow-x-hidden"
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
      {children}
      <SiteFooter />
    </motion.main>
  );
}
