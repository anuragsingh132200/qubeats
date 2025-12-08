import Image from "next/image";
import SectionWrapper from "@/components/common/SectionWrapper";

const phases = [
  {
    phase: "Navigation & PNT",
    details:
      "Magnetic map-matching and drift-free dead-reckoning for GNSS-contested or spoofed operations.",
  },
  {
    phase: "Defense & Security",
    details:
      "Maritime anomaly detection, UXO search, tunnel and void finding, and RF sensing in demanding environments.",
  },
  {
    phase: "Space",
    details:
      "Constellation-class magnetometry, space weather monitoring, and on-orbit diagnostics with radiation-tolerant designs.",
  },
  {
    phase: "Georesource & Civil",
    details:
      "Mineral exploration, subsurface mapping, and structural health monitoring using high-sensitivity quantum field sensors.",
  },
  {
    phase: "Biomedical",
    details:
      "Wearable OPM–MEG and MCG platforms for brain and cardiac mapping in research and clinical translation.",
  },
];

export default function HowSensorsWorkSection() {
  return (
      <div className="relative overflow-hidden bg-[rgba(18,18,18,1)] py-12 sm:py-16 md:py-20">
        {/* Background placeholder image */}
        <div className="pointer-events-none absolute inset-0 h-3/4 opacity-90">
          <Image
            src="/images/home/bg-pattern-2.png"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-10 lg:px-16">
          {/* Top heading block */}
          <header className="space-y-4">
            <p
              className="text-xl uppercase text-slate-200/80 font-['Courier_Prime']"
              style={{
                fontSize: "24px",
                lineHeight: "26px",
                letterSpacing: "0.02em",
              }}
            >
              APPLICATIONS
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-['Courier_Prime']"
            >
              <span className="text-[rgba(243,243,243,1)]">Where our sensors </span>
              <span className="bg-[linear-gradient(90deg,#CB3F24_0%,#BE3B22_100%)] font-weight-700 bg-clip-text text-transparent">
                Operate
              </span>
            </h2>
          </header>

          {/* Cards layout – 3 on top, 2 on bottom (like the design) */}
          <div className="space-y-8 sm:space-y-10">
            <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-3">
              {phases.slice(0, 3).map((phase) => (
                <article key={phase.phase} className="space-y-3">
                  {/* Subheading with left gradient bar */}
                  <div className="flex">
                    <div className="h-auto w-[4.5px] bg-[linear-gradient(90deg,#CB3F24_0%,#BE3B22_100%)]" />
                    <div
                      className="flex-1 px-4 py-3"
                      style={{
                        color: "rgba(243, 243, 243, 1)",
                        fontFamily: '"Courier Prime", monospace',
                        fontWeight: 700,
                        fontSize: "clamp(18px, 3vw, 25.09px)",
                        lineHeight: "100%",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {phase.phase}
                    </div>
                  </div>

                  {/* Small content block */}
                  <div
                    className="px-4 py-3"
                    style={{
                      color: "rgba(243, 243, 243, 0.62)",
                      fontFamily: '"Courier Prime", monospace',
                      fontWeight: 400,
                      fontSize: "clamp(14px, 2.5vw, 17.24px)",
                      lineHeight: "1.15",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {phase.details}
                  </div>
                </article>
              ))}
            </div>

            <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 md:pl-0 lg:pl-[8%]">
              {phases.slice(3).map((phase) => (
                <article key={phase.phase} className="space-y-3">
                  {/* Subheading with left gradient bar */}
                  <div className="flex">
                    <div className="h-auto w-[4.5px] bg-[linear-gradient(90deg,#CB3F24_0%,#BE3B22_100%)]" />
                    <div
                      className="flex-1 px-4 py-3"
                      style={{
                        color: "rgba(243, 243, 243, 1)",
                        fontFamily: '"Courier Prime", monospace',
                        fontWeight: 700,
                        fontSize: "clamp(18px, 3vw, 25.09px)",
                        lineHeight: "100%",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {phase.phase}
                    </div>
                  </div>

                  {/* Small content block */}
                  <div
                    className="px-4 py-3"
                    style={{
                      color: "rgba(243, 243, 243, 0.62)",
                      fontFamily: '"Courier Prime", monospace',
                      fontWeight: 400,
                      fontSize: "clamp(14px, 2.5vw, 17.24px)",
                      lineHeight: "1.15",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {phase.details}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center">
            <button
              type="button"
              className="text-base"
              style={{
                color: "rgba(193, 61, 35, 1)",
                fontFamily: '"Courier Prime", monospace',
                fontWeight: 700,
                letterSpacing: "0.07em",
              }}
            >
              <span className="text-[rgba(193, 61, 35, 1)]">
                Explore all applications →
              </span>
            </button>
          </div>
        </div>
      </div>
  );
}
