import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { profile } from "@/content";

/** Sticky heading on the left while the story scrolls past on the right. */
export function AboutSection() {
  return (
    <section id="about" className="container-page scroll-mt-20 py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <SectionHeading
            eyebrow="01 · About"
            title={
              <>
                Engineer turned <span className="text-primary">developer</span>.
              </>
            }
          />
        </div>

        <Reveal>
          <p className="text-xl leading-relaxed">{profile.summary}</p>
        </Reveal>
      </div>
    </section>
  );
}
