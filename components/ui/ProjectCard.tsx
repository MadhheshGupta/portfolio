"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/content/data/projects";
import { cn } from "@/lib/utils";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[var(--color-bg)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700"
      )}
    >
      {project.featured && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          Featured
        </span>
      )}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
        <Image
          src={project.thumbnail}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-foreground ring-1 ring-slate-200 dark:ring-slate-600"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          )}
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary dark:border-slate-600"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
