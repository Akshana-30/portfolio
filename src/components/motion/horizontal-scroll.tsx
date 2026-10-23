"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Pins a full-height panel and slides its track sideways as the page scrolls down.
 * The slide distance is measured from the track, so it works at any screen width.
 */
export function HorizontalScroll({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <div ref={sectionRef} className="relative h-[250vh] md:h-[300vh]">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="container-page w-full">{header}</div>
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="mt-10 flex w-max gap-4 pr-8 pl-gutter md:mt-12 md:gap-6 md:pr-24"
        >
          {children}
        </motion.div>
        <div className="container-page mt-10 h-1 w-full md:mt-12">
          <div className="h-full overflow-hidden rounded-full bg-muted">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full origin-left bg-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
