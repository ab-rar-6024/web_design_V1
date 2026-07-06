import HeroScroll from "@/components/HeroScroll";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import HomeStats from "@/components/HomeStats";
import CertificationsSection from "@/components/CertificationsSection";
import VoiceOfTrust from "@/components/VoiceOfTrust";
import ClientLogos from "@/components/ClientLogos";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* 1. Scroll-driven canvas frame sequence with hero text */}
      <HeroScroll />

      {/* 2. Shop section — product showcase with CTA to /products */}
      <FeaturedProducts />

      {/* 3. About APM + Business Divisions + Key Strengths */}
      <AboutSection />

      {/* 4. Global impact statistics */}
      <HomeStats />

      {/* 5. Certifications */}
      <CertificationsSection />

      {/* 6. Testimonials slider */}
      <VoiceOfTrust />

      {/* 7. Client logos */}
      <ClientLogos />

      {/* 8. FAQ accordions */}
      <FaqSection />
    </div>
  );
}
