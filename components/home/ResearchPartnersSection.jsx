import Image from "next/image";

export default function ResearchPartnersSection() {
  return (
    <section className="relative overflow-hidden bg-[rgba(18,18,18,1)] py-16">
      {/* Background pattern placeholder */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/home/bg-pattern-2.png" // your background pattern placeholder
          alt=""
          fill
          className="object-cover opacity-90"
        />
      </div>

      {/* Small atom tile placeholder (top-right) */}
      <div className="pointer-events-none absolute hidden lg:flex items-center justify-center w-[70px] h-[68px] bg-[rgba(192,192,192,1)] right-20 lg:right-85 top-20">
        <Image
          src="/images/home/vector-1.png" // your small atom box placeholder
          alt=""
          width={45}
          height={45}
          className="object-contain z-2"
        />
      </div>

      {/* Main content container */}
      <div className="relative mx-auto w-full max-w-[1400px] flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 md:px-10 lg:px-16">
        {/* OUR PARTNERS label */}
        <p
          className="inline py-2 uppercase"
          style={{
            color: "rgba(243,243,243,0.8)",
            fontFamily: '"Courier New", monospace',
            fontWeight: 400,
            fontSize: "clamp(16px, 3vw, 24px)",
            lineHeight: "1.4",
            letterSpacing: "0px",
          }}
        >
          OUR PARTNERS
        </p>

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-1px]"
          style={{ fontFamily: '"Courier Prime", monospace' }}
        >
          <span className="text-white">
            Our Research{" "}
          </span>
          <span className="text-[#CB3F24]">
            Partners
          </span>
        </h2>

        <div className="absolute hidden lg:block bg-[rgba(192,192,192,1)] w-[180px] md:w-[200px] lg:w-[220px] h-[100px] md:h-[115px] lg:h-[130px] right-4 md:right-16 top-16 md:top-18 lg:top-21">

        </div>

        {/* Grey container with partner cards */}
        <div className="relative mt-4 bg-[rgba(192,192,192,1)] min-w-[100%] sm:min-w-[90%] md:min-w-[80%] px-4 sm:px-6 pt-6 sm:pt-8 md:pt-10 pb-4 sm:px-10">
          <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="relative pb-4">
              <div className="bg-[rgba(18,18,18,1)] p-8 pb-10">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src="/images/home/partner-1.png" // placeholder for first partner
                    alt="Dr. Rajalakshmi, TIFR H"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative z-1 -top-4 left-0 w-[82%] bg-[rgba(18,18,18,1)] px-4 pb-4 text-center">
                <p className="text-[15px] font-semibold text-white">
                  Dr. Rajalakshmi, TIFR H
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-200">
                  Academic Partner
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative pb-4">
              <div className="bg-[rgba(18,18,18,1)] p-8 pb-10">
                <div className="relative h-56 w-full bg-white">
                  <Image
                    src="/images/home/partner-2.png" // placeholder for second partner
                    alt="TIFR Hyderabad"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Centered text block */}
              {/* Text block with stepped bottom (left aligned) */}
              <div className="relative z-1 -top-4 bottom-0 left-0 w-[82%] bg-[rgba(18,18,18,1)] px-6 pb-4">
                <p className="text-[15px] font-semibold text-white">
                  TIFR Hyderabad
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-200">
                  Academic Partner
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative pb-4">
              <div className="bg-[rgba(18,18,18,1)] p-8 pb-10">
                <div className="relative h-56 w-full bg-white">
                  <Image
                    src="/images/home/partner-3.png" // placeholder for third partner
                    alt="IIT Kharagpur"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="relative -top-4 left-0 w-[82%] bg-[rgba(18,18,18,1)] px-4 pb-4 text-center">
                <p className="text-[15px] font-semibold text-white">
                  IIT Kharagpur
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-200">
                  Academic Partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-[linear-gradient(180deg,rgba(11,11,11,0)_0%,rgba(7,7,7,1)_100%)]" />
    </section>
  );
}
