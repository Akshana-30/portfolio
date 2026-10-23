import { skills } from "@/content";

// Every technical skill from the content, minus spoken languages.
const TECH = skills.filter((g) => g.group !== "Spoken languages").flatMap((g) => g.items);

/** Slightly tilted orange tape of tech names scrolling endlessly; pauses on hover. */
export function TechMarquee() {
  return (
    <div className="overflow-x-clip py-8">
      <div className="-mx-10 -rotate-2 bg-primary text-primary-foreground shadow-md">
        <div className="flex w-max animate-marquee gap-10 py-3 hover:paused">
          {[...TECH, ...TECH].map((tech, i) => (
            <span
              key={i}
              aria-hidden={i >= TECH.length}
              className="flex items-center gap-10 font-mono text-sm font-semibold tracking-wide uppercase"
            >
              {tech}
              <span>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
