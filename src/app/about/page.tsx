"use client";

import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";

const process = [
  {
    n: "01",
    t: "Discover",
    d: "We start with the problem — audience, goals, competitive landscape, and what makes your product different.",
  },
  {
    n: "02",
    t: "Design",
    d: "Wireframes to high-fidelity visual design. Every screen is intentional, no template energy.",
  },
  {
    n: "03",
    t: "Develop",
    d: "Clean, typed, accessible front-end paired with a pragmatic back-end. Built to last, easy to hand over.",
  },
  {
    n: "04",
    t: "Deploy",
    d: "Ship to the edge with monitoring, analytics, and a clear plan for iteration after launch.",
  },
];

const stack = [
  "TanStack",
  "Motion",
  "Tailwind",
  "Node",
  "Postgres",
  "Edge",
  "Next.js",
  "React",
  "TypeScript",
  "Vite",
];

export default function AboutPage() {
  return (
    <PageShell index="004">
      <section className="px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28 lg:px-14">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] opacity-70">
          <span className="h-px w-10 bg-primary" /> About the studio
        </p>
        <h1 className="font-display text-[11vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[7vw]">
          A small studio
          <br />
          <span className="italic font-normal opacity-60">with a sharp point of view.</span>
        </h1>
        <p className="mt-12 max-w-2xl text-lg leading-relaxed opacity-80 md:text-xl">
          Minkcode is a boutique web studio. We work directly with founders and
          product teams to design, build, and deploy websites that feel
          considered — from the first pixel to the production edge.
        </p>
      </section>

      {/* Process */}
      <section className="border-y border-primary/20 px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <p className="mb-12 text-xs uppercase tracking-[0.25em] opacity-70">
          / How we work
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {process.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs opacity-60">{p.n}</span>
                <span className="h-px flex-1 bg-primary/30" />
              </div>
              <h3 className="font-display text-3xl font-semibold">{p.t}</h3>
              <p className="mt-4 text-sm leading-relaxed opacity-80">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] opacity-70">
              / The stack
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              Modern tools,<br />no fluff.
            </h2>
            <p className="mt-6 max-w-md opacity-80">
              We pick tools that are fast, type-safe, and boring in the best
              way — so your team can maintain what we ship long after launch.
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-3 md:col-span-8">
            {stack.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-full border border-primary px-6 py-3 text-lg font-medium hover:bg-primary hover:text-primary-foreground md:text-xl"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-primary/20 px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <p className="mb-12 text-xs uppercase tracking-[0.25em] opacity-70">
          / Principles
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {[
            {
              t: "Craft over quantity",
              d: "We take on a limited number of projects each year so every one gets our full attention.",
            },
            {
              t: "Performance is design",
              d: "A beautiful site that loads slowly isn't beautiful. Speed is a feature we ship.",
            },
            {
              t: "Own what you ship",
              d: "No black-box tools you can't touch. Clean, readable code you can hand to the next team.",
            },
          ].map((p) => (
            <div key={p.t}>
              <h3 className="font-display text-2xl font-semibold">{p.t}</h3>
              <p className="mt-3 leading-relaxed opacity-80">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
