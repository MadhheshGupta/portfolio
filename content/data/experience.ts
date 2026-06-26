export type Experience = {
  type: "work" | "education" | "certification";
  title: string;
  organization: string;
  duration: string;
  location?: string;
  description?: string[];
  logo?: string;
};

export const experiences: Experience[] = [
  {
    type: "work",
    title: "Java Support Intern",
    organization: "NexisparkX Technologies",
    duration: "Mar 2026 — May 2026",
    location: "Indore, India",
    description: [
      "Resolved 15+ production bugs in Java-based enterprise applications by debugging legacy modules and writing clean, well-documented code, improving system reliability for end users.",
      "Built and tested REST API integrations between internal services by collaborating with senior developers, reducing manual data-handling steps in core workflows.",
      "Improved deployment turnaround by supporting CI-style testing and debugging cycles before release, helping catch defects earlier in the development process.",
      "Maintained zero data-confidentiality incidents while handling sensitive company and client information across all project deliverables.",
    ],
  },
  {
    type: "education",
    title: "B.E. Computer Science & Engineering",
    organization: "Prestige Institute of Engineering Management and Research",
    duration: "2023 — 2027",
    location: "Indore, India",
    description: [
      "Currently in 4th year. Coursework covers data structures, algorithms, database systems, and full-stack development.",
    ],
  },
];
