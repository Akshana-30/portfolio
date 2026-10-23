"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

const OFFSCREEN = -200;

/** Hover lift plus a glow that follows the cursor. Children can react with `group-hover:`. */
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(OFFSCREEN);
  const y = useMotionValue(OFFSCREEN);
  const background = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, color-mix(in oklch, var(--primary) 18%, transparent), transparent 70%)`;

  return (
    <motion.div
      className={cn("group relative h-full rounded-xl", className)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }}
      onMouseLeave={() => {
        x.set(OFFSCREEN);
        y.set(OFFSCREEN);
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </motion.div>
  );
}
