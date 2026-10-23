import { cn } from "@/lib/utils";

/** Mono "01 · About" label + big title used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  className,
  as: Heading = "h2",
  inverted = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
  /** For use on a solid primary-coloured background. */
  inverted?: boolean;
}) {
  return (
    <div className={className}>
      <p className={cn("mb-2 eyebrow", inverted ? "text-brand-3" : "text-primary")}>{eyebrow}</p>
      <Heading
        className={cn(
          "font-semibold tracking-tight",
          Heading === "h1" ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl",
        )}
      >
        {title}
      </Heading>
    </div>
  );
}
