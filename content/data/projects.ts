export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  category: "Web" | "Mobile" | "AI/ML" | "Design";
  repoUrl?: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "student-dbms",
    title: "Student Database Management System",
    description:
      "A full-featured system to store, manage, and retrieve student records efficiently. Built with Java and MySQL, focusing on clean CRUD operations and reliable database integration.",
    thumbnail: "/images/projects/student-dbms.webp",
    tags: ["Java", "MySQL", "JDBC", "CRUD"],
    category: "Web",
    repoUrl: "https://github.com/MadhheshGupta",
    featured: true,
  },
  {
    id: "expense-tracker",
    title: "Personal Expense Tracker",
    description:
      "A backend-powered web app to track and analyze monthly expenses. Built with Java, Servlet, and Spring Boot — structured data handling with a clean API-driven architecture.",
    thumbnail: "/images/projects/expense-tracker.webp",
    tags: ["Java", "Spring Boot", "Servlet", "MySQL"],
    category: "Web",
    repoUrl: "https://github.com/MadhheshGupta",
    featured: false,
  },
];
