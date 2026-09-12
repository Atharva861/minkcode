"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { PageShell } from "../../components/page-shell";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  type: z.string().min(1, "Select a project type"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ characters)").max(2000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  type: "",
  message: "",
};

const fieldCls =
  "w-full border-b border-primary/30 bg-transparent py-4 text-lg outline-none placeholder:text-primary/40 focus:border-primary transition-colors";

interface FloatingFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  isTextarea?: boolean;
  rows?: number;
}

function FloatingField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  isTextarea = false,
  rows = 5,
}: FloatingFieldProps) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value.length > 0;
  const [placeholderText, setPlaceholderText] = useState("");

  useEffect(() => {
    if (!focused || value) {
      return;
    }

    let intervalId: ReturnType<typeof setInterval>;
    let index = 0;

    const speed = Math.max(16, Math.min(38, Math.floor(700 / placeholder.length)));

    const delayTimeout = setTimeout(() => {
      setPlaceholderText("");
      intervalId = setInterval(() => {
        index++;
        setPlaceholderText(placeholder.slice(0, index));
        if (index >= placeholder.length) {
          clearInterval(intervalId);
        }
      }, speed);
    }, 120);

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(intervalId);
    };
  }, [focused, value, placeholder]);

  return (
    <div className="relative max-w-full">
      <motion.label
        htmlFor={id}
        className="pointer-events-none inline-block w-fit max-w-full origin-left text-xs tracking-[0.2em] text-primary select-none truncate"
        initial={false}
        animate={{
          y: isFloating ? 0 : 38,
          scale: isFloating ? 1 : 1.35,
          opacity: isFloating ? 0.6 : 0.4,
        }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {label}
      </motion.label>
      {isTextarea ? (
        <textarea
          id={id}
          rows={rows}
          className={`${fieldCls} h-auto resize-none`}
          value={value}
          onFocus={() => {
            setFocused(true);
            setPlaceholderText("");
          }}
          onBlur={() => {
            setFocused(false);
            setPlaceholderText("");
          }}
          onChange={(e) => onChange(e.target.value)}
          placeholder={isFloating ? placeholderText : ""}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={`${fieldCls} h-[60px]`}
          value={value}
          onFocus={() => {
            setFocused(true);
            setPlaceholderText("");
          }}
          onBlur={() => {
            setFocused(false);
            setPlaceholderText("");
          }}
          onChange={(e) => onChange(e.target.value)}
          placeholder={isFloating ? placeholderText : ""}
        />
      )}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

const projectTypes = [
  { value: "marketing", label: "Complete digital marketing" },
  { value: "new", label: "New website from scratch" },
  { value: "redesign", label: "Website redesign" },
  { value: "maintenance", label: "Maintenance & growth" },
  { value: "other", label: "Something else" },
];

interface CustomSelectProps {
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  error?: string;
}

function CustomSelect({
  id = "contact-type",
  label,
  value,
  onChange,
  options,
  placeholder = "Select...",
  error,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isFloating = isOpen || Boolean(value);
  const [placeholderText, setPlaceholderText] = useState("");

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setPlaceholderText("");
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
        setPlaceholderText("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isOpen || value) {
      return;
    }

    let intervalId: ReturnType<typeof setInterval>;
    let index = 0;

    const delayTimeout = setTimeout(() => {
      setPlaceholderText("");
      intervalId = setInterval(() => {
        index++;
        setPlaceholderText(placeholder.slice(0, index));
        if (index >= placeholder.length) {
          clearInterval(intervalId);
        }
      }, 35);
    }, 120);

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(intervalId);
    };
  }, [isOpen, value, placeholder]);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative max-w-full" ref={containerRef}>
      <motion.label
        htmlFor={id}
        className="pointer-events-none inline-block w-fit max-w-full origin-left text-xs tracking-[0.2em] text-primary select-none truncate"
        initial={false}
        animate={{
          y: isFloating ? 0 : 38,
          scale: isFloating ? 1 : 1.35,
          opacity: isFloating ? 0.6 : 0.4,
        }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {label}
      </motion.label>
      <button
        id={id}
        type="button"
        onClick={() => {
          setIsOpen((prev) => {
            if (!prev) setPlaceholderText("");
            return !prev;
          });
        }}
        className={`${fieldCls} h-[60px] flex items-center justify-between text-left cursor-pointer transition-colors ${
          isOpen ? "border-primary" : ""
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={`leading-7 ${selectedOption ? "text-primary font-normal" : "text-primary/40"}`}>
          {selectedOption ? selectedOption.label : isFloating ? placeholderText : "\u00A0"}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-primary transition-all duration-300 ${
            isOpen ? "rotate-180 opacity-100" : isFloating ? "opacity-60" : "opacity-40"
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 top-full mt-2 z-50 overflow-hidden rounded-2xl border border-primary/20 bg-[#fff9e8] p-1.5 shadow-[0_16px_36px_-8px_rgba(40,92,204,0.18)] backdrop-blur-md"
            role="listbox"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                    setPlaceholderText("");
                  }}
                  className={`w-full px-4 py-3 rounded-xl text-left text-sm md:text-base flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-primary hover:bg-primary/10"
                  }`}
                  role="option"
                  aria-selected={isSelected}
                >
                  <span>{opt.label}</span>
                  {isSelected && <Check className="h-4 w-4 shrink-0 text-primary-foreground" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

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

  return (
    <PageShell>
      <section className="px-6 pt-20 pb-16 md:px-10 md:pt-28 md:pb-20 lg:px-14 max-w-full overflow-hidden">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] opacity-70">
          <span className="h-px w-10 bg-primary" /> Contact
        </p>
        <h1 className="font-display text-[11vw] font-semibold leading-[0.9] tracking-[-0.03em] md:text-[7vw]">
          Let&apos;s build
          <br />
          <span className="italic font-normal opacity-60">something good.</span>
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-16 px-6 pb-24 md:grid-cols-12 md:px-10 md:pb-32 lg:px-14 max-w-full">
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
            <FloatingField
              id="contact-name"
              label="NAME"
              value={values.name}
              onChange={(v) => update("name", v)}
              placeholder="Your full name"
              error={errors.name}
            />
            <FloatingField
              id="contact-email"
              label="EMAIL"
              type="email"
              value={values.email}
              onChange={(v) => update("email", v)}
              placeholder="you@company.com"
              error={errors.email}
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FloatingField
              id="contact-company"
              label="COMPANY"
              value={values.company ?? ""}
              onChange={(v) => update("company", v)}
              placeholder="Company / project"
              error={errors.company}
            />
            <CustomSelect
              id="contact-type"
              label="PROJECT TYPE"
              value={values.type}
              onChange={(v) => update("type", v)}
              options={projectTypes}
              error={errors.type}
            />
          </div>

          <div>
            <FloatingField
              id="contact-message"
              label="TELL US ABOUT YOUR VISION"
              isTextarea
              rows={5}
              value={values.message}
              onChange={(v) => update("message", v)}
              placeholder="Tell us about your project, goals, and what you’d like to achieve."
              error={errors.message}
            />
          </div>

          <div className="flex items-center justify-between pt-2">
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
