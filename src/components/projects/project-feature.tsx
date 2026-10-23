import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink } from "@/components/shared/external-link";
import { NudgeArrow } from "@/components/shared/nudge-arrow";
import type { Project } from "@/types/content";
import { cn } from "@/lib/utils";
import { BrowserFrame } from "./browser-frame";
import { IndexWatermark } from "./index-watermark";
import { TechBadges } from "./tech-badges";

/** Large two-column card used in the sticky project stack on the home page. */
export function ProjectFeature({ project, index }: { project: Project; index: number }) {
  return (
    <article className="grid overflow-hidden rounded-2xl border bg-card shadow-sm md:grid-cols-[1.2fr_1fr]">
      {/* Cover */}
      <div
        className={cn(
          "relative flex flex-col justify-between gap-4 overflow-hidden bg-linear-to-br p-4 text-white sm:gap-6 sm:p-8",
          project.accent,
        )}
      >
        <IndexWatermark index={index} className="-right-6 -bottom-14 text-[9rem] sm:text-[12rem]" />
        <div className="relative">
          <span className="eyebrow text-white/80">{project.subtitle}</span>
          <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl">{project.title}</h3>
        </div>
        <BrowserFrame
          project={project}
          className="relative -rotate-1 transition-transform duration-500 hover:scale-102 hover:rotate-0"
        />
      </div>

      {/* Details: trimmed on phones so the whole card fits on screen while it's pinned */}
      <div className="flex flex-col gap-3 p-4 sm:gap-5 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
          <span>{project.role}</span>
          {project.period && <span className="font-mono text-xs">{project.period}</span>}
        </div>
        <p className="line-clamp-3 text-sm leading-relaxed sm:line-clamp-none sm:text-base">
          {project.description}
        </p>
        <ul className="hidden space-y-2 text-sm text-muted-foreground sm:block">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-2" />
              {highlight}
            </li>
          ))}
        </ul>
        <TechBadges stack={project.stack} className="hidden sm:flex" />
        <div className="mt-auto flex flex-wrap gap-2 sm:pt-2">
          <Link href={`/projects/${project.slug}`} className={cn(buttonVariants(), "group/cta")}>
            Case study
            <NudgeArrow />
          </Link>
          {project.live && (
            <ExternalLink href={project.live} className={buttonVariants({ variant: "outline" })}>
              Visit site
              <ArrowUpRight />
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}
