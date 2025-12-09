const magnetometers = [
  {
    id: "qb-opm-s",
    title: "QB-OPM-S (Scalar)",
    subtitle: "Tactical Scalar Magnetometer",
    description:
      "High-bandwidth scalar sensing designed for magnetic map-matching navigation. Features absolute accuracy in Earth's field with an orientation-independent (dead-zone free) architecture. Ideal for airborne and subsea platforms requiring robust geomagnetic referencing.",
    type: "Tactical scalar magnetometer",
    typeLabel: "Type",
    useCase: "Magnetic map-matching navigation",
    useCaseLabel: "Use Case",
    environment: "Airborne/subsea platforms",
    environmentLabel: "Environment",
  },
  {
    id: "qb-opm-v",
    title: "QB-OPM-V (Vector)",
    subtitle: "3-Axis Quantum Magnetometer",
    description:
      "Precision vector magnetometer providing simultaneous readout of Bx, By, Bz, and total field. Operates in Earth's field with high dynamic range, designed for magnetic compassing, calibration of inertial systems, and attitude determination.",
    type: "3-axis quantum magnetometer",
    typeLabel: "Type",
    useCase: "Magnetic compassing, attitude determination",
    useCaseLabel: "Use Case",
    environment: "Earth's field operation",
    environmentLabel: "Environment",
  },
  {
    id: "qb-optitime",
    title: "QB-OptiTime",
    subtitle: "Optical Atomic Clock",
    description:
      "Next-generation compact atomic clock utilizing optical transitions in warm vapor. Delivers orders-of-magnitude superior frequency stability compared to standard microwave CSACs. Engineered for GNSS-denied timing holdover and rapid network synchronization.",
    type: "Optical atomic clock",
    typeLabel: "Type",
    useCase: "GNSS-denied timing, network sync",
    useCaseLabel: "Use Case",
    environment: "Compact, low-power",
    environmentLabel: "Environment",
  },
  {
    id: "qb-spectrum",
    title: "QB-Spectrum",
    subtitle: "Rydberg RF Receiver",
    description:
      "Wideband quantum RF sensor capability from MHz to THz. Enables stealthy, antenna-free signal detection and electromagnetic spectrum awareness. Passive architecture ensures zero-emission situational awareness.",
    type: "3-axis quantum magnetometer",
    typeLabel: "Type",
    useCase: "Magnetic compassing, attitude determination",
    useCaseLabel: "Use Case",
    environment: "Earth's field operation",
    environmentLabel: "Environment",
  },
];

export default function Magnetometers() {
  return (
    <section className="relative -mt-48 min-h-screen text-white px-4 sm:px-6 py-8 sm:py-12 md:px-10 lg:px-16 lg:py-16">
      <div className="relative mx-auto w-full max-w-7xl">
        {/* Page title */}
        <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
        Components
        </h1>

        {/* Three header callouts */}
        <div className="flex flex-col gap-3 text-sm sm:text-[13px] sm:flex-row">
          <div className="max-w-sm  px-4 py-3 leading-relaxed">
            <span className="font-semibold">Scalar &amp; Vector OPMs – </span>
            <span className="text-gray-300">
              tactical magnetometers for navigation and attitude determination
              in Earth&apos;s field.
            </span>
          </div>
          <div className="max-w-sm  px-4 py-3 leading-relaxed">
            <span className="font-semibold">Optical Atomic Clock – </span>
            <span className="text-gray-300">
              superior timing stability for GNSS-denied environments.
            </span>
          </div>
          <div className="max-w-sm bg-[rgba(192,192,192,1)] px-4 py-3 ml-26 leading-relaxed">
            <span className="font-semibold text-black">Rydberg RF sensors – </span>
            <span className="text-gray-300 text-gray-600 ">
              electric-field detection for spectrum awareness and EMI
              diagnostics.
            </span>
          </div>
        </div>

        {/* Big light panel behind cards */}
        <div className="max-w-8xl bg-[rgba(192,192,192,1)] px-4 sm:px-5 md:px-8 py-6 sm:py-8 md:py-10 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 gap-y-12 sm:gap-y-16 md:gap-y-20 lg:grid-cols-2">
            {magnetometers.map((item) => (
              <div
                key={item.id}
                className="relative bg-[rgba(18,18,18,1)] px-6 py-2"
              >
                {/* Title block that sits on top edge */}
                <div className="absolute -top-8 sm:-top-10 left-0 bg-[rgba(18,18,18,1)] w-4/5 sm:w-4/5 h-[45px] sm:h-[50px] px-4 sm:px-6 py-2">
                  <h3 className="text-xs sm:text-sm font-semibold tracking-tight md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-gray-400 md:text-xs">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="mb-6 mt-4 text-xs leading-relaxed text-gray-300 sm:text-[13px]">
                  {item.description}
                </p>

                {/* Metadata */}
                <div className="mb-6 space-y-3 text-xs sm:text-[13px]">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center">
                      <img
                        src="/images/products/physics-svgrepo-com (1) 3.svg"
                        alt=""
                        className="h-5 w-5"
                      />
                    </span>
                    <div>
                      <p className="uppercase tracking-[0.14em] text-gray-400">
                        {item.typeLabel}
                      </p>
                      <p className="text-gray-100">{item.type}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center">
                      <img
                        src="/images/products/physics-svgrepo-com (1) 3.svg"
                        alt=""
                        className="h-5 w-5"
                      />
                    </span>
                    <div>
                      <p className="uppercase tracking-[0.14em] text-gray-400">
                        {item.useCaseLabel}
                      </p>
                      <p className="text-gray-100">{item.useCase}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center">
                      <img
                        src="/images/products/physics-svgrepo-com (1) 3.svg"
                        alt=""
                        className="h-5 w-5"
                      />
                    </span>
                    <div>
                      <p className="uppercase tracking-[0.14em] text-gray-400">
                        {item.environmentLabel}
                      </p>
                      <p className="text-gray-100">{item.environment}</p>
                    </div>
                  </div>
                </div>

                {/* Download link */}
                <button className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#ff5a1f] transition-colors hover:text-[#ff7b3b] sm:text-sm">
                  <span>Download Specs</span>
                  <span className="text-base">➜</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
