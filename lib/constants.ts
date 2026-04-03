export const OWNER_NAME = "Alex Johnson";
export const TAGLINE =
  "I build accessible, performant web experiences with a focus on developer experience and clean design.";
export const BIO = `I'm a full-stack engineer with a passion for crafting products that feel effortless to use. Over the past several years I've partnered with startups and established teams to ship resilient APIs, polished interfaces, and measurable business outcomes.

I care deeply about code quality, observability, and collaboration—whether that means pairing on a tricky bug or documenting decisions so the next person has an easier path forward.`;

export const LOCATION = "San Francisco, CA";
export const EXPERIENCE_YEARS = 6;
export const AVAILABILITY = "open" as const;

export const ROLES = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Open Source Contributor",
] as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexjohnson.dev";
