"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SOCIAL, mailtoHref } from "@/content/data/social";
import { sendContactEmail } from "@/lib/email";
import { sanitizeInput } from "@/lib/utils";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [error, setError] = useState<string | null>(null);
  const [hp, setHp] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (hp) return;

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const message = String(fd.get("message") ?? "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      await sendContactEmail({
        name: sanitizeInput(name, 120),
        email: sanitizeInput(email, 254),
        message: sanitizeInput(message, 8000),
      });
      setStatus("ok");
      e.currentTarget.reset();
      window.setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/5 bg-surface/25 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-semibold text-foreground sm:text-h2"
        >
          Get In Touch
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Open to collaborations, internships, and interesting projects.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-body text-muted text-balance">
              I&apos;m open to collaborations, internships, and interesting
              projects. Let&apos;s connect!
            </p>
            <div>
              <p className="text-sm font-medium text-muted">Email</p>
              <a
                href={mailtoHref}
                className="mt-1 inline-block text-lg font-semibold text-primary transition hover:underline"
              >
                {SOCIAL.email}
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition hover:text-primary hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                aria-label="GitHub"
              >
                <FaGithub className="h-7 w-7" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition hover:text-accent hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-7 w-7" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatePresence>
              {status === "ok" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute -top-2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-full items-center gap-2 rounded-xl border border-success/40 bg-[var(--color-bg)]/95 px-5 py-3 text-sm font-medium text-success shadow-[0_0_24px_rgba(16,185,129,0.35)] backdrop-blur-xl"
                  role="status"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  Message sent — I&apos;ll reply soon.
                </motion.div>
              )}
            </AnimatePresence>

            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-[var(--color-bg)]/50 p-6 shadow-glow-sm backdrop-blur-xl sm:p-8"
            >
              <input
                type="text"
                name="company_website"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
              />

              <label className="block text-sm font-medium text-foreground">
                Name *
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-surface/60 px-4 py-3 text-foreground outline-none ring-primary/20 focus:border-primary/40 focus:ring-2"
                />
              </label>
              <label className="mt-5 block text-sm font-medium text-foreground">
                Email *
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-surface/60 px-4 py-3 text-foreground outline-none ring-primary/20 focus:border-primary/40 focus:ring-2"
                />
              </label>
              <label className="mt-5 block text-sm font-medium text-foreground">
                Message *
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-surface/60 px-4 py-3 text-foreground outline-none ring-primary/20 focus:border-primary/40 focus:ring-2"
                />
              </label>

              {error && (
                <p className="mt-4 text-sm text-error" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-dark hover:shadow-glow-card disabled:opacity-60"
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                Send message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
