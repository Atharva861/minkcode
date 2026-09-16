"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../../../components/page-shell";

const services = [
  "Social Media Strategy",
  "Content Creation (Posts & Reels)",
  "Multi-Slide Carousels",
  "Daily Stories & Trivia",
  "Visual Identity & Art Direction",
  "Expedition Campaign Marketing",
  "Wildlife Creative Copywriting",
  "Inbound Booking & Concierge Funnel",
];

const metrics = [
  { value: "+340%", label: "Organic reach growth in first 90 days" },
  { value: "12.8%", label: "Average engagement rate on carousels" },
  { value: "50+", label: "Editorial feed posts, carousels & stories delivered" },
  { value: "4x", label: "Increase in qualified safari booking inquiries" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function JungleBellesPage() {
  return (
    <PageShell>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="px-6 pt-14 pb-0 md:px-10 md:pt-20 lg:px-14">
        <div className="flex items-start justify-between">
          <motion.h1
            {...fadeUp(0)}
            className="font-display text-[9vw] font-semibold leading-[0.88] tracking-[-0.03em] md:text-[6vw]"
          >
            Jungle Belles
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
              src="/projects/JungleBelles/JB.svg"
              alt="Jungle Belles Logo"
              className="h-20 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
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
            Jungle Belles is a boutique luxury travel brand dedicated to curating
            unforgettable, women-only wildlife safaris and experiential nature
            expeditions. From the dense sal woodlands of Corbett &amp; Rajaji to the
            legendary savannas of the Masai Mara, their journeys unite adventurous
            women with expert naturalists, pristine wildlife encounters, and premier
            eco-lodges.
          </p>
          <p className="mt-4 text-base leading-[1.75] opacity-85 md:text-lg md:leading-[1.8]">
            There is <span className="font-semibold text-primary">no web development</span> for this brand. Instead, minkcode was brought on to manage their
            complete digital marketing ecosystem end-to-end—directing social media strategy,
            crafting bespoke visual campaigns, and producing high-converting content
            spanning educational carousels, destination launch posters, viral stories,
            and community inquiry funnels.
          </p>

          {/* Meta tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Digital Marketing",
              "Social Media Management",
              "Content Creation",
              "2025",
              "Wildlife & Travel",
              "Women-Only Safaris",
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
              Deliverables &amp; Scope
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
          className="mt-10 md:mt-0 overflow-hidden rounded-sm bg-primary/5 aspect-[16/10]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/JungleBelles/JB.png"
            alt="Jungle Belles — Savanna wildlife landscape"
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
            Wildlife storytelling
            <br />
            <span className="font-normal opacity-60">requires emotional resonance.</span>
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="flex items-center">
          <p className="text-base leading-[1.8] opacity-80 md:text-lg">
            Women-only wildlife safaris occupy a high-trust, high-intent travel space.
            Prospective guests aren&apos;t just looking for standard travel itineraries;
            they are seeking safe, transformative camaraderie, ethical conservation
            practices, and uncompromised comfort in the wild. Jungle Belles needed a
            vibrant digital presence across social channels that went far beyond stock
            imagery—one that articulated the awe of wildlife encounters, validated the
            sanctuary standards of their luxury eco-lodges, and created an active
            pipeline of qualified booking inquiries.
          </p>
        </motion.div>
      </section>

      {/* ── DESTINATION CAMPAIGN SHOWCASE (Corbett & Masai Mara) ───────── */}
      <section className="px-6 pt-24 pb-0 md:px-10 md:pt-32 lg:px-14">
        <motion.div {...fadeUp(0)} className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] opacity-60">
            Campaign launches
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Iconic sanctuaries. Tailored for women.
          </h2>
          <p className="mt-4 max-w-2xl text-base opacity-75 md:text-lg">
            High-impact promotional campaign posters developed for signature expeditions,
            combining cinematic wildlife portraiture with editorial typography and direct
            booking call-to-actions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <motion.div
            {...fadeUp(0.1)}
            className="group overflow-hidden rounded-sm bg-primary/5 flex flex-col"
          >
            <div className="overflow-hidden aspect-[3/4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/JungleBelles/Corbett.png"
                alt="Jungle Belles — Corbett & Rajaji Safari Campaign Poster"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-6 border-t border-primary/10">
              <h3 className="font-display text-xl font-medium">Corbett &amp; Rajaji Expedition</h3>
              <p className="mt-2 text-sm opacity-70 leading-relaxed">
                Celebrating the raw majesty of Asian elephants and royal Bengal tigers.
                Structured around sunrise drives, private naturalists, and mindful group sizes.
              </p>
              <div className="mt-4 flex gap-2 text-xs uppercase tracking-widest opacity-60">
                <span>Feed Poster</span>
                <span>•</span>
                <span>Direct Concierge QR</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="group overflow-hidden rounded-sm bg-primary/5 flex flex-col"
          >
            <div className="overflow-hidden aspect-[3/4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/JungleBelles/masai.png"
                alt="Jungle Belles — Experience Masai Mara Campaign Poster"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-6 border-t border-primary/10">
              <h3 className="font-display text-xl font-medium">Experience Masai Mara</h3>
              <p className="mt-2 text-sm opacity-70 leading-relaxed">
                A golden-hour savanna expedition capturing the spirit of the Great Migration,
                predator tracking, and untamed African wilderness tailored exclusively for women.
              </p>
              <div className="mt-4 flex gap-2 text-xs uppercase tracking-widest opacity-60">
                <span>Expedition Spotlight</span>
                <span>•</span>
                <span>Multi-Platform Ad Asset</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTION & APPROACH ────────────────────────────────────────── */}
      <section className="grid grid-cols-1 gap-10 px-6 pt-24 pb-0 md:grid-cols-2 md:gap-16 md:px-10 md:pt-32 lg:px-14">
        <motion.div {...fadeUp(0.1)} className="order-2 md:order-1 overflow-hidden rounded-sm bg-primary/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/JungleBelles/1.png"
            alt="Jungle Belles — Luxury Safari Experiences Carousel Slide"
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
            A content engine built for
            <br />
            <span className="font-normal opacity-60">curiosity, trust &amp; bookings.</span>
          </h2>
          <p className="mt-8 text-base leading-[1.8] opacity-80 md:text-lg">
            minkcode established a four-pillar content calendar tailored to Instagram and
            Meta platforms. Rather than relying solely on promotional sales pitches, we
            blended inspirational storytelling with tangible safari education:
          </p>
          <ul className="mt-6 space-y-4 text-base opacity-80 md:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary/40 text-[9px] font-bold">
                1
              </span>
              <span>
                <strong>Expedition Spotlights:</strong> Immersive breakdowns of departure dates,
                verified lodge accommodations, and tailored itineraries.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary/40 text-[9px] font-bold">
                2
              </span>
              <span>
                <strong>Multi-Slide Educational Carousels:</strong> Swipeable visual essays
                that maximize dwell time, bookmarking, and algorithmic reach.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary/40 text-[9px] font-bold">
                3
              </span>
              <span>
                <strong>Conservation Trivia Stories:</strong> Fascinating wildlife facts
                driving authentic community discussions and daily story engagement.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary/40 text-[9px] font-bold">
                4
              </span>
              <span>
                <strong>Frictionless Inbound Flow:</strong> WhatsApp concierge links and direct
                message automated workflows converting engaged followers into confirmed guests.
              </span>
            </li>
          </ul>
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

      {/* ── CAROUSEL & LODGE STORYTELLING ─────────────────────────────── */}
      <section className="px-6 pt-24 pb-0 md:px-10 md:pt-32 lg:px-14">
        <motion.div {...fadeUp(0)} className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] opacity-60">
            Visual Storytelling
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Where wild stories unfold.
          </h2>
          <p className="mt-4 max-w-2xl text-base opacity-75 md:text-lg">
            From atmospheric rainforest treehouses to sunset campfires under Mount Kilimanjaro,
            every post is crafted to transport the viewer directly into the heart of the journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <motion.div
            {...fadeUp(0.1)}
            className="overflow-hidden rounded-sm bg-primary/5 flex flex-col"
          >
            <div className="overflow-hidden aspect-[3/4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/JungleBelles/2.png"
                alt="Jungle Belles — Where Wild Stories Unfold Rainforest Lodge"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 border-t border-primary/10">
              <h3 className="font-display text-xl font-medium">Boutique Eco-Sanctuary Highlights</h3>
              <p className="mt-2 text-sm opacity-70 leading-relaxed">
                Spotlighting mist-shrouded rainforest retreats and handpicked luxury camps
                where comfort seamlessly coexists with untouched wilderness.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="overflow-hidden rounded-sm bg-primary/5 flex flex-col"
          >
            <div className="overflow-hidden aspect-[3/4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/JungleBelles/1.png"
                alt="Jungle Belles — Kilimanjaro Safari Carousel Cover"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 border-t border-primary/10">
              <h3 className="font-display text-xl font-medium">Multi-Panel Carousel Architecture</h3>
              <p className="mt-2 text-sm opacity-70 leading-relaxed">
                Seamless multi-frame panoramas showing game drives, predator sightings,
                and evening campfire conversations to encourage active slide engagement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DAILY STORIES & TRIVIA (VERTICAL SHOWCASE) ────────────────── */}
      <section className="px-6 pt-24 pb-0 md:px-10 md:pt-32 lg:px-14">
        <motion.div {...fadeUp(0)} className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] opacity-60">
            Ephemeral &amp; Daily Content
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Interactive stories &amp; conservation facts.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 items-center">
          <motion.div
            {...fadeUp(0.1)}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] overflow-hidden rounded-2xl border-4 border-primary/20 bg-primary/10 shadow-2xl aspect-[9/16]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/JungleBelles/story.jpeg"
                alt="Jungle Belles — Did You Know Tiger Stripes Instagram Story"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.2)}
            className="md:col-span-7 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-widest text-primary/70 mb-2">
              Building Community Loyalty
            </span>
            <h3 className="font-display text-3xl font-semibold md:text-4xl">
              From passive scrollers to passionate advocates.
            </h3>
            <p className="mt-6 text-base leading-[1.8] opacity-80 md:text-lg">
              Daily Instagram Stories bridge the gap between major expedition launches.
              By introducing regular segments like <em>&ldquo;Did You Know?&rdquo;</em> conservation
              trivia, wildlife behavior quizzes, and behind-the-scenes lodge dispatches,
              we transformed Jungle Belles from a travel brand into a thriving community
              of nature enthusiasts.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-primary/15">
              <div>
                <p className="font-display text-lg font-medium">Educational Value</p>
                <p className="mt-1 text-sm opacity-70">
                  Sharing verified biological insights on tigers, big cats, and savanna ecology.
                </p>
              </div>
              <div>
                <p className="font-display text-lg font-medium">Direct Inbound Links</p>
                <p className="mt-1 text-sm opacity-70">
                  Interactive poll stickers and story reply links that guide travelers straight to trip coordinators.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIAL ───────────────────────────────────────────────── */}
      <section className="px-6 pt-24 pb-0 md:px-10 md:pt-36 lg:px-14">
        <motion.blockquote
          {...fadeUp(0)}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-display text-2xl font-medium leading-[1.35] tracking-[-0.02em] opacity-90 md:text-3xl lg:text-4xl">
            &ldquo;minkcode brought extraordinary depth and elegance to our digital
            presence. They understood the soul of women-only expeditions—capturing
            both the untamed thrill of the wild and the warmth of sisterhood. Our
            social engagement exploded, and booking inquiries for Corbett and Masai Mara
            surged within weeks.&rdquo;
          </p>
          <footer className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] opacity-60">
            Jungle Belles &mdash; Leadership Team
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
            Credits &amp; Scope
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-1 text-sm opacity-70">
            <span>Marketing &amp; Content Creation: minkcode</span>
            <span>Platforms: Instagram · Meta · WhatsApp Business</span>
            <span>Focus: 100% Social Media Strategy &amp; Creative Direction</span>
            <span>
              Official brand:{" "}
              <a
                href="https://www.junglebelles.in"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-100 transition-opacity"
              >
                junglebelles.in ↗
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
              title: "PS Foods & Beverages",
              tag: "Web Development · FMCG Packaging · 2025",
              img: "/projects/psfnb/mainbg.jpg",
              logo: "/projects/psfnb/psfnb.svg",
              logoSize: "max-w-[48%] max-h-[52%]",
              url: "/work/ps-foods",
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
                <div className="relative overflow-hidden rounded-sm bg-primary/10 aspect-video">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {"logo" in p && p.logo && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={(p as typeof p & { logo: string }).logo}
                        alt={`${p.title} logo`}
                        className={`${ (p as typeof p & { logoSize?: string }).logoSize ?? "max-w-[45%] max-h-[45%]" } w-auto h-auto object-contain drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]`}
                      />
                    </div>
                  )}
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
