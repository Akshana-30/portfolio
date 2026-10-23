"use client";

import { motion, type Variants } from "motion/react";
import { EASE_OUT } from "./easing";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: EASE_OUT } },
};

const inView = { whileInView: "show", viewport: { once: true, margin: "-80px" } } as const;

type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Fades and slides its children in once they scroll into view. */
export function Reveal({ children, className, delay = 0 }: Props & { delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      transition={{ delay }}
      {...inView}
    >
      {children}
    </motion.div>
  );
}

/** Staggers its <StaggerItem> children in, on scroll or straight away with `onMount`. */
export function Stagger({
  children,
  className,
  gap = 0.08,
  onMount = false,
}: Props & { gap?: number; onMount?: boolean }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
      {...(onMount ? { animate: "show" } : inView)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: Props) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
