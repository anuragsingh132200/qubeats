export default function ProductsHeroSection() {
  return (
    <section
      id="products-hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden pt-20 sm:pt-24"
    >

      {/* Content */}
      <div className="relative -top-10 sm:-top-16 md:-top-20 z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 text-white">
        {/* Heading */}
        <div>
          <h1
            className="mb-4 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight"
            style={{ fontFamily: '"Courier Prime", monospace', fontWeight: 700 }}
          >
            <span className="text-white">Our </span>
            <span className="text-[#CB3F24]">Products</span>
          </h1>
        </div>

        {/* Two-column description, matching layout in design */}
        <div className="grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 text-sm sm:text-[14px] leading-[1.7] tracking-tight md:text-[16px] md:grid-cols-2">
          <p
            className="text-slate-200"
            style={{  fontFamily: '"Courier New", monospace',
                    fontWeight: 400,
                    color: "rgba(243, 243, 243, 0.9)", }}
          >
            At QuBeats Technologies, we offer a comprehensive suite of quantum
            sensing and metrology products designed to deliver unmatched
            precision and performance across various applications.
          </p>
          <p
            className="text-slate-200"
            style={{  fontFamily: '"Courier New", monospace',
                    fontWeight: 400,
                    color: "rgba(243, 243, 243, 0.9)", }}
          >
            Our innovative solutions harness the principles of quantum
            mechanics to meet the rigorous demands of industries such as
            healthcare, telecommunications, environmental monitoring, and
            research.
          </p>
        </div>
      </div>
    </section>
  );
}
