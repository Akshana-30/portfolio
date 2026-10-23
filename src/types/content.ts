export type SkillGroup = {
  group: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  period?: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  live?: string;
  repo?: string;
  /** Landing-page screenshot in /public/projects. */
  image?: string;
  /** Tailwind gradient classes for the project cover. */
  accent: string;
  /** Shown in the Projects section of the CV page (work projects are already under Experience). */
  onCv?: boolean;
};

export type Education = {
  title: string;
  school: string;
  period: string;
};

export type JourneyStep = {
  year: string;
  place: string;
  title: string;
  org: string;
};
