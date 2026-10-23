import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Code } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { BrowserFrame } from "@/components/projects/browser-frame";
import { IndexWatermark } from "@/components/projects/index-watermark";
import { TechBadges } from "@/components/projects/tech-badges";
import { ExternalLink } from "@/components/shared/external-link";
import { projects } from "@/content";
import { padIndex } from "@/lib/format";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: project.title, description: project.description } : {};
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="eyebrow text-primary">{label}</dt>
      <dd className="mt-1.5">{children}</dd>
    </div>
  );
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      {/* Cover: title over the project gradient, screenshot overlapping the fold */}
      <header className={cn("relative bg-linear-to-br text-white", project.accent)}>
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <Parallax offset={-120} className="absolute top-24 -right-8 select-none">
            <IndexWatermark index={index} className="static text-[16rem] sm:text-[22rem]" />
          </Parallax>
        </div>

        <div className="relative container-page pt-16 pb-12 sm:pt-24">
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-1.5 text-sm text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" /> All projects
          </Link>
          <Stagger onMount gap={0.1}>
            <StaggerItem>
              <p className="eyebrow text-white/80">{project.subtitle}</p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-7xl">
                {project.title}
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 max-w-2xl text-lg text-white/90">{project.description}</p>
            </StaggerItem>
          </Stagger>
        </div>

        <div className="relative container-page">
          <Reveal delay={0.4}>
            <Parallax offset={30}>
              <BrowserFrame
                project={project}
                priority
                sizes="(min-width: 1024px) 64rem, 100vw"
                className="-mb-24 sm:-mb-40"
              />
            </Parallax>
          </Reveal>
        </div>
      </header>
      <div aria-hidden className="h-28 sm:h-44" />

      {/* Body: sticky facts sidebar + highlights */}
      <div className="container-page grid gap-12 pb-20 md:grid-cols-[16rem_1fr]">
        <aside className="space-y-6 md:sticky md:top-24 md:self-start">
          <dl className="space-y-5 text-sm">
            <Fact label="Role">{project.role}</Fact>
            {project.period && <Fact label="When">{project.period}</Fact>}
            <Fact label="Stack">
              <TechBadges stack={project.stack} />
            </Fact>
          </dl>
          <div className="flex flex-col gap-2">
            {project.live && (
              <ExternalLink href={project.live} className={buttonVariants()}>
                Visit live site <ArrowUpRight />
              </ExternalLink>
            )}
            {project.repo && (
              <ExternalLink href={project.repo} className={buttonVariants({ variant: "outline" })}>
                <Code /> Source code
              </ExternalLink>
            )}
          </div>
        </aside>

        <div>
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">What I did</h2>
          </Reveal>
          <ol className="mt-8 space-y-4">
            {project.highlights.map((highlight, i) => (
              <Reveal key={highlight} delay={i * 0.08}>
                <li className="flex gap-5 rounded-xl border bg-card p-5 transition-colors hover:border-primary">
                  <span className="font-mono text-2xl font-bold text-brand-2">{padIndex(i)}</span>
                  <p className="leading-relaxed">{highlight}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>

      {/* Next project */}
      <Link
        href={`/projects/${next.slug}`}
        className={cn("group block bg-linear-to-br text-white", next.accent)}
      >
        <div className="container-page flex items-center justify-between gap-4 py-14">
          <div>
            <p className="eyebrow text-white/80">Next project</p>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">{next.title}</p>
          </div>
          <ArrowRight className="size-10 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </Link>
    </article>
  );
}
