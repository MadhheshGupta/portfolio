"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { social } from "@/content/data/social";
import { sendContactEmail } from "@/lib/email";
import { sanitizeInput } from "@/lib/utils";

const emailDisplay = "hello@alexjohnson.dev";

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
    const subject = String(fd.get("subject") ?? "");
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
        subject: sanitizeInput(subject, 200),
        message: sanitizeInput(message, 8000),
      });
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-semibold text-foreground sm:text-h2"
        >
          Contact
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Tell me about your product, timeline, and how I can help.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-medium text-muted">Email</p>
              <a
                href={social.email}
                className="text-lg font-semibold text-primary hover:underline"
              >
                {emailDisplay}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-muted">Schedule</p>
              <a
                href={social.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-foreground hover:text-primary"
              >
                Book a Calendly intro
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary"
                aria-label="X"
              >
                <FaXTwitter className="h-6 w-6" />
              </a>
              <a href={social.email} className="text-muted hover:text-primary" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-xs text-muted">
              Rate limiting should be enforced on a server route in production; this form
              calls EmailJS directly from the browser.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="rounded-2xl border border-slate-200 bg-[var(--color-bg)] p-6 dark:border-slate-700"
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
                className="mt-1 w-full rounded-lg border border-slate-200 bg-surface px-3 py-2 text-foreground outline-none ring-primary/30 focus:ring-2 dark:border-slate-600"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-foreground">
              Email *
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-slate-200 bg-surface px-3 py-2 text-foreground outline-none ring-primary/30 focus:ring-2 dark:border-slate-600"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-foreground">
              Subject
              <input
                name="subject"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-surface px-3 py-2 text-foreground outline-none ring-primary/30 focus:ring-2 dark:border-slate-600"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-foreground">
              Message *
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-surface px-3 py-2 text-foreground outline-none ring-primary/30 focus:ring-2 dark:border-slate-600"
              />
            </label>

            {error && (
              <p className="mt-4 text-sm text-error" role="alert">
                {error}
              </p>
            )}
            {status === "ok" && (
              <p className="mt-4 text-sm text-success" role="status">
                Message sent successfully. I&apos;ll get back to you soon.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60"
            >
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
