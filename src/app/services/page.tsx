"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";

interface Service {
  n: string;
  title: string;
  description: string;
  deliverables: string[];
}

const services: Service[] = [
  {
    n: "01",
    title: "Web development from scratch",
    description:
      "End-to-end product builds, from first sketch to production infrastructure.",
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
    description:
      "Take a dated site and turn it into a distinctive, fast, conversion-focused experience.",
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
    title: "Social media management",
    description:
      "Consistent, on-brand social presence that builds an audience and drives enquiries.",
    deliverables: [
      "Channel strategy and monthly content calendar",
      "Post, reel, and carousel design",
      "Copywriting and caption writing",
      "Scheduling, publishing & community management",
      "Monthly performance reports",
    ],
  },
  {
    n: "04",
    title: "Digital marketing & growth",
    description:
      "Get your website found and turn visitors into leads and customers.",
    deliverables: [
      "Technical and content SEO",
      "Paid ads on Google and Meta: setup and management",
      "Landing pages & conversion optimisation",
      "Email marketing & lead-gen funnels",
      "Analytics, tracking & reporting",
    ],
  },
  {
    n: "05",
    title: "Maintenance & support",
    description:
      "Long-term retainer for teams that treat their website as a living product.",
    deliverables: [
      "Ongoing feature development",
      "Performance & SEO monitoring",
      "Uptime and error monitoring",
      "Security patches & dependency upkeep",
      "Monthly product & analytics reporting",
    ],
  },
];

const engagementModels = [
  {
    title: "Project-based",
    description:
      "A defined scope, timeline, and price for a website or campaign.",
  },
  {
    title: "Monthly retainer",
    description:
      "Ongoing development, content, and marketing support with a dedicated point of contact.",
  },
  {
    title: "Build + Grow bundle",
    description:
      "Website, social media, and digital marketing under one roof, with one team and one consistent brand.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="px-6 pt-20 pb-20 md:px-10 md:pt-28 md:pb-28 lg:px-14">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] opacity-70">
          <span className="h-px w-10 bg-primary" /> Services
        </p>
        <h1 className="font-display text-[11vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[7vw]">
          What we do,
          <br />
          <span className="font-normal opacity-60">and how.</span>
        </h1>
      </section>

      {/* Services list */}
      <section className="w-full">
        {services.map((s) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-primary/20 px-6 py-16 md:px-10 md:py-24 lg:px-14"
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
              <div className="md:col-span-2">
                <span className="font-display text-2xl opacity-60">{s.n}</span>
              </div>
              <div className="flex flex-col items-start md:col-span-6">
                <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
                  {s.title}
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed opacity-80">
                  {s.description}
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
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Work with us your way */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-primary/20 px-6 py-20 md:px-10 md:py-28 lg:px-14"
      >
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] opacity-70">
          <span className="h-px w-10 bg-primary" /> Engagement
        </p>
        <h2 className="mb-16 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.02em] md:text-6xl lg:text-7xl">
          Work with us,
          <br />
          <span className="font-normal opacity-60">your way.</span>
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {engagementModels.map((m) => (
            <div key={m.title}>
              <h3 className="font-display text-2xl font-semibold">{m.title}</h3>
              <p className="mt-3 leading-relaxed opacity-80">{m.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center md:mt-20">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </motion.section>
    </PageShell>
  );
}
