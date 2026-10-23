import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function TechBadges({ stack, className }: { stack: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {stack.map((tech) => (
        <Badge key={tech} variant="secondary">
          {tech}
        </Badge>
      ))}
    </div>
  );
}
