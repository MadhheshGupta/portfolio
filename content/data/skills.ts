export type SkillCategory = "Languages" | "Tools" | "Frameworks";

export type Skill = {
  name: string;
  category: SkillCategory;
  proficiency: number;
};

export const SKILLS: Skill[] = [
  // Languages
  { name: "Java", category: "Languages", proficiency: 80 },
  { name: "SQL (MySQL / PostgreSQL)", category: "Languages", proficiency: 48 },
  { name: "JavaScript / TypeScript", category: "Languages", proficiency: 48 },

  // Frameworks
  { name: "React / Next.js", category: "Frameworks", proficiency: 48 },
  { name: "JDBC / Servlet", category: "Frameworks", proficiency: 48 },

  // Tools
  { name: "Git & GitHub", category: "Tools", proficiency: 80 },
  { name: "REST APIs", category: "Tools", proficiency: 65 },
  { name: "Vercel", category: "Tools", proficiency: 80 },
  { name: "AI / ML (Gemini, TensorFlow)", category: "Tools", proficiency: 48 },
];
