export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  category: "Web" | "Mobile" | "AI/ML" | "Design";
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "document-chat",
    title: "DocChat — AI Document Chat App",
    description:
      "A production-deployed AI chat app that lets users upload and converse with documents across 5+ file formats (PDF, DOCX, XLSX, TXT, images) — powered by Gemini AI with zero backend cost. Built with Next.js, TypeScript, and Tailwind CSS and deployed live on Vercel.",
    thumbnail: "/images/projects/document-chat.webp",
    tags: ["Next.js", "TypeScript", "Gemini AI", "Tailwind CSS", "Vercel"],
    category: "AI/ML",
    repoUrl: "https://github.com/MadhheshGupta/Document-Chat",
    liveUrl: "https://document-chat-cyan.vercel.app/",
    featured: true,
  },
  {
    id: "slams",
    title: "SLAMS — Smart Library Management System",
    description:
      "A full-stack library management system with real authentication, book issue/return tracking, and automated reporting. Built with Java and PostgreSQL (PLpgSQL), focusing on clean backend architecture and reliable database operations.",
    thumbnail: "/images/projects/slams.webp",
    tags: ["Java", "PostgreSQL", "PLpgSQL", "JDBC", "Authentication"],
    category: "Web",
    repoUrl: "https://github.com/MadhheshGupta/SLAMS",
    featured: true,
  },
  {
    id: "student-dbms",
    title: "Student Database Management System",
    description:
      "A full-featured system to store, manage, and retrieve student records efficiently. Built with Java and MySQL, focusing on clean CRUD operations and reliable database integration.",
    thumbnail: "/images/projects/student-dbms.webp",
    tags: ["Java", "MySQL", "JDBC", "CRUD"],
    category: "Web",
    repoUrl: "https://github.com/MadhheshGupta",
    featured: false,
  },
];
