"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";

const projects = [
  {
    title: "AZ Partners",
    tag: "Web Development · Brand Identity",
    year: "2025",
    description:
      "Sourcing & procurement specialists connecting local businesses with trusted global suppliers.",
    href: "/work/az-partners",
    external: false,
    img: "/projects/azpartners/mainbg.png",
    imgMobile: "/projects/azpartners/mainbg.png",
    logo: "/projects/azpartners/logo.svg",
    wide: true,
  },
  {
    title: "Starmed Facility Services",
    tag: "Web Development",
    year: "2025",
    description:
      "Medical, commercial & residential cleaning services in Auckland.",
    href: "https://starmedfacilityservices.com/",
    external: true,
    img: "/projects/starmed.webp",
    imgMobile: "/projects/starmed_pt.webp",
    wide: false,
  },
  {
    title: "PS Foods & Beverages",
    tag: "Web Development",
    year: "2025",
    description:
      "Drinking water bottled with precision and care — from Aurangabad to everyday moments.",
    href: "https://psfnb.pages.dev/",
    external: true,
    img: "/projects/psfnb.png",
    imgMobile: "/projects/psfnb_pt.png",
    wide: false,
  },
];

export default function WorkPage() {
  return (
    <PageShell>
      <section className="px-6 pt-20 pb-16 md:px-10 md:pt-28 lg:px-14">
        <h1 className="font-display text-[11vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[7vw]">
          Selected projects,
          <br />
          <span className="font-normal opacity-60">built with care.</span>
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-8 px-6 pb-24 md:grid-cols-2 md:px-10 md:pb-32 lg:px-14">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
            className={`group ${p.wide ? "md:col-span-2" : ""}`}
          >
            <Link
              href={p.href}
              {...(p.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="block"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="font-display text-2xl font-medium md:text-3xl">
                  {p.title}
                </h2>
                <span className="text-xs uppercase tracking-widest opacity-60">
                  {p.year}
                </span>
              </div>
              <p className="mb-2 text-sm opacity-70">{p.description}</p>
              <span className="mb-5 inline-block text-xs uppercase tracking-widest opacity-50">
                {p.tag}
                {!p.external && (
                  <span className="ml-2 opacity-70">→ Case study</span>
                )}
              </span>
              <div
                className={`relative overflow-hidden rounded-sm bg-primary/10 ${
                  p.wide ? "aspect-[16/9]" : "aspect-[4/5]"
                }`}
              >
                <picture className="h-full w-full block">
                  <source media="(max-width: 767px)" srcSet={p.imgMobile} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </picture>
                {"logo" in p && p.logo && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={(p as typeof p & { logo: string }).logo}
                      alt={`${p.title} logo`}
                      className="h-24 w-auto drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]"
                      style={{ filter: "brightness(0) saturate(100%) invert(97%) sepia(19%) saturate(500%) hue-rotate(340deg) brightness(102%)" }}
                    />
                  </div>
                )}
              </div>
            </Link>
          </motion.article>
        ))}
      </section>
    </PageShell>
  );
}
