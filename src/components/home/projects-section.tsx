import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, StickyStack } from "@/components/motion";
import { ProjectFeature } from "@/components/projects/project-feature";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="container-page scroll-mt-20 pt-12">
      <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="02 · Selected work" title="Things I've built" />
        <Link href="/projects" className={buttonVariants({ variant: "outline" })}>
          All projects <ArrowRight />
        </Link>
      </Reveal>

      <StickyStack
        items={projects.map((project, i) => (
          <ProjectFeature key={project.slug} project={project} index={i} />
        ))}
      />
    </section>
  );
}
