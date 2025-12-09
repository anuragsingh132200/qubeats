import Image from "next/image";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function IndiaGlobalFocusSection() {
  return (
    <SectionWrapper
      id="global-focus"
      className="bg-[rgba(7,7,7,1)] py-16 sm:py-20"
      containerClassName="flex justify-center"
    >
      {/* Unified grey container */}
      <div className="relative w-full max-w-8xl bg-[rgba(192,192,192,1)] pl-4 sm:pl-6 md:pl-10 lg:pl-14 pr-4 sm:pr-6 md:pr-8 pb-8 sm:pb-10 md:pb-12 pt-8 sm:pt-10 md:pt-12">
        
        {/* Heading — right aligned, no grey above */}
        <div className="absolute top-0 -right-2 sm:-right-4 md:-right-6 lg:-right-8 bg-[rgba(7,7,7,1)] w-[calc(100%+1rem)] sm:w-[calc(100%+2rem)] md:w-[600px] lg:w-[720px] h-[100px] sm:h-[120px] px-4 sm:px-6 md:px-8 lg:px-12 py-2">
          <h2 className="font-['Courier_Prime',monospace] font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] leading-[1.1] tracking-[-1.2px] mt-6">
            <span className="text-white">
              India +
            </span>{' '}
            <span className="text-[#CB3F24]">
              Global
            </span>
          </h2>
        </div>

        {/* Content row */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-13 items-stretch mt-16 sm:mt-20 md:mt-24 lg:mt-0">
          
          {/* Left image box */}
          <div className="flex w-full lg:w-2/5 justify-center">
            <div className="flex items-center justify-center bg-black w-full max-w-[300px] sm:max-w-[380px] md:max-w-[480px] aspect-square">
              <Image
                src="/images/about/atomic-placeholder.png"
                alt="Quantum applications"
                width={560}
                height={560}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right text content */}
          <div className="flex w-full mt-8 sm:mt-12 md:mt-16 lg:mt-36 lg:w-1/2">
            <div className="w-full space-y-6 sm:space-y-8 font-['Courier_Prime',monospace] text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-[rgba(0,0,0,0.76)]">
              
              <div className="flex items-start gap-4">
                <Image
                  src="/images/home/vector-1.png"
                  alt=""
                  width={28}
                  height={28}
                  className="mt-1 shrink-0"
                />
                <p>
                  QuBeats is building India&apos;s quantum-hardware supply
                  chain—vapor cells, micro-optics, coatings, precision
                  mechanics—while partnering globally for space and biomedical
                  translation.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Image
                  src="/images/home/vector-1.png"
                  alt=""
                  width={28}
                  height={28}
                  className="mt-1 shrink-0"
                />
                <p>
                  We&apos;re committed to establishing indigenous quantum
                  technology capabilities while collaborating with international
                  partners to accelerate innovation and deployment in critical
                  applications worldwide.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
