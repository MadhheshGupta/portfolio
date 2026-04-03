"use client";

import { motion } from "framer-motion";
import {
  SiDocker,
  SiFigma,
  SiGit,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Cloud, GraduationCap, Puzzle, Target, Users } from "lucide-react";
import type { Skill } from "@/content/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: SiPython,
  go: SiGo,
  html5: SiHtml5,
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  tailwind: SiTailwindcss,
  docker: SiDocker,
  postgres: SiPostgresql,
  git: SiGit,
  figma: SiFigma,
  cloud: Cloud,
  users: Users,
  graduation: GraduationCap,
  puzzle: Puzzle,
  target: Target,
};

export function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = iconMap[skill.icon] ?? SiTypescript;
  const pct = skill.proficiency ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-slate-200 bg-[var(--color-bg)] p-4 dark:border-slate-700"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-primary">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-medium text-foreground">{skill.name}</p>
          {skill.proficiency != null && (
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
