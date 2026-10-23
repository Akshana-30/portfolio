import { MapPin } from "lucide-react";
import { HorizontalScroll } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { journey } from "@/content";
import { padIndex } from "@/lib/format";

/** Pinned section whose timeline cards slide sideways as you scroll. */
export function JourneySection() {
  return (
    <section id="journey" className="scroll-mt-16">
      <HorizontalScroll
        header={
          <SectionHeading
            eyebrow="03 · Journey"
            title={
              <>
                From axles to <span className="text-primary">APIs</span>
              </>
            }
          />
        }
      >
        {journey.map((step, i) => (
          <div
            key={step.title}
            className="group relative w-64 shrink-0 overflow-hidden rounded-2xl border bg-card p-6 transition-colors hover:border-primary sm:w-80"
          >
            <span className="block origin-left text-brand-gradient font-mono text-6xl font-bold transition-transform duration-500 group-hover:scale-110">
              {step.year}
            </span>
            <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.org}</p>
            <p className="mt-4 flex items-center gap-1.5 eyebrow text-primary">
              <MapPin className="size-3" /> {step.place}
            </p>
            <span
              aria-hidden
              className="absolute top-6 right-6 font-mono text-xs text-muted-foreground"
            >
              {padIndex(i)}
            </span>
          </div>
        ))}
      </HorizontalScroll>
    </section>
  );
}
