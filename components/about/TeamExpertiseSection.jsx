import Image from "next/image";
import SectionWrapper from "@/components/common/SectionWrapper";

const teamMembers = [
  {
    name: "Madhu Trivikram Talluri",
    description:
      "Madhu Trivikram Talluri is a postdoc at UC Berkeley and a researcher at the Lawrence Berkeley National Laboratory, having earned his doctorate at Vrije University, Amsterdam. An experienced Experimental Physicist, he brings to table his ability to lead the setting up of a world-class laboratory from scratch.",
    image: "/images/WhatsApp Image 2025-12-08 at 00.47.59_bee03dc1.jpg",
  },
  {
    name: "Mallikarjun Karra",
    description:
      "Mallikarjun Karra is an entrepreneur, a published theoretical Physicist, and a graduating PhD candidate at the Fritz Haber Institute of the Max Planck Society, Berlin. His specialty lies in the understanding of manipulation of cold and ultra cold polar polarisable molecules in trapped arrays or doped into superfluid helium nanodroplets.",
    image: "/images/Screenshot 2025-12-08 134520.png",
  },
  {
    name: "Rajat Sethi",
    description:
      "Rajat Sethi has worked as a technocrat and a public intellectual, having served as an Advisor to three Chief Ministers. He has also worked on various Govt of India Committees on tech policy and economic planning. Rajat is a public policy graduate from Harvard Kennedy School, management graduate from MIT Sloan School and a computer science grad from IIT Kharagpur (2009).",
    image: "/images/WhatsApp Image 2025-12-07 at 21.13.05_02a8a2e3.jpg",
  },
  {
    name: "Shouvik Mukherjee",
    description:
      "Shouvik Mukherjee is a postdoc at the Joint Quantum Institute, University of Maryland and specialises in the trapping and probing of ultracold atomic gases. He holds a PhD in experimental Condensed Matter Physics from the University of Pittsburgh, having worked on the dynamics of a polariton Bose Einstein Condensate (BEC) in a ring geometry. At QuBeats Shouvik will lead the efforts to build compact and robust quantum sensing devices from platforms such as atomic vapour cells, atom-chip interferometry, and Nitrogen Vacancy centre in Diamonds.",
    image: "/images/WhatsApp Image 2025-12-07 at 22.06.02_e7064b99.jpg",
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
              className="object-cover opacity-100"
            />
          </div>

          {/* 2 x 2 grid of team members */}
          <div className="relative mt-8 sm:mt-12 md:mt-16 grid gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-6 sm:gap-y-8 md:gap-y-10 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="relative border border-white/10 max-w-[550px] max-h-[560px] bg-[rgba(255,255,255,0.1)] p-6 shadow-[0px_4px_20px_0px_rgba(189,189,189,0.15)]"
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

                {/* Heading inside image box */}
                <h3
                  className="mb-3"
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

                {/* Smaller content inside image box */}
                <p
                  style={{
                    color: "rgba(243,243,243,0.75)",
                    fontFamily: '"Courier Prime", monospace',
                    fontWeight: 400,
                    fontSize: "15.71px",
                    lineHeight: "21.6px",
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
          className="max-w-xl text-sm sm:text-base"
          style={{
            color: "rgba(243,243,243,0.9)",
            fontFamily: '"Courier Prime", monospace',
            fontWeight: 400,
            lineHeight: "1.5",
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
