import IntroHeroSection from "@/components/technology/IntroHeroSection";
import TechnologyOverviewSection from "@/components/technology/TechnologyOverviewSection";
import VaporCellOPMSection from "@/components/technology/VaporCellOPMSection";
import NVDiamondPlatformsSection from "@/components/technology/NVDiamondPlatformsSection";
import RydbergRFPlatformsSection from "@/components/technology/RydbergRFPlatformsSection";
import FusionStackSection from "@/components/technology/FusionStackSection";

export const metadata = {
  title: "Quantum Technology | QuBeats FusionStack™",
  description:
    "Dive into the QuBeats FusionStack™ architecture spanning vapor-cell OPM, NV diamond platforms, Rydberg RF sensing, and mission-ready orchestration.",
};

export default function TechnologyPage() {
  return (
    <>
      <IntroHeroSection />
      <TechnologyOverviewSection />
    </>
  );
}

