import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { JourneySection } from "@/components/home/journey-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsSection } from "@/components/home/skills-section";
import { TechMarquee } from "@/components/home/tech-marquee";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <ProjectsSection />
      <JourneySection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
