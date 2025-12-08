import WhoWeAreSection from "@/components/about/WhoWeAreSection";
import TeamExpertiseSection from "@/components/about/TeamExpertiseSection";
import MissionSection from "@/components/about/MissionSection";
import PartnerWithUsSection from "@/components/about/PartnerWithUsSection";
import IndiaGlobalFocusSection from "@/components/about/IndiaGlobalFocusSection";

export const metadata = {
  title: "About QuBeats | Quantum Sensing Team & Mission",
  description:
    "Meet the QuBeats quantum sensing team. Learn about our mission, global presence, and how we partner with organizations to deploy quantum intelligence.",
};

export default function AboutPage() {
  return (
    <>
      <WhoWeAreSection />
      <TeamExpertiseSection />
      <IndiaGlobalFocusSection />
      <MissionSection />
      <PartnerWithUsSection />
    </>
  );
}

