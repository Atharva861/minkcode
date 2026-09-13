"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../../../components/page-shell";

const services = [
  "Brand & Logo Design",
  "UI/UX Design",
  "Website Development",
  "Deployment",
  "SEO",
  "Maintenance",
];

const metrics = [
  { value: "0→1", label: "Complete digital presence built from scratch" },
  { value: "6", label: "Services delivered end-to-end" },
  { value: "100%", label: "Lighthouse performance score on launch" },
  { value: "2", label: "Company websites delivered by the same developer" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function AZPartnersPage() {
  return (
    <PageShell>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="px-6 pt-14 pb-0 md:px-10 md:pt-20 lg:px-14">
        <div className="flex items-start justify-between">
          <motion.h1
            {...fadeUp(0)}
            className="font-display text-[9vw] font-semibold leading-[0.88] tracking-[-0.03em] md:text-[6vw]"
          >
            AZ Partners
          </motion.h1>
          {/* Client logo top-right — mirroring Bou's client branding placement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/azpartners/logo.svg"
              alt="AZ Partners"
              className="h-20 w-auto"
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
            AZ Partners is a New Zealand-based sourcing and procurement
            specialist connecting local retailers, wholesalers, and healthcare
            providers with vetted global suppliers across FMCG and medical
            categories. As a new venture entering a trust-driven B2B space, they
            needed a complete digital identity and web presence built from
            scratch — one credible enough to open doors with both suppliers and
            enterprise buyers. minkcode was brought on to build that identity
            end-to-end, from logo to launch.
          </p>

          {/* Meta tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {["Web Development", "Brand Identity", "2025", "New Zealand"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 px-4 py-1.5 text-xs uppercase tracking-widest opacity-70"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* Services — inline with left column */}
          <div className="mt-auto pt-10">
            <p className="mb-4 text-small font-normal uppercase tracking-[0.22em]">
              Services
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
          className="mt-10 md:mt-0 overflow-hidden rounded-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/azpartners/azp.webp"
            alt="AZ Partners homepage — Trusted sourcing. Delivered to New Zealand."
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>



      {/* ── FULL-BLEED HERO SCREENSHOT ─────────────────────────────────── */}
      <motion.section
        {...fadeUp(0)}
        className="mt-20 w-full overflow-hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/azpartners/azp.webp"
          alt="AZ Partners — full homepage view"
          className="h-auto w-full object-cover"
          style={{ maxHeight: "70vh", objectPosition: "top" }}
        />
      </motion.section>

      {/* ── CHALLENGE ─────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-8 px-6 pt-24 pb-0 md:grid-cols-2 md:gap-16 md:px-10 md:pt-32 lg:px-14">
        <motion.div {...fadeUp(0)}>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] opacity-60">
            The challenge
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Credibility is
            <br />
            <span className="font-normal opacity-60">the product.</span>
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="flex items-center">
          <p className="text-base leading-[1.8] opacity-80 md:text-lg">
            AZ Partners was launching in a category where credibility is
            everything — healthcare and FMCG buyers won&apos;t hand over procurement
            relationships to a business that doesn&apos;t look established. At the
            outset, the brand had no visual identity, no website, and no digital
            presence at all, which made it difficult to communicate their value
            proposition (reliability, transparency, global reach) to prospective
            clients or position themselves against more established sourcing
            competitors.
          </p>
        </motion.div>
      </section>

      {/* ── ABOUT PAGE FULL-BLEED ─────────────────────────────────────── */}
      <motion.section
        {...fadeUp(0)}
        className="mt-16 w-full px-6 md:px-10 lg:px-14"
      >
        <div className="overflow-hidden rounded-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/azpartners/aboutpg.png"
            alt="AZ Partners — About page: Sourcing partners, built on trust"
            className="h-auto w-full object-cover"
          />
        </div>
      </motion.section>

      {/* ── SOLUTION ──────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-10 px-6 pt-24 pb-0 md:grid-cols-2 md:gap-16 md:px-10 md:pt-32 lg:px-14">
        <motion.div {...fadeUp(0.1)} className="order-2 md:order-1 overflow-hidden rounded-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/azpartners/contact.png"
            alt="AZ Partners — Contact page"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          {...fadeUp(0)}
          className="order-1 md:order-2 flex flex-col justify-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.22em] opacity-60">
            Our approach
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Brand first.
            <br />
            <span className="font-normal opacity-60">Website second.</span>
          </h2>
          <p className="mt-8 text-base leading-[1.8] opacity-80 md:text-lg">
            minkcode started at the brand level, designing a logo and visual
            identity suited to a professional B2B sourcing firm, then carried
            that identity through to a custom-built website. The site was
            structured around how AZ Partners actually sells — leading with
            trust signals and a clear four-step process (Understand, Source,
            Verify, Deliver) — while keeping the UI clean and navigation minimal
            so both time-pressed buyers and technical procurement teams could
            quickly find what they needed.
          </p>
          <p className="mt-4 text-base leading-[1.8] opacity-80 md:text-lg">
            Once development was complete, the site was deployed, optimised for
            search visibility, and handed over with an ongoing maintenance plan
            to keep it running smoothly post-launch.
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

      {/* ── MOBILE SHOWCASE ───────────────────────────────────────────── */}
      <section className="px-6 pt-24 pb-0 md:px-10 md:pt-32 lg:px-14">
        <motion.div {...fadeUp(0)} className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] opacity-60">
            Responsive design
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Built for every screen.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {[
            {
              src: "/projects/azpartners/azp_pt.webp",
              alt: "AZ Partners homepage — mobile",
            },
            {
              src: "/projects/azpartners/brands_pt.png",
              alt: "AZ Partners brands page — mobile",
            },
            {
              src: "/projects/azpartners/faq_pt.png",
              alt: "AZ Partners FAQ page — mobile",
            },
          ].map((img, i) => (
            <motion.div
              key={img.src}
              {...fadeUp(i * 0.1)}
              className="overflow-hidden rounded-sm bg-primary/8"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover object-top"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ FULL-BLEED ────────────────────────────────────────────── */}
      <motion.section
        {...fadeUp(0)}
        className="mt-16 w-full px-6 md:px-10 lg:px-14"
      >
        <div className="overflow-hidden rounded-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/azpartners/faq.png"
            alt="AZ Partners — FAQ page: The advantage of a local partner with global reach"
            className="h-auto w-full object-cover"
          />
        </div>
      </motion.section>

      {/* ── TESTIMONIAL ───────────────────────────────────────────────── */}
      <section className="px-6 pt-24 pb-0 md:px-10 md:pt-36 lg:px-14">
        <motion.blockquote
          {...fadeUp(0)}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-display text-2xl font-medium leading-[1.35] tracking-[-0.02em] opacity-90 md:text-3xl lg:text-4xl">
            &ldquo;I worked with Atharva on the websites for two of the
            companies I was associated with — and he delivered on both, start to
            finish. What stood out most was how little he needed chasing. He
            took the time to understand what each business actually does and who
            it speaks to, then translated that into a site that looks
            professional and is easy for our customers to navigate.&rdquo;
          </p>
          <footer className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
            Akshay Dhawle &mdash; General Manager, AZ Partners
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
            Credits &amp; stack
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-1 text-sm opacity-70">
            <span>Design &amp; Development: minkcode</span>
            <span>Stack: Next.js · Tailwind CSS · Cloudflare</span>
            <span>
              Live site:{" "}
              <a
                href="https://azpartners.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-100 transition-opacity"
              >
                azpartners.co.nz ↗
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

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: "Starmed Facility Services",
              tag: "Web Development · 2025",
              img: "/projects/starmed.webp",
              url: "https://starmedfacilityservices.com/",
            },
            {
              title: "PS Foods & Beverages",
              tag: "Web Development · 2025",
              img: "/projects/psfnb.png",
              url: "https://psfnb.pages.dev/",
            },
          ].map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp(i * 0.1)}
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
                  View →
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-widest opacity-55">
                {p.tag}
              </p>
            </motion.a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
