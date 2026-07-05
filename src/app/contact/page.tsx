"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { PageShell } from "../../components/page-shell";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  type: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ characters)").max(2000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  type: "",
  budget: "",
  message: "",
};

export default function ContactPage() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setValues((s) => ({ ...s, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      for (const issue of result.error.issues) {
        errs[issue.path[0] as keyof FormState] = issue.message;
      }
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValues(initial);
      toast.success("Thanks — we'll be in touch within 2 business days.");
    }, 700);
  }

  const fieldCls =
    "w-full border-b border-primary/30 bg-transparent py-4 text-lg outline-none placeholder:text-primary/40 focus:border-primary transition-colors";

  return (
    <PageShell index="005">
      <section className="px-6 pt-20 pb-16 md:px-10 md:pt-28 md:pb-20 lg:px-14">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] opacity-70">
          <span className="h-px w-10 bg-primary" /> Contact
        </p>
        <h1 className="font-display text-[11vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[7vw]">
          Let&apos;s build
          <br />
          <span className="italic font-normal opacity-60">something good.</span>
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-16 px-6 pb-24 md:grid-cols-12 md:px-10 md:pb-32 lg:px-14">
        <aside className="space-y-10 md:col-span-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] opacity-60">
              Email
            </p>
            <a
              href="mailto:hello@minkcode.studio"
              className="text-lg hover:opacity-70 md:text-xl"
            >
              hello@minkcode.studio
            </a>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] opacity-60">
              Response time
            </p>
            <p className="text-lg md:text-xl">Within 2 business days</p>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.25em] opacity-60">
              Working with
            </p>
            <p className="text-lg leading-relaxed md:text-xl">
              Founders, product teams, and marketing leads shipping serious
              web products.
            </p>
          </div>
        </aside>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={onSubmit}
          className="space-y-8 md:col-span-8"
          noValidate
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] opacity-60">
                Name *
              </label>
              <input
                className={fieldCls}
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] opacity-60">
                Email *
              </label>
              <input
                type="email"
                className={fieldCls}
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@company.com"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] opacity-60">
                Company
              </label>
              <input
                className={fieldCls}
                value={values.company ?? ""}
                onChange={(e) => update("company", e.target.value)}
                placeholder="Company / project"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] opacity-60">
                Project type *
              </label>
              <select
                className={fieldCls + " appearance-none"}
                value={values.type}
                onChange={(e) => update("type", e.target.value)}
              >
                <option value="">Select…</option>
                <option value="new">New website from scratch</option>
                <option value="redesign">Website redesign</option>
                <option value="maintenance">Maintenance & growth</option>
                <option value="other">Something else</option>
              </select>
              {errors.type && <p className="mt-1 text-xs text-destructive">{errors.type}</p>}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.2em] opacity-60">
              Budget *
            </label>
            <select
              className={fieldCls + " appearance-none"}
              value={values.budget}
              onChange={(e) => update("budget", e.target.value)}
            >
              <option value="">Select…</option>
              <option value="<15k">Under $15k</option>
              <option value="15-40k">$15k – $40k</option>
              <option value="40-80k">$40k – $80k</option>
              <option value="80k+">$80k+</option>
            </select>
            {errors.budget && <p className="mt-1 text-xs text-destructive">{errors.budget}</p>}
          </div>

          <div>
            <label className="text-xs uppercase tracking-[0.2em] opacity-60">
              Tell us about the project *
            </label>
            <textarea
              rows={5}
              className={fieldCls + " resize-none"}
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="What are you building, and what does success look like?"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-primary/20 pt-6">
            <p className="text-xs opacity-60">* Required fields</p>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send message"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.form>
      </section>
    </PageShell>
  );
}
