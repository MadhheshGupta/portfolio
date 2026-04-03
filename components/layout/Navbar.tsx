"use client";

import { cn } from "@/lib/utils";
import { OWNER_NAME } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#blog", label: "Blog", id: "blog" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors",
        scrolled &&
          "border-slate-200/80 bg-[var(--color-bg)]/80 backdrop-blur-md dark:border-slate-700/80"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/#home"
          className="text-lg font-semibold tracking-tight text-foreground hover:text-primary"
        >
          {OWNER_NAME.split(" ")[0]}
          <span className="text-primary">.</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active === l.id
                  ? "bg-surface text-primary"
                  : "text-muted hover:text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-foreground dark:border-slate-700 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-200 bg-[var(--color-bg)]/95 backdrop-blur dark:border-slate-700 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <Link
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium",
                    active === l.id
                      ? "bg-surface text-primary"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
