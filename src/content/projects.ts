import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "dora-self-assessment",
    image: "/projects/dora-self-assessment.png",
    title: "DORA Self Assessment",
    subtitle: "Bibba Tech AB · live product",
    period: "Aug 2026 – Present",
    role: "Full Stack Developer Intern",
    description:
      "Compliance assessment tool that shows financial-sector companies where they stand on the EU Digital Operational Resilience Act (DORA).",
    highlights: [
      "Redesigned and reorganised the frontend, improving code structure, visual design and UX across a multi-step scoring flow.",
      "Implemented multi-language (i18n) support so the product works for international users.",
      "Made backend and database changes with Prisma and PostgreSQL to support new features and data handling.",
    ],
    stack: ["React", "TypeScript", "i18n", "Prisma", "PostgreSQL"],
    live: "https://dora.bibba.tech",
    accent: "from-purple-800 to-violet-600",
  },
  {
    slug: "bibba-tech",
    image: "/projects/bibba-tech.png",
    title: "bibba.tech",
    subtitle: "Bibba Tech AB · company website",
    period: "Aug 2026 – Present",
    role: "Full Stack Developer Intern",
    description:
      "The company website for BibbaTech, which builds AI solutions for the financial sector, rebuilt from PHP to a modern Next.js stack.",
    highlights: [
      "Translating business requirements into a scalable solution.",
      "Migrating the site from PHP to Next.js and TypeScript.",
      "Set up Payload CMS so non-technical staff have no-code control over page content.",
    ],
    stack: ["Next.js", "TypeScript", "Payload CMS", "Tailwind CSS"],
    live: "https://bibba.tech",
    accent: "from-indigo-950 to-purple-800",
  },
  {
    slug: "just-add-movies",
    image: "/projects/just-add-movies.png",
    title: "Just Add Movies",
    subtitle: "Lexicon group project · team of 4",
    period: "Apr 2026 – May 2026",
    role: "Frontend, auth & database",
    description: "Online movie store with search, filtering, user accounts and cart.",
    highlights: [
      "Built most of the frontend: landing, store and movie pages, navbar, carousel, light/dark mode and responsive design.",
      "Added URL-based store filtering.",
      "Set up Better-Auth with Neon PostgreSQL for the Vercel deployment.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Better-Auth", "Tailwind CSS"],
    live: "https://just-add-movies-group-c-woad.vercel.app",
    repo: "https://github.com/gr-26-18/JustAddMovies-group-c",
    accent: "from-orange-600 to-amber-500",
    onCv: true,
  },
  {
    slug: "the-daily-commit",
    image: "/projects/the-daily-commit.png",
    title: "The Daily Commit",
    subtitle: "Lexicon team project",
    role: "Team member",
    description:
      "Swedish news site with article publishing, an admin dashboard, paid subscriptions, newsletters and an AI-assisted article generation tool.",
    highlights: [
      "Article publishing with a rich-text editor and image uploads.",
      "Accounts, roles and paid subscriptions with Better-Auth and Stripe.",
      "AI-assisted article generation and styled transactional emails.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Better-Auth", "Stripe"],
    live: "https://thedailycommit.vercel.app",
    // TODO: add repo link back once secrets are removed from the repo history
    accent: "from-purple-950 to-indigo-800",
  },
];
