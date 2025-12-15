import SectionWrapper from "@/components/common/SectionWrapper";
import Image from "next/image";

const advisors = [
  {
    name: "Adm Karambir Singh (Retd)",
    title: "Former Chief of Naval Staff, PVSM, AVSM, ADC",
    image: "/images/advisors/Screenshot 2025-12-10 101626.png",
  },
  {
    name: "Vice Admiral Shekhar Sinha (Retd)",
    title: "PVSM, AVSM, NM & Bar, ADC",
    image: "/images/advisors/image.png",
  },
  {
    name: "R Adm Surendra Ahuja (Retd)",
    title: "Navy Test Pilot & ex-MD, Boeing Defense India",
    image: "/images/advisors/Screenshot 2025-12-10 101553.png",
  },
  {
    name: "Prof. M Krishnamurthy",
    title: "Director, TIFR Hyderabad",
    image: "/images/advisors/Screenshot 2025-12-10 101510.png",
  },
  {
    name: "Dr. G Rajalakshmi",
    title: "Senior Scientist, TIFR Hyderabad",
    image: "/images/advisors/Screenshot 2025-12-10 101529.png",
  },
  {
    name: "Rahul Bhasin",
    title: "Managing Partner, Barings PE India",
    image: "/images/advisors/Screenshot 2025-12-10 101711.png",
  },
];

export const metadata = {
  title: "Advisory Council | QuBeats",
  description:
    "Explore the strategic, scientific, and mission-focused advisors guiding QuBeats in building quantum sensing systems.",
};

export default function AdvisorsPage() {
  return (
    <SectionWrapper
      id="advisors"
      className="bg-[rgba(11,11,11,1)] pt-28 sm:pt-32 lg:pt-36 pb-24"
      containerClassName="gap-8 sm:gap-10"
    >
      <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 mt-30">
        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:gap-5 ml-4 sm:ml-8 md:ml-12 lg:ml-32 max-w-5xl mb-30">
          
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px]"
            style={{
              color: "rgba(255,255,255,0.92)",
              fontFamily: "'Courier Prime', monospace",
            }}
          >
            Our{" "}
            <span style={{ color: "#CB3F24" }}>Advisors</span>
          </h1>
          <p
            className="text-sm sm:text-base max-w-2xl leading-relaxed"
            style={{
              fontFamily: '"Courier New", monospace',
                    fontWeight: 400,
                    color: "rgba(243, 243, 243, 0.9)",
            }}
          >
            Strategic, scientific, and mission-focused advisors guiding QuBeats in building quantum sensing systems.
          </p>
        </div>

        {/* Advisors Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-5 sm:gap-6 p-5 sm:p-6 max-w-[320px] mx-auto w-full border border-white/10 bg-[rgba(18,18,18,0.9)] rounded-lg 
                         transition-all duration-300 ease-out
                         hover:border-white/20 hover:bg-[rgba(18,18,18,0.95)] 
                         hover:shadow-[0px_8px_32px_0px_rgba(0,0,0,0.4)]
                         hover:-translate-y-1"
            >
              {/* Decorative accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CB3F24]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Image Container with enhanced styling */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto aspect-square overflow-hidden rounded-lg 
                            border-2 border-white/5 group-hover:border-white/15
                            transition-all duration-300
                            shadow-[0px_4px_16px_0px_rgba(0,0,0,0.3)]
                            group-hover:shadow-[0px_8px_24px_0px_rgba(203,63,36,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#CB3F24]/0 via-transparent to-[#CB3F24]/0 
                              group-hover:from-[#CB3F24]/10 group-hover:via-transparent group-hover:to-[#CB3F24]/10
                              transition-all duration-300 z-10" />
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 160px, 192px"
                />
              </div>
              
              {/* Content Section */}
              <div className="flex flex-col gap-3 text-center">
                <h3
                  className="text-xl sm:text-2xl font-semibold leading-tight transition-colors duration-300
                           group-hover:text-white"
                  style={{
                    color: "rgba(255,255,255,0.92)",
                    fontFamily: "'Courier Prime', monospace",
                  }}
                >
                  {advisor.name}
                </h3>
                <div className="h-[1px] w-12 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent 
                              group-hover:via-[#CB3F24]/50 transition-all duration-300" />
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{
                     fontFamily: '"Courier New", monospace',
                    fontWeight: 400,
                    color: "rgba(243, 243, 243, 0.9)",
                  }}
                >
                  {advisor.title}
                </p>
              </div>

              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#CB3F24]/0 to-[#CB3F24]/0 
                            group-hover:from-[#CB3F24]/5 group-hover:to-transparent
                            transition-all duration-300 pointer-events-none -z-0" />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}


