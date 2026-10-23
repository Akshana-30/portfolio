"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const SCALE_STEP = 0.05;
const DIM_STEP = 0.15;

function StackCard({
  children,
  index,
  total,
  progress,
}: {
  children: React.ReactNode;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Each card shrinks and dims a little as later cards slide over it.
  const cardsAbove = total - 1 - index;
  const range = [index / total, 1];
  const scale = useTransform(progress, range, [1, 1 - cardsAbove * SCALE_STEP]);
  const dim = useTransform(progress, range, [0, cardsAbove * DIM_STEP]);

  return (
    <div className="sticky top-20 flex h-[88svh] items-start justify-center md:top-28 md:h-[85vh]">
      <motion.div
        // Each card peeks out a little further below the one before it.
        style={{ scale, top: `calc(${index} * var(--stack-offset))` }}
        className="relative w-full origin-top"
      >
        {children}
        <motion.div
          aria-hidden
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 rounded-2xl bg-background"
        />
      </motion.div>
    </div>
  );
}

/**
 * Cards that pin in place and stack on top of each other while scrolling.
 * Cards must fit in roughly 80% of the viewport height to pin cleanly.
 */
export function StickyStack({ items }: { items: React.ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div
      ref={ref}
      className="relative [--stack-offset:--spacing(3)] md:[--stack-offset:--spacing(7)]"
    >
      {items.map((item, i) => (
        <StackCard key={i} index={i} total={items.length} progress={scrollYProgress}>
          {item}
        </StackCard>
      ))}
    </div>
  );
}
