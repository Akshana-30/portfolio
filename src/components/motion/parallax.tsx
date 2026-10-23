"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/** Moves its children vertically at a different rate than the page scroll. */
export function Parallax({
  children,
  className,
  offset = 80,
}: {
  children: React.ReactNode;
  className?: string;
  /** Pixels travelled while the element crosses the viewport. Negative moves against the scroll. */
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
