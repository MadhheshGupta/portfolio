export type SkillCategory = "Languages" | "Tools" | "Web";

export type Skill = {
  name: string;
  category: SkillCategory;
  proficiency: number;
};

export const SKILLS: Skill[] = [
  { name: "Java", category: "Languages", proficiency: 85 },
  { name: "Python", category: "Languages", proficiency: 75 },
  { name: "MySQL", category: "Languages", proficiency: 78 },
  { name: "Git", category: "Tools", proficiency: 80 },
  { name: "TensorFlow", category: "Tools", proficiency: 60 },
  { name: "Spring Boot", category: "Tools", proficiency: 72 },
  { name: "InfluxDB", category: "Tools", proficiency: 65 },
  { name: "HTML", category: "Web", proficiency: 75 },
];
