import SectionWrapper from "@/components/common/SectionWrapper";

const products = [
  {
    product: "QB-OPM-S (Scalar)",
    type: "Tactical scalar magnetometer",
    useCase: "Magnetic map-matching navigation",
    environment: "Airborne / Subsea"
  },
  {
    product: "QB-OPM-V (Vector)",
    type: "3-axis quantum magnetometer",
    useCase: "Magnetic compassing, attitude determination",
    environment: "Earth's field"
  },
  {
    product: "QB-OptiTime",
    type: "Optical atomic clock",
    useCase: "GNSS-denied timing, network sync",
    environment: "Compact, low-power"
  },
  {
    product: "QB-Spectrum",
    type: "Rydberg RF sensor",
    useCase: "Spectrum awareness, signal detection",
    environment: "Passive, zero-emission"
  },
  {
    product: "QB-MagNav",
    type: "Mag-aided PNT system",
    useCase: "GPS-denied navigation",
    environment: "Air/sea/land"
  },
  {
    product: "QB-Grad",
    type: "Quantum gradiometer system",
    useCase: "Underwater anomaly detection",
    environment: "Maritime/subsea"
  },
  {
    product: "QB-Fusion",
    type: "Navigation engine software",
    useCase: "Real-time sensor fusion, map-matching",
    environment: "Edge computing, embedded"
  },
  {
    product: "QB-Studio",
    type: "Mission control software",
    useCase: "Fleet management, calibration, analytics",
    environment: "Distributed sensor networks"
  }
];

export default function ProductFamilyOverviewSection() {
  return (
    <SectionWrapper id="product-family" className="bg-black">
      <div className="flex flex-col gap-4 sm:gap-6 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white lg:text-5xl">
          Product Family <span className="text-[#FF6B35]">Overview</span>
        </h2>
      </div>
      
      <div className="overflow-x-auto -mx-4 sm:-mx-6 md:mx-0">
        <table className="w-full border-separate min-w-[600px]" style={{ borderSpacing: "0 10px" }}>
          <thead>
            <tr className="bg-[#C0C0C0] h-[60px] sm:h-[70px]">
              <th className="text-left py-4 pl-4 sm:pl-6 md:pl-[38px] pr-4 sm:pr-6 text-sm sm:text-base md:text-lg lg:text-[22px] font-bold text-[#121212]">
                Product
              </th>
              <th className="text-left py-4 px-3 sm:px-6 text-sm sm:text-base md:text-lg lg:text-[22px] font-bold text-[#121212]">
                Type
              </th>
              <th className="text-left py-4 px-3 sm:px-6 text-sm sm:text-base md:text-lg lg:text-[22px] font-bold text-[#121212]">
                Key Use Case
              </th>
              <th className="text-left py-4 px-3 sm:px-6 text-sm sm:text-base md:text-lg lg:text-[22px] font-bold text-[#121212]">
                Environment
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              // Parse product name to handle different font sizes for parentheses
              const productNameParts = item.product.match(/^(.+?)\s*(\(.+?\))?$/);
              const mainName = productNameParts?.[1] || item.product;
              const parentheses = productNameParts?.[2] || "";
              
              // Determine row height based on content
              const rowHeights = [70, 100, 70, 90, 70, 70, 90, 90];
              const rowHeight = rowHeights[index] || 70;
              
              return (
                <tr
                  key={item.product}
                  className="bg-[#121212] border-l-[4.4px] border-r-[4.4px] border-[#FF6B35] border-t-0 border-b-0"
                  style={{ height: `${rowHeight}px` }}
                >
                  <td className="py-4 pl-4 sm:pl-6 md:pl-[35px] pr-3 sm:pr-6 text-white font-bold">
                    {parentheses ? (
                      <span>
                        <span className="text-sm sm:text-base md:text-lg lg:text-[20px]">{mainName} </span>
                        <span className="text-xs sm:text-sm md:text-[14px]">{parentheses}</span>
                      </span>
                    ) : (
                      <span className="text-sm sm:text-base md:text-lg lg:text-[20px]">{item.product}</span>
                    )}
                  </td>
                  <td className="py-4 px-3 sm:px-6 text-xs sm:text-sm md:text-base lg:text-[17px] text-[rgba(243,243,243,0.68)] font-bold">
                    {item.type}
                  </td>
                  <td className="py-4 px-3 sm:px-6 text-xs sm:text-sm md:text-base lg:text-[17px] text-[rgba(243,243,243,0.68)] font-bold leading-[1.5]">
                    {item.useCase}
                  </td>
                  <td className="py-4 px-3 sm:px-6 text-xs sm:text-sm md:text-base lg:text-[17px] text-[rgba(243,243,243,0.68)] font-bold leading-[1.5]">
                    {item.environment}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}
