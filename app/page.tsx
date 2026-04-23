import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SpecialtiesSection from "../components/sections/SpecialtiesSection";
import MethodologySection from "../components/sections/MethodologySection";
import FaqSection from "../components/sections/FaqSection";
import EbookSection from "../components/sections/EbookSection";
import FloatingWhatsApp from "../components/ui/FloatingWhatsApp";
import CommunitySection from "../components/sections/CommunitySection";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <Header />
      
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <MethodologySection />
      <FaqSection /> {/* Adicione aqui */}
      <EbookSection />
      
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}