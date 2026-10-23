import type { SkillGroup } from "@/types/content";

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Python"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "CSS", "i18n"] },
  {
    group: "Backend & data",
    items: ["Node.js", "Prisma", "PostgreSQL", "Payload CMS", "Better-Auth", "Zod", "REST APIs"],
  },
  { group: "Tools & ways of working", items: ["Git / GitHub", "Scrum", "AI-assisted dev"] },
  { group: "Spoken languages", items: ["English (fluent)", "Swedish (SFI D)"] },
];
