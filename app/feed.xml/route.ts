import { SITE_URL } from "@/lib/constants";
import { getAllPosts } from "@/lib/posts";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();
  const items = posts
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.frontmatter.title)}</title>
      <link>${escapeXml(`${SITE_URL}/blog/${p.slug}`)}</link>
      <guid>${escapeXml(`${SITE_URL}/blog/${p.slug}`)}</guid>
      <pubDate>${new Date(p.frontmatter.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.frontmatter.excerpt)}</description>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Alex Johnson — Blog</title>
    <link>${escapeXml(SITE_URL)}</link>
    <description>Articles on full-stack development and shipping software.</description>
    <language>en-us</language>
    <atom:link href="${escapeXml(`${SITE_URL}/feed.xml`)}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
