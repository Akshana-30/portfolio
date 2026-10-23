import { StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

/** Rounded bento tile with a coloured title and a mono section number. */
export function CvPanel({
  title,
  num,
  className,
  titleClassName = "text-primary",
  children,
}: {
  title: string;
  num: string;
  className?: string;
  titleClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <StaggerItem
      className={cn("rounded-3xl border bg-card p-6 sm:p-7 print:rounded-xl print:p-4", className)}
    >
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className={cn("text-xl font-semibold", titleClassName)}>{title}</h2>
        <span className="font-mono text-xs text-muted-foreground">{num}</span>
      </div>
      {children}
    </StaggerItem>
  );
}

/** Role/project heading row: title on the left, mono date on the right. */
export function CvEntryHeader({
  title,
  period,
  subtitle,
}: {
  title: string;
  period?: string;
  subtitle: string;
}) {
  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-semibold">{title}</h3>
        {period && <span className="font-mono text-xs text-muted-foreground">{period}</span>}
      </div>
      <p className="text-sm text-primary">{subtitle}</p>
    </>
  );
}

export function CvBullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5 text-sm">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="mt-1.5 size-2 shrink-0 rounded-full border-2 border-brand-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
