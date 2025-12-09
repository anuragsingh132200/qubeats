import Image from "next/image";
import Link from "next/link";

export default function PartnerWithUsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[rgba(7,7,7,1)] py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background world-map placeholder */}
      <div className="pointer-events-none absolute bottom-0 z-5 h-24 sm:h-32 bg-[linear-gradient(180deg,rgba(11,11,11,0)_0%,rgba(7,7,7,1)_100%)]" />
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/home/bg-collaborate-map.png" // your world map placeholder
          alt=""
          fill
          priority
          className="object-contain opacity-80"
        />
      </div>
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/home/bg-pattern-2.png" // your world map placeholder
          alt=""
          fill
          priority
          className="object-cover opacity-70"
        />
      </div>
      {/* Content container */}
      <div className="relative z-10 mx-auto mt-6 sm:mt-8 md:mt-10 flex max-w-6xl flex-col items-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 text-center">
        {/* Main heading */}
        <h2
          className="text-3xl leading-tight sm:text-[40px] md:text-[48px]"
          style={{ fontFamily: '"Courier Prime", monospace', fontWeight: 700 }}
        >
          <span className="text-slate-50">Partner with </span>
          <span className="bg-[linear-gradient(90deg,#CB3F24_0%,#BE3B22_100%)] bg-clip-text text-transparent">
            Qubeats
          </span>
        </h2>

        {/* Description text */}
        <p
          className="max-w-4xl text-[18px] sm:text-[20px] leading-relaxed text-slate-100/90"
          style={{
            color: "rgba(243,243,243,0.7)",
            fontFamily: '"Courier Prime", monospace',
            letterSpacing: "0.03em",
          }}
        >
          Whether you're developing next-generation navigation systems, advancing space missions, or pioneering biomedical diagnostics—let's explore how quantum sensing can transform your capabilities.
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
            Partner with Us
          </Link>
        </div>
      </div>
    </section>
  );
}
