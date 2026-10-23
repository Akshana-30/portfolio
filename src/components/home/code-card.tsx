"use client";

import { motion } from "motion/react";
import { WindowDots } from "@/components/shared/window-dots";
import { profile } from "@/content";

type Token = [className: string, text: string];

const STRING = "text-brand-2";
const KEYWORD = "text-primary";

const LINES: { indent: number; tokens: Token[] }[] = [
  {
    indent: 0,
    tokens: [
      [KEYWORD, "const "],
      ["text-brand-3", "developer"],
      ["", " = {"],
    ],
  },
  {
    indent: 1,
    tokens: [
      ["", "name: "],
      [STRING, `"${profile.firstName}"`],
      ["", ","],
    ],
  },
  {
    indent: 1,
    tokens: [
      ["", "role: "],
      [STRING, `"${profile.role}"`],
      ["", ","],
    ],
  },
  {
    indent: 1,
    tokens: [
      ["", "based: "],
      [STRING, `"${profile.location}"`],
      ["", ","],
    ],
  },
  {
    indent: 1,
    tokens: [
      ["", "stack: ["],
      [STRING, `"TS", "React", "Next.js"`],
      ["", ","],
    ],
  },
  {
    indent: 2,
    tokens: [
      [STRING, `"Node.js", "Prisma", "PostgreSQL"`],
      ["", "],"],
    ],
  },
  {
    indent: 1,
    tokens: [
      ["", "background: "],
      [STRING, `"Automobile Eng."`],
      ["", ","],
    ],
  },
  {
    indent: 1,
    tokens: [
      ["", "openToWork: "],
      [KEYWORD, "true"],
      ["", ","],
    ],
  },
  { indent: 0, tokens: [["", "};"]] },
];

/** Floating editor window that "types" out a short profile object. */
export function CodeCard() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-4 rounded-3xl bg-linear-to-br from-primary/40 via-brand-3/30 to-brand-2/30 blur-2xl"
      />
      <div className="relative animate-float overflow-hidden rounded-2xl border bg-card/90 shadow-md backdrop-blur">
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <WindowDots />
          <span className="font-mono text-xs text-muted-foreground">developer.ts</span>
        </div>

        <pre className="overflow-hidden p-4 font-mono text-[11px] leading-6 sm:p-5 sm:text-[13px] sm:leading-7">
          {LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.12 }}
              style={{ paddingLeft: `${line.indent * 1.25}rem` }}
            >
              <span className="mr-4 inline-block w-4 text-right text-muted-foreground/50 select-none">
                {i + 1}
              </span>
              {line.tokens.map(([className, text], j) => (
                <span key={j} className={className}>
                  {text}
                </span>
              ))}
              {i === LINES.length - 1 && (
                <motion.span
                  aria-hidden
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-primary"
                />
              )}
            </motion.div>
          ))}
        </pre>
      </div>
    </div>
  );
}
