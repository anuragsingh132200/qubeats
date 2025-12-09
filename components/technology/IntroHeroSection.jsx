import SectionWrapper from "@/components/common/SectionWrapper";

export default function IntroHeroSection() {
  return (
    <SectionWrapper
      id="technology-hero"
      className="relative overflow-hidden bg-[rgba(7,7,7,1)] pt-32 pb-24"
      containerClassName="flex-col"
    >
      {/* Dark grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40
                   bg-[radial-gradient(#1f1f1f_1px,transparent_1px)]
                   [background-size:40px_40px]"
        aria-hidden="true"
      />

      {/* Main grey card */}
      <div className="relative mx-auto mt-4 sm:mt-6 md:mt-8 w-full max-w-8xl overflow-visible px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 md:py-10">
        {/* Bottom-right cutout */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-24 sm:h-28 md:h-32 lg:h-36 w-20 sm:w-24 md:w-28 lg:w-30 translate-y-[1px] bg-[#050505]"
          aria-hidden="true"
        />

        <div className="relative flex flex-col mr-0 sm:mr-8 md:mr-12 lg:mr-20 gap-6 sm:gap-8 md:gap-10">
          {/* Heading */}
          <h1
            className="text-[32px] text-white sm:text-[40px] md:text-[56px] lg:text-[70px] xl:text-[80px] leading-[1.2] font-bold"
            style={{ fontFamily: '"Courier Prime", monospace', fontSize: "80px" }}
          >
            The Quantum Behind  
            <br />
            the <span className="text-[#CB3F24]">
            Sensing</span>
          </h1>

          {/* Two-column body text */}
          <div className="grid gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-8 md:gap-y-10 md:grid-cols-2">
            <p
              className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-[rgba(243,243,243,0.7)]"
              style={{ fontFamily: '"Courier New", monospace', fontWeight: 400, }}
            >
              At QuBeats Technologies, we offer a comprehensive suite of quantum
              sensing and metrology products designed to deliver unmatched
              precision and performance across various applications.
            </p>
            <p
              className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-[rgba(243,243,243,0.7)]"
              style={{ fontFamily: '"Courier New", monospace', fontWeight: 400, }}
            >
              Our innovative solutions harness the principles of quantum
              mechanics to meet the rigorous demands of industries such as
              healthcare, telecommunications, environmental monitoring, and
              research.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
