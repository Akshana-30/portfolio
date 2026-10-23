import Image from "next/image";
import { WindowDots } from "@/components/shared/window-dots";
import type { Project } from "@/types/content";
import { stripProtocol } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Landing-page screenshot inside a little browser window, or a gradient placeholder. */
export function BrowserFrame({
  project,
  className,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority,
}: {
  project: Project;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border bg-card shadow-md", className)}>
      <div className="flex items-center gap-2 border-b bg-muted/60 px-3 py-2">
        <WindowDots className="*:size-2" />
        <span className="truncate rounded bg-background/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          {project.live ? stripProtocol(project.live) : project.title}
        </span>
      </div>

      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} landing page`}
          width={1440}
          height={900}
          sizes={sizes}
          priority={priority}
          className="aspect-16/10 w-full object-cover object-top"
        />
      ) : (
        <div className={cn("grid aspect-16/10 place-items-center bg-linear-to-br", project.accent)}>
          <span className="text-2xl font-bold text-white sm:text-3xl">{project.title}</span>
        </div>
      )}
    </div>
  );
}
