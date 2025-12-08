import HeroSection from "@/components/home/HeroSection";
import AdvancedSolutionsSection from "@/components/home/AdvancedSolutionsSection";
import ProductsOverviewSection from "@/components/home/ProductsOverviewSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import HowSensorsWorkSection from "@/components/home/HowSensorsWorkSection";
import TechnicalHighlightsSection from "@/components/home/TechnicalHighlightsSection";
import ResearchPartnersSection from "@/components/home/ResearchPartnersSection";
import CollaborateSection from "@/components/home/CollaborateSection";

export default function HomePage() {
  return (
    <>
      <HeroSection/>
      <AdvancedSolutionsSection />
      <ProductsOverviewSection />
      <WhyChooseSection />
      <HowSensorsWorkSection />
      <TechnicalHighlightsSection />
      <ResearchPartnersSection />
      <CollaborateSection />
    </>
  );
}
