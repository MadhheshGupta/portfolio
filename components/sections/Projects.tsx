"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/content/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/content/data/projects";
import type { PinnedRepo } from "@/lib/github";
import { Star, GitFork, ExternalLink } from "lucide-react";
import Link from "next/link";

const filters: Array<"All" | Project["category"]> = [
  "All",
  "Web",
  "Mobile",
  "AI/ML",
  "Design",
];

type Props = { pinnedRepos: PinnedRepo[] };

export function Projects({ pinnedRepos }: Props) {
  const [cat, setCat] = useState<(typeof filters)[number]>("All");

  const list = useMemo(() => {
    if (cat === "All") return projects;
    return projects.filter((p) => p.category === cat);
  }, [cat]);

  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-semibold text-foreground sm:text-h2"
        >
          Projects
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Selected work across web, mobile, and design systems.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setCat(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                cat === f
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-surface text-muted ring-1 ring-slate-200 hover:text-primary dark:ring-slate-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {list.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold text-foreground">
            Pinned on GitHub
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted">
            Pulled live when a token is configured; otherwise cached or public
            REST data is used. Rate limits fall back to{" "}
            <code className="rounded bg-surface px-1 py-0.5 font-mono text-xs">
              github-cache.json
            </code>
            .
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {pinnedRepos.map((repo) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col rounded-2xl border border-slate-200 bg-surface p-5 dark:border-slate-700"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{repo.name}</h4>
                    <p className="mt-1 line-clamp-2 text-sm text-muted">
                      {repo.description ?? "No description"}
                    </p>
                  </div>
                  <Link
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary"
                    aria-label={`Open ${repo.name} on GitHub`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500" />
                    {repo.stars}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    {repo.forks}
                  </span>
                  {repo.language && (
                    <span className="inline-flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor: repo.languageColor ?? "#64748b",
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="text-xs">
                    Updated{" "}
                    {repo.updatedAt
                      ? new Date(repo.updatedAt).toLocaleDateString()
                      : "—"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
