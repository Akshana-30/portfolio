import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, SpotlightCard, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { skills } from "@/content";

export function SkillsSection() {
  return (
    <section id="skills" className="container-page scroll-mt-20 py-24">
      <Reveal className="mb-10">
        <SectionHeading eyebrow="04 · Skills" title="Toolbox" />
      </Reveal>

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <StaggerItem key={group.group}>
            <SpotlightCard>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-sm">{group.group}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="transition-colors hover:border-primary hover:text-primary"
                    >
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
