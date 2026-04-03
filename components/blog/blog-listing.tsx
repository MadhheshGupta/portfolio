"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/ui/BlogCard";
import type { PostWithContent } from "@/lib/posts";

type Props = { posts: PostWithContent[] };

export function BlogListing({ posts }: Props) {
  const allTags = useMemo(() => {
    const s = new Set<string>();
    posts.forEach((p) => p.frontmatter.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [posts]);

  const [tag, setTag] = useState<string | "all">("all");

  const filtered = useMemo(() => {
    if (tag === "all") return posts;
    return posts.filter((p) => p.frontmatter.tags.includes(tag));
  }, [posts, tag]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setTag("all")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            tag === "all"
              ? "bg-primary text-white"
              : "bg-surface text-muted ring-1 ring-slate-200 hover:text-primary dark:ring-slate-600"
          }`}
        >
          All
        </button>
        {allTags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTag(t)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              tag === t
                ? "bg-primary text-white"
                : "bg-surface text-muted ring-1 ring-slate-200 hover:text-primary dark:ring-slate-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
