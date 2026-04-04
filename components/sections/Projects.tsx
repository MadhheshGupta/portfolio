"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/content/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

type Filter = "All" | "Java" | "Python" | "IoT";

const filters: Filter[] = ["All", "Java", "Python", "IoT"];

function matchesFilter(project: (typeof PROJECTS)[0], f: Filter): boolean {
  if (f === "All") return true;
  const tags = project.tags.map((t) => t.toLowerCase());
  if (f === "Java") return tags.some((t) => t.includes("java"));
  if (f === "Python") return tags.some((t) => t.includes("python"));
  if (f === "IoT") return tags.some((t) => t.includes("iot"));
  return true;
}

export function Projects() {
  const [cat, setCat] = useState<Filter>("All");

  const list = useMemo(
    () => PROJECTS.filter((p) => matchesFilter(p, cat)),
    [cat]
  );

  return (
    <section id="projects" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-semibold text-foreground sm:text-h2"
        >
          What I&apos;ve Built
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Selected projects spanning databases, IoT data, and backend systems.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setCat(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                cat === f
                  ? "bg-primary text-white shadow-glow"
                  : "border border-white/10 bg-surface/50 text-muted backdrop-blur-sm hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {list.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
