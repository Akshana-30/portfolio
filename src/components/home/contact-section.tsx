import { ArrowUpRight, Code, Mail, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { Blob } from "@/components/shared/blob";
import { ExternalLink } from "@/components/shared/external-link";
import { NudgeArrow } from "@/components/shared/nudge-arrow";
import { SectionHeading } from "@/components/shared/section-heading";
import { profile } from "@/content";
import { telHref } from "@/lib/format";
import { cn } from "@/lib/utils";

const linkClass = "flex items-center gap-2 transition-opacity hover:opacity-75";

/** Bold primary-coloured card with the call to action and every contact route. */
export function ContactSection() {
  return (
    <section id="contact" className="container-page scroll-mt-20 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground sm:p-12">
          <Blob className="-top-16 -right-16 size-72 bg-brand-3/50" />
          <Blob className="-bottom-24 -left-10 size-72 bg-brand-2/50" delay={8} />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-md">
              <SectionHeading inverted eyebrow="05 · Contact" title="Let's work together" />
              <p className="mt-4 text-lg text-primary-foreground/85">
                Available from <span className="font-semibold">November 2026</span> for full stack
                roles in Sweden.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "group/cta mt-6",
                )}
              >
                <Mail />
                Say hello
                <NudgeArrow />
              </a>
            </div>

            <div className="flex min-w-0 flex-col gap-3 text-sm">
              <a href={`mailto:${profile.email}`} className={linkClass}>
                <Mail className="size-4 shrink-0" />
                <span className="break-all">{profile.email}</span>
              </a>
              <a href={telHref(profile.phone)} className={linkClass}>
                <Phone className="size-4" /> {profile.phone}
              </a>
              <span className="flex items-center gap-2 text-primary-foreground/85">
                <MapPin className="size-4" /> {profile.location}
              </span>
              <ExternalLink href={profile.linkedin} className={linkClass}>
                <ArrowUpRight className="size-4" /> LinkedIn
              </ExternalLink>
              <ExternalLink href={profile.github} className={linkClass}>
                <Code className="size-4" /> GitHub
              </ExternalLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
