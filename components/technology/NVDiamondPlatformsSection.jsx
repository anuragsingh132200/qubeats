import Image from "next/image";
import SectionWrapper from "@/components/common/SectionWrapper";

const features = [
  {
    icon: "/images/technology/image 52.png",
    title: "Refact engineering",
    detail:
      "Controlled nitrogen and vacancy implantation and optimized annealing ensure high-density, uniformly distributed NV centers in synthetic diamond.",
  },
  {
    icon: "/images/technology/image 52-1.png",
    title: "Vector readout",
    detail:
      "Four crystallographic orientations of NV centers enable applications where spin-magnetic field measurements from optically detected magnetic resonance (ODMR) spectra.",
  },
  {
    icon: "/images/technology/image 52-2.png",
    title: "Space-grade sensors",
    detail:
      "Radiation-tolerant validation, thermal cycling testing, and radiation-compatible packaging designed for LEO, GEO, and lunar missions.",
  },
];

export default function NVDiamondPlatformsSection() {
  return (
    <SectionWrapper id="nv-diamond" className="relative">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left side - Content with Timeline */}
        <div className="flex-1 relative">
          {/* Timeline */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/20">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#CB3F24]" />
          </div>
          <div className="absolute left-[-2px] top-0 w-6 h-1 bg-[#CB3F24]" />
          
          {/* Content */}
          <div className="pl-12">
            <div className="text-2xl font-bold text-white mb-4">02</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px] text-white mb-6">
              NV-diamond platforms
            </h2>
            <p className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-slate-300 mb-8 max-w-xl">
              Solid-state quantum sensors leveraging nitrogen-vacancy color centers in diamond for wide dynamic range, vector magnetometry, and radiation-tolerant operation in space and extreme environments.
            </p>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-slate-300">
                        {feature.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <Image
              src="/images/technology/image 79-1.png"
              alt="NV-diamond Platform"
              width={489}
              height={502}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

