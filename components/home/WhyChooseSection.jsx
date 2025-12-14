import Image from "next/image";
import Link from "next/link";

export default function WhyChooseSection() {
  return (
    <div className="relative overflow-hidden bg-[rgba(18,18,18,1)] py-8 sm:py-12 md:py-16">
      {/* Background image placeholder */}
      <div className="pointer-events-none absolute inset-0 h-1/2 opacity-90">
        <Image
          src="/images/home/bg-pattern-2.png"
          alt=""
          fill
          priority
          className="object-cover opacity-100"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Floating rectangle above the content box (top-right) */}
        <div className="pointer-events-none absolute right-4 sm:right-8 md:right-17 -top-2 sm:-top-4 h-[50px] sm:h-[60px] md:h-[76px] w-[70px] sm:w-[90px] md:w-[108px] bg-[rgba(192,192,192,1)] max-md:hidden" />

        {/* Top label */}
        <p className="mb-4 sm:mb-6 sm:ml-6 md:ml-15 font-regular font-weight-200 uppercase text-[rgba(243,243,243,0.8)] text-lg sm:text-xl md:text-[24px] font-['Courier_New']">
          Why Qubeats
        </p>

        {/* CONTENT BOX */}
        <div className="relative overflow-hidden min-h-[500px] sm:min-h-[580px] md:h-[630px] bg-[rgba(192,192,192,1)] px-4 sm:px-6 py-6 sm:py-8 md:px-8 md:py-10 md:pt-15 md:pb-10">
          {/* Black rectangle in top-right corner of the box */}
          <div className="pointer-events-none absolute right-0 top-0 h-20 w-40 bg-[rgba(18,18,18,1)] max-md:hidden" />
          {/* Airplane images (placeholders) */}
          
          <div className="pointer-events-none absolute right-0 top-24 hidden lg:block">
            <Image
              src="/images/home/icons/airplane-1.png"
              alt=""
              width={220}
              height={130}
              className="object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="ml-2 sm:ml-4 md:ml-6 font-['Courier_Prime'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px] text-[rgba(18,18,18,1)]">
            Why Customers Choose QuBeats
          </h2>

          {/* Cards – NO LOOPS, each card is a separate div */}
          <div className="mt-8 sm:mt-10 md:mt-12 ml-2 sm:ml-4 md:ml-8 grid gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 md:grid-cols-3">
            {/* Card 1 */}
            <article className="relative flex max-w-sm flex-col">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center bg-[rgba(192,192,192,1)]">
                <Image
                  src="/images/home/icons/icon-1.png"
                  alt="Array First"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-['Courier_Prime',monospace] text-[19.5px] font-bold leading-[1] tracking-[0.02em] text-[rgba(18,18,18,1)]">
                  Array First
                </h3>
              </div>
              <p className="mt-2 font-['Courier_Prime',monospace] text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-[rgba(0,0,0,0.6)]">
                Architected for multi-sensor coherence and true gradiometry—not
                just single-probe specs.
              </p>
            </article>

            {/* Card 2 */}
            <article className="relative flex max-w-sm flex-col">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center bg-[rgba(192,192,192,1)]">
                <Image
                  src="/images/home/icons/icon-2.png"
                  alt="Field-Ready Packaging"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-['Courier_Prime',monospace] text-[19.5px] font-bold leading-[1] tracking-[0.02em] text-[rgba(18,18,18,1)]">
                  Field-Ready Packaging
                </h3>
              </div>
              <p className="mt-2 font-['Courier_Prime',monospace] text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-[rgba(0,0,0,0.6)]">
                Rugged enclosures, low-SWaP electronics, and shield-aware
                mechanicals.
              </p>
            </article>

            {/* Card 3 */}
            <article className="relative flex max-w-sm flex-col">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center bg-[rgba(192,192,192,1)]">
                <Image
                  src="/images/home/icons/icon-3.png"
                  alt="Fusion DNA"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div className="mt-2">
                <h3 className="font-['Courier_Prime',monospace] text-[19.5px] font-bold leading-[1] tracking-[0.02em] text-[rgba(18,18,18,1)]">
                  Fusion DNA
                </h3>
              </div>
              <p className="mt-2 font-['Courier_Prime',monospace] text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-[rgba(0,0,0,0.6)]">
                Native IMU/GNSS integration plus magnetic map-matching for
                resilient PNT.
              </p>
            </article>

            {/* Bottom row wrapper – centers Card 4 and Card 5 in the content box */}
            <div className="md:col-span-3 md:mt-6 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-16">
              {/* Card 4 */}
              <article className="relative flex max-w-sm flex-col">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center bg-[rgba(192,192,192,1)]">
                  <Image
                    src="/images/home/icons/icon-4.png"
                    alt="Made in India, Built for the World"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="font-['Courier_Prime',monospace] text-[19.5px] font-bold leading-[1] tracking-[0.02em] text-[rgba(18,18,18,1)]">
                    Made in India, Built for the World
                  </h3>
                </div>
                <p className="mt-2 font-['Courier_Prime',monospace] text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-[rgba(0,0,0,0.6)]">
                  Local supply chain + global research partnerships.
                </p>
              </article>

              {/* Card 5 */}
              <article className="relative flex max-w-sm flex-col">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center bg-[rgba(192,192,192,1)]">
                  <Image
                    src="/images/home/icons/icon-5.png"
                    alt="From Benchtop to Fleet"
                    width={55}
                    height={55}
                    className="object-cover"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="font-['Courier_Prime',monospace] text-[19.5px] font-bold leading-[1] tracking-[0.02em] text-[rgba(18,18,18,1)]">
                    From Benchtop to Fleet
                  </h3>
                </div>
                <p className="mt-2 font-['Courier_Prime'] text-[18.9px] font-normal leading-[26.6px] tracking-[0.01em] text-[rgba(0,0,0,0.6)]">
                  The same core sensors scale from lab validation to vehicle
                  pods and space payloads.
                </p>
              </article>
            </div>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 md:mt-12 md:flex-row w-full">
          <Link 
            href="/contact"
            className="w-full sm:w-[280px] md:w-[300px] h-[55px] sm:h-[60px] md:h-[65px] border border-[#CB3F24] bg-gradient-to-r from-[#CB3F24] to-[#BE3B22] text-xs sm:text-sm font-bold tracking-[0.18em] text-white inline-flex items-center justify-center">
            START A SCOPED PILOT
          </Link>
          <a
            href="https://drive.google.com/uc?export=download&id=1D8jQkFswT10sW_9I_LYxAHwgnu-UFhh_"
            download
            className="inline-flex w-full sm:w-[280px] md:w-[300px] h-[55px] sm:h-[60px] md:h-[65px] items-center justify-center border border-slate-100 bg-transparent text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-slate-50"
          >
            DOWNLOAD SPECS
          </a>
        </div>
      </div>
    </div>
  );
}
