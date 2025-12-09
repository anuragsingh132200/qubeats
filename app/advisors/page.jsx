import SectionWrapper from "@/components/common/SectionWrapper";

const advisoryTracks = [
  {
    title: "Strategic & Policy Guidance",
    description:
      "Seasoned leaders who shape national security, public policy, and mission planning for quantum technologies.",
    accent: {
      badge: "bg-[#cb3f24]/20 text-[#cb3f24]",
      ring: "ring-1 ring-[#cb3f24]/60",
    },
  },
  {
    title: "Scientific & Technical Advisors",
    description:
      "Frontier researchers steering our roadmap on atomic physics, quantum sensing, photonics, and field-grade systems.",
    accent: {
      badge: "bg-[rgba(189,189,189,0.18)] text-white/90",
      ring: "ring-1 ring-[rgba(189,189,189,0.45)]",
    },
  },
  {
    title: "Operational & Industry Council",
    description:
      "Mission veterans who translate advanced sensing into deployable solutions for defence, energy, aerospace, and healthcare.",
    accent: {
      badge:
        "bg-[linear-gradient(135deg,#cb3f24_0%,#be3b22_100%)] text-white",
      ring: "ring-1 ring-white/20",
    },
  },
];

const advisorPlaceholders = [
  {
    name: "Advisor Placeholder One",
    title: "Quantum Strategy & Policy",
    track: "Strategic & Policy Guidance",
  },
  {
    name: "Advisor Placeholder Two",
    title: "Atomic Sensors & Metrology",
    track: "Scientific & Technical Advisors",
  },
  {
    name: "Advisor Placeholder Three",
    title: "Aerospace Deployment Lead",
    track: "Operational & Industry Council",
  },
  {
    name: "Advisor Placeholder Four",
    title: "Defence Systems Specialist",
    track: "Operational & Industry Council",
  },
  {
    name: "Advisor Placeholder Five",
    title: "Photonics & NV Centres",
    track: "Scientific & Technical Advisors",
  },
];

const trackStylingMap = {
  "Strategic & Policy Guidance": {
    text: "text-[#cb3f24]",
    dot: "bg-[#cb3f24]",
    chip: "bg-[#cb3f24]/15 text-[#cb3f24]",
  },
  "Scientific & Technical Advisors": {
    text: "text-white/90",
    dot: "bg-[rgba(189,189,189,0.85)]",
    chip: "bg-[rgba(189,189,189,0.18)] text-white/85",
  },
  "Operational & Industry Council": {
    text: "text-white",
    dot: "bg-white/80",
    chip: "bg-[linear-gradient(135deg,#cb3f24_0%,#be3b22_100%)] text-white",
  },
};

export const metadata = {
  title: "Advisory Council | QuBeats",
  description:
    "Explore the strategic, scientific, and mission-focused advisors guiding QuBeats in building quantum sensing systems.",
};

