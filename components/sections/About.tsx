"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";
import {
  AVAILABILITY,
  BIO,
  LOCATION,
  OWNER_NAME,
  ROLES,
  TAGLINE,
} from "@/lib/constants";
import { useEffect, useState } from "react";

const terminalLines = [
  `name: "${OWNER_NAME}"`,
  `role: "${ROLES[0]}"`,
  `skills: ["Java", "SQL", "Next.js", "REST APIs"]`,
  `status: "${AVAILABILITY}"`,
  `passion: "Shipping Working Software"`,
];

function TerminalCard() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= terminalLines.length) return;
    const line = terminalLines[lineIndex];
    if (charIndex < line.length) {
      const t = window.setTimeout(() => setCharIndex((c) => c + 1), 28);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 320);
    return () => window.clearTimeout(t);
  }, [lineIndex, charIndex]);

  const display =
    lineIndex >= terminalLines.length
      ? terminalLines.join("\n")
      : [
          ...terminalLines.slice(0, lineIndex),
          terminalLines[lineIndex].slice(0, charIndex),
        ].join("\n");

  return (
    <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-[#0c1222]/90 shadow-neon backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-error/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-success/80" />
        <span className="ml-2 font-mono text-xs text-muted">about.json</span>
      </div>
      <pre className="max-h-[320px] overflow-auto p-5 font-mono text-sm leading-relaxed text-accent sm:text-[0.95rem]">
        <code className="text-left">
          <span className="text-muted">{">"} </span>
          {display}
          <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-accent align-middle" />
        </code>
      </pre>
    </div>
  );
}

const sectionFade = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-semibold text-foreground sm:text-h2"
        >
          About
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          {TAGLINE}
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-body text-muted text-balance">{BIO}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-4 py-2 text-sm text-foreground backdrop-blur-sm">
                <span aria-hidden>📍</span>
                {LOCATION}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-4 py-2 text-sm text-foreground backdrop-blur-sm">
                <span aria-hidden>💼</span>
                {ROLES[0]}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-2 text-sm font-medium text-success backdrop-blur-sm">
                <span aria-hidden>✅</span>
                {AVAILABILITY}
              </span>
            </div>
            <Link
              href="/resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-dark hover:shadow-glow-card"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </motion.div>

          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/25 to-accent/10 blur-2xl" />
            <TerminalCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
