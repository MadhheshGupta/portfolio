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
    title: "Senior Full Stack Engineer",
    organization: "Northwind Labs",
    duration: "2022 — Present",
    location: "San Francisco, CA",
    description: [
      "Led migration of a monolithic Rails app to Next.js micro-frontends, improving LCP by 38%.",
      "Owned observability initiative: OpenTelemetry traces, SLO dashboards, and on-call runbooks.",
      "Mentored four engineers through promotion cycles and weekly architecture reviews.",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Brightline Studio",
    duration: "2019 — 2022",
    location: "Remote",
    description: [
      "Shipped customer-facing portals with OAuth2, RBAC, and WCAG 2.1 AA compliance.",
      "Built CI/CD pipelines on GitHub Actions with preview environments per PR.",
    ],
  },
  {
    type: "work",
    title: "Software Engineer Intern",
    organization: "Cedar Apps",
    duration: "Summer 2018",
    location: "San Francisco, CA",
    description: [
      "Implemented analytics funnels and A/B test harnesses for the mobile SDK team.",
    ],
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    organization: "University of California, Berkeley",
    duration: "2015 — 2019",
    location: "Berkeley, CA",
    description: [
      "Focus: distributed systems & human-computer interaction. Dean's List.",
    ],
  },
  {
    type: "certification",
    title: "AWS Certified Developer — Associate",
    organization: "Amazon Web Services",
    duration: "Issued 2024",
    description: ["Validates proficiency in developing on AWS services."],
  },
  {
    type: "certification",
    title: "Google UX Design Certificate",
    organization: "Google / Coursera",
    duration: "Issued 2021",
    description: ["End-to-end UX research and prototyping coursework."],
  },
];
