import Image from "next/image";
import SectionWrapper from "@/components/common/SectionWrapper";

const technologySections = [
  {
    number: "01",
    title: "Vapor-Cell OPM Platforms",
    description: "Ultra-sensitive atomic magnetometry using laser-polarized alkali vapor in SERF and Mx operating regimes for biomagnetism, geophysics, and magnetic navigation",
    features: [
      {
        icon: "/images/technology/image 52.png",
        title: "SERF and Mx regimes",
        description: "SERF mode delivers picotesla sensitivity in shielded environments for biomagnetism, while Mx mode operates in Earth's field with active compensation for navigation on moving platforms."
      },
      {
        icon: "/images/technology/image 52-1.png",
        title: "Compact laser systems",
        description: "Integrated distributed-feedback and VCSEL sources with thermal stabilization eliminate bulky external lasers, enabling field-deployable sensor heads."
      },
      {
        icon: "/images/technology/image 52.png",
        title: "Coherence control",
        description: "Advanced pulse sequences and feedback loops maintain atomic coherence, suppressing noise and drift across varying environmental conditions."
      },
      {
        icon: "/images/technology/image 52.png",
        title: "Shielding approaches",
        description: "Modular magnetic shields, gradiometry configurations, and active nulling enable operation in high-noise environments without sacrificing sensitivity."
      }
    ],
    image: "/images/technology/image 79-2.png"
  },
  {
    number: "02",
    title: "NV-diamond platforms",
    description: "Solid-state quantum sensors leveraging nitrogen-vacancy color centers in diamond for wide dynamic range, vector magnetometry, and radiation-tolerant operation in space and extreme environments",
    features: [
      {
        icon: "/images/technology/image 52.png",
        title: "Defect engineering",
        description: "Controlled nitrogen and vacancy implantation with optimized annealing creates high-density, uniformly distributed NV centers in synthetic diamond."
      },
      {
        icon: "/images/technology/image 52.png",
        title: "Space-grade sensors",
        description: "Radiation tolerance validation, thermal cycling testing, and vacuum-compatible packaging designed for LEO, GEO, and lunar missions."
      },
      {
        icon: "/images/technology/image 52.png",
        title: "Vector readout",
        description: "Four crystallographic orientations of NV centers enable simultaneous three-axis magnetic field reconstruction from optically detected magnetic resonance (ODMR) spectra."
      }
    ],
    image: "/images/technology/image 79-1.png"
  },
  {
    number: "03",
    title: "Rydberg RF Platforms",
    description: "Atom-based electric-field sensors exploiting highly excited Rydberg states for passive RF detection, spectrum awareness, and electromagnetic interference mapping without traditional antennas.",
    features: [
      {
        icon: "/images/technology/image 52.png",
        title: "Atomic RF antennas",
        description: "Rydberg atoms in highly excited states act as self-calibrated antennas, eliminating metal conductors and enabling broadband RF reception from MHz to THz."
      },
      {
        icon: "/images/technology/image 52.png",
        title: "E-field calibration ",
        description: "Direct electric-field readout traceable to fundamental constants provides SI-unit calibration without external reference standards or periodic recalibration."
      }
    ],
    image: "/images/technology/image 79.png"
  },
  {
    number: "04",
    title: "Fusion stack",
    description: "Combining quantum sensors with classical IMUs, GNSS, and AI/ML filtering: QuBeats Fusion integrates quantum magnetometry with inertial sensors and satellite positioning, using machine-learning algorithms to suppress noise, compensate drift, and enable GPS-free navigation through magnetic map-matching.",
    features: []
  }
];

export default function TechnologyOverviewSection() {
  return (
    <SectionWrapper id="technology-overview" className="bg-[rgba(7,7,7,1)] pt-16 pb-20">
      {/* Section Title */}
      <h2 
        className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[53px] font-bold mb-8 sm:mb-12 md:mb-16 leading-[1.1] tracking-[-1px]"
        style={{
          fontFamily: '"Courier Prime", monospace',
          background: "linear-gradient(to bottom, #f3f3f3, #bdbdbd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}
      >
        Technology <span style={{ background: "linear-gradient(to right, #cb3f24, #be3b22)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Overview</span>
      </h2>

      {/* Technology Sections */}
      <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
        {technologySections.map((section, index) => (
          <div key={section.number} className="relative pl-8 sm:pl-12 md:pl-16 lg:pl-[60px]">
            {/* Number and Vertical Line */}
            <div className="absolute left-0 top-0 flex items-start h-full">
              <div className="flex flex-col items-center relative">
                <span 
                  className="text-sm sm:text-base md:text-[18px] font-bold text-white mb-2"
                  style={{ fontFamily: '"Courier Prime", monospace' }}
                >
                  {section.number}
                </span>
                {/* Horizontal line from number */}
                {/* Vertical line extending down */}
                <div className="w-[3px] sm:w-[4px] bg-[#ffffff] mt-[18px] sm:mt-[20px] md:mt-[22px] flex-1 min-h-[300px] sm:min-h-[350px] md:min-h-[400px]" />
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Text Content */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <h3 
                  className="text-lg sm:text-xl md:text-[23.65px] font-bold text-white tracking-[0.473px]"
                  style={{ fontFamily: '"Courier Prime", monospace' }}
                >
                  {section.title}
                </h3>
                
                <p 
                  className="text-sm sm:text-base md:text-[16.524px] text-[rgba(243,243,243,0.6)] leading-[1.3] tracking-[0.1652px]"
                  style={{ fontFamily: '"Courier Prime", monospace' }}
                >
                  {section.description}
                </p>

                {/* Feature Cards Grid */}
                {section.features.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {section.features.map((feature, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-[39.5px] h-[39.5px] bg-[#FF6B35] rounded flex items-center justify-center flex-shrink-0">
                            <Image
                              src={feature.icon}
                              alt={feature.title}
                              width={27.5}
                              height={27.5}
                              className="object-contain"
                            />
                          </div>
                          <h4 
                            className="text-[15.439px] font-bold text-white tracking-[0.3088px]"
                            style={{ fontFamily: '"Courier Prime", monospace' }}
                          >
                            {feature.title}
                          </h4>
                        </div>
                        <p 
                          className="text-[12.064px] text-[rgba(243,243,243,0.6)] leading-[14.864px] tracking-[0.1206px] pl-[52px]"
                          style={{ fontFamily: '"Courier Prime", monospace' }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column - Image */}
              {section.image && (
                <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[496px] bg-[#070707] rounded-lg overflow-hidden mt-6 lg:mt-0">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
