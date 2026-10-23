import { ArrowRight } from "lucide-react";

/** Right arrow that slides forward when its `group/cta` parent is hovered. */
export function NudgeArrow() {
  return <ArrowRight className="transition-transform group-hover/cta:translate-x-1" />;
}
