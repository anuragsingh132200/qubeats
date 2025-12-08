import Image from "next/image";
import SectionWrapper from "@/components/common/SectionWrapper";

const features = [
  {
    icon: "/images/technology/image 52.png",
    title: "Heading",
    detail:
      "Paragraph",
  },
  {
    icon: "/images/technology/image 52-1.png",
    title: "Heading",
    detail:
      "Paragraph",
  },
  {
    icon: "/images/technology/image 52-2.png",
    title: "Heading",
    detail:
      "Paragraph",
  },
  {
    icon: "/images/technology/image 52.png",
    title: "Heading",
    detail:
      "Paragraph",
  },
];

export default function FusionStackSection() {
  return (
    <SectionWrapper id="fusion-stack" className="relative">
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
            <div className="text-2xl font-bold text-white mb-4">04</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Fusion stack
            </h2>
            <p className="text-base text-slate-300 mb-8 max-w-xl">
              Combining quantum sensors with classical INS, GNSS, and AI/ML filtering: QuBeats Fusion integrates quantum magnetometry with inertial sensors and satellite positioning, using machine-learning algorithms to suppress noise, compensate drift, and enable GPS-free navigation through magnetic map-matching.
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
      </div>
    </SectionWrapper>
  );
}

