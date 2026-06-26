export const OWNER_NAME = "Madhesh Gupta";
export const TAGLINE = "Shipping Working Software, Not Just Coursework";
export const BIO =
  "CSE undergraduate who ships working software, not just coursework — built a production-deployed AI document chat app supporting 5+ file formats with zero backend cost, and a full-stack library management system with real authentication and automated reporting. Comfortable across Java, SQL, and the modern React/Next.js stack, with hands-on REST API and backend experience from a live industry internship.";
export const LOCATION = "Indore, India";
export const AVAILABILITY = "Open to Opportunities";
export const ROLES = [
  "Java Developer",
  "Full Stack Developer",
  "Problem Solver",
  "CSE Student",
] as const;

/** Primary role for SEO / schema */
export const JOB_TITLE = "Java Developer & CSE Student";

/** Production origin for Open Graph / canonical resolution (metadataBase). */
export const METADATA_BASE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://madheshgupta.dev";

export const SITE_URL = METADATA_BASE_ORIGIN;

export const SITE_DESCRIPTION =
  "Portfolio of Madhesh Gupta — Java Developer, CSE student at PIEMR Indore, passionate about shipping real-world software solutions.";
