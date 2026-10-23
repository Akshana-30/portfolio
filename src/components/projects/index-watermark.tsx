import { padIndex } from "@/lib/format";
import { cn } from "@/lib/utils";

/** Huge translucent "01" behind a project cover. Size and position come from `className`. */
export function IndexWatermark({ index, className }: { index: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute font-mono leading-none font-bold text-white/15 select-none",
        className,
      )}
    >
      {padIndex(index)}
    </span>
  );
}
