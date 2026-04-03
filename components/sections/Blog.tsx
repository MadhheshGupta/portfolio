"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogCard } from "@/components/ui/BlogCard";
import type { PostWithContent } from "@/lib/posts";

type Props = { posts: PostWithContent[] };

export function Blog({ posts }: Props) {
  const preview = posts.slice(0, 3);

  return (
    <section id="blog" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-semibold text-foreground sm:text-h2"
        >
          Blog
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Notes on shipping software, design systems, and developer experience.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {preview.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            View all posts
          </Link>
        </div>
      </div>
    </section>
  );
}
