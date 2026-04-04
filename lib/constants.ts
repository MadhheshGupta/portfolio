export const OWNER_NAME = "Madhesh Gupta";
export const TAGLINE = "Building Real-World Solutions Through Technology";
export const BIO =
  "Hi, I'm Madhesh. I'm a Java developer and student, working with Java and Python. I'm passionate about building real-world solutions through technology — from database systems to real-time IoT monitoring.";
export const LOCATION = "India";
export const AVAILABILITY = "Open to Opportunities";
export const ROLES = [
  "Java Developer",
  "Python Developer",
  "Problem Solver",
  "CS Student",
] as const;

/** Primary role for SEO / schema */
export const JOB_TITLE = "Java Developer & CS Student";

/** Production origin for Open Graph / canonical resolution (metadataBase). */
export const METADATA_BASE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://madheshgupta.dev";

export const SITE_URL = METADATA_BASE_ORIGIN;

export const SITE_DESCRIPTION =
  "Portfolio of Madhesh Gupta — Java Developer, Python programmer, and CS student passionate about building real-world technology solutions.";
