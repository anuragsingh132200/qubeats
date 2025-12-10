import Image from "next/image";
import SectionWrapper from "@/components/common/SectionWrapper";

const teamMembers = [
  {
    name: "Madhu Trivikram Talluri",
    description:
      "Madhu Trivikram Talluri has worked as a postdoctoral researcher at Lawrence Berkeley National Laboratory. He earned his Ph.D. in precision quantum measurements from LaserLaB, Vrije University, Amsterdam. An accomplished experimental physicist, he brings extensive experience in building world-class laboratories from the ground up.",
    image: "/images/WhatsApp Image 2025-12-08 at 00.47.59_bee03dc1.jpg",
    linkedin: "https://www.linkedin.com/in/madhuttalluri/",
  },
  {
    name: "Mallikarjun Karra",
    description:
      "Mallikarjun Karra is an entrepreneur and a published theoretical physicist. His research at the Fritz Haber Institute of the Max Planck Society, Berlin, was focused on understanding and controlling cold and ultracold polar, polarisable molecules — either in trapped arrays or doped into superfluid helium nanodroplets. He has previously worked on quantum computing with molecules, proposing an architecture for universal quantum computation based on arrays of trapped ultracold polar paramagnetic molecules, including schemes for optically controlled CNOT gates and field-tunable entanglement.",
    image: "/images/Screenshot 2025-12-08 134520.png",
    linkedin: "https://www.linkedin.com/in/mallikarjun-k-628ab417/",
  },
  {
    name: "Rajat Sethi",
    description:
      "Rajat Sethi has worked as a technocrat and a public intellectual, having served as an Advisor to three Chief Ministers. He has also worked on various Govt of India Committees on tech policy and economic planning. Rajat is a public policy graduate from Harvard Kennedy School, management graduate from MIT Sloan School and a computer science grad from IIT Kharagpur (2009).",
    image: "/images/WhatsApp Image 2025-12-07 at 21.13.05_02a8a2e3.jpg",
    linkedin: "https://www.linkedin.com/in/sethirajat/",
  },
  {
    name: "Shouvik Mukherjee",
    description:
      "Dr. Shouvik Mukherjee combines deep expertise in atomic vapor and solid-state quantum platforms with a command of complex optics, precision electronics, nanofabrication, and ultrahigh vacuum technology. A former Postdoctoral Scholar at the prestigious Joint Quantum Institute (NIST/University of Maryland), he conducted advanced research on Bose-Einstein condensates and analogue cosmology. He earned his Ph.D. in Experimental Condensed Matter Physics from the University of Pittsburgh, pioneering work on exciton-polariton transport in semiconductor microcavities, and is an alumnus of IIT Kharagpur.",
    image: "/images/WhatsApp Image 2025-12-07 at 22.06.02_e7064b99.jpg",
    linkedin: "https://www.linkedin.com/feed/",
  },
];

export default function TeamExpertiseSection() {
  return (
    <SectionWrapper
      id="team-expertise"
      className="bg-[rgba(11,11,11,1)] py-20 pt-12 sm:py-24"
    >

      {/* Whole framed block */}
      <div className="relative w-full max-w-8xl">
        {/* Background panel that holds the 4 cards */}
        <div className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 overflow-hidden border border-white/10 bg-[rgba(7,7,7,0.95)] px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-10 md:pb-14 pt-12 sm:pt-16 md:pt-20 lg:pt-24">
          {/* Background image placeholder inside which the 4 boxes sit */}
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/images/about/bg-about.png"
              alt=""
              fill
              className="object-cover opacity-100 grayscale"
            />
          </div>

          {/* 2 x 2 grid of team members */}
          <div className="relative mt-8 sm:mt-12 md:mt-16 grid gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-6 sm:gap-y-8 md:gap-y-10 md:grid-cols-2 items-start">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="relative border border-white/10 max-w-[550px] bg-[rgba(255,255,255,0.1)] p-6 shadow-[0px_4px_20px_0px_rgba(189,189,189,0.15)] flex flex-col"
              >
                {/* Small grey box at top-right of each image box */}
                <div className="absolute z-10 right-0 top-0 h-[60px] w-[109px] bg-[rgba(192,192,192,0.3)]" />

                {/* Image container within image box */}
                <div className="relative left-0 mb-6 flex h-[190px] w-1/2 aspect-square items-center justify-center bg-[rgba(192,192,192,1)] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Heading inside image box with LinkedIn button */}
                <div className="mb-3 flex items-center gap-3">
                  <h3
                    style={{
                      color: "rgba(255,255,255,1)",
                      fontFamily: '"Courier Prime", monospace',
                      fontWeight: 700,
                      fontSize: "22.05px",
                      lineHeight: "30px",
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
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Smaller content inside image box */}
                <p
                  className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight flex-1 overflow-hidden"
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
        {/* Top black title bar overlapping the background panel */}
      <div className="absolute left-0 top-0 bg-[rgba(11,11,11,1)] px-4 sm:px-6 md:px-8 py-2 pb-4 sm:pb-6 w-full sm:w-4/5 md:w-2/3">
        <h2
          className="mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-[53px] leading-[1.1]"
          style={{
            color: "rgba(255,255,255,1)",
            fontFamily: '"Courier Prime", monospace',
            fontWeight: 700,
            letterSpacing: "0",
          }}
        >
          Founding{" "}
          <span style={{ color: "#cb3f24" }}>
            Team
          </span>
        </h2>
        <p
          className="max-w-xl text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight"
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
      </div>
    </SectionWrapper>
  );
}
