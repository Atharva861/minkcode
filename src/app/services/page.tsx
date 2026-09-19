"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PageShell } from "../../components/page-shell";

interface Service {
  id: string;
  n: string;
  shortTitle: string;
  title: string;
  description: string;
  deliverables: string[];
  image: string;
  projectTitle: string;
}

const services: Service[] = [
  {
    id: "web-development",
    n: "01",
    shortTitle: "Web Development",
    title: "Web development from scratch",
    description:
      "End-to-end product builds, from first sketch to production infrastructure. We design and engineer robust digital systems that scale with your ambitions.",
    deliverables: [
      "Discovery, strategy & information architecture",
      "Brand-aligned UI/UX design in Figma",
      "Custom front-end in React / TanStack / Next.js",
      "APIs, databases, and auth on Node & Postgres",
      "Edge deployment, monitoring & handover",
    ],
    image: "/projects/azpartners/mainbg.png",
    projectTitle: "AZ Partners",
  },
  {
    id: "redesign-rebrand",
    n: "02",
    shortTitle: "Redesign & Rebrand",
    title: "Website redesign & rebrand",
    description:
      "Take a dated site and turn it into a distinctive, fast, conversion-focused experience that commands trust and reflects who you are today.",
    deliverables: [
      "UX audit and analytics review",
      "Content restructure & IA",
      "Visual redesign & design system",
      "Rebuild on a modern stack",
      "Zero-downtime migration & 301 mapping",
    ],
    image: "/projects/psfnb/mainbg.jpg",
    projectTitle: "PS Foods & Beverages",
  },
  {
    id: "social-media",
    n: "03",
    shortTitle: "Social Media",
    title: "Social media management",
    description:
      "Consistent, on-brand social presence that builds an audience and drives enquiries. We craft authentic narratives that convert attention into community.",
    deliverables: [
      "Channel strategy and monthly content calendar",
      "Post, reel, and carousel design",
      "Copywriting and caption writing",
      "Scheduling, publishing & community management",
      "Monthly performance reports",
    ],
    image: "/projects/JungleBelles/masai.png",
    projectTitle: "Jungle Belles",
  },
  {
    id: "marketing-growth",
    n: "04",
    shortTitle: "Marketing & Growth",
    title: "Digital marketing & growth",
    description:
      "Get your website found and turn visitors into leads and customers with targeted search, paid performance, and conversion rate optimisation.",
    deliverables: [
      "Technical and content SEO",
      "Paid ads on Google and Meta: setup and management",
      "Landing pages & conversion optimisation",
      "Email marketing & lead-gen funnels",
      "Analytics, tracking & reporting",
    ],
    image: "/projects/JungleBelles/mainbg.png",
    projectTitle: "Jungle Belles",
  },
  {
    id: "maintenance-support",
    n: "05",
    shortTitle: "Maintenance & Support",
    title: "Maintenance & support",
    description:
      "Long-term retainer for teams that treat their website as a living product. We take care of health, speed, and continuous feature evolution.",
    deliverables: [
      "Ongoing feature development",
      "Performance & SEO monitoring",
      "Uptime and error monitoring",
      "Security patches & dependency upkeep",
      "Monthly product & analytics reporting",
    ],
    image: "/projects/Starmed/services.png",
    projectTitle: "Starmed Facility Services",
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
  const [activeCategory, setActiveCategory] = useState(services[0].id);

  useEffect(() => {
    // Initial hash check
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const matched = services.find((s) => s.id === hashId);
      if (matched) {
        setActiveCategory(matched.id);
      }
    }

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveCategory(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "-20% 0px -55% 0px",
      threshold: 0.1,
    });

    services.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <PageShell>
      {/* Hero */}
      <section className="px-6 pt-20 pb-12 md:px-10 md:pt-28 md:pb-16 lg:px-14">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] opacity-70">
          <span className="h-px w-10 bg-primary" /> Services
        </p>
        <h1 className="font-display text-[11vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[7vw]">
          What we do,
          <br />
          <span className="font-normal opacity-60">and how.</span>
        </h1>
      </section>

      {/* All Service Categories Section */}
      <section className="px-6 py-12 md:px-10 md:py-20 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left Column: Sticky Category Navigation Sidebar */}
          <aside className="hidden lg:col-span-4 lg:block xl:col-span-3">
            <div className="sticky top-28 pr-4">
              <p className="mb-8 text-xs uppercase tracking-[0.25em] font-medium opacity-60">
                All service categories
              </p>
              <nav aria-label="Service categories">
                <ul className="space-y-4">
                  {services.map((s) => {
                    const isActive = activeCategory === s.id;
                    return (
                      <li key={s.id}>
                        <button
                          type="button"
                          onClick={() => scrollToCategory(s.id)}
                          className={`block text-left font-display text-2xl xl:text-3xl transition-all duration-300 cursor-pointer ${
                            isActive
                              ? "font-semibold text-primary opacity-100 translate-x-1"
                              : "font-normal text-primary opacity-30 hover:opacity-75"
                          }`}
                        >
                          {s.shortTitle}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Right Column: Category Content Blocks */}
          <div className="lg:col-span-8 xl:col-span-9">
            {/* Mobile / Tablet Horizontal Category Scroll Navigation */}
            <div className="sticky top-14 z-20 -mx-6 mb-10 flex gap-2.5 overflow-x-auto border-b border-primary/15 bg-[#fff9e8]/95 px-6 py-3.5 backdrop-blur-md md:-mx-10 md:px-10 lg:hidden scrollbar-none">
              <span className="shrink-0 self-center text-[10px] uppercase tracking-[0.2em] opacity-50 pr-2">
                Categories:
              </span>
              {services.map((s) => {
                const isActive = activeCategory === s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => scrollToCategory(s.id)}
                    className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border border-primary/20 text-primary opacity-60 hover:opacity-100"
                    }`}
                  >
                    {s.shortTitle}
                  </button>
                );
              })}
            </div>

            {/* Service Category Showcase Blocks */}
            <div className="space-y-24 md:space-y-32">
              {services.map((s, i) => (
                <motion.article
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`scroll-mt-28 ${
                    i > 0 ? "border-t border-primary/20 pt-16 md:pt-24" : ""
                  }`}
                >
                  <div className="grid grid-cols-1 gap-10 xl:grid-cols-12 xl:gap-12">
                    {/* Center details column */}
                    <div className="flex flex-col items-start xl:col-span-7">
                      <span className="mb-3 block font-display text-sm opacity-50">
                        {s.n}
                      </span>
                      <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                        {s.title}
                      </h2>
                      <p className="mt-5 max-w-xl text-base leading-relaxed opacity-80 md:text-lg">
                        {s.description}
                      </p>

                      {/* Services include checklist */}
                      <div className="mt-10 w-full">
                        <p className="mb-4 text-xs uppercase tracking-[0.2em] font-medium opacity-60">
                          Deliverables:
                        </p>
                        <ul className="grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
                          {s.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-3 text-sm leading-snug"
                            >
                              <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                                <svg
                                  className="h-2.5 w-2.5"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="2.5 6 4.8 8.5 9.5 3.5" />
                                </svg>
                              </span>
                              <span className="opacity-90">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest underline-offset-4 hover:underline"
                        >
                          Start a project →
                        </Link>
                      </div>
                    </div>

                    {/* Right featured project visual card */}
                    <div className="xl:col-span-5">
                      <div className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-primary/5 shadow-[0_8px_30px_rgb(40,92,204,0.06)] transition-all duration-500 hover:shadow-[0_12px_40px_rgb(40,92,204,0.12)]">
                        <div className="aspect-[16/11] w-full overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={s.image}
                            alt={s.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        {s.projectTitle && (
                          <div className="flex items-center justify-between border-t border-primary/10 bg-[#fff9e8]/90 px-4 py-3 text-xs uppercase tracking-wider backdrop-blur-xs">
                            <span className="opacity-60 text-[11px]">Showcase</span>
                            <span className="font-medium text-primary">
                              {s.projectTitle}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models: Work with us your way */}
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
          <span className="italic font-normal opacity-60">your way.</span>
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
