import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { createMdxComponents } from "@/components/mdx-components";
import { extractToc, getAllPosts, getPostBySlug } from "@/lib/posts";
import { OWNER_NAME, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post" };
  const { frontmatter: fm } = post;
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: fm.title,
    description: fm.excerpt,
    openGraph: {
      title: fm.title,
      description: fm.excerpt,
      url,
      type: "article",
      images: [{ url: fm.thumbnail, width: 1200, height: 630, alt: fm.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fm.title,
      description: fm.excerpt,
      images: [fm.thumbnail],
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const { frontmatter: fm, content } = post;
  const toc = extractToc(content);
  const components = createMdxComponents();
  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === post.slug);
  const prev = idx < all.length - 1 ? all[idx + 1] : null;
  const next = idx > 0 ? all[idx - 1] : null;

  const mdx = await MDXRemote({ source: content, components });

  return (
    <article className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to blog
      </Link>

      <header className="mt-8">
        <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-slate-200 bg-surface dark:border-slate-700">
          <Image
            src={fm.thumbnail}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
        <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {fm.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {new Date(fm.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {fm.readTime}
          </span>
          <span className="text-muted">By {OWNER_NAME}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {fm.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-foreground ring-1 ring-slate-200 dark:ring-slate-600"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground">
          {mdx}
        </div>

        {toc.length > 0 && (
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">
              On this page
            </p>
            <nav className="mt-4 space-y-2 text-sm">
              {toc.map((item) => (
                <a
                  key={item.id + item.text}
                  href={`#${item.id}`}
                  className={`block text-muted hover:text-primary ${
                    item.level === 3 ? "pl-4" : ""
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </aside>
        )}
      </div>

      <nav className="mt-16 grid gap-4 border-t border-slate-200 pt-10 dark:border-slate-800 sm:grid-cols-2">
        <div>
          {prev && (
            <Link
              href={`/blog/${prev.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 p-4 transition hover:border-primary dark:border-slate-700"
            >
              <span className="text-xs font-medium uppercase text-muted">Previous</span>
              <span className="mt-1 flex items-center gap-2 font-semibold text-foreground group-hover:text-primary">
                <ChevronLeft className="h-4 w-4" />
                {prev.frontmatter.title}
              </span>
            </Link>
          )}
        </div>
        <div className="sm:text-right">
          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 p-4 transition hover:border-primary dark:border-slate-700 sm:ml-auto sm:items-end"
            >
              <span className="text-xs font-medium uppercase text-muted">Next</span>
              <span className="mt-1 flex items-center gap-2 font-semibold text-foreground group-hover:text-primary">
                {next.frontmatter.title}
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
