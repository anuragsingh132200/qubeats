"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Quantum Magnetometers",
    summary:
      "Compact vapor-cell OPM arrays delivering picotesla precision for navigation, mineral exploration, and biomedical imaging.",
  },
  {
    name: "RF Sensing Platforms",
    summary:
      "Rydberg atom-based receivers that decode RF signatures with ultra-wide bandwidth for electronic warfare and secure comms.",
  },
  {
    name: "Navigation Engine & Sensor Fusion",
    summary:
      "Real-time fusion of quantum magnetic data with inertial and RF streams for GPS-denied navigation accuracy.",
  },
  {
    name: "Magnetic Navigation System",
    summary:
      "Integrated quantum magnetometer with inertial sensors for absolute position fixes and anomaly mapping.",
  },
  {
    name: "Optical Atomic Clocks",
    summary:
      "Warm-vapor optical clocks delivering orders-of-magnitude better stability than conventional CSACs.",
  },
  {
    name: "Command, Calibration & Analytics",
    summary:
      "Mission software for multi-sensor networks with auto-calibration, anomaly tagging, and fleet-wide health monitoring.",
  },
];

// shared typography styles
const monoBodyStyle = {
  fontFamily:
    '"Courier Prime", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "14px",
  lineHeight: "1.7",
  letterSpacing: "0.01em",
  color: "rgba(243, 243, 243, 0.65)",
};

const monoSubheadingStyle = {
  fontFamily:
    '"Courier Prime", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: "19px",
  lineHeight: "100%",
  letterSpacing: "0",
  color: "rgba(243, 243, 243, 1)",
};

const headingBase = {
  fontFamily:
    '"Courier Prime", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: "inherit",
  lineHeight: "inherit",
  letterSpacing: "-1px",
};

export default function ProductsOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-[rgba(18,18,18,1)] py-12 sm:py-20 md:py-32">
      {/* Background grid pattern */}
      <div className="pointer-events-none absolute inset-0 h-1/2 opacity-90">
        <Image
          src="/images/home/bg-pattern-2.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 md:pr-24 lg:px-20 lg:pr-36">
        {/* Small label */}
        <p
          style={{
            ...monoBodyStyle,
            fontSize: "22px",
            lineHeight: "26px",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
          }}
          className="mb-6"
        >
          WHAT WE MAKE
        </p>

        {/* Main heading */}
        <h2 className="mb-8 sm:mb-12 md:mb-14 text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px]">
          <span
            style={{
              ...headingBase,
              color: "white",
            }}
          >
            Products at a{" "}
          </span>
          <span
            style={{
              ...headingBase,
              color: "#CB3F24",
            }}
          >
            Glance
          </span>
        </h2>

        {/* Products grid */}
        <div className="grid gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-10 sm:gap-y-12 md:gap-y-14 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="flex flex-col gap-3">
              <div className="mb-2 flex items-start gap-4">
                <div className="mt-1 h-10 w-10 flex-shrink-0">
                  <Image
                    src="/images/home/bullet-point.png"
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-cover"
                  />
                </div>
                <h3 className="mt-4" style={monoSubheadingStyle}>
                  {product.name}
                </h3>
              </div>
              <p style={monoBodyStyle} className="max-w-md">
                {product.summary}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link href="/products" className="group relative">
            <span
              style={{
                fontFamily:
                  '"Courier Prime", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background:
                  "linear-gradient(90deg, #CB3F24 0%, #BE3B22 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              className="inline-flex items-center gap-2"
            >
              Explore all Products <span aria-hidden>➔</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Right-side UI rail */}
      <div
        className="pointer-events-none absolute right-15 top-14 bottom-36 max-md:hidden"
        style={{ background: "rgba(217, 217, 217, 1)", width: "56px" }}
      />

      {/* Top right square box */}
      <div
        className="absolute right-29 top-0 max-md:hidden"
        style={{
          width: "56px",
          height: "56px",
          background: "rgba(217, 217, 217, 1)",
        }}
      />

      {/* Bottom right square box */}
      <div
        className="absolute bottom-22 right-29 max-md:hidden"
        style={{
          width: "56px",
          height: "56px",
          background: "rgba(217, 217, 217, 1)",
        }}
      />
    </section>
  );
}