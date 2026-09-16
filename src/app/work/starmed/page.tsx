"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../../../components/page-shell";

const services = [
  "Logo Design",
  "UI/UX Design",
  "Website Development",
  "Quote Request Funnel",
  "SEO & Performance Tuning",
];

const metrics = [
  { value: "0→1", label: "Complete digital presence built from scratch" },
  { value: "3", label: "Sector service tiers delivered (Medical, Commercial, Residential)" },
  { value: "100%", label: "Mobile-first responsive optimization score" },
  { value: "<1s", label: "First contentful paint on high-speed CDN" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function StarmedPage() {
  return (
    <PageShell>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="px-6 pt-14 pb-0 md:px-10 md:pt-20 lg:px-14">
        <div className="flex items-start justify-between">
          <motion.h1
            {...fadeUp(0)}
            className="font-display text-[9vw] font-semibold leading-[0.88] tracking-[-0.03em] md:text-[6vw]"
          >
            Starmed Facility Services
          </motion.h1>
          {/* Client logo top-right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/projects/Starmed/starmedlogo.svg"
              alt="Starmed Facility Services"
              className="h-14 w-auto object-contain"
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
            Starmed Facility Services is an Auckland-based facility management and
            cleaning specialist founded by a team with direct healthcare backgrounds.
            Operating across greater Auckland—from Rodney to Ramarama—they deliver
            clinical-grade sanitization for medical centres, GP clinics, and allied
            practices, alongside high-touch commercial cleaning and residential care.
            In a domain where patient safety, hygiene audits, and trust are essential,
            Starmed needed an authoritative digital home that validated their medical-grade
            methodology and provided clients with a frictionless quote booking flow.
            minkcode was brought on to engineer this presence end-to-end.
          </p>

          {/* Meta tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Web Development",
              "UI/UX Design",
              "2025",
              "Auckland, NZ",
              "Healthcare-Grade",
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
          className="mt-10 md:mt-0 overflow-hidden rounded-sm bg-primary/5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/Starmed/starmed.webp"
            alt="Starmed Facility Services homepage — Medical, Commercial & Residential Cleaning Services in Auckland"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ── CHALLENGE ─────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-8 px-6 pt-24 pb-0 md:grid-cols-2 md:gap-16 md:px-10 md:pt-32 lg:px-14">
        <motion.div {...fadeUp(0)}>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] opacity-60">
            The challenge
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Healthcare standards
            <br />
            <span className="font-normal opacity-60">require uncompromised trust.</span>
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="flex items-center">
          <p className="text-base leading-[1.8] opacity-80 md:text-lg">
            In clinical and healthcare cleaning, there is no margin for error. Practice
            managers, dentists, and surgical clinic directors cannot risk cross-contamination,
            lax chemical safety, or unvetted teams. At the same time, commercial and residential
            clients seeking premier cleaning needed clear categorization rather than one-size-fits-all
            packages. Starmed required a digital presence that articulated clinical rigor,
            privacy-focused professionalism, and systematic checklists without overwhelming
            visitors with dense medical jargon.
          </p>
        </motion.div>
      </section>

      {/* ── ABOUT PAGE FULL-BLEED ─────────────────────────────────────── */}
      <motion.section
        {...fadeUp(0)}
        className="mt-16 w-full px-6 md:px-10 lg:px-14"
      >
        <div className="overflow-hidden rounded-sm bg-primary/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/Starmed/aboutpg.png"
            alt="Starmed Facility Services — About page: Healthcare-Grade Cleaning Standards"
            className="h-auto w-full object-cover"
          />
        </div>
      </motion.section>

      {/* ── SOLUTION ──────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-10 px-6 pt-24 pb-0 md:grid-cols-2 md:gap-16 md:px-10 md:pt-32 lg:px-14">
        <motion.div {...fadeUp(0.1)} className="order-2 md:order-1 overflow-hidden rounded-sm bg-primary/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/Starmed/contact.png"
            alt="Starmed Facility Services — Contact page & quote request"
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
            Clinical rigor meets
            <br />
            <span className="font-normal opacity-60">effortless booking.</span>
          </h2>
          <p className="mt-8 text-base leading-[1.8] opacity-80 md:text-lg">
            minkcode structured the platform around clarity and reassurance. The architecture
            segmentation immediately directs users to their exact tier: Medical &amp; Healthcare
            Facilities, Commercial &amp; Property Management, or Residential Care. Interactive
            elements highlight Starmed&apos;s healthcare-informed protocols, structured checklists,
            and dedicated Auckland service radius.
          </p>
          <p className="mt-4 text-base leading-[1.8] opacity-80 md:text-lg">
            To maximize conversion, we implemented streamlined quotation flows integrated with
            instant notification systems and security validation. The resulting site balances a
            calm, healthcare-inspired aesthetic with blisteringly fast edge delivery, ensuring
            prospective clients can request facility quotes within seconds.
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
              src: "/projects/Starmed/starmed_pt.webp",
              alt: "Starmed Facility Services homepage — mobile",
            },
            {
              src: "/projects/Starmed/services_pt.jpg",
              alt: "Starmed Facility Services services page — mobile",
            },
            {
              src: "/projects/Starmed/contact_pt.jpg",
              alt: "Starmed Facility Services quote booking — mobile",
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

      {/* ── STANDARDS FULL-BLEED ──────────────────────────────────────── */}
      <motion.section
        {...fadeUp(0)}
        className="mt-16 w-full px-6 md:px-10 lg:px-14"
      >
        <div className="overflow-hidden rounded-sm bg-primary/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/Starmed/standards.png"
            alt="Starmed Facility Services — Healthcare-Grade Standards & Auckland Service Area"
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
            &ldquo;minkcode brought exceptional design clarity to our business.
            They understood the importance of healthcare-grade cleanliness and
            structured our site to immediately communicate confidence to medical
            clinics and property managers alike. The process was prompt, thoughtful,
            and completely dependable.&rdquo;
          </p>
          <footer className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
            Starmed Facility Services &mdash; Leadership Team, Auckland
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
            <span>Stack: Next.js · Tailwind CSS · Framer Motion · Cloudflare</span>
            <span>
              Live site:{" "}
              <a
                href="https://starmedfacilityservices.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-100 transition-opacity"
              >
                starmedfacilityservices.com ↗
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
              title: "AZ Partners",
              tag: "Web Development · Brand Identity · 2025",
              img: "/projects/azpartners/azp.webp",
              url: "/work/az-partners",
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
