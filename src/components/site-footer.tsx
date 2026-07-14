"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 flex min-h-screen w-full flex-col bg-primary text-primary-foreground">
      <div className="grid flex-1 grid-cols-1 gap-10 px-6 pt-16 md:grid-cols-4 md:px-10 md:pt-20 lg:px-14">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-60">
            / Reach out
          </p>
          <a
            href="mailto:hello@minkcode.studio"
            className="block text-lg leading-tight hover:opacity-70 md:text-xl"
          >
            hello@minkcode.studio
          </a>
          <p className="mt-2 text-lg md:text-xl">+1 (415) 555-0102</p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-60">
            / Find us
          </p>
          <p className="text-lg leading-tight md:text-xl">
            Minkcode Studio
            <br />
            Remote first
            <br />
            Worldwide
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-60">
            / Social
          </p>
          <ul className="space-y-1 text-lg md:text-xl">
            <li><a href="#" className="hover:opacity-70">Instagram</a></li>
            <li><a href="#" className="hover:opacity-70">LinkedIn</a></li>
            <li><a href="#" className="hover:opacity-70">GitHub</a></li>
            <li><a href="#" className="hover:opacity-70">X / Twitter</a></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-60">
            / Nav
          </p>
          <ul className="space-y-1 text-lg md:text-xl">
            <li><Link href="/" className="hover:opacity-70">Home</Link></li>
            <li><Link href="/work" className="hover:opacity-70">Work</Link></li>
            <li><Link href="/services" className="hover:opacity-70">Services</Link></li>
            <li><Link href="/about" className="hover:opacity-70">About</Link></li>
            <li><Link href="/contact" className="hover:opacity-70">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex items-end justify-between gap-6 border-t border-primary-foreground/20 px-6 py-6 md:px-10 lg:px-14">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-md items-center gap-3 border-b border-primary-foreground/30 pb-2"
        >
          <label className="text-xs uppercase tracking-[0.2em] opacity-60">
            Newsletter
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-primary-foreground/40"
          />
          <button className="text-xl transition-transform hover:translate-x-1">→</button>
        </form>
        <p className="hidden text-xs uppercase tracking-[0.2em] opacity-60 md:block">
          Est. 2024 · Built with intent
        </p>
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
        className="select-none overflow-hidden pb-4"
      >
        <div
          className="w-[108%] -ml-[4%] md:w-[110%] md:-ml-[5%]"
          style={{
            maskImage: "url('/logo/logo-horizontal.svg')",
            WebkitMaskImage: "url('/logo/logo-horizontal.svg')",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            backgroundColor: "#FFF9E8",
            aspectRatio: "1500 / 375",
          }}
        />
      </motion.div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-primary-foreground/20 px-6 py-4 text-xs uppercase tracking-[0.2em] opacity-70 md:px-10 lg:px-14">
        <span>© Minkcode 2026</span>
        <span>Site credits / Privacy / ↑ Up</span>
      </div>
    </footer>
  );
}
