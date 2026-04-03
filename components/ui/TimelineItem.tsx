"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  organization: string;
  duration: string;
  location?: string;
  bullets?: string[];
  showLine?: boolean;
};

export function TimelineItem({
  title,
  organization,
  duration,
  location,
  bullets,
  showLine = true,
}: Props) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className="relative flex gap-6"
    >
      <div className="flex w-8 flex-none flex-col items-center">
        <div className="h-3.5 w-3.5 rounded-full border-2 border-[var(--color-bg)] bg-primary shadow ring-2 ring-primary/20" />
        {showLine && (
          <div className="mt-2 min-h-[2rem] w-px flex-1 bg-gradient-to-b from-primary/40 to-transparent" />
        )}
      </div>
      <div className="flex-1 pb-10">
        <div className="rounded-2xl border border-slate-200 bg-surface p-5 dark:border-slate-700">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {duration}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted">{organization}</p>
          {location && <p className="mt-1 text-sm text-muted">{location}</p>}
          {bullets && bullets.length > 0 && (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.li>
  );
}
