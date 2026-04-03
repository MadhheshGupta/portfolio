"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/content/data/skills";
import { SkillBadge } from "@/components/ui/SkillBadge";
import type { Skill } from "@/content/data/skills";

const categories: Skill["category"][] = [
  "Languages",
  "Frameworks",
  "Tools",
  "Soft Skills",
];

export function Skills() {
  const [tab, setTab] = useState<Skill["category"]>("Languages");

  const filtered = useMemo(
    () => skills.filter((s) => s.category === tab),
    [tab]
  );

  return (
    <section id="skills" className="scroll-mt-24 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-semibold text-foreground sm:text-h2"
        >
          Skills
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Tools and practices I use to ship reliable products.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setTab(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                tab === c
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-[var(--color-bg)] text-muted ring-1 ring-slate-200 hover:text-primary dark:ring-slate-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((skill) => (
            <SkillBadge key={skill.name + tab} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
