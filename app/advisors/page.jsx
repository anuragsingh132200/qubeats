import SectionWrapper from "@/components/common/SectionWrapper";
import Image from "next/image";

const advisors = [
  {
    name: "Prof. M Krishnamurthy",
    title: "Director, TIFR Hyderabad",
    image: "/images/advisors/Screenshot 2025-12-10 101510.png",
  },
  {
    name: "Dr. G Rajalakshmi",
    title: "Senior Scientist, TIFR Hyderabad",
    image: "/images/advisors/Screenshot 2025-12-10 101529.png",
  },
  {
    name: "R Adm Surendra Ahuja",
    title: "Former Test Pilot at Indian Navy, ex-Managing Director Boeing Defense India",
    image: "/images/advisors/Screenshot 2025-12-10 101553.png",
  },
  {
    name: "Adm Karambir Singh",
    title: "Former Chief of Naval Staff",
    image: "/images/advisors/Screenshot 2025-12-10 101626.png",
  },
  {
    name: "Dr G Satish Reddy",
    title: "ex-Chairman, DRDO",
    image: "/images/advisors/Screenshot 2025-12-10 101643.png",
  },
  {
    name: "Rahul Bhasin",
    title: "Managing Partner, Barings PE India",
    image: "/images/advisors/Screenshot 2025-12-10 101711.png",
  },
];

export const metadata = {
  title: "Advisory Council | QuBeats",
  description:
    "Explore the strategic, scientific, and mission-focused advisors guiding QuBeats in building quantum sensing systems.",
};

export default function AdvisorsPage() {
  return (
    <SectionWrapper
      id="advisors"
      className="bg-[rgba(11,11,11,1)] pt-28 sm:pt-32 lg:pt-36 pb-24"
      containerClassName="gap-8 sm:gap-10"
    >
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-3 sm:gap-4">
          <p
            className="uppercase text-xs tracking-[0.2em]"
            style={{
              color: "rgba(243,243,243,0.6)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            ADVISORY COUNCIL
          </p>
          <h1
            className="text-3xl sm:text-4xl font-semibold"
            style={{
              color: "rgba(255,255,255,0.92)",
              fontFamily: "'Courier Prime', monospace",
            }}
          >
            Our Advisors
          </h1>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 border border-white/10 bg-[rgba(18,18,18,0.9)] rounded-lg"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto aspect-square overflow-hidden rounded-lg">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  className="text-xl sm:text-2xl font-semibold"
                  style={{
                    color: "rgba(255,255,255,0.92)",
                    fontFamily: "'Courier Prime', monospace",
                  }}
                >
                  {advisor.name}
                </h3>
                <p
                  className="text-sm sm:text-base"
                  style={{
                    color: "rgba(243,243,243,0.8)",
                    fontFamily: "'Courier New', monospace",
                    lineHeight: "1.5",
                  }}
                >
                  {advisor.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}


