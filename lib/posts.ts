import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDir = path.join(process.cwd(), "content/posts");

export type PostFrontmatter = {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  thumbnail: string;
  readTime?: string;
};

export type PostWithContent = {
  slug: string;
  frontmatter: PostFrontmatter & { readTime: string };
  content: string;
};

function parseFrontmatter(data: Record<string, unknown>): PostFrontmatter {
  return {
    title: String(data.title ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    excerpt: String(data.excerpt ?? ""),
    thumbnail: String(data.thumbnail ?? ""),
    readTime: data.readTime ? String(data.readTime) : undefined,
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): PostWithContent | null {
  const full = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  const fm = parseFrontmatter(data as Record<string, unknown>);
  const rt = readingTime(content);
  const readTime = fm.readTime ?? `${Math.max(1, Math.ceil(rt.minutes))} min read`;
  return {
    slug,
    frontmatter: { ...fm, readTime },
    content,
  };
}

export function getAllPosts(): PostWithContent[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is PostWithContent => p !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export type TocItem = { id: string; text: string; level: 2 | 3 };

/**
 * Strip common Markdown inline syntax from a heading line so the result matches
 * the plain text MDX produces for `headingText(children)` in mdx-components
 * (e.g. `## My [Link](url)` → "My Link", not "My [Link](url)").
 */
export function headingPlainTextFromMarkdown(source: string): string {
  let s = source.trim();

  // Images ![alt](url)
  s = s.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1");
  // Links [text](url) — must run after images
  s = s.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
  // Bold ** and __
  s = s.replace(/\*\*([^*]+)\*\*/g, "$1");
  s = s.replace(/__([^_]+)__/g, "$1");
  // Italic * and _ (single segment; runs after bold)
  s = s.replace(/\*([^*]+)\*/g, "$1");
  s = s.replace(/_([^_]+)_/g, "$1");
  // Inline `code`
  s = s.replace(/`([^`]+)`/g, "$1");
  // Strikethrough
  s = s.replace(/~~([^~]+)~~/g, "$1");
  // Raw HTML tags
  s = s.replace(/<[^>]+>/g, "");

  return s.trim();
}

export function extractToc(content: string): TocItem[] {
  const toc: TocItem[] = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const m = /^(##|###)\s+(.+)$/.exec(line.trim());
    if (m) {
      const level = m[1].length === 2 ? 2 : 3;
      const raw = m[2].trim();
      const plain = headingPlainTextFromMarkdown(raw);
      const id = slugifyHeading(plain);
      toc.push({ id, text: plain, level });
    }
  }
  return toc;
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
