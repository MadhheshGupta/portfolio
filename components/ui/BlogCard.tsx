import Image from "next/image";
import Link from "next/link";
import type { PostWithContent } from "@/lib/posts";
import { Calendar, Clock } from "lucide-react";

type Props = { post: PostWithContent };

export function BlogCard({ post }: Props) {
  const { slug, frontmatter: fm } = post;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[var(--color-bg)] transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700">
      <Link href={`/blog/${slug}`} className="relative aspect-[16/9] overflow-hidden bg-surface">
        <Image
          src={fm.thumbnail}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(fm.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {fm.readTime}
          </span>
        </div>
        <h2 className="mt-2 text-lg font-semibold text-foreground">
          <Link
            href={`/blog/${slug}`}
            className="hover:text-primary"
          >
            {fm.title}
          </Link>
        </h2>
        <p className="mt-2 flex-1 text-sm text-muted">{fm.excerpt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {fm.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-foreground ring-1 ring-slate-200 dark:ring-slate-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
