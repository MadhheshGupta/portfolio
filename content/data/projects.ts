export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  category: "Web" | "Mobile" | "AI/ML" | "Design";
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Nimbus Analytics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Real-time dashboards with role-based access and exportable reports.",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    category: "Web",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "Pulse Mobile",
    description:
      "Lorem ipsum dolor sit amet. Cross-platform companion app with offline sync and push notifications for field teams.",
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tags: ["React Native", "TypeScript", "Firebase"],
    category: "Mobile",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
  },
  {
    id: "3",
    title: "VectorMind",
    description:
      "Lorem ipsum dolor sit amet. Semantic search API with embeddings, reranking, and observability baked in.",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["Python", "FastAPI", "OpenAI"],
    category: "AI/ML",
    repoUrl: "https://github.com",
    featured: false,
  },
  {
    id: "4",
    title: "Aurora Design Kit",
    description:
      "Lorem ipsum dolor sit amet. Component library and Figma kit used by three product squads for consistent UX.",
    thumbnail:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    tags: ["Figma", "Storybook", "a11y"],
    category: "Design",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: "5",
    title: "Harbor Commerce",
    description:
      "Lorem ipsum dolor sit amet. Headless storefront with edge caching and subscription billing integration.",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "Stripe", "GraphQL"],
    category: "Web",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: false,
  },
  {
    id: "6",
    title: "Lens OCR",
    description:
      "Lorem ipsum dolor sit amet. On-device document scanning with layout-preserving text extraction.",
    thumbnail:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    tags: ["Swift", "CoreML", "Vision"],
    category: "Mobile",
    repoUrl: "https://github.com",
    featured: false,
  },
];
