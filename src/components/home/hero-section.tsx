"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, RotatingWords, Stagger, StaggerItem } from "@/components/motion";
import { Blob } from "@/components/shared/blob";
import { NudgeArrow } from "@/components/shared/nudge-arrow";
import { profile } from "@/content";
import { cn } from "@/lib/utils";
import { CodeCard } from "./code-card";

const ROTATING_WORDS = [
  "full stack web apps.",
  "clean, usable UIs.",
  "multilingual products.",
  "APIs & databases.",
  "things that ship.",
];

/** Background layers drift at different speeds while the content lifts and fades on scroll. */
export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const slowY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fastY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      {/* Parallax backdrop. The blobs sit inside motion layers because their own CSS
          animation also uses `transform`, which would override the parallax offset. */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div style={{ y: gridY }} className="absolute inset-0 bg-dots mask-fade-radial" />
        <motion.div style={{ y: slowY }} className="absolute inset-0">
          <Blob className="-top-24 left-1/10 size-96 bg-primary/30" />
          <Blob className="bottom-0 left-2/5 size-72 bg-brand-3/30" delay={12} />
        </motion.div>
        <motion.div style={{ y: fastY }} className="absolute inset-0">
          <Blob className="top-40 right-1/20 size-80 bg-brand-2/25" delay={6} />
        </motion.div>
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="container-page grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 md:grid-cols-[1.3fr_1fr]"
      >
        <Stagger onMount gap={0.12}>
          <StaggerItem>
            <Badge
              variant="outline"
              className="mb-6 h-auto gap-2 bg-background/60 py-1 whitespace-normal backdrop-blur"
            >
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </Badge>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="animate-gradient text-brand-gradient">{profile.firstName}</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 text-xl font-medium text-muted-foreground sm:text-3xl">
              I build <RotatingWords className="text-foreground" words={ROTATING_WORDS} />
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              {profile.role} with an engineering background, working with {profile.tagline}, Node.js
              and PostgreSQL. Based in {profile.location}.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/projects" className={cn(buttonVariants({ size: "lg" }), "group/cta")}>
                See my work
                <NudgeArrow />
              </Link>
              <Link
                href="/cv"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "bg-background/60 backdrop-blur",
                )}
              >
                <FileText />
                View CV
              </Link>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.3}>
          <motion.div style={{ y: cardY }}>
            <CodeCard />
          </motion.div>
        </Reveal>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted-foreground md:block"
      >
        <ArrowDown />
      </a>
    </section>
  );
}
