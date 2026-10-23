"use client";

import { MotionConfig } from "motion/react";

/** Turns off transform animations for visitors who prefer reduced motion. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
