"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin bar along the top of the viewport showing how far down the page you are. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-primary print:hidden"
      style={{ scaleX }}
    />
  );
}
