import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";

const About = dynamic(
  () =>
    import("@/components/sections/About").then((m) => ({ default: m.About })),
  { loading: () => <SectionSkeleton variant="about" /> }
);
const Skills = dynamic(
  () =>
    import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
  { loading: () => <SectionSkeleton variant="skills" /> }
);
const Projects = dynamic(
  () =>
    import("@/components/sections/Projects").then((m) => ({
      default: m.Projects,
    })),
  { loading: () => <SectionSkeleton variant="projects" /> }
);
const Contact = dynamic(
  () =>
    import("@/components/sections/Contact").then((m) => ({
      default: m.Contact,
    })),
  { loading: () => <SectionSkeleton variant="contact" /> }
);

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
