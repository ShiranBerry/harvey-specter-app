import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BioSection from "@/components/BioSection";
import PhotoBanner from "@/components/PhotoBanner";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BioSection />
      <PhotoBanner />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <NewsSection />
      <FooterSection />
    </main>
  );
}
