"use client"; 
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Video Layer */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale"
        >
          <source src="/Video_Generation_Navy_Above_Sea.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Target Pattern Overlay - centered */}
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <Image
          src="/images/hero-target-pattern-placeholder.png"
          alt="Target overlay"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-4 sm:gap-6 px-4 sm:px-6 md:px-10 lg:px-16 py-20 sm:py-24 md:py-32 text-white">
        <div className="max-w-2xl space-y-4 sm:space-y-6">
          <h1 className="text-[48px] sm:text-[60px] md:text-[72px] font-bold leading-[0.95] tracking-wide text-white lg:text-[80px] xl:text-[90px]">
            QuBeats
          </h1>
          <p className="text-[20px] sm:text-[24px] md:text-[26px] font-normal leading-tight tracking-wide text-white lg:text-[28px]">
            Quantum sensors with<br className="hidden sm:block" /> atomic precision.
          </p>
        </div>

        <p className="mt-2 text-[11px] sm:text-[12px] md:text-[13px] font-normal uppercase tracking-[0.3em] text-[rgba(255,255,255,0.75)]">
          Lab-grade accuracy, engineered for the field.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-5 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#CB3F24] px-6 sm:px-8 md:px-16 py-3 sm:py-4 text-[11px] sm:text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.15em] text-white shadow-lg transition hover:bg-[#BE3B22] text-center"
            style={{
              fontFamily: '"Courier Prime", monospace',
              fontWeight: 700,
              letterSpacing: "0.07em",
              color: "#FFFFFF",
            }}
          >
            Talk to a Scientist 
          </Link>
        </div>
      </div>
    </section>
  );
}