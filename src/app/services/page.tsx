"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";

const services = [
  {
    n: "01",
    title: "Web development from scratch",
    lede: "End-to-end product builds — from first sketch to production infrastructure.",
    deliverables: [
      "Discovery, strategy & information architecture",
      "Brand-aligned UI/UX design in Figma",
      "Custom front-end in React / TanStack / Next.js",
      "APIs, databases, and auth on Node & Postgres",
      "Edge deployment, monitoring & handover",
    ],
  },
  {
    n: "02",
    title: "Website redesign & rebrand",
    lede: "Take a dated site and turn it into a distinctive, fast, conversion-focused experience.",
    deliverables: [
      "UX audit and analytics review",
      "Content restructure & IA",
      "Visual redesign & design system",
      "Rebuild on a modern stack",
      "Zero-downtime migration & 301 mapping",
    ],
  },
  {
    n: "03",
    title: "Maintenance & growth",
    lede: "Long-term retainer for teams that treat their website as a living product.",
    deliverables: [
      "Ongoing feature development",
      "Performance & SEO monitoring",
      "A/B tests and iteration",
      "Security patches & dependency upkeep",
      "Monthly product & analytics reporting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageShell index="003">
      <section className="px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28 lg:px-14">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] opacity-70">
          <span className="h-px w-10 bg-primary" /> Services
        </p>
        <h1 className="font-display text-[11vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[7vw]">
          What we do,
          <br />
          <span className="italic font-normal opacity-60">and how.</span>
        </h1>
      </section>

      <section className="w-full">
        {services.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className={`border-t border-primary/20 px-6 py-16 md:px-10 md:py-24 lg:px-14 ${
              i === services.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
              <div className="md:col-span-2">
                <span className="font-display text-2xl opacity-60">{s.n}</span>
              </div>
              <div className="md:col-span-6">
                <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                  {s.title}
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed opacity-80">
                  {s.lede}
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest underline-offset-4 hover:underline"
                >
                  Start a project →
                </Link>
              </div>
              <ul className="space-y-3 md:col-span-4">
                <li className="mb-2 text-xs uppercase tracking-[0.25em] opacity-60">
                  Deliverables
                </li>
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 border-b border-primary/15 pb-3 text-sm"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>
    </PageShell>
  );
}
