import { getAllPosts } from "@/lib/posts";
import { BlogListing } from "@/components/blog/blog-listing";

export const metadata = {
  title: "Blog",
  description: "Articles on full-stack development, design systems, and shipping software.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
      <h1 className="text-center text-4xl font-bold text-foreground sm:text-h2">Blog</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
        Long-form notes on tools, process, and lessons learned building products.
      </p>
      <div className="mt-14">
        <BlogListing posts={posts} />
      </div>
    </main>
  );
}
