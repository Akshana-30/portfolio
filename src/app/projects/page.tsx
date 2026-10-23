import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="container-page py-20">
      <Reveal className="mb-14">
        <SectionHeading as="h1" eyebrow="Work" title="Projects" />
        <p className="mt-4 max-w-xl text-muted-foreground">
          Products I&apos;ve worked on at Bibba Tech and with my teams at Lexicon.
        </p>
      </Reveal>

      <Stagger className="grid gap-6 md:grid-cols-2" gap={0.1}>
        {projects.map((project, i) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} index={i} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
