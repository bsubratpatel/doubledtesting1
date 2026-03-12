import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeServeSection from "@/components/WhatWeServeSection";
import ReviewsSection from "@/components/ReviewsSection";
import VisitUsSection from "@/components/VisitUsSection";
import FinalCTASection from "@/components/FinalCTASection";
import CafeFooter from "@/components/CafeFooter";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";

const Index = () => {
  useScrollAnimations();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhatWeServeSection />
      <ReviewsSection />
      <VisitUsSection />
      <FinalCTASection />
      <CafeFooter />
    </div>
  );
};

export default Index;
