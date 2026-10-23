import type { Metadata } from "next";
import { CvHeader } from "@/components/cv/cv-header";
import { CvBullets, CvEntryHeader, CvPanel } from "@/components/cv/cv-parts";
import { PrintButton } from "@/components/cv/print-button";
import { Stagger } from "@/components/motion";
import { education, experience, profile, projects, skills } from "@/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "CV",
};

// Skill groups cycle through the brand colours, like the printed CV.
const CHIP_COLORS = [
  "border-primary/50 text-primary",
  "border-brand-2/60 text-brand-2",
  "border-brand-3/70 text-foreground",
];

export default function CvPage() {
  const cvProjects = projects.filter((project) => project.onCv);

  return (
    <div className="container-page py-10 print:h-[1350px] print:max-w-none print:[zoom:0.76] print:p-0 print:px-2">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <p className="text-sm text-muted-foreground">
          Tip: switch theme for a light or dark CV. Printing uses the theme you have on.
        </p>
        <PrintButton />
      </div>

      <Stagger
        onMount
        gap={0.08}
        className="grid gap-4 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] print:h-full print:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] print:grid-rows-[auto_auto_1fr_1fr_auto] print:gap-3"
      >
        <CvHeader />

        <CvPanel title="Experience" num="01" className="md:row-span-3 print:row-span-3">
          <div className="divide-y divide-dashed">
            {experience.map((job) => (
              <div
                key={job.company + job.role}
                className="break-inside-avoid py-4 first:pt-0 last:pb-0 print:py-2.5"
              >
                <CvEntryHeader
                  title={job.role}
                  period={job.period}
                  subtitle={`${job.company} · ${job.location}`}
                />
                <CvBullets items={job.points} />
              </div>
            ))}
          </div>
        </CvPanel>

        <CvPanel title="About" num="03" titleClassName="text-brand-2">
          <p className="text-sm leading-relaxed">{profile.shortSummary}</p>
        </CvPanel>

        <CvPanel title="Skills" num="04" className="md:row-span-2 print:row-span-2">
          <div className="space-y-3">
            {skills.map((group, i) => (
              <div key={group.group}>
                <p className="mb-1.5 text-xs text-muted-foreground">{group.group}</p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={cn(
                        "rounded-full border px-2.5 py-0.5 text-xs",
                        CHIP_COLORS[i % CHIP_COLORS.length],
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CvPanel>

        <CvPanel title="Projects" num="02" titleClassName="text-brand-2">
          {cvProjects.map((project) => (
            <div key={project.slug}>
              <CvEntryHeader
                title={project.title}
                period={project.period}
                subtitle={project.subtitle}
              />
              <CvBullets items={[project.description, ...project.highlights]} />
            </div>
          ))}
        </CvPanel>

        <CvPanel title="Education" num="05">
          <div className="space-y-4">
            {education.map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.school}</p>
                <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
              </div>
            ))}
          </div>
        </CvPanel>
      </Stagger>
    </div>
  );
}
