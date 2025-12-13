import Image from "next/image";
import SectionWrapper from "@/components/common/SectionWrapper";

const teamMembers = [
  {
    name: "Mallikarjun Karra",
    description:
      "Mallikarjun Karra is an entrepreneur and published theoretical physicist. His research at the Fritz Haber Institute of the Max Planck Society, Berlin, focused on controlling cold/ultracold polar molecules. He also worked on quantum computing architecture using trapped ultracold polar paramagnetic molecules, including schemes for optically controlled CNOT gates.",
    image: "/images/Screenshot 2025-12-08 134520.png",
    linkedin: "https://www.linkedin.com/in/mallikarjun-k-628ab417/",
  },
  {
    name: "Rajat Sethi",
    description:
      "Rajat Sethi is a technology strategist specializing in translating frontier quantum and laser-based sensing technologies into operational defense capabilities. He has an MPA from Harvard, an MBA from MIT Sloan, and a B.Tech (Computer Science) from IIT Kharagpur, focusing on systems architecture and strategic tech integration.",
    image: "/images/WhatsApp Image 2025-12-07 at 21.13.05_02a8a2e3.jpg",
    linkedin: "https://www.linkedin.com/in/sethirajat/",
  },
  {
    name: "Shouvik Mukherjee",
    description:
      "Dr. Shouvik Mukherjee is an expert in atomic vapor and solid-state quantum platforms, with skills in optics, electronics, and nanofabrication. He was a former Postdoctoral Scholar at the Joint Quantum Institute (NIST/UMD). He earned his Ph.D. in Experimental Condensed Matter Physics from the University of Pittsburgh and is an alumnus of IIT Kharagpur.",
    image: "/images/WhatsApp Image 2025-12-07 at 22.06.02_e7064b99.jpg",
    linkedin: "https://www.linkedin.com/in/shouvik-mukherjee-b35b3919/",
  },
  {
    name: "Madhu Trivikram Talluri",
    description:
      "Dr. Madhu Trivikram Talluri is an experimental physicist specializing in precision quantum measurements and ultrafast laser spectroscopy. He was a postdoctoral scholar at UC Berkeley/LBNL, developing advanced laser-based methods for light–matter interactions. He holds a Ph.D. from LaserLaB, Vrije Universiteit Amsterdam, for high-precision molecular spectroscopy that set stringent tests for quantum electrodynamics.",
    image: "/images/WhatsApp Image 2025-12-08 at 00.47.59_bee03dc1.jpg",
    linkedin: "https://www.linkedin.com/in/madhuttalluri/",
  },
];

export default function TeamExpertiseSection() {
  return (
    <SectionWrapper
      id="team-expertise"
      className="bg-[rgba(11,11,11,1)] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
    >
      {/* Container wrapper */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Main content container */}
        <div className="relative overflow-hidden bg-[rgba(7,7,7,0.95)] border border-white/10 rounded-sm ">
          {/* Background image */}
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <Image
              src="/images/about/bg-about.png"
              alt=""
              fill
              className="object-cover grayscale"
            />
          </div>

          {/* Content wrapper with padding */}
          <div className="relative z-10  pb-10 ">
            {/* Title section - responsive positioning */}
            <div className="mb-6 sm:mb-8 pl-8 md:mb-10 pt-10 lg:mb-12 bg-[#060606]">
              <h2
                className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-[53px] leading-tight sm:leading-[1.1] md:leading-[1.15] mb-2 sm:mb-3 md:mb-4"
                style={{
                  color: "rgba(255,255,255,1)",
                  fontFamily: '"Courier Prime", monospace',
                  fontWeight: 700,
                  letterSpacing: "0",
                }}
              >
                Founding{" "}
                <span style={{ color: "#cb3f24" }}>Team</span>
              </h2>
              <p
                className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-[1.6] md:leading-[1.7] max-w-full sm:max-w-2xl md:max-w-3xl"
                style={{
                  color: "rgba(243,243,243,0.9)",
                  fontFamily: '"Courier Prime", monospace',
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                The team spans atomic physics, low-noise photonics, precision
                electronics, and AI/ML fusion, with a focus on translating quantum
                effects into dependable field systems for critical missions.
              </p>
            </div>

            {/* Team members grid - responsive layout */}
            <div className="grid grid-cols-1  px-8 lg:px-16 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="relative border border-white/10 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-7 shadow-[0px_4px_20px_0px_rgba(189,189,189,0.15)] flex flex-col hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-300"
                >
                  {/* Small grey accent box at top-right */}
                  <div className="absolute z-10 right-0 top-0 h-12 sm:h-14 md:h-16 w-20 sm:w-24 md:w-28 bg-[rgba(192,192,192,0.3)]" />

                  {/* Image container - responsive sizing */}
                  <div className="relative mb-4 sm:mb-5 md:mb-6 flex-shrink-0">
                    <div className="relative h-32 w-28 sm:h-36 sm:w-32 md:h-40 md:w-36 lg:h-44 lg:w-40 xl:h-48 xl:w-44 aspect-square items-center justify-center bg-[rgba(192,192,192,1)] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, (max-width: 1024px) 160px, 176px"
                      />
                    </div>
                  </div>

                  {/* Name and LinkedIn */}
                  <div className="mb-3 sm:mb-4 flex items-start sm:items-center gap-2 sm:gap-3 flex-wrap">
                    <h3
                      className="text-base sm:text-lg md:text-xl lg:text-[22.05px] leading-tight sm:leading-[26px] md:leading-[28px] lg:leading-[30px] flex-1 min-w-0"
                      style={{
                        color: "rgba(255,255,255,1)",
                        fontFamily: '"Courier Prime", monospace',
                        fontWeight: 700,
                        letterSpacing: "0",
                      }}
                    >
                      {member.name}
                    </h3>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0"
                        aria-label={`${member.name} LinkedIn profile`}
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Description text */}
                  <p
                    className="text-xs sm:text-sm md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[1.5] sm:leading-[1.6] md:leading-[1.7] flex-1"
                    style={{
                      color: "rgba(243,243,243,0.75)",
                      fontFamily: '"Courier Prime", monospace',
                      fontWeight: 400,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {member.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
