import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SpecialtiesSection from "../components/sections/SpecialtiesSection";
import MethodologySection from "../components/sections/MethodologySection";
import FaqSection from "../components/sections/FaqSection";
import EbookSection from "../components/sections/EbookSection";
import CommunitySection from "../components/sections/CommunitySection";
import FloatingWhatsApp from "../components/ui/FloatingWhatsApp";
import ParallaxBackground from "../components/ui/ParallaxBackground";
import FallingLeaves from "../components/ui/FallingLeaves";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <Header />
      <ParallaxBackground />
      <FallingLeaves />

      <div className="relative z-10 flex flex-col w-full bg-transparent">
        <HeroSection />
        <AboutSection />
        <SpecialtiesSection />
        <MethodologySection />
        <FaqSection /> 
        <EbookSection />
        <CommunitySection />
        <Footer />
      </div>
      
      <FloatingWhatsApp />
    </main>
  );
}