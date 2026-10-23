import { cn } from "@/lib/utils";

/** "LE" monogram on the brand gradient. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-9 place-items-center rounded-xl bg-brand-2 font-mono text-sm font-bold text-brand-3 shadow-sm",
        className,
      )}
    >
      LE
    </span>
  );
}
