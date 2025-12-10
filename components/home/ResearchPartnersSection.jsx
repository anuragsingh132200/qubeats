"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ResearchPartnersSection() {
  const sliderRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  const partnerLogos = [
    "/images/home/researchparteners/berkeley lab_logo.png",
    "/images/home/researchparteners/images (1).jpeg",
    "/images/home/researchparteners/images.jpeg",
    "/images/home/researchparteners/images.png",
    "/images/home/researchparteners/joint_quantum_institute_cover.jpeg",
    "/images/home/researchparteners/logo_fhi_w-text.png",
    "/images/home/researchparteners/LogoDerTechnischenUniversitätBerlin2020.svg.png",
    "/images/home/researchparteners/Screenshot 2025-12-10 104722.png",
    "/images/home/researchparteners/Screenshot 2025-12-10 104737.png",
    "/images/home/researchparteners/University_of_Pittsburgh_seal.svg",
    "/images/home/researchparteners/University-of-Maryland.png",
    "/images/home/researchparteners/Vrije-Universiteit-Amsterdam_thumb.png",
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Auto-scroll functionality
    const startAutoScroll = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (slider) {
          const scrollAmount = slider.scrollLeft + 1;
          const maxScroll = slider.scrollWidth - slider.clientWidth;
          
          if (scrollAmount >= maxScroll) {
            slider.scrollLeft = 0; // Reset to start
          } else {
            slider.scrollLeft = scrollAmount;
          }
        }
      }, 20); // Adjust speed by changing interval
    };

    startAutoScroll();

    // Pause on hover
    const handleMouseEnter = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    const handleMouseLeave = () => {
      startAutoScroll();
    };

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[rgba(18,18,18,1)] py-16">
      {/* Background pattern placeholder */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/home/bg-pattern-2.png"
          alt=""
          fill
          className="object-cover opacity-90"
        />
      </div>

      {/* Small atom tile placeholder (top-right) */}
      <div className="pointer-events-none absolute hidden lg:flex items-center justify-center w-[70px] h-[68px] bg-[rgba(192,192,192,1)] right-20 lg:right-85 top-20">
        <Image
          src="/images/home/vector-1.png"
          alt=""
          width={45}
          height={45}
          className="object-contain z-2"
        />
      </div>

      {/* Main content container */}
      <div className="relative mx-auto w-full max-w-[1400px] flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="absolute hidden lg:block bg-[rgba(192,192,192,1)] w-[180px] md:w-[200px] lg:w-[220px] h-[100px] md:h-[115px] lg:h-[130px] right-4 md:right-16 top-16 md:top-18 lg:top-21"></div>

        {/* Grey container with partner cards slider */}
        <div className="relative mt-4 bg-[rgba(192,192,192,1)] min-w-[100%] sm:min-w-[90%] md:min-w-[80%] px-4 sm:px-6 pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-10">
          {/* Horizontal slider */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 pb-4"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="bg-[rgba(18,18,18,1)] p-4 sm:p-6 pb-6 sm:pb-8">
                  <div className="relative h-32 sm:h-40 w-48 sm:w-56 bg-white">
                    <Image
                      src={logo}
                      alt={`Research partner ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate logos for infinite scroll effect */}
            {partnerLogos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="relative flex-shrink-0 pb-4"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="bg-[rgba(18,18,18,1)] p-4 sm:p-6 pb-6 sm:pb-8">
                  <div className="relative h-32 sm:h-40 w-48 sm:w-56 bg-white">
                    <Image
                      src={logo}
                      alt={`Research partner ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-[linear-gradient(180deg,rgba(11,11,11,0)_0%,rgba(7,7,7,1)_100%)]" />
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
