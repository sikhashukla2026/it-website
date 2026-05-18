import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/common/AnimatedBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { AiAutomationSection } from "@/components/sections/AiAutomationSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollProgress } from "@/components/common/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="relative flex-1">
        <AnimatedBackground />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <AiAutomationSection />
        <PortfolioSection />
        <ProcessSection />
        <TechStackSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
