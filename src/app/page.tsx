"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../components/page-shell";
import { MarqueeTech } from "../components/marquee-tech";

const selectedWork = [
  {
    title: "AZ Partners",
    tag: "Web Development",
    year: "2025",
    description: "Sourcing & procurement specialists connecting local businesses with trusted global suppliers.",
    href: "/work/az-partners",
    external: false,
    img: "/projects/azpartners/mainbg.png",
    imgMobile: "/projects/azpartners/mainbg.png",
    logo: "/projects/azpartners/logo.svg",
    logoFilter: "brightness(0) saturate(100%) invert(97%) sepia(19%) saturate(500%) hue-rotate(340deg) brightness(102%)",
    logoSize: "max-w-[55%] max-h-[40%]",
  },
  {
    title: "Starmed Facility Services",
    tag: "Web Development",
    year: "2025",
    description: "Medical, commercial & residential cleaning services in Auckland.",
    href: "/work/starmed",
    external: false,
    img: "/projects/Starmed/mainbg.png",
    imgMobile: "/projects/Starmed/mainbg.png",
    logo: "/projects/Starmed/starmedlogo.svg",
    logoFilter: "brightness(0) invert(1)",
    logoSize: "max-w-[60%] max-h-[35%]",
  },
  {
    title: "PS Foods & Beverages",
    tag: "Web Development",
    year: "2025",
    description: "Drinking water bottled with precision and care — from Aurangabad to everyday moments.",
    href: "https://psfnb.pages.dev/",
    external: true,
    img: "/projects/psfnb.png",
    imgMobile: "/projects/psfnb_pt.png",
  },
];

export default function Index() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] w-full flex-col justify-center px-6 pt-24 md:px-10 md:pt-32 lg:px-14">


        <h1 className="font-display text-[13vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[9.5vw] lg:text-[8.5vw]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            We design & build
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block"
          >
            digital{" "}
            <span className=" font-normal opacity-60">experiences.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 max-w-xl text-base leading-relaxed opacity-80 md:mt-16 md:text-lg"
        >
          Minkcode is a boutique software studio crafting high-performance web
          experiences for brands that demand better. Design, development,
          deployment — end to end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-wrap gap-3 md:mt-20"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get in touch
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-4 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View work <span className="h-2 w-2 rounded-full bg-primary" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 flex justify-center pb-8 text-xs uppercase tracking-[0.25em] opacity-60"
        >
          ↓ Scroll
        </motion.div>
      </section>

      {/* Marquee */}
      <MarqueeTech />

      {/* Selected Work */}
      <section className="w-full px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] opacity-70">
              <span className="h-px w-10 bg-primary" /> Selected work
            </p>
            <h2 className="font-display text-5xl font-semibold leading-none md:text-7xl">
              Recent projects.
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden text-sm uppercase tracking-widest underline-offset-4 hover:underline md:inline"
          >
            All work →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {selectedWork.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group block"
            >
              <Link
                href={p.href}
                {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="block"
              >
                <div className="relative mb-4 overflow-hidden rounded-sm bg-primary/10 aspect-video">
                  <picture className="h-full w-full block">
                    <source media="(max-width: 767px)" srcSet={p.imgMobile} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </picture>
                  {"logo" in p && p.logo && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={(p as typeof p & { logo: string }).logo}
                        alt={`${p.title} logo`}
                        className={`${ (p as typeof p & { logoSize?: string }).logoSize ?? "max-w-[50%] max-h-[40%]" } w-auto h-auto object-contain drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]`}
                        style={{ filter: (p as typeof p & { logoFilter?: string }).logoFilter ?? "none" }}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-medium">{p.title}</h3>
                  <span className="text-xs uppercase tracking-widest opacity-60">
                    {p.year}
                  </span>
                </div>
                <p className="mt-1 text-sm opacity-70">{p.description}</p>
                <span className="mt-3 inline-block rounded-full border border-primary/30 px-3 py-1 text-xs uppercase tracking-widest opacity-70">
                  {p.tag}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Services teaser */}
      <section className="w-full border-t border-primary/20 px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] opacity-70">
          <span className="h-px w-10 bg-primary" /> Services
        </p>
        <div className="space-y-2">
          {[
            { n: "01", t: "Web development from scratch" },
            { n: "02", t: "Website redesign & rebrand" },
            { n: "03", t: "Maintenance & growth" },
          ].map((s) => (
            <Link
              key={s.n}
              href="/services"
              className="group flex items-baseline gap-6 border-b border-primary/20 py-5"
            >
              <span className="text-sm opacity-60">{s.n}</span>
              <span className="font-display text-3xl font-medium transition-transform duration-500 group-hover:translate-x-4 md:text-5xl lg:text-6xl">
                {s.t}
              </span>
              <span className="ml-auto opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-5xl font-semibold leading-[0.95] md:text-8xl">
            Have a project
            <br />
            <span className="font-normal opacity-60">in mind?</span>
          </h2>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground"
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
