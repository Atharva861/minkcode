"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../../../components/page-shell";

const services = [
  "Brand Identity & Visual Style",
  "UI/UX Design",
  "Responsive Web Development",
  "Product Range Showcase",
  "Distributor Inquiry Funnel",
  "SEO & Performance Tuning",
];

const metrics = [
  { value: "0→1", label: "Complete digital identity built from scratch" },
  { value: "<1.2s", label: "Edge delivery time on high-speed CDN" },
  { value: "100%", label: "Mobile-responsive and accessibility score" },
  { value: "24/7", label: "Automated distributor & institutional inquiry flow" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function PSFoodsPage() {
  return (
    <PageShell>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="px-6 pt-14 pb-0 md:px-10 md:pt-20 lg:px-14">
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block rounded-full border border-primary/30 px-3.5 py-1 text-xs uppercase tracking-widest opacity-70 mb-3">
              Web Development &amp; Brand Experience
            </span>
            <motion.h1
              {...fadeUp(0)}
              className="font-display text-[9vw] font-semibold leading-[0.88] tracking-[-0.03em] md:text-[6vw]"
            >
              PS Foods &amp; Beverages
            </motion.h1>
          </div>
          {/* Client logo top-right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/psfnb/psfnb.svg"
              alt="PS Foods & Beverages"
              className="h-20 w-auto object-contain drop-shadow-md"
            />
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.1)}
          className="mt-6 h-px w-full bg-primary/20"
        />
      </section>

      {/* ── OVERVIEW SPLIT ────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-10 px-6 pt-14 pb-0 md:px-10 lg:px-14">
        <motion.div {...fadeUp(0)} className="flex flex-col justify-start">
          <p className="text-base leading-[1.75] opacity-85 md:text-lg md:leading-[1.8]">
            PS Foods &amp; Beverages is an Aurangabad-based packaged drinking water and
            beverage enterprise engineered on purity, multi-stage filtration, and
            rigorous mineral balancing. Sourcing and bottling water with clinical
            precision, they deliver everyday hydration to households, hospitality
            venues, and commercial hubs across the region.
          </p>
          <p className="mt-4 text-base leading-[1.75] opacity-85 md:text-lg md:leading-[1.8]">
            In a fiercely competitive FMCG marketplace, establishing consumer confidence
            and building wholesale distributor trust demands an authoritative online
            home. minkcode was commissioned to design and develop their digital presence
            from the ground up—highlighting their purity standards, bottle product tiers,
            and frictionless commercial inquiry workflows.
          </p>

          {/* Meta tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Web Development",
              "UI/UX Design",
              "2025",
              "Aurangabad, India",
              "FMCG Packaging",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/30 px-4 py-1.5 text-xs uppercase tracking-widest opacity-70"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Services — inline with left column */}
          <div className="mt-auto pt-10">
            <p className="mb-4 text-xs font-normal uppercase tracking-[0.22em] opacity-60">
              Services Delivered
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2.5">
              {services.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-2 text-base opacity-75"
                >
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-primary/40 text-[8px] font-bold">
                    ✓
                  </span>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0.15)}
          className="relative mt-10 md:mt-0 overflow-hidden rounded-sm bg-primary/5 aspect-video shadow-2xl"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/psfnb/mainbg.jpg"
            alt="PS Foods & Beverages — Pure. Crafted. Trusted."
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/psfnb/psfnb.svg"
              alt="PS Foods & Beverages logo"
              className="max-h-[50%] max-w-[50%] w-auto h-auto object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
            />
          </div>
        </motion.div>
      </section>

      {/* ── CHALLENGE ─────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-8 px-6 pt-24 pb-0 md:grid-cols-2 md:gap-16 md:px-10 md:pt-32 lg:px-14">
        <motion.div {...fadeUp(0)}>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] opacity-60">
            The challenge
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Everyday hydration
            <br />
            <span className="font-normal opacity-60">demands visible purity.</span>
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="flex items-center">
          <p className="text-base leading-[1.8] opacity-80 md:text-lg">
            Packaged drinking water is often perceived as a commodity unless quality
            and purification rigor are prominently communicated. PS Foods &amp; Beverages
            needed to separate themselves from generic regional competitors by giving
            both retail consumers and commercial distributors complete transparency into
            their filtration, mineralization, and bottling technology. The digital
            platform had to be fast, pristine, and engineered for high-intent wholesale
            inquiries.
          </p>
        </motion.div>
      </section>

      {/* ── FULL-BLEED SHOWCASE ───────────────────────────────────────── */}
      <motion.section
        {...fadeUp(0)}
        className="mt-16 w-full px-6 md:px-10 lg:px-14"
      >
        <div className="overflow-hidden rounded-sm bg-primary/5 shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/psfnb.png"
            alt="PS Foods & Beverages — Web Application Interface"
            className="h-auto w-full object-cover"
          />
        </div>
      </motion.section>

      {/* ── APPROACH & SOLUTION ───────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-10 px-6 pt-24 pb-0 md:grid-cols-2 md:gap-16 md:px-10 md:pt-32 lg:px-14">
        <motion.div {...fadeUp(0.1)} className="order-2 md:order-1 overflow-hidden rounded-sm bg-primary/5 flex items-center justify-center p-6 md:p-12">
          <div className="max-w-[280px] w-full overflow-hidden rounded-xl border border-primary/20 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/psfnb_pt.png"
              alt="PS Foods & Beverages — Mobile Responsive Interface"
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0)}
          className="order-1 md:order-2 flex flex-col justify-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.22em] opacity-60">
            Our approach
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Pure aesthetics.
            <br />
            <span className="font-normal opacity-60">Frictionless distribution.</span>
          </h2>
          <p className="mt-8 text-base leading-[1.8] opacity-80 md:text-lg">
            minkcode designed a serene, nature-inspired visual identity spotlighting pristine
            mountain rivers and untouched purity. The interface clearly outlines the
            purification continuum—from multi-barrier filtration to quality certification.
          </p>
          <p className="mt-4 text-base leading-[1.8] opacity-80 md:text-lg">
            To drive business growth, we engineered dedicated distributor inquiry portals
            with automated form validation and lightning-quick delivery across mobile
            networks, allowing regional shopkeepers and restaurant chains to initiate
            bulk supply agreements in moments.
          </p>
        </motion.div>
      </section>

      {/* ── METRICS BAR ───────────────────────────────────────────────── */}
      <motion.section
        {...fadeUp(0)}
        className="mt-24 mx-6 md:mx-10 lg:mx-14 rounded-sm bg-primary px-10 py-14 md:py-16"
      >
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              {...fadeUp(i * 0.08)}
              className="flex flex-col"
            >
              <span className="font-display text-4xl font-semibold text-primary-foreground md:text-5xl lg:text-6xl">
                {m.value}
              </span>
              <span className="mt-3 text-xs leading-[1.6] uppercase tracking-wide text-primary-foreground/60">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── TESTIMONIAL ───────────────────────────────────────────────── */}
      <section className="px-6 pt-24 pb-0 md:px-10 md:pt-36 lg:px-14">
        <motion.blockquote
          {...fadeUp(0)}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-display text-2xl font-medium leading-[1.35] tracking-[-0.02em] opacity-90 md:text-3xl lg:text-4xl">
            &ldquo;minkcode gave our brand a modern, prestigious presence that
            immediately established trust with retail partners and institutional buyers.
            The site is fast, beautiful, and showcases our water exactly the way we
            envisioned.&rdquo;
          </p>
          <footer className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
            PS Foods &amp; Beverages &mdash; Management Team, Aurangabad
          </footer>
        </motion.blockquote>
      </section>

      {/* ── CREDITS ───────────────────────────────────────────────────── */}
      <section className="px-6 pt-24 pb-0 md:px-10 md:pt-32 lg:px-14">
        <motion.div
          {...fadeUp(0)}
          className="border-t border-primary/20 pt-10"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]">
            Credits &amp; Stack
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-1 text-sm opacity-70">
            <span>Design &amp; Development: minkcode</span>
            <span>Stack: Next.js · Tailwind CSS · Framer Motion · Cloudflare Pages</span>
            <span>
              Live site:{" "}
              <a
                href="https://psfnb.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-100 transition-opacity"
              >
                psfnb.pages.dev ↗
              </a>
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── MORE WORK ─────────────────────────────────────────────────── */}
      <section className="px-6 pt-24 pb-0 md:px-10 md:pt-32 lg:px-14">
        <motion.h2
          {...fadeUp(0)}
          className="font-display text-4xl font-semibold leading-none tracking-tight md:text-5xl"
        >
          More work like this
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "AZ Partners",
              tag: "Web Development · Brand Identity · 2025",
              img: "/projects/azpartners/azp.webp",
              url: "/work/az-partners",
              external: false,
            },
            {
              title: "Starmed Facility Services",
              tag: "Web Development · Healthcare-Grade · 2025",
              img: "/projects/Starmed/starmed.webp",
              url: "/work/starmed",
              external: false,
            },
            {
              title: "Jungle Belles",
              tag: "Digital Marketing · Social Media · 2025",
              img: "/projects/JungleBelles/JB.png",
              url: "/work/jungle-belles",
              external: false,
            },
          ].map((p, i) => (
            <motion.div key={p.title} {...fadeUp(i * 0.1)}>
              <Link
                href={p.url}
                {...(p.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group block"
              >
                <div className="overflow-hidden rounded-sm bg-primary/10 aspect-video">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-medium">{p.title}</h3>
                  <span className="ml-4 text-xs uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-70">
                    {p.external ? "Visit ↗" : "Case study →"}
                  </span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-widest opacity-55">
                  {p.tag}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
