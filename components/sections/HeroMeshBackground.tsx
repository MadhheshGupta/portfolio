"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/** Lightweight CSS mesh + floating orbs (no canvas) for smooth hero background */
export function HeroMeshBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 23) % 100}%`,
        delay: (i % 8) * 0.4,
        duration: 10 + (i % 5) * 2,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(99,102,241,0.35),transparent),radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(34,211,238,0.12),transparent),radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(99,102,241,0.2),transparent)]" />
      <motion.div
        className="absolute -left-1/4 top-1/4 h-[min(80vw,520px)] w-[min(80vw,520px)] rounded-full bg-primary/25 blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-0 h-[min(70vw,480px)] w-[min(70vw,480px)] rounded-full bg-accent/20 blur-[90px]"
        animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-accent/40 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
          style={{ left: p.left, top: p.top }}
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.4, 1] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
