import Image from "next/image";
import SectionWrapper from "@/components/common/SectionWrapper";

const features = [
  {
    icon: "/images/technology/image 52.png",
    title: "Atomic RF antennas",
    detail:
      "Rydberg atoms in highly excited states act as self-calibrated antennas, eliminating metalic cavities and enabling broadband RF reception from MHz to THz.",
  },
  {
    icon: "/images/technology/image 52-1.png",
    title: "E-field calibration concepts",
    detail:
      "Direct electric-field readout traceable to fundamental constants provides SI-unit calibration without external reference standards or periodic recalibration.",
  },
];

export default function RydbergRFPlatformsSection() {
  return (
    <SectionWrapper id="rydberg-rf" className="relative">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left side - Content with Timeline */}
        <div className="flex-1 relative">
          {/* Timeline */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/20">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#FF6B35]" />
          </div>
          <div className="absolute left-[-2px] top-0 w-6 h-1 bg-[#FF6B35]" />
          
          {/* Content */}
          <div className="pl-12">
            <div className="text-2xl font-bold text-white mb-4">03</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Rydberg RF Platforms
            </h2>
            <p className="text-base text-slate-300 mb-8 max-w-xl">
              Atom-based electric-field sensors exploiting highly excited Rydberg states for passive RF detection, spectrum awareness, and electromagnetic interference mapping without traditional antennas.
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
                      <p className="text-sm text-slate-300 leading-relaxed">
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
              src="/images/technology/image 79-2.png"
              alt="Rydberg RF Platform"
              width={469}
              height={482}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

