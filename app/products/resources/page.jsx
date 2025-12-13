import SectionWrapper from "@/components/common/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import connectDB from "@/lib/mongodb";
import Resource from "@/models/Resource";
import MediaPress from "@/models/MediaPress";

async function getPublishedResources() {
  await connectDB();
  const resources = await Resource.find({ isPublished: true })
    .sort({ sortOrder: 1, createdAt: -1 })
    .lean();

  return resources.map((resource) => ({
    ...resource,
    _id: resource._id?.toString?.() || resource._id,
  }));
}

async function getPublishedMediaItems() {
  await connectDB();
  const items = await MediaPress.find({ isPublished: true })
    .sort({ sortOrder: 1, createdAt: -1 })
    .lean();

  return items.map((item) => ({
    ...item,
    _id: item._id?.toString?.() || item._id,
  }));
}

export const metadata = {
  title: "Resources | QuBeats Quantum Sensing",
  description:
    "Access technical documentation, datasheets, white papers, integration guides, and other resources for QuBeats quantum sensing products.",
};

export default async function ResourcesPage() {
  const resources = await getPublishedResources();
  const mediaItems = await getPublishedMediaItems();

  const whitePapers = resources.filter(
    (resource) => resource.category === "white_paper"
  );
  const solutionBriefs = resources.filter(
    (resource) => resource.category === "solution_brief"
  );
  const technicalNotes = resources.filter(
    (resource) => resource.category === "technical_note_data_sheet"
  );

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper id="resources-hero" className="bg-[rgba(7,7,7,1)] pt-32 sm:pt-40 md:pt-52 lg:pt-64 pb-12 sm:pb-14 md:pb-16 relative pl-4 sm:pl-8 md:pl-16 lg:pl-32">
        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <Image
            src="/images/Background pattern (1).png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col gap-4 sm:gap-6  max-w-5xl mb-16">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px]"
            style={{
              fontFamily: '"Courier Prime", monospace'
            }}
          >
            <span className="text-white">Technical </span>
            <span className="text-[#CB3F24]">Resources</span>
          </h1>
          <p 
            className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-white max-w-[712px]"
            style={{
              fontFamily: '"Courier New", monospace',
              fontWeight: 400
            }}
          >
            Deep-dive into quantum sensing technology with our white papers, solution briefs, technical documentation, and latest media coverage.
          </p>
        </div>
      </SectionWrapper>

      {/* White Papers Section */}
      {whitePapers.length > 0 && (
      <SectionWrapper id="white-papers" className="bg-[rgba(7,7,7,1)] py-16 relative pl-4 sm:pl-8 md:pl-16 lg:pl-32 ">
        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <Image
            src="/images/Background pattern (1).png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mb-2 flex items-start gap-2">
          <div className="flex-1">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px] mb-3 sm:mb-4"
              style={{
                fontFamily: '"Courier Prime", monospace'
              }}
            >
              <span className="text-white">White </span>
              <span className="text-[#CB3F24]">Papers</span>
            </h2>
            <p 
              className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-white max-w-[771px]"
              style={{
                fontFamily: '"Courier New", monospace',
                fontWeight: 400
              }}
            >
              In-depth technical analyses of quantum sensing principles, system architectures, and application performance.
            </p>
          </div>
          {/* Decorative Element */}
          
        </div>
       
        <div className="relative z-10 mt-4 bg-[rgba(192,192,192,1)] min-w-[100%] sm:min-w-[90%] md:min-w-[80%] px-4 sm:px-6 pt-6 sm:pt-8 md:pt-10 pb-4 sm:px-10 overflow-visible">
          <div className="pointer-events-none absolute hidden lg:block bg-[rgba(192,192,192,1)] w-[230px] h-[140px] right-0 -top-30 transform" />
          <div className="pointer-events-none absolute hidden lg:flex items-center justify-center w-[70px] h-[68px] bg-[rgba(192,192,192,1)] right-66 -top-47 translate-x-1/2 transform">
            <Image
              src="/images/home/vector-1.png"
              alt=""
              width={45}
              height={45}
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whitePapers.map((paper, index) => (
              <div
                key={index}
                className="bg-[rgba(18,18,18,1)] p-6 relative"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Image
                    src="/images/products/physics-svgrepo-com (1) 3.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <h3 
                  className="text-sm sm:text-[14px] md:text-[16px] font-semibold text-white mb-3 leading-tight"
                  style={{ fontFamily: '"Courier New", monospace' }}
                >
                  {paper.title}
                </h3>
                <p 
                  className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-gray-300 mb-4"
                  style={{ fontFamily: '"Courier New", monospace', fontWeight: 400 }}
                >
                  {paper.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/products/physics-svgrepo-com (1) 3.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span 
                      className="text-[13px] text-white"
                      style={{ fontFamily: '"Courier New", monospace' }}
                    >
                      {paper.date}
                    </span>
                  </div>
                  
                </div>
                <Link
                  href={paper.link || "#"}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#CB3F24] hover:text-[#BE3B22] transition-colors"
                  style={{ fontFamily: '"Courier New", monospace' }}
                >
                  Download PDF <span>➜</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      )}

      {/* Solution Brief Section */}
      {solutionBriefs.length > 0 && (
      <SectionWrapper id="solution-briefs" className="bg-[rgba(7,7,7,1)] py-16 relative pl-4 sm:pl-8 md:pl-16 lg:pl-32">
        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <Image
            src="/images/Background pattern (1).png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mb-2 flex items-start gap-2">
          <div className="flex-1">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px] mb-3 sm:mb-4"
              style={{
                fontFamily: '"Courier Prime", monospace'
              }}
            >
              <span className="text-white">Solution </span>
              <span className="text-[#CB3F24]">Brief</span>
            </h2>
            <p 
              className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-white max-w-[771px]"
              style={{
                fontFamily: '"Courier New", monospace',
                fontWeight: 400
              }}
            >
              Concise overviews of QuBeats products, system capabilities, and application-specific configurations.
            </p>
          </div>
          {/* Decorative Element */}
          
        </div>
        
        <div className="relative z-10 mt-4 bg-[rgba(192,192,192,1)] min-w-[100%] sm:min-w-[90%] md:min-w-[80%] px-4 sm:px-6 pt-6 sm:pt-8 md:pt-10 pb-4 sm:px-10 overflow-visible">
          <div className="pointer-events-none absolute hidden lg:block bg-[rgba(192,192,192,1)] w-[230px] h-[140px] right-0 -top-30 transform" />
          <div className="pointer-events-none absolute hidden lg:flex items-center justify-center w-[70px] h-[68px] bg-[rgba(192,192,192,1)] right-66 -top-47 translate-x-1/2 transform">
            <Image
              src="/images/home/vector-1.png"
              alt=""
              width={45}
              height={45}
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionBriefs.map((brief, index) => (
              <div
                key={index}
                className="bg-[rgba(18,18,18,1)] p-6 relative"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Image
                    src="/images/products/physics-svgrepo-com (1) 3.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <h3 
                  className="text-base font-semibold text-white mb-3 leading-tight"
                  style={{ fontFamily: '"Courier New", monospace' }}
                >
                  {brief.title}
                </h3>
                <p 
                  className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-gray-300 mb-4"
                  style={{ fontFamily: '"Courier New", monospace', fontWeight: 400 }}
                >
                  {brief.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/products/physics-svgrepo-com (1) 3.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span 
                      className="text-[13px] text-white"
                      style={{ fontFamily: '"Courier New", monospace' }}
                    >
                      {brief.date}
                    </span>
                  </div>
                 
                </div>
                <Link
                  href={brief.link || "#"}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#CB3F24] hover:text-[#BE3B22] transition-colors"
                  style={{ fontFamily: '"Courier New", monospace' }}
                >
                  Download PDF <span>➜</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      )}

      {/* Technical Notes & Data Sheets Section */}
      {technicalNotes.length > 0 && (
      <SectionWrapper id="technical-notes" className="bg-[rgba(7,7,7,1)] py-16 relative pl-4 sm:pl-8 md:pl-16 lg:pl-32">
        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <Image
            src="/images/Background pattern (1).png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mb-2 flex items-start gap-2">
          <div className="flex-1">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px] mb-3 sm:mb-4"
              style={{
                fontFamily: '"Courier Prime", monospace'
              }}
            >
              <span className="text-white">Technical Notes & </span>
              <span className="text-[#CB3F24]">Data Sheets</span>
            </h2>
            <p 
              className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-white max-w-[710px]"
              style={{
                fontFamily: '"Courier New", monospace',
                fontWeight: 400
              }}
            >
              Detailed specifications, calibration procedures, and application notes for QuBeats sensor products.
            </p>
          </div>
          {/* Decorative Element */}
          
        </div>
        
        <div className="relative z-10 mt-4 bg-[rgba(192,192,192,1)] min-w-[100%] sm:min-w-[90%] md:min-w-[80%] px-4 sm:px-6 pt-6 sm:pt-8 md:pt-10 pb-4 sm:px-10 overflow-visible">
          <div className="pointer-events-none absolute hidden lg:block bg-[rgba(192,192,192,1)] w-[230px] h-[140px] right-0 -top-30 transform" />
          <div className="pointer-events-none absolute hidden lg:flex items-center justify-center w-[70px] h-[68px] bg-[rgba(192,192,192,1)] right-66 -top-47 translate-x-1/2 transform">
            <Image
              src="/images/home/vector-1.png"
              alt=""
              width={45}
              height={45}
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalNotes.map((note, index) => (
              <div
                key={index}
                className="bg-[rgba(18,18,18,1)] p-6 relative"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Image
                    src="/images/products/physics-svgrepo-com (1) 3.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <h3 
                  className="text-base font-semibold text-white mb-3 leading-tight"
                  style={{ fontFamily: '"Courier New", monospace' }}
                >
                  {note.title}
                </h3>
                <p 
                  className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-gray-300 mb-4"
                  style={{ fontFamily: '"Courier New", monospace', fontWeight: 400 }}
                >
                  {note.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/products/physics-svgrepo-com (1) 3.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span 
                      className="text-[13px] text-white"
                      style={{ fontFamily: '"Courier New", monospace' }}
                    >
                      {note.date}
                    </span>
                  </div>
                  
                </div>
                <Link
                  href={note.link || "#"}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#CB3F24] hover:text-[#BE3B22] transition-colors"
                  style={{ fontFamily: '"Courier New", monospace' }}
                >
                  Download PDF <span>➜</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      )}

      {/* Media & Press Conference Section */}
      {mediaItems.length > 0 && (
      <SectionWrapper id="media-press" className="bg-[rgba(7,7,7,1)] py-16 relative pl-4 sm:pl-8 md:pl-16 lg:pl-32">
        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <Image
            src="/images/Background pattern (1).png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mb-0">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px] mb-3 sm:mb-4"
            style={{
              fontFamily: '"Courier Prime", monospace'
            }}
          >
            <span className="text-white">Media & </span>
            <span className="text-[#CB3F24]">Press Releases</span>
          </h2>
          <p 
            className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-white max-w-[710px]"
            style={{
              fontFamily: '"Courier New", monospace',
              fontWeight: 400
            }}
          >
            Latest news on defense grants, naval innovation initiatives, strategic collaborations, and technology breakthroughs.
          </p>
        </div>
        
        <div className="relative z-10 min-w-[100%] sm:min-w-[90%] md:min-w-[80%] px-4 sm:px-6 pt-6 sm:pt-8 md:pt-10 pb-6 sm:px-10 overflow-visible">
          
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] border-l-4 border-[#CB3F24] border-t-0 border-r-0 border-b-0 relative py-8 px-6"
            >
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
                {/* Date and Source - Left */}
                <div className="flex-shrink-0 w-full md:w-[140px] lg:w-[180px]">
                  <div 
                    className="text-[15px] text-white mb-2"
                    style={{ 
                      fontFamily: '"Courier Prime", monospace',
                      fontWeight: 400,
                      lineHeight: '15.227px',
                      letterSpacing: '0.153px'
                    }}
                  >
                    {item.date}
                  </div>
                  <div 
                    className="text-[15px] text-[#CB3F24] uppercase tracking-wider"
                    style={{ 
                      fontFamily: '"Courier Prime", monospace',
                      fontWeight: 400,
                      lineHeight: '15.227px',
                      letterSpacing: '0.153px'
                    }}
                  >
                    {item.source}
                  </div>
                </div>
                
                {/* Title and Description - Center */}
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-sm sm:text-[14px] md:text-[16px] font-bold text-white mb-3"
                    style={{ 
                      fontFamily: '"Courier Prime", monospace',
                      fontWeight: 700
                    }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-[rgba(243,243,243,0.65)] max-w-[819px]"
                    style={{ 
                      fontFamily: '"Courier Prime", monospace',
                      fontWeight: 400
                    }}
                  >
                    {item.description}
                  </p>
                </div>
                
                {/* Read Article Link - Right */}
                <div className="flex-shrink-0">
                  <Link
                    href={item.link || "#"}
                    className="inline-flex items-center gap-2 text-[18px] font-bold text-[#CB3F24] hover:text-[#BE3B22] transition-colors"
                    style={{ 
                      fontFamily: '"Courier Prime", monospace',
                      fontWeight: 700,
                      lineHeight: 'normal'
                    }}
                  >
                    Read Article <span className="text-base">➜</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
      )}
    </>
  );
}
