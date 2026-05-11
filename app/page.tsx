import { SmoothScrollEnhancer } from "@/components/ui/smooth-scroll";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { EducationSection } from "@/sections/education-section";
import { FooterSection } from "@/sections/footer-section";
import { HeroSection } from "@/sections/hero-section";
import { InternshipSection } from "@/sections/internship-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#05080f]">
      <SmoothScrollEnhancer />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <InternshipSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
