import Image from "next/image";

export default function HowTechnologyWorks() {
  return (
    <section
      id="how-technology-works"
      className="relative overflow-hidden bg-[rgba(18,18,18,1)] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/home/bg-pattern-2.png"
          alt=""
          fill
          priority
          className="object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Top label */}
        <p
          className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-[1.4] uppercase"
          style={{
            fontFamily: '"Courier New", monospace',
            fontWeight: 400,
            letterSpacing: "0px",
            color: "rgba(243, 243, 243, 0.8)",
          }}
        >
          How Our Technology Works
        </p>

        {/* Heading + right intro text */}
        <div className="mt-6 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:flex-row lg:items-start">
          <div className="flex-1">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-bold"
              style={{
                fontFamily: '"Courier Prime", monospace',
                fontWeight: 700,
                letterSpacing: "-1px",
              }}
            >
              <span
                style={{
                  color: "white",
                }}
              >
                How our Quantum
                <br />
                Sensors{" "}
              </span>
              <span
                style={{
                  color: "#CB3F24",
                }}
              >
                Work
              </span>
            </h2>
          </div>

          {/* Right-side description box */}
          <div className="w-full max-w-md px-3 py-4 sm:py-6">
            <p
              className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight"
              style={{
                fontFamily: '"Courier New", monospace',
                fontWeight: 400,
                letterSpacing: "0.02em",
                color: "rgba(243, 243, 243, 0.6)",
              }}
            >
              Quantum sensors detect fields
              by watching how atoms or quantum
              defects respond to light.
            </p>
          </div>
        </div>

        {/* Main content card */}
        <div className="relative mt-8 sm:mt-10 md:mt-12 inline-block bg-[rgba(192,192,192,1)] px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 lg:px-12 lg:py-12">
          {/* Small black notch under the card (bottom-left) */}
          <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 left-0 h-4 sm:h-5 md:h-6 w-16 sm:w-20 md:w-24 bg-[rgba(18,18,18,1)]" />

          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-x-6 pb-6 sm:pb-8">
            <div className="mt-[2px] h-8 w-8 flex-shrink-0">
              <Image
                src="/images/home/vector-1.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <p
                className="text-base sm:text-lg md:text-xl lg:text-[22.88px] leading-[1.5]"
                style={{
                  color: "rgba(18, 18, 18, 1)",
                  fontFamily: '"Courier New", monospace',
                  fontWeight: 700,
                  letterSpacing: "-1.24px",
                }}
              >
                OPM (vapor-cell):
              </p>
              <p
                className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight"
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontFamily: '"Courier New", monospace',
                  fontWeight: 400,
                  letterSpacing: "-1.24px",
                }}
              >
                Laser-polarized alkali atoms tilt in tiny magnetic fields;
                changes in transmitted light encode the field.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-x-6 pb-6 sm:pb-8">
            <div className="mt-[2px] h-8 w-8 flex-shrink-0">
              <Image
                src="/images/home/vector-1.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-10">
              <p
                className="text-base sm:text-lg md:text-xl lg:text-[21px] leading-[1.5]"
                style={{
                  fontFamily: '"Courier New", monospace',
                  fontWeight: 700,
                  letterSpacing: "-1.24px",
                  color: "rgba(18, 18, 18, 1)",
                }}
              >
                NV-diamond:
              </p>
              <p
                className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight"
                style={{
                  fontFamily: '"Courier New", monospace',
                  fontWeight: 400,
                  letterSpacing: "-1.24px",
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Point defects in diamond shift their spin resonance with
                magnetic fields, read out using microwaves and optical
                fluorescence.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6">
            <div className="mt-[2px] h-8 w-8 flex-shrink-0">
              <Image
                src="/images/home/vector-1.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-x-6">
              <p
                className="text-base sm:text-lg md:text-xl lg:text-[22.88px] leading-[1.5]"
                style={{
                  color: "rgba(18, 18, 18, 1)",
                  fontFamily: '"Courier New", monospace',
                  fontWeight: 700,
                  letterSpacing: "-1.24px",
                }}
              >
                Rydberg RF:
              </p>
              <p
                className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight"
                style={{
                  fontFamily: '"Courier New", monospace',
                  fontWeight: 400,
                  letterSpacing: "-1.24px",
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Highly excited atoms behave like ultra-sensitive RF antennas
                responding to ambient electric fields.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom paragraph */}
        <div className="mt-10 sm:mt-12 md:mt-16 flex justify-center">
          <p
            className="max-w-4xl text-center text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight px-4"
            style={{
              fontFamily: '"Courier New", monospace',
              fontWeight: 400,
              letterSpacing: "-1.24px",
              color: "rgba(243, 243, 243, 0.9)",
            }}
          >
            We package these effects into compact sensor heads, stabilize them
            with smart optics and low-noise electronics, and fuse outputs with
            IMU/GNSS and AI filtering to turn raw quantum physics into trusted
            navigation- and sensing-grade numbers.
          </p>
        </div>
      </div>
    </section>
  );
}
