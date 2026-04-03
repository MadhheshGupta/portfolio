"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { OWNER_NAME, ROLES, TAGLINE } from "@/lib/constants";
import { social } from "@/content/data/social";
import { useTypewriter } from "@/hooks/useTypewriter";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.15),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(30,64,175,0.12),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.25),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl flex-1 grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-h1"
          >
            {OWNER_NAME}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-4 min-h-[2.5rem] text-xl text-primary sm:text-2xl"
          >
            {typed}
            <span className="ml-0.5 inline-block h-8 w-0.5 animate-pulse bg-primary align-middle" />
          </motion.p>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-body text-muted lg:mx-0 mx-auto"
          >
            {TAGLINE}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
            >
              View My Work
              <ArrowDown className="h-4 w-4" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary dark:border-slate-600"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex justify-center gap-4 lg:justify-start"
          >
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 p-2.5 text-muted transition hover:border-primary hover:text-primary dark:border-slate-600"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 p-2.5 text-muted transition hover:border-primary hover:text-primary dark:border-slate-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 p-2.5 text-muted transition hover:border-primary hover:text-primary dark:border-slate-600"
              aria-label="X"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a
              href={social.email}
              className="rounded-lg border border-slate-200 p-2.5 text-muted transition hover:border-primary hover:text-primary dark:border-slate-600"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto flex max-w-md justify-center lg:max-w-none"
        >
          <div className="relative aspect-square w-full max-w-sm">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-primary-dark/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl dark:border-slate-700">
              <Image
                src="/images/avatar.jpg"
                alt={OWNER_NAME}
                width={480}
                height={480}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
