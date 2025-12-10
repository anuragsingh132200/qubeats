import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function FindPerfectSolutionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[rgba(7,7,7,1)] py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background World Map Image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/products/world-map-red-dots-KR40HE 1.png"
          alt="World map"
          fill
          priority
          className="object-contain opacity-80"
        />
      </div>
      {/* Pattern overlay gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.70,
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,240,255,0.15) 0px, rgba(0,240,255,0.15) 1px, transparent 1px, transparent 96px), repeating-linear-gradient(90deg, rgba(0,240,255,0.15) 0px, rgba(0,240,255,0.15) 1px, transparent 1px, transparent 96px)"
          }}
        />
      </div>
      {/* Content container */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-10 lg:px-16 text-center">
        {/* Top label (left aligned, optional - can be omitted if not needed) */}
        {/* <div className="w-full text-left">
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.35em] text-slate-200/80"
            style={{ fontFamily: '"Courier Prime", monospace' }}
          >
            FIND YOUR SOLUTION
          </p>
        </div> */}

        {/* Main heading */}
        <h2
          className="text-3xl leading-tight sm:text-[40px] md:text-[48px]"
          style={{
            fontFamily: '"Courier Prime", monospace',
            fontWeight: 700,
          }}
        >
          <span className="text-white">Find your perfect </span>
          <span className="text-[#CB3F24]">
            Solution
          </span>
        </h2>

        {/* Description text */}
        <p
          className="max-w-4xl text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-slate-100/90"
          style={{
            fontFamily: '"Courier Prime", monospace',
            letterSpacing: "0.03em",
          }}
        >
          Not sure which product fits your application? Our engineering team can help you select the right quantum sensor configuration, customize integration, and design a complete system around your mission requirements.
        </p>

        {/* CTA buttons */}
        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center w-full sm:w-auto">
          <Link
            href="#"
            className="inline-flex w-full sm:w-auto sm:min-w-[260px] items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base"
            style={{
              fontFamily: '"Courier Prime", monospace',
              fontWeight: 700,
              letterSpacing: "0.07em",
              background: "linear-gradient(90deg,#CB3F24 0%,#BE3B22 100%)",
              color: "#FFFFFF",
            }}
          >
            START A SCOPED PILOT
          </Link>
          <a
            href="https://drive.google.com/uc?export=download&id=1D8jQkFswT10sW_9I_LYxAHwgnu-UFhh_"
            download
            className="inline-flex w-full sm:w-auto sm:min-w-[260px] items-center justify-center border border-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base transition hover:bg-white/5"
            style={{
              fontFamily: '"Courier Prime", monospace',
              fontWeight: 700,
              letterSpacing: "0.07em",
              color: "#FFFFFF",
            }}
          >
            Download Specs
          </a>
        </div>
      </div>
    </section>
  );
}

