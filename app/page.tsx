import dynamic from "next/dynamic";
import { getPinnedRepositories } from "@/lib/github";
import { getAllPosts } from "@/lib/posts";

const Hero = dynamic(
  () => import("@/components/sections/Hero").then((m) => ({ default: m.Hero })),
  { ssr: false, loading: () => <div className="min-h-screen" aria-hidden /> }
);
const About = dynamic(
  () => import("@/components/sections/About").then((m) => ({ default: m.About })),
  { ssr: false }
);
const Skills = dynamic(
  () => import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
  { ssr: false }
);
const Projects = dynamic(
  () => import("@/components/sections/Projects").then((m) => ({ default: m.Projects })),
  { ssr: false }
);
const Experience = dynamic(
  () =>
    import("@/components/sections/Experience").then((m) => ({ default: m.Experience })),
  { ssr: false }
);
const Blog = dynamic(
  () => import("@/components/sections/Blog").then((m) => ({ default: m.Blog })),
  { ssr: false }
);
const Contact = dynamic(
  () => import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
  { ssr: false }
);

export default async function Home() {
  const posts = getAllPosts();
  const pinnedRepos = await getPinnedRepositories();

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects pinnedRepos={pinnedRepos} />
      <Experience />
      <Blog posts={posts} />
      <Contact />
    </main>
  );
}
