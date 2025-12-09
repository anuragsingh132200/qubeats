import SectionWrapper from "@/components/common/SectionWrapper";
import JobOpeningsSection from "@/components/careers/JobOpeningsSection";

export const metadata = {
  title: "Careers | QuBeats Quantum Sensing",
  description:
    "Join QuBeats and help build the future of quantum sensing. Explore career opportunities in quantum physics, engineering, and technology.",
};

export default function CareersPage() {
  return (
    <>
      <SectionWrapper 
        id="careers-hero" 
        className="bg-[rgba(7,7,7,1)] pt-32 sm:pt-40 md:pt-52 lg:pt-64 pb-16 sm:pb-20 md:pb-24 relative"
        style={{ 
          backgroundImage: 'url(/images/Background pattern (1).png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white lg:text-6xl xl:text-7xl">
            Careers at <span className="text-[#CB3F24]">QuBeats</span>
          </h1>
          <p className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-slate-300 max-w-3xl">
            Join us in building the future of quantum sensing. We're looking for passionate individuals who want to push the boundaries of quantum technology and make a real-world impact.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper 
        id="careers-content" 
        className="bg-[rgba(7,7,7,1)] relative"
        style={{ 
          backgroundImage: 'url(/images/Background pattern (1).png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2">
          {/* Why Work at QuBeats Section */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Why Work at QuBeats?
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-[#CB3F24] mt-1">▸</span>
                <span>Work on cutting-edge quantum sensing technology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CB3F24] mt-1">▸</span>
                <span>Collaborate with world-class researchers and engineers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CB3F24] mt-1">▸</span>
                <span>Make a real impact in defense, space, and healthcare</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CB3F24] mt-1">▸</span>
                <span>Competitive compensation and benefits</span>
              </li>
            </ul>
          </div>

          {/* Job Openings Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Current Job Openings
              </h2>
              <p className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-slate-300">
                Explore open positions across our quantum engineering, software, and
                research teams. Apply now to help shape the future of quantum sensing.
              </p>
            </div>
            <JobOpeningsSection />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

