"use client";

import { motion } from "framer-motion";
import { PageShell } from "../../components/page-shell";

const projects = [
  {
    title: "Northwind Ceramics",
    tag: "E-commerce · Shopify Hydrogen",
    year: "2025",
    prompt:
      "Editorial ceramic studio product photography, warm beige backdrop, cream pottery, soft daylight, minimal composition",
  },
  {
    title: "Halcyon Finance",
    tag: "Fintech · Marketing site",
    year: "2025",
    prompt:
      "Abstract financial dashboard render on cream background, subtle blue accents, glass textures, minimal design",
  },
  {
    title: "Field Notes Journal",
    tag: "Publication · Editorial CMS",
    year: "2024",
    prompt:
      "Open editorial magazine spread mockup on buttermilk paper, blue accents, swiss typography, top-down flat lay",
  },
  {
    title: "Atlas Travel Co.",
    tag: "Booking · Custom platform",
    year: "2024",
    prompt:
      "Vintage travel poster style landscape, warm cream sky, blue mountains, minimalist Swiss travel design",
  },
  {
    title: "Verdant Studio",
    tag: "Portfolio · Studio site",
    year: "2024",
    prompt:
      "Architecture studio interior with cream walls, blue accent chair, natural light, minimalist scandinavian design",
  },
  {
    title: "Meridian Podcast",
    tag: "Media · Streaming platform",
    year: "2023",
    prompt:
      "Vintage radio and microphone still life on cream background, blue geometric shapes, retro editorial style",
  },
];

export default function WorkPage() {
  return (
    <PageShell index="002">
      <section className="px-6 pt-20 pb-16 md:px-10 md:pt-28 lg:px-14">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] opacity-70">
          <span className="h-px w-10 bg-primary" /> Work · 2023 — 2025
        </p>
        <h1 className="font-display text-[11vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[7vw]">
          Selected projects,
          <br />
          <span className="italic font-normal opacity-60">built with care.</span>
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
            className={`group ${i % 3 === 0 ? "md:col-span-2" : ""}`}
          >
            <div className="mb-5 overflow-hidden rounded-3xl bg-primary/10">
              <div
                data-lov-image-placeholder
                data-prompt={p.prompt}
                data-width={i % 3 === 0 ? "1600" : "900"}
                data-height={i % 3 === 0 ? "900" : "1100"}
                className={`w-full transition-transform duration-700 group-hover:scale-[1.03] ${
                  i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/5]"
                }`}
              />
            </div>
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-2xl font-medium md:text-3xl">{p.title}</h2>
              <span className="text-xs uppercase tracking-widest opacity-60">{p.year}</span>
            </div>
            <p className="mt-1 text-sm opacity-70">{p.tag}</p>
          </motion.article>
        ))}
      </section>
    </PageShell>
  );
}
