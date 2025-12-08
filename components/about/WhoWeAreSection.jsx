import SectionWrapper from "@/components/common/SectionWrapper";
import Image from "next/image";

export default function WhoWeAreSection() {
  return (
    <SectionWrapper id="who-we-are" className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-[rgba(11,11,11,1)]">
      <div className="flex flex-col ml-0 sm:ml-2 md:ml-4 max-w-8xl gap-4 sm:gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white lg:text-6xl">
          Who We <span className="text-[#cb3f24]">Are</span>
        </h1>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-12">
          <p className="max-w-[582px] text-base sm:text-lg leading-relaxed text-[rgba(255, 255, 255, 1)]" style={{ fontFamily: "Courier New", fontWeight: 400, letterSpacing: "-0.1em" }}>
            QuBeats is a quantum-sensing company building magnetometers and sensor arrays for resilient navigation, defense, space, georesource, and biomedical applications.
          </p>
          <p className="max-w-[582px] text-base sm:text-lg leading-relaxed text-[rgba(255, 255, 255, 1)]" style={{ fontFamily: "Courier New", fontWeight: 400, letterSpacing: "-0.1em" }}>
            We translate cutting-edge quantum physics into dependable, field-ready systems that perform in the world's most demanding environments.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}

