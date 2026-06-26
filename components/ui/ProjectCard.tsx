"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/content/data/projects";
import { cn } from "@/lib/utils";
import { useState } from "react";

const gradientById: Record<string, string> = {
  "document-chat": "from-cyan-600/40 via-primary/30 to-indigo-500/25",
  "slams": "from-violet-600/35 via-slate-700/40 to-accent/20",
  "student-dbms": "from-indigo-600/40 via-primary/30 to-cyan-500/25",
};

type Props = { project: Project; index: number };

export function ProjectCard({ project, index }: Props) {
  const [imgOk, setImgOk] = useState(true);
  const grad = gradientById[project.id] ?? "from-primary/30 to-accent/20";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10",
        "bg-surface/40 shadow-glow-sm backdrop-blur-xl transition duration-300",
        "will-change-transform hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow-card",
        "motion-reduce:will-change-auto",
        project.featured && "ring-1 ring-primary/50 shadow-neon"
      )}
    >
      {project.featured && (
        <span className="absolute right-4 top-4 z-10 rounded-full border border-accent/50 bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-[0_0_16px_rgba(34,211,238,0.45)]">
          Featured
        </span>
      )}
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden",
          !imgOk && `bg-gradient-to-br ${grad}`
        )}
      >
        {imgOk ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            decoding="async"
            className="object-cover transition duration-500 group-hover:scale-105"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-90",
              grad
            )}
            aria-hidden
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-accent"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-[var(--color-bg)]/60 px-4 py-2.5 text-sm font-semibold text-foreground backdrop-blur-sm transition hover:border-primary/50 hover:text-primary hover:shadow-glow-sm"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent backdrop-blur-sm transition hover:border-accent/60 hover:bg-accent/20 hover:shadow-glow-cyan"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
