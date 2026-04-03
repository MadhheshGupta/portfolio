"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download, MapPin } from "lucide-react";
import {
  AVAILABILITY,
  BIO,
  EXPERIENCE_YEARS,
  LOCATION,
  OWNER_NAME,
} from "@/lib/constants";

export function About() {
  const open = AVAILABILITY === "open";

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
          A quick snapshot of who I am and how I work with teams.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="whitespace-pre-line text-body text-muted">{BIO}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm text-foreground ring-1 ring-slate-200 dark:ring-slate-600">
                <MapPin className="h-4 w-4 text-primary" />
                {LOCATION}
              </span>
              <span className="inline-flex items-center rounded-full bg-surface px-4 py-2 text-sm text-foreground ring-1 ring-slate-200 dark:ring-slate-600">
                {EXPERIENCE_YEARS}+ years experience
              </span>
              <span
                className={
                  open
                    ? "inline-flex items-center rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-700 ring-1 ring-emerald-500/40 dark:text-emerald-400"
                    : "inline-flex items-center rounded-full bg-slate-200 px-4 py-2 text-sm text-muted dark:bg-slate-700"
                }
              >
                {open ? "Open to Work" : "Not available"}
              </span>
            </div>
            <Link
              href="/resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto max-w-lg"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt={`${OWNER_NAME} workspace`}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
