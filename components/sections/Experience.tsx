"use client";

import { motion } from "framer-motion";
import { experiences } from "@/content/data/experience";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience() {
  const work = experiences.filter((e) => e.type === "work");
  const education = experiences.filter((e) => e.type === "education");
  const certs = experiences.filter((e) => e.type === "certification");

  return (
    <section id="experience" className="scroll-mt-24 bg-surface py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-semibold text-foreground sm:text-h2"
        >
          Experience
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Roles, education, and certifications that shaped how I build.
        </p>

        <div className="mx-auto mt-14 max-w-3xl">
          <h3 className="text-lg font-semibold text-foreground">Work</h3>
          <ul className="mt-6 space-y-0" role="list">
            {work.map((exp, i) => (
              <TimelineItem
                key={exp.title + exp.duration}
                title={exp.title}
                organization={exp.organization}
                duration={exp.duration}
                location={exp.location}
                bullets={exp.description}
                showLine={i < work.length - 1}
              />
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-lg font-semibold text-foreground">Education</h3>
          <div className="mt-6 space-y-6">
            {education.map((exp) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 bg-[var(--color-bg)] p-5 dark:border-slate-700"
              >
                <p className="text-sm font-semibold text-primary">{exp.duration}</p>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  {exp.title}
                </p>
                <p className="text-muted">{exp.organization}</p>
                {exp.location && (
                  <p className="text-sm text-muted">{exp.location}</p>
                )}
                {exp.description && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                    {exp.description.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
          <ul className="mt-6 space-y-4">
            {certs.map((c) => (
              <motion.li
                key={c.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col rounded-xl border border-slate-200 bg-[var(--color-bg)] px-4 py-3 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-foreground">{c.title}</p>
                  <p className="text-sm text-muted">{c.organization}</p>
                </div>
                <p className="mt-2 text-sm text-primary sm:mt-0">{c.duration}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
