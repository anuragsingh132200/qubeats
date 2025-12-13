"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ResearchPartnersSection() {
  const sliderRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const isScrollingRef = useRef(false);

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
    "/images/home/researchparteners/DRDO-logo.png",
    "/images/home/researchparteners/IDEX-Optical.png",
    "/images/home/researchparteners/images (2).jpeg",
    "/images/home/researchparteners/Indian_Army_Insignia_circular.png",
    "/images/home/researchparteners/Logo_NQM.png",
    "/images/home/researchparteners/T-Hub_Logo-PNG.png"
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollTimeout;
    let startTimeout;
    let firstSetWidth = 0;
    let isPaused = false;

    // Calculate the width of one set of logos for seamless reset
    const calculateWidth = () => {
      // Calculate width immediately, then update when images load
      firstSetWidth = slider.scrollWidth / 2;
      
      // Also wait for images to load for more accurate width
      const images = slider.querySelectorAll("img");
      let loadedCount = 0;
      const totalImages = images.length;

      if (totalImages === 0) return;

      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          // Recalculate after all images load
          firstSetWidth = slider.scrollWidth / 2;
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          checkAllLoaded();
        } else {
          img.addEventListener("load", checkAllLoaded, { once: true });
          img.addEventListener("error", checkAllLoaded, { once: true });
        }
      });
    };

    // Auto-scroll functionality with seamless infinite loop
    const startAutoScroll = () => {
      if (isScrollingRef.current || isPaused) return;
      isScrollingRef.current = true;

      scrollIntervalRef.current = setInterval(() => {
        if (slider && isScrollingRef.current && !isPaused && firstSetWidth > 0) {
          slider.scrollLeft += 2.5;
          
          // When we've scrolled past the first set, reset to start seamlessly
          if (slider.scrollLeft >= firstSetWidth) {
            slider.scrollLeft = slider.scrollLeft - firstSetWidth;
          }
        }
      }, 16); // ~60fps smooth scrolling
    };

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
      isScrollingRef.current = false;
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };

    const handleMouseLeave = () => {
      isPaused = false;
      startAutoScroll();
    };

    // Pause on manual scroll (touch/pointer events)
    let isUserScrolling = false;
    const handleTouchStart = () => {
      isUserScrolling = true;
      isPaused = true;
      isScrollingRef.current = false;
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };

    const handleTouchEnd = () => {
      isUserScrolling = false;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (!isUserScrolling && !isPaused) {
          isPaused = false;
          startAutoScroll();
        }
      }, 1500);
    };

    // Initialize after a short delay to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      calculateWidth();
      // Start scrolling after a brief delay to ensure width is calculated
      startTimeout = setTimeout(() => {
        if (firstSetWidth === 0) {
          firstSetWidth = slider.scrollWidth / 2;
        }
        // Ensure we have a valid width before starting
        if (firstSetWidth > 0) {
          startAutoScroll();
        } else {
          // Retry if width still not calculated
          firstSetWidth = slider.scrollWidth / 2;
          if (firstSetWidth > 0) {
            startAutoScroll();
          }
        }
      }, 300);
    }, 150);

    slider.addEventListener("mouseenter", handleMouseEnter);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("touchstart", handleTouchStart, { passive: true });
    slider.addEventListener("touchend", handleTouchEnd, { passive: true });
    slider.addEventListener("mousedown", handleTouchStart);
    slider.addEventListener("mouseup", handleTouchEnd);

    return () => {
      isScrollingRef.current = false;
      isPaused = false;
      clearTimeout(initTimeout);
      if (startTimeout) clearTimeout(startTimeout);
      clearTimeout(scrollTimeout);
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      slider.removeEventListener("mouseenter", handleMouseEnter);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
      slider.removeEventListener("mousedown", handleTouchStart);
      slider.removeEventListener("mouseup", handleTouchEnd);
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
      <div className="pointer-events-none absolute hidden lg:flex items-center justify-center w-[70px] h-[68px] bg-[rgba(192,192,192,1)] right-20 lg:right-71 top-20">
        <Image
          src="/images/home/vector-1.png"
          alt=""
          width={45}
          height={45}
          className="object-contain z-2"
        />
      </div>

      {/* Main content container */}
      <div className="relative mx-auto w-full max-w-[1400px] flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 md:px-10 lg:px-16 pt-2">
        {/* OUR PARTNERS label */}
        <p
          className="inline py-2 uppercase"
          style={{
            color: "rgba(243,243,243,0.8)",
            fontFamily: '"Courier New", monospace',
            fontWeight: 400,
            fontSize: "clamp(16px, 3vw, 24px)",
            lineHeight: "1.4",
            letterSpacing: "0px",
          }}
        >
          Customers & Academic Associations
        </p>

        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px]"
          style={{ fontFamily: '"Courier Prime", monospace' }}
        >
          <span className="text-white">
          Partners{" "}
          </span>
          <span className="text-[#CB3F24]">
            And Affiliations
          </span>
        </h2>

        <div className="absolute hidden lg:block bg-[rgba(192,192,192,1)] w-[180px] md:w-[200px] lg:w-[160px] h-[100px] md:h-[115px] lg:h-[130px] right-4 md:right-16 top-16 md:top-18 lg:top-21"></div>

        {/* Grey container with partner cards slider */}
        <div className="relative mt-4 bg-[rgba(192,192,192,1)] min-w-[100%] sm:min-w-[90%] md:min-w-[80%] px-4 sm:px-6 pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-10">
          {/* Horizontal slider */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide"
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 pb-4"
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
