"use client";

import { OWNER_NAME, TAGLINE } from "@/lib/constants";
import { SOCIAL, mailtoHref } from "@/content/data/social";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface/40 py-14 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-semibold text-foreground">{OWNER_NAME}</p>
          <p className="mt-2 max-w-md text-sm text-muted">{TAGLINE}</p>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-primary hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]"
            aria-label="GitHub"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition hover:text-accent hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href={mailtoHref}
            className="text-muted transition hover:text-primary hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <p className="text-sm text-muted">
          Built by {OWNER_NAME} · {year}
        </p>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[var(--color-bg)]/60 px-5 py-2.5 text-sm font-medium text-foreground shadow-glow-sm transition hover:border-primary/40 hover:shadow-glow"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
          Back to Top
        </button>
      </div>
    </footer>
  );
}
