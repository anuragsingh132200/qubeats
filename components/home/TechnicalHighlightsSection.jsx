import Image from "next/image";

const bullets = [
  "pT–fT sensitivity class (application-dependent) with vector and gradient operating modes.",
  "Low-SWaP modules with configurable baselines for full-tensor gradiometry.",
  "Real-time interference mitigation and hard-iron/soft-iron compensation for deployed platforms.",
  "Turn-key calibration flows and SDKs for C++/Python/ROS-based integration.",
  "Roadmap for radiation tolerance and thermal cycling across space and maritime environments.",
];

export default function TechnicalHighlightsSection() {
  return (
    <section
      id="technical-highlights"
      className="relative overflow-hidden bg-[rgba(18,18,18,1)] px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-14 md:py-16 lg:py-20"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-90 h-3/4"
      >
        <Image
          src="/images/home/bg-pattern-2.png"
          alt=""
          fill
          priority
          className="object-cover opacity-90"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-8xl flex-col gap-12 lg:flex-row lg:items-stretch">
        {/* LEFT: Text + bullets */}
        <div className="flex-1 pt-4 lg:pt-8">
          {/* Small label */}
          <p
            className="mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.4] tracking-[0px] uppercase"
            style={{
              fontFamily: '"Courier New", monospace',
              fontWeight: 400,
              color: "rgba(243, 243, 243, 0.8)",
            }}
          >
            Technical Highlights
          </p>

          {/* Main Heading */}
          <h2
            className="mb-6 sm:mb-8 md:mb-10 text-[32px] sm:text-[40px] md:text-[45px] lg:text-[50px] leading-[1.15]"
            style={{
              fontFamily: '"Courier Prime", monospace',
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F3F3F3 0%, #BDBDBD 100%)",
              }}
            >
              Technical{" "}
            </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #CB3F24 0%, #BE3B22 100%)",
              }}
            >
              Highlights
            </span>
          </h2>

          {/* Bullet list */}
          <ul className="flex flex-col gap-7">
            {bullets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-5">
                {/* Bullet icon placeholder */}
                <div className="mt-[4px] h-8 w-8 flex-shrink-0">
                  <Image
                    src="/images/home/vector-2.png"
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>

                {/* Text */}
                <p
                  className="text-base sm:text-lg md:text-xl lg:text-[22.88px] leading-[1.5] tracking-[-0.04em]"
                  style={{
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 400,
                    color: "rgba(243, 243, 243, 0.9)",
                  }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Image + overlay boxes */}
        <div className="relative flex-1 mt-8 lg:mt-0 lg:flex lg:items-center lg:justify-end max-md:hidden">
          <div className="relative ml-auto h-[300px] sm:h-[380px] md:h-[450px] lg:h-[480px] w-full max-w-[640px]">
            {/* Grey box (above) */}
            <div className="absolute -top-6 sm:-top-8 md:-top-10 lg:-top-13 left-8 sm:left-12 md:left-16 lg:left-19 h-[40px] sm:h-[45px] md:h-[50px] lg:h-[55px] w-[50px] sm:w-[60px] md:w-[68px] lg:w-[73px] bg-[#D9D9D9] max-md:hidden" />

            {/* Aircraft image placeholder */}
            <div className="relative h-full w-full bg-[rgba(18,18,18,1)]">
              <Image
                src="/images/home/technical-aircraft.png"
                alt="Airborne platform technical highlight visualization"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
