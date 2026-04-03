import type { ReactElement, ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { slugifyHeading } from "@/lib/posts";

function headingText(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(headingText).join("");
  }
  if (children && typeof children === "object" && "props" in children) {
    return headingText(
      (children as ReactElement<{ children?: ReactNode }>).props.children
    );
  }
  return "";
}

export function createMdxComponents(): MDXComponents {
  return {
    h2: ({ children, ...props }) => {
      const id = slugifyHeading(headingText(children));
      return (
        <h2 id={id} className="mt-12 scroll-mt-28 text-2xl font-semibold text-foreground" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }) => {
      const id = slugifyHeading(headingText(children));
      return (
        <h3 id={id} className="mt-8 scroll-mt-28 text-xl font-semibold text-foreground" {...props}>
          {children}
        </h3>
      );
    },
    p: ({ children }) => (
      <p className="mt-4 text-body leading-relaxed text-muted">{children}</p>
    ),
    a: ({ href, children }) => {
      const external =
        href?.startsWith("http") ||
        href?.startsWith("mailto:") ||
        href?.startsWith("tel:");
      const className =
        "font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary";
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href ?? "#"} className={className}>
          {children}
        </Link>
      );
    },
    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    code: ({ children }) => (
      <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-primary">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-4 text-sm text-slate-100 dark:border-slate-700">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-4 border-l-4 border-primary/50 pl-4 italic text-muted">
        {children}
      </blockquote>
    ),
  };
}
