import Image from "next/image";
import SectionWrapper from "@/components/common/SectionWrapper";

const features = [
  {
    icon: "/images/technology/image 52.png",
    title: "ZEMF and Mx regimes",
    detail:
      "ZEMF mode delivers picoTesla sensitivity in shielded environments for biomagnetism, while Mx mode operates in Earth's field with active compensation for navigation on mobile platforms.",
  },
  {
    icon: "/images/technology/image 52-1.png",
    title: "Coherence control",
    detail:
      "Miniature OPMs implement fast feedback loops to maintain atomic coherence, suppressing noise and drift across varying environmental conditions.",
  },
  {
    icon: "/images/technology/image 52-2.png",
    title: "Compact laser systems",
    detail:
      "Integrated distributed feedback DFB lasers ensure sub-thermal stabilization, flicker-free cavity-enhanced lasers, enabling field-deployable sensor heads.",
  },
  {
    icon: "/images/technology/image 52.png",
    title: "Shielding approaches",
    detail:
      "Modular magnetic shields, multi-cavity configurations, and active nulling enable operation in high-noise environments without sacrificing sensitivity.",
  },
];

export default function VaporCellOPMSection() {
  return (
    <SectionWrapper
      id="vapor-cell-opm"
      className="bg-[#050505]"
      containerClassName="relative flex flex-col lg:flex-row gap-16 lg:items-center"
    >
      {/* Left slide frame line (L-shape) */}
      <div className="pointer-events-none absolute inset-y-6 -left-8 hidden md:flex flex-col items-start">
        <div className="h-full w-px bg-white/40" />
        <div className="h-px w-10 bg-white/40" />
      </div>

      {/* Left: text content */}
      <div className="flex-1 max-w-xl relative z-10">
        {/* 01 label */}
        <div className="mb-8">
          <span className="font-mono text-sm tracking-[0.3em] text-slate-200">
            01
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-mono text-[28px] md:text-[32px] font-semibold tracking-[0.18em] text-white mb-6 uppercase">
          Vapor-Cell OPM Platform
        </h2>

        {/* Intro copy */}
        <p className="font-mono text-[13px] leading-relaxed text-slate-200 mb-12 max-w-xl">
          Ultra-sensitive atomic magnetometry using laser-polarized alkali vapor
          in ZEMF and Mx operating regimes for biomagnetism, geophysics, and
          magnetic navigation.
        </p>

        {/* Feature grid – 2 × 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-mono text-sm md:text-[15px] font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-mono text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-slate-300">
                    {feature.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: illustration */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-xl lg:max-w-[480px]">
          <Image
            src="/images/technology/image 79.png"
            alt="Vapor-Cell OPM Platform"
            width={489}
            height={496}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
