"use client";

import { OWNER_NAME } from "@/lib/constants";
import { social } from "@/content/data/social";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const nav = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-surface py-12 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-foreground">{OWNER_NAME}</p>
          <p className="mt-1 text-sm text-muted">Building thoughtful software.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {nav.map((n) => (
            <Link
              key={n.href + n.label}
              href={n.href}
              className="hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-4 lg:justify-end">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary"
            aria-label="X"
          >
            <FaXTwitter className="h-5 w-5" />
          </a>
          <a
            href={social.email}
            className="text-muted hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-slate-200 px-4 pt-8 dark:border-slate-800 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          © {year} {OWNER_NAME}. All rights reserved.
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary dark:border-slate-700"
        >
          <ArrowUp className="h-4 w-4" />
          Back to Top
        </button>
      </div>
    </footer>
  );
}
