"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/content/data/skills";

export function SkillBadge({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  const pct = skill.proficiency;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="rounded-xl border border-white/10 bg-surface/50 p-5 shadow-glow-sm backdrop-blur-md transition hover:shadow-glow"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-base font-medium text-foreground">{skill.name}</p>
        <span className="font-mono text-xs text-muted">{pct}%</span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--color-bg)] ring-1 ring-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_12px_rgba(99,102,241,0.45)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
