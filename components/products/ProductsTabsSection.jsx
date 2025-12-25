"use client";

import { useState } from "react";

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

const systems = [
  {
    id: "qb-magnav",
    title: "QB-MagNav",
    subtitle: "Magnetic Navigation System",
    description: "A fully integrated PNT unit fusing Quantum Magnetometers with inertial data. Provides absolute, unjammable position fixes by correlating crustal magnetic anomalies with onboard maps. Includes ROS-native drivers for seamless unmanned system integration.",
    type: "Mag-aided PNT system",
    typeLabel: "Type",
    useCase: "GPS-denied navigation",
    useCaseLabel: "Use Case",
    environment: "Air/sea/land",
    environmentLabel: "Environment",
  },
  {
    id: "qb-grad",
    title: "QB-Grad",
    subtitle: "Quantum Gradiometer Pod",
    description: "Multi-sensor array designed for mobile anomaly detection. Uses adaptive noise cancellation to isolate local targets (mines, submarines, infrastructure) from geological background noise. Waterproof and ruggedized for maritime deployment.",
    type: "Quantum gradiometer system",
    typeLabel: "Type",
    useCase: "Underwater anomaly detection",
    useCaseLabel: "Use Case",
    environment: "Maritime/subsea",
    environmentLabel: "Environment",
  }
];

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

