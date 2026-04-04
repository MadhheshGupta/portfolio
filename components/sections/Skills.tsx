"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/content/data/skills";
import { SkillBadge } from "@/components/ui/SkillBadge";
import type { SkillCategory } from "@/content/data/skills";

const tabs: Array<"All" | SkillCategory> = [
  "All",
  "Languages",
  "Tools",
  "Web",
];

export function Skills() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");

  const filtered = useMemo(() => {
    if (tab === "All") return SKILLS;
    return SKILLS.filter((s) => s.category === tab);
  }, [tab]);

  return (
    <section id="skills" className="scroll-mt-24 border-y border-white/5 bg-surface/30 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-semibold text-foreground sm:text-h2"
        >
          Tech Stack
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Languages, tools, and web fundamentals I use to ship projects.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setTab(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                tab === c
                  ? "bg-primary text-white shadow-glow"
                  : "border border-white/10 bg-[var(--color-bg)]/60 text-muted backdrop-blur-sm hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((skill, i) => (
            <SkillBadge key={skill.name + tab} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
