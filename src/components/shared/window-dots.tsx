import { cn } from "@/lib/utils";

/** Red / amber / green "traffic light" dots for fake window chrome. */
export function WindowDots({ className }: { className?: string }) {
  return (
    <span className={cn("flex gap-1.5 *:size-2.5 *:rounded-full", className)}>
      <span className="bg-red-400" />
      <span className="bg-amber-400" />
      <span className="bg-emerald-400" />
    </span>
  );
}
