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
      className="relative overflow-hidden bg-[rgba(18,18,18,1)] py-12 sm:py-14 md:py-16 lg:py-20"
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

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-12 px-4 sm:px-6 md:px-10 lg:px-16 lg:flex-row lg:items-stretch">
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
            className="mb-6 sm:mb-8 md:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] font-bold tracking-[-1px]"
            style={{
              fontFamily: '"Courier Prime", monospace',
              fontWeight: 700,
            }}
          >
            <span
              style={{
                color: "white",
              }}
            >
              Technical{" "}
            </span>
            <span
              style={{
                color: "#CB3F24",
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
                  className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight"
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
        <div className="relative flex-1 mt-8 lg:mt-0 lg:flex lg:items-end lg:justify-end max-md:hidden">
          <div className="relative ml-auto h-[300px] sm:h-[380px] md:h-[450px] lg:h-[480px] w-full max-w-[640px]">
            

            {/* Maritime surveillance and sensing visualization */}
            <div className="relative h-full w-full bg-[rgba(18,18,18,1)]">
              <Image
                src="/WhatsApp Image 2025-12-09 at 14.20.30_f1beeda5.jpg"
                alt="Maritime surveillance and sensing technical highlight visualization"
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
