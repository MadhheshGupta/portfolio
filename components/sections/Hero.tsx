"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { OWNER_NAME, ROLES, TAGLINE } from "@/lib/constants";
import { SOCIAL, mailtoHref } from "@/content/data/social";
import { useTypewriter } from "@/hooks/useTypewriter";

const HeroMeshBackground = dynamic(
  () =>
    import("@/components/sections/HeroMeshBackground").then((m) => ({
      default: m.HeroMeshBackground,
    })),
  { ssr: false }
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24"
    >
      <HeroMeshBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left"
        >
          <motion.p
            variants={item}
            className="text-lg text-muted sm:text-xl"
          >
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-2 bg-gradient-to-r from-primary via-[#818cf8] to-accent bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-h1"
          >
            {OWNER_NAME}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 min-h-[2.75rem] font-mono text-xl text-accent sm:text-2xl"
          >
            <span className="text-foreground/90">{typed}</span>
            <span className="ml-0.5 inline-block h-7 w-0.5 animate-pulse bg-accent align-middle shadow-glow-cyan" />
          </motion.p>
          <motion.p
            variants={item}
            className="mt-6 text-body text-muted text-balance"
          >
            {TAGLINE}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-dark hover:shadow-glow-card"
            >
              View My Projects
              <ArrowDown className="h-4 w-4" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-surface/50 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition hover:border-primary/60 hover:text-primary hover:shadow-glow-sm"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex justify-center gap-4 lg:justify-start"
          >
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-surface/40 p-3 text-muted backdrop-blur-sm transition hover:border-primary/50 hover:text-primary hover:shadow-glow-sm"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-surface/40 p-3 text-muted backdrop-blur-sm transition hover:border-accent/50 hover:text-accent hover:shadow-glow-cyan"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={mailtoHref}
              className="rounded-xl border border-white/15 bg-surface/40 p-3 text-muted backdrop-blur-sm transition hover:border-primary/50 hover:text-primary hover:shadow-glow-sm"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex w-full max-w-[min(100%,500px)] justify-center lg:max-w-none lg:justify-end"
        >
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-tr from-primary/35 to-accent/25 blur-3xl" />
          <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-3xl border border-white/10 shadow-glow-card ring-1 ring-white/5">
            <Image
              src="/hero.webp"
              alt={OWNER_NAME}
              width={500}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw, 500px"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