export default function ProductsTabsSection() {
  const [activeTab, setActiveTab] = useState("components");

  const renderProductCard = (item) => (
    <div
      key={item.id}
      className="relative bg-black px-6 sm:px-8 py-6 sm:py-8 flex flex-col h-full"
    >
      <div className="bg-[#C0C0C0] absolute top-0 right-0 h-[60px] w-[150px] hidden lg:block"></div>
      {/* Title block */}
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-semibold text-[#CB3F24] mb-2">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base text-white font-light">
          {item.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="mb-6 text-sm sm:text-base leading-relaxed text-gray-400">
        {item.description}
      </p>

      {/* Metadata */}
      <div className="mb-6 space-y-3 flex-grow">
        <div className="flex items-start gap-3">
          <span className="mt-1 flex h-6 w-6 items-center justify-center flex-shrink-0">
            <img
              src="/images/products/physics-svgrepo-com (1) 3.svg"
              alt=""
              className="h-5 w-5"
            />
          </span>
          <div>
            <p className="text-gray-400  mb-0.5">
              <span className="text-white mr-1">{item.typeLabel}:</span>
              {item.type}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-1 flex h-6 w-6 items-center justify-center flex-shrink-0">
            <img
              src="/images/products/physics-svgrepo-com (1) 3.svg"
              alt=""
              className="h-5 w-5"
            />
          </span>
          <div>
            <p className="text-gray-400  mb-0.5">
              <span className="text-white mr-1">{item.useCaseLabel}:</span>
              {item.useCase}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-1 flex h-6 w-6 items-center justify-center flex-shrink-0">
            <img
              src="/images/products/physics-svgrepo-com (1) 3.svg"
              alt=""
              className="h-5 w-5"
            />
          </span>
          <div>
            <p className="text-gray-400 mb-0.5">
              <span className="text-white mr-1">{item.environmentLabel}:</span>
              {item.environment}
            </p>
          </div>
        </div>
      </div>

      {/* Download link */}
      <div className="mt-auto">
        <a
          href="https://drive.google.com/uc?export=download&id=1D8jQkFswT10sW_9I_LYxAHwgnu-UFhh_"
          download
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#CB3F24] transition-colors hover:text-[#E64A2E]"
        >
          <span>Download Specs</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );

  return (
    <section className="relative -mt-48 min-h-[600px] text-white px-4 sm:px-6 py-6 sm:py-8 md:px-10 lg:px-16">
      <div className="relative mx-auto w-full max-w-7xl">
        {/* Tabs Navigation */}
        <div className="mb-6 flex flex-wrap justify-between gap-2 sm:gap-4 border-b border-gray-700">
          <button
            onClick={() => setActiveTab("components")}
            className={`px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-4 md:text-base lg:text-lg xl:text-xl font-semibold transition-colors flex-1 sm:flex-none lg:ml-8 ${
              activeTab === "components"
                ? "border-b-2 border-[#CB3F24] text-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Components
          </button>
          <button
            onClick={() => setActiveTab("systems")}
            className={`px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-4 md:text-base lg:text-lg xl:text-xl font-semibold transition-colors flex-1 sm:flex-none ${
              activeTab === "systems"
                ? "border-b-2 border-[#CB3F24] text-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Systems
          </button>
          <button
            onClick={() => setActiveTab("software")}
            className={`px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-4 md:text-base lg:text-lg xl:text-xl font-semibold transition-colors flex-1 sm:flex-none lg:mr-8 ${
              activeTab === "software"
                ? "border-b-2 border-[#CB3F24] text-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Software
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {/* Components Tab */}
          {activeTab === "components" && (
            <div>
              {/* Header callouts */}
              <div className="mb-4 flex flex-col justify-between gap-2 text-xs sm:text-[13px] md:text-[14px] leading-[1.6] tracking-tight sm:flex-row">
                <div className="max-w-sm px-3 py-2">
                  <span className="font-semibold text-[#CB3F24]">Scalar &amp; Vector OPMs – </span>
                  <span className="text-gray-300">
                    tactical magnetometers for navigation and attitude determination
                    in Earth&apos;s field.
                  </span>
                </div>
                <div className="max-w-sm px-3 py-2">
                  <span className="font-semibold text-[#CB3F24]">Optical Atomic Clock – </span>
                  <span className="text-gray-300">
                    superior timing stability for GNSS-denied environments.
                  </span>
                </div>
                <div className="max-w-sm px-3 py-2">
                  <span className="font-semibold text-[#CB3F24]">Rydberg RF sensors – </span>
                  <span className="text-gray-300">
                    electric-field detection for spectrum awareness and EMI
                    diagnostics.
                  </span>
                </div>
              </div>

              {/* Product cards */}
              <div className="bg-[rgba(192,192,192,1)] px-4  sm:px-5 md:px-6 py-4 sm:py-6 md:py-8">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:grid-cols-2 mt-8">
                  {magnetometers.map(renderProductCard)}
                </div>
              </div>
            </div>
          )}

          {/* Systems Tab */}
          {activeTab === "systems" && (
            <div>
              {/* Header callouts */}
              <div className="mb-4 flex flex-col justify-between gap-2 text-xs sm:text-[13px] md:text-[14px] leading-[1.6] tracking-tight sm:flex-row">
                <div className="max-w-sm px-3 py-2">
                  <span className="font-semibold text-[#CB3F24]">MagNav Box – </span>
                  <span className="text-gray-300">
                    magnetic-field–aided PNT fused with IMU/GNSS for air, sea, and space.
                  </span>
                </div>
                <div className="max-w-sm px-3 py-2">
                  <span className="font-semibold text-[#CB3F24]">Maritime Quantum Pod – </span>
                  <span className="text-gray-300">
                    multi-axis gradiometer array for underwater anomaly detection and tracking.
                  </span>
                </div>
                </div>

              {/* Product cards */}
              <div className="bg-[rgba(192,192,192,1)] px-4 sm:px-5 md:px-6 py-4 sm:py-6 md:py-8">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:grid-cols-2 mt-8">
                  {systems.map(renderProductCard)}
                </div>
              </div>
            </div>
          )}

          {/* Software Tab */}
          {activeTab === "software" && (
            <div>
              {/* Header callouts */}
              <div className="mb-4 flex flex-col justify-between gap-2 text-xs sm:text-[13px] md:text-[14px] leading-[1.6] tracking-tight sm:flex-row">
                <div className="max-w-sm px-3 py-2">
                  <span className="font-semibold text-[#CB3F24]">QuBeats Fusion – </span>
                  <span className="text-gray-300">
                    AI/ML filtering, map-matching, and drift suppression for real-time navigation.
                  </span>
                </div>
                <div className="max-w-sm px-3 py-2">
                  <span className="font-semibold text-[#CB3F24]">QuBeats Studio – </span>
                  <span className="text-gray-300">
                    calibration, replay, and fleet management for distributed sensor networks.
                  </span>
                </div>
                </div>

              {/* Product cards */}
              <div className="bg-[rgba(192,192,192,1)] px-4 sm:px-5 md:px-6 py-4 sm:py-6 md:py-8">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:grid-cols-2 mt-8">
                  {software.map(renderProductCard)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

