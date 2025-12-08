const software = [
  {
    id: "qb-fusion",
    title: "QB-Fusion",
    subtitle: "Navigation Engine & Sensor Fusion",
    description: "Real-time edge computing core that fuses quantum magnetic data with inertial streams. Utilizes proprietary AI/ML filtering for magnetic map-matching and active drift suppression, ensuring absolute navigation accuracy in GPS-denied environments.",
    type: "Navigation engine & sensor fusion",
    typeLabel: "Type",
    useCase: "Real-time navigation in GPS-denied environments",
    useCaseLabel: "Use Case",
    environment: "Edge computing platform",
    environmentLabel: "Environment",
  },
  {
    id: "qb-studio",
    title: "QB-Studio",
    subtitle: "Command, Calibration & Analytics",
    description: "Comprehensive mission suite for distributed sensor networks. Features automated calibration routines, post-mission replay with anomaly tagging, and fleet-wide health monitoring. Designed for rapid sensor configuration and large-scale data analysis.",
    type: "Command, calibration & analytics suite",
    typeLabel: "Type",
    useCase: "Distributed sensor network management",
    useCaseLabel: "Use Case",
    environment: "Cloud-based platform",
    environmentLabel: "Environment",
  }
];

export default function SoftwareSection() {
  return (
    <section
      id="software"
      className="relative overflow-hidden min-h-screen text-white px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 lg:py-16"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(/images/products/bg-product.png)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.78) 50%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.95) 85%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* subtle top overlay (HUD feel) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-transparent z-10" />

      <div className="relative z-20 mx-auto w-full max-w-7xl">
        {/* Page title */}
        <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          Software
        </h1>

        {/* Two header callouts */}
        <div className="flex flex-col gap-3 text-sm sm:text-[13px] sm:flex-row sm:justify-between">
          <div className="max-w-sm px-4 py-3 leading-relaxed">
            <span className="font-semibold">QuBeats Fusion – </span>
            <span className="text-gray-300">
              AI/ML filtering, map-matching, and drift suppression for real-time navigation.
            </span>
          </div>
          <div className="max-w-sm bg-[rgba(192,192,192,1)] px-4 py-3 leading-relaxed">
            <span className="font-semibold text-black">QuBeats Studio – </span>
            <span className="text-gray-300 text-gray-600">
              calibration, replay, and fleet management for distributed sensor networks.
            </span>
          </div>
        </div>

        {/* Big light panel behind cards */}
        <div className="max-w-8xl bg-[rgba(192,192,192,1)] px-4 sm:px-5 md:px-8 py-6 sm:py-8 md:py-10 sm:pt-16 md:pt-20 lg:pt-24">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 gap-y-12 sm:gap-y-16 md:gap-y-20 lg:grid-cols-2">
            {software.map((item) => (
              <div
                key={item.id}
                className="relative bg-[rgba(18,18,18,1)] px-4 sm:px-6 py-2 shadow-[0_0_0_1px_rgba(0,0,0,0.7)]"
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

