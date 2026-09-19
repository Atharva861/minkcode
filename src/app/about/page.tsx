"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";

const process = [
  {
    n: "01",
    t: "Discover",
    d: "We start with the problem: audience, goals, competitive landscape, and what makes your brand different.",
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
  {
    n: "05",
    t: "Grow",
    d: "Social media, SEO, and paid campaigns that bring the right people to what we built, with monthly reporting on what's working.",
  },
];

// Active client industries represented in minkcode case studies (e.g., Starmed Facility Services, Jungle Belles, PS Foods)
const industries = [
  "Facility services",
  "Media & studios",
  "E-commerce",
];

const devStack = [
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

const marketingStack = [
  "Meta Business Suite",
  "Google Analytics",
  "Search Console",
  "Google Ads",
  "Figma",
  "Canva",
];

const principles = [
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
  {
    t: "Measure what matters",
    d: "We report honestly on traffic, leads, and results, so you always know what's working and what isn't.",
  },
];

// Config flag to toggle team/founder block; left hidden by default
const showTeam = false;

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
}

const team: TeamMember[] = [
  {
    name: "Founder Name",
    role: "Founder & Lead",
    bio: "Designing, engineering, and scaling digital experiences from first pixel to ongoing growth.",
  },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "About | minkcode";
  }, []);

  return (
    <PageShell>
      {/* Hero */}
      <section className="px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28 lg:px-14">
        <h1 className="font-display text-[11vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[7vw]">
          A small studio
          <br />
          <span className="font-normal opacity-60">with a sharp point of view.</span>
        </h1>
        <p className="mt-12 max-w-2xl text-lg leading-relaxed opacity-80 md:text-xl">
          minkcode is a boutique digital studio. We design and build websites,
          then help them get seen through social media and digital marketing.
          We work directly with founders and product teams, from the first
          pixel to ongoing growth.
        </p>
      </section>

      {/* How we work */}
      <section className="border-y border-primary/20 px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <p className="mb-12 text-xs uppercase tracking-[0.25em] opacity-70">
          / How we work
        </p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
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

      {/* One team, start to finish */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-primary/20 px-6 py-20 md:px-10 md:py-28 lg:px-14"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-6 text-xs tracking-[0.25em] opacity-70">
              <span className="uppercase">/ WHY </span>
              <span className="lowercase">minkcode</span>
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              Build it.
              <br />
              <span className="font-normal opacity-60">Then grow it.</span>
            </h2>
          </div>
          <div className="flex items-center md:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed opacity-80 md:text-xl">
              Most studios build the site and hand it off. Most marketers inherit a site they didn&apos;t make. At minkcode the same team does both, so your brand stays consistent, nothing gets lost between hand-offs, and you have one point of contact from launch day onwards.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Who we work with */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-primary/20 px-6 py-20 md:px-10 md:py-28 lg:px-14"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] opacity-70">
              / Who we work with
            </p>
            <p className="max-w-md text-lg leading-relaxed opacity-80 md:text-xl">
              Founders and growing businesses that want their digital presence to feel considered.
            </p>
          </div>
          <div className="flex flex-wrap content-start items-center gap-3 md:col-span-7">
            {industries.map((ind, i) => (
              <motion.span
                key={ind}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-full border border-primary px-6 py-3 text-lg font-medium transition-colors hover:bg-primary hover:text-primary-foreground md:text-xl"
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

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
              way, so your team can maintain what we ship long after launch.
            </p>
          </div>
          <div className="space-y-10 md:col-span-8">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] opacity-60">
                Development &amp; engineering
              </p>
              <div className="flex flex-wrap content-start gap-3">
                {devStack.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="rounded-full border border-primary px-6 py-3 text-lg font-medium transition-colors hover:bg-primary hover:text-primary-foreground md:text-xl"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] opacity-60">
                Marketing &amp; content
              </p>
              <div className="flex flex-wrap content-start gap-3">
                {marketingStack.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="rounded-full border border-primary px-6 py-3 text-lg font-medium transition-colors hover:bg-primary hover:text-primary-foreground md:text-xl"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-primary/20 px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <p className="mb-12 text-xs uppercase tracking-[0.25em] opacity-70">
          / Principles
        </p>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="font-display text-2xl font-semibold">{p.t}</h3>
              <p className="mt-3 leading-relaxed opacity-80">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The people (optional, behind flag) */}
      {showTeam && (
        <section className="border-t border-primary/20 px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <p className="mb-12 text-xs uppercase tracking-[0.25em] opacity-70">
            / The people
          </p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                <div className="mb-4 aspect-square w-full rounded-2xl border border-primary/20 bg-primary/5" />
                <h3 className="font-display text-2xl font-semibold">{member.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest opacity-60">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed opacity-80">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="w-full border-t border-primary/20 px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-5xl font-semibold leading-[0.95] md:text-8xl">
            Let&apos;s build something
            <br />
            <span className="font-normal opacity-60">worth growing.</span>
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
