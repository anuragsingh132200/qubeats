import Image from "next/image";
import SectionWrapper from "@/components/common/SectionWrapper";

const missionPoints = [
  {
    text: "Bring to India proven quantum technologies that can be rapidly productized.",
    icon: "/images/home/vector-2.png",
  },
  {
    text: "Become a world leader in the innovation and production of quantum sensors and quantum metrology systems.",
    icon: "/images/home/vector-2.png",
  },
];

export default function MissionSection() {
  return (
    <SectionWrapper
      id="mission"
      className="relative overflow-hidden bg-[rgba(11,11,11,1)] pl-4 sm:pl-8 md:pl-12 lg:pl-36 pr-4 sm:pr-8 md:pr-12 lg:pr-28"
      containerClassName="relative z-10 py-16 lg:py-20"
    >
      {/* Background pattern (update src to your actual bg-pattern path) */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/home/bg-pattern-2.png"
          alt=""
          fill
          priority
          className="object-cover opacity-90"
        />
      </div>

      <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left: Heading + Mission points */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <h2 className="font-['Courier_Prime',monospace] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px] text-white">
            <span className="mr-2">Our</span>
            <span className="text-[#cb3f24]">Mission</span>
          </h2>

          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            {missionPoints.map((point, index) => (
              <div key={index} className="flex gap-3 sm:gap-4 md:gap-5">
                <div className="mt-1 flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center">
                  <Image
                    src={point.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-6 w-6 sm:h-8 sm:w-8"
                  />
                </div>
                <p className="font-['Courier_New',monospace] text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-[rgba(243,243,243,0.9)]">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: India map card */}
        <div className="flex justify-center lg:justify-end rounded-full">
          <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:w-[511px] h-[250px] sm:h-[300px] md:h-[341px]">
            <Image
              src="/images/about/India.png"
              alt="India map – quantum technology hub"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
