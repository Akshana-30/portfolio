import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Bibba Tech AB",
    location: "Sweden",
    period: "Aug 2026 – Present",
    points: [
      "Redesigned and reorganised the frontend of a live DORA compliance assessment product (dora.bibba.tech), improving code structure, visual design and UX across a multi-step scoring flow.",
      "Implemented multi-language (i18n) support so the product works for international users.",
      "Made backend and database changes with Prisma and PostgreSQL to support new features and data handling.",
      "Rebuilding the company website (bibba.tech) from PHP to Next.js with Payload CMS, so non-technical staff can manage page content.",
    ],
  },
  {
    role: "Operations Support & Development",
    company: "Svensk Hemleverans",
    location: "Sweden",
    period: "Jun 2023 – Jun 2024",
    points: [
      "Built ETL workflows to collect and prepare data for operational analyses.",
      "Analysed manual daily routines and automated them with RPA (UiPath), reducing repetitive work.",
      "Resolved service desk tickets, ensuring timely support for internal users.",
    ],
  },
  {
    role: "Mechanical Design Intern",
    company: "VTI",
    location: "Sweden",
    period: "Aug 2022 – Jan 2023",
    points: [
      "Designed variable-gauge axles and mounts in CATIA V5 for a train prototype; liaised between client and team.",
    ],
  },
  {
    role: "Mechanical Design Engineer",
    company: "Pumo Technovation",
    location: "India",
    period: "Aug 2020 – Jul 2021",
    points: [
      "Reverse-engineered components in SolidWorks, producing 3D models, drawings and BOMs.",
    ],
  },
];
