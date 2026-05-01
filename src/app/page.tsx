export const revalidate = 30

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BioSection from "@/components/BioSection";
import PhotoBanner from "@/components/PhotoBanner";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import FooterSection from "@/components/FooterSection";
import {
  getPortfolio,
  getServices,
  getTestimonials,
  getNewsPosts,
  type SanityPortfolio,
  type SanityService,
  type SanityTestimonial,
  type SanityNewsPost,
} from "@/sanity/queries";

// Fallback content — shown when Sanity has no documents yet
const FALLBACK_PORTFOLIO: SanityPortfolio[] = [
  { title: "Surfers Paradise", slug: "surfers-paradise", tags: ["Social Media", "Photography"], imageUrl: "/projects/surfers-paradise.png" },
  { title: "Cyberpunk Caffe", slug: "cyberpunk-caffe", tags: ["Brand Identity", "Photography"], imageUrl: "/projects/cyberpunk-caffe.png" },
  { title: "Agency 976", slug: "agency-976", tags: ["Brand Identity", "Web Design"], imageUrl: "/projects/agency-976.png" },
  { title: "Minimal Playground", slug: "minimal-playground", tags: ["Editorial", "Typography"], imageUrl: "/projects/minimal-playground.png" },
];

const FALLBACK_SERVICES: SanityService[] = [
  { number: "[ 1 ]", name: "Brand Discovery", description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", imageUrl: "/services/brand-discovery.png" },
  { number: "[ 2 ]", name: "Web design & Dev", description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", imageUrl: "/services/web-design.png" },
  { number: "[ 3 ]", name: "Marketing", description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", imageUrl: "/services/marketing.png" },
  { number: "[ 4 ]", name: "Photography", description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", imageUrl: "/services/photography.png" },
];

const FALLBACK_TESTIMONIALS: SanityTestimonial[] = [
  { logoUrl: "/testimonials/logo-lukas.svg", logoWidth: 138, logoHeight: 19, quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.", author: "Lukas Weber", desktopLeft: "46.94vw", desktopTop: 272, desktopRotate: 2.9, desktopBehind: true, mobileOrder: 3, mobileRotate: 2.9 },
  { logoUrl: "/testimonials/logo-marko.svg", logoWidth: 143, logoHeight: 19, quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.", author: "Marko Stojković", desktopLeft: "7.08vw", desktopTop: 142, desktopRotate: -6.85, desktopBehind: false, mobileOrder: 1, mobileRotate: -3.5 },
  { logoUrl: "/testimonials/logo-sarah.svg", logoWidth: 109, logoHeight: 31, quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.", author: "Sarah Jenkins", desktopLeft: "21.18vw", desktopTop: 553, desktopRotate: 2.23, desktopBehind: false, mobileOrder: 4, mobileRotate: -2.23 },
  { logoUrl: "/testimonials/logo-sofia.svg", logoWidth: 81, logoHeight: 36, quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.", author: "Sofia Martínez", desktopLeft: "68.54vw", desktopTop: 546, desktopRotate: -4.15, desktopBehind: false, mobileOrder: 2, mobileRotate: 2 },
];

const FALLBACK_NEWS: SanityNewsPost[] = [
  { imageUrl: "/news/news-1.jpg", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", href: "#" },
  { imageUrl: "/news/news-2.jpg", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", href: "#" },
  { imageUrl: "/news/news-3.jpg", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", href: "#" },
];

export default async function Home() {
  const [portfolio, services, testimonials, newsPosts] = await Promise.all([
    getPortfolio(),
    getServices(),
    getTestimonials(),
    getNewsPosts(),
  ]);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BioSection />
      <PhotoBanner />
      <ServicesSection services={services.length ? services : FALLBACK_SERVICES} />
      <ProjectsSection projects={portfolio.length ? portfolio : FALLBACK_PORTFOLIO} />
      <TestimonialsSection testimonials={testimonials.length ? testimonials : FALLBACK_TESTIMONIALS} />
      <NewsSection posts={newsPosts.length ? newsPosts : FALLBACK_NEWS} />
      <FooterSection />
    </main>
  );
}
