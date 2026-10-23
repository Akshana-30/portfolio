import { cn } from "@/lib/utils";

/**
 * Soft, slowly morphing colour glow. Position, size and colour come from `className`;
 * `delay` offsets the animation (in seconds) so neighbouring blobs don't move in sync.
 */
export function Blob({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute animate-blob rounded-full blur-3xl", className)}
      style={delay ? { animationDelay: `-${delay}s` } : undefined}
    />
  );
}