export default function AdvisorsPage() {
  return (
    <>
      <SectionWrapper
        id="advisors-hero"
        className="overflow-hidden bg-[rgba(11,11,11,1)] pt-28 sm:pt-32 lg:pt-36"
        containerClassName="relative z-10 gap-10 sm:gap-12"
      >
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <div className="absolute inset-0 bg-[url('/images/home/bg-pattern-2.png')] bg-cover bg-center" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(11,11,11,0)_0%,rgba(11,11,11,1)_100%)]" />
        </div>

        <div className="relative flex flex-col gap-5 sm:gap-6 md:gap-8 max-w-4xl">
          <p
            className="uppercase tracking-[0.25em]"
            style={{
              color: "rgba(243,243,243,0.75)",
              fontFamily: "'Courier New', monospace",
              fontSize: "15px",
            }}
          >
            ADVISORY COUNCIL
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.05] font-bold"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          >
            Guiding{" "}
            <span className="bg-[linear-gradient(90deg,#CB3F24_0%,#BE3B22_100%)] bg-clip-text text-transparent">
              Quantum Missions
            </span>{" "}
            with Strategic Insight
          </h1>
          <p
            className="max-w-2xl text-base sm:text-lg"
            style={{
              color: "rgba(243,243,243,0.85)",
              fontFamily: "'Courier New', monospace",
              lineHeight: "1.6",
            }}
          >
            Our advisory network is taking shape with experts across strategy,
            deep-tech research, and mission deployment. This space previews the
            pillars that will steer QuBeats as the council is formalised.
          </p>
        </div>

        <div className="relative flex flex-wrap gap-4 sm:gap-6">
          {advisoryTracks.map((track) => (
            <span
              key={track.title}
              className={`inline-flex items-center rounded-full px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] ${track.accent.badge}`}
              style={{
                fontFamily: "'Courier New', monospace",
              }}
            >
              {track.title}
            </span>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="advisory-tracks"
        className="bg-[rgba(7,7,7,1)]"
        containerClassName="relative gap-10"
      >
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {advisoryTracks.map((track) => (
            <article
              key={track.title}
              className={`group relative overflow-hidden border border-white/10 bg-[rgba(18,18,18,0.9)] p-6 sm:p-7 md:p-8 transition-transform duration-300 hover:-translate-y-1 ${track.accent.ring}`}
            >
              <div className="relative flex flex-col gap-3">
                <p
                  className="uppercase text-xs tracking-[0.2em]"
                  style={{
                    color: "rgba(243,243,243,0.65)",
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  Advisory Stream
                </p>
                <h2
                  className="text-2xl sm:text-[26px] font-bold"
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontFamily: "'Courier Prime', monospace",
                    lineHeight: "1.2",
                  }}
                >
                  {track.title}
                </h2>
                <p
                  className="text-sm sm:text-base"
                  style={{
                    color: "rgba(243,243,243,0.8)",
                    fontFamily: "'Courier New', monospace",
                    lineHeight: "1.5",
                  }}
                >
                  {track.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-[rgba(18,18,18,0.95)] p-6 sm:p-8 md:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 opacity-40" />
          <div className="relative grid gap-4 sm:gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3
                className="text-2xl sm:text-3xl font-semibold"
                style={{
                  color: "rgba(255,255,255,0.92)",
                  fontFamily: "'Courier Prime', monospace",
                }}
              >
                Council Formation In Progress
              </h3>
              <p
                className="text-sm sm:text-base"
                style={{
                  color: "rgba(243,243,243,0.8)",
                  fontFamily: "'Courier New', monospace",
                  lineHeight: "1.5",
                }}
              >
                We are finalising an advisory council that spans research labs,
                mission planners, and industry pioneers. Expect detailed
                biographies, areas of focus, and engagement models as we confirm
                each seat.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 rounded-xl border border-[#cb3f24]/50 bg-[#cb3f24]/5 p-5">
              <p
                className="uppercase text-xs tracking-[0.22em]"
                style={{
                  color: "#cb3f24",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                INTERESTED IN ADVISING?
              </p>
              <p
                className="text-sm sm:text-base"
                style={{
                  color: "rgba(243,243,243,0.85)",
                  fontFamily: "'Courier New', monospace",
                  lineHeight: "1.5",
                }}
              >
                Drop us a note via{" "}
                <a
                  href="/contact"
                  className="underline decoration-[#cb3f24]/60 underline-offset-4 hover:text-white"
                >
                  the contact page
                </a>{" "}
                to explore how you can contribute to the mission.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="advisor-roster"
        className="bg-[rgba(11,11,11,1)] pb-24"
        containerClassName="gap-8 sm:gap-10"
      >
        <div className="flex flex-col gap-3 sm:gap-4">
          <p
            className="uppercase text-xs tracking-[0.2em]"
            style={{
              color: "rgba(243,243,243,0.6)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            DUMMY ROSTER
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold"
            style={{
              color: "rgba(255,255,255,0.92)",
              fontFamily: "'Courier Prime', monospace",
            }}
          >
            Early Advisory Placeholders
          </h2>
          <p
            className="max-w-3xl text-sm sm:text-base"
            style={{
              color: "rgba(243,243,243,0.8)",
              fontFamily: "'Courier New', monospace",
              lineHeight: "1.5",
            }}
          >
            Placeholder profiles illustrate the multi-disciplinary composition
            we are targeting. Each track will be updated with confirmed
            biographies as appointments go live.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5">
          {advisorPlaceholders.map((advisor) => {
            const styling = trackStylingMap[advisor.track];

            return (
              <div
                key={advisor.name}
                className="flex flex-col gap-3 rounded-xl border border-white/10 bg-[rgba(18,18,18,0.92)] p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span
                    className={`mt-1 inline-flex h-3 w-3 shrink-0 rounded-full ${styling.dot}`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-lg sm:text-xl font-semibold"
                      style={{
                        fontFamily: "'Courier Prime', monospace",
                        color: "rgba(255,255,255,0.92)",
                      }}
                    >
                      {advisor.name}
                    </h3>
                    <p
                      className="text-sm sm:text-base"
                      style={{
                        color: "rgba(243,243,243,0.8)",
                        fontFamily: "'Courier New', monospace",
                        lineHeight: "1.5",
                      }}
                    >
                      {advisor.title}
                    </p>
                  </div>
                </div>
                <span
                  className={`inline-flex w-fit items-center rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] ${styling.chip}`}
                  style={{
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {advisor.track}
                </span>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
}


