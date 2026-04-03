export type Skill = {
  name: string;
  icon: string;
  category: "Languages" | "Frameworks" | "Tools" | "Soft Skills";
  proficiency?: number;
};

export const skills: Skill[] = [
  { name: "TypeScript", icon: "typescript", category: "Languages", proficiency: 95 },
  { name: "JavaScript", icon: "javascript", category: "Languages", proficiency: 92 },
  { name: "Python", icon: "python", category: "Languages", proficiency: 85 },
  { name: "Go", icon: "go", category: "Languages", proficiency: 72 },
  { name: "HTML/CSS", icon: "html5", category: "Languages", proficiency: 90 },

  { name: "React", icon: "react", category: "Frameworks", proficiency: 94 },
  { name: "Next.js", icon: "nextjs", category: "Frameworks", proficiency: 92 },
  { name: "Node.js", icon: "nodejs", category: "Frameworks", proficiency: 88 },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frameworks", proficiency: 91 },

  { name: "Docker", icon: "docker", category: "Tools", proficiency: 80 },
  { name: "PostgreSQL", icon: "postgres", category: "Tools", proficiency: 86 },
  { name: "Git", icon: "git", category: "Tools", proficiency: 90 },
  { name: "Figma", icon: "figma", category: "Tools", proficiency: 78 },
  { name: "AWS", icon: "cloud", category: "Tools", proficiency: 74 },

  { name: "Communication", icon: "users", category: "Soft Skills", proficiency: 92 },
  { name: "Mentoring", icon: "graduation", category: "Soft Skills", proficiency: 88 },
  { name: "Problem Solving", icon: "puzzle", category: "Soft Skills", proficiency: 93 },
  { name: "Ownership", icon: "target", category: "Soft Skills", proficiency: 90 },
];
