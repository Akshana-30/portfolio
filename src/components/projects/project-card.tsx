import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/motion";
import type { Project } from "@/types/content";
import { cn } from "@/lib/utils";
import { BrowserFrame } from "./browser-frame";
import { IndexWatermark } from "./index-watermark";
import { TechBadges } from "./tech-badges";

/** Grid card on /projects: screenshot peeking out of a gradient cover. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <SpotlightCard>
      <Link
        href={`/projects/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-shadow group-hover:shadow-md"
      >
        <div
          className={cn(
            "relative overflow-hidden bg-linear-to-br px-5 pt-12 sm:px-8",
            project.accent,
          )}
        >
          <IndexWatermark index={index} className="-right-4 -bottom-10 text-[9rem]" />
          <span className="absolute top-4 left-5 eyebrow text-white/85">{project.subtitle}</span>
          <BrowserFrame
            project={project}
            className="relative translate-y-4 rounded-b-none transition-transform duration-500 group-hover:translate-y-1"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <h2 className="flex items-center justify-between text-xl font-semibold">
            {project.title}
            <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          <TechBadges stack={project.stack} className="mt-auto pt-2" />
        </div>
      </Link>
    </SpotlightCard>
  );
}
