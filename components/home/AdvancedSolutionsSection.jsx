"use client";
import Image from "next/image";
import React from "react";

export default function AdvancedSolutionsSection() {
  const points = [
    {
      id: 1,
      content: (
        <>
          We deliver robust navigation for{" "}
          <span id="highlight-strong">GPS-denied environments</span>.
          Our atomic sensors simultaneously offer magnetic anomaly detection
          and electromagnetic spectrum awareness for total battlefield
          clarity—all in a compact, power-efficient, and cost-effective
          package.
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          Passive sensing architecture ensures{" "}
          <strong className="highlight-strong">zero-emission stealth</strong>,
          enabling covert operations without revealing platform location.
        </>
      ),
    },
  ];

  return (
    <section
      className="advanced-solutions-section relative w-full py-20 sm:py-28"
      aria-labelledby="advanced-quantum-heading"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:items-start">
          {/* Left: image block + top-right rectangular box grouped inside same parent */}
          <div className="relative w-full max-w-[640px] lg:flex-1">
            {/* This wrapper holds both the aircraft image and the top-right box so the box visually sits *on top of* the image */}
            <div className="relative overflow-hidden w-full max-w-[580px] aspect-[580/503]">
              {/* Airplane image (full cover of wrapper) */}
              <Image
                src="/images/home/heroimage.jpg"
                alt="Stealth aircraft formation"
                width={580}
                height={503}
                className="w-full h-full object-cover grayscale"
                priority
              />
            </div>

            {/* TOP-RIGHT rectangular box that is *part of the same visual block* (positioned relative to wrapper) */}
          </div>

          {/* Right: text block */}
          <div className="w-full lg:flex-1">
            <h2
              id="advanced-quantum-heading"
              className="mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px]"
            >
              <span className="block heading-bold">Advanced Quantum</span>
              <span className="block heading-bold">
                Sensing <span className="orange-word">Solutions</span>
              </span>
            </h2>

            <div className="space-y-8">
              {points.map((item) => (
                <div key={item.id} className="flex items-start gap-5">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center">
                    <Image
                      src="/images/home/vector-2.png"
                      alt=""
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                  </div>

                  <p className="body-light-text">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* full-screen subtle patterned background (applies to entire section) */}
      <style jsx>{`
        /* Import fonts */
        @import url("https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap");

        :global(body) {
          font-family: "Courier Prime", "Courier New";
        }

        .advanced-solutions-section {
          /* the requested pattern should cover the whole hero area */
          background-image: url("/images/home/bg-pattern.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-color: rgba(18, 18, 18, 1); /* black token fallback */
        }

        /* Heading (bold heading rules) */
        .heading-bold {
          font-family: "Courier Prime";
          font-weight: 700;
          font-style: bold;
          font-size: inherit;
          line-height: inherit;
          letter-spacing: 0px;
          color: white;
          -webkit-font-smoothing: antialiased;
        }

        /* orange word gradient for "solutions" */
        .orange-word {
          color: #CB3F24;
        }

        /* body lighter text */
        .body-light-text {
          font-family: "Courier Prime";
          font-weight: 300;
          font-style: regular;
          font-size: 14px;
          line-height: 1.7;
          letter-spacing: -1.14px;
          color: rgba(243, 243, 243, 0.8);
          max-width: 640px;
        }
        
        @media (min-width: 640px) {
          .body-light-text {
            font-size: 14px;
          }
        }
        
        @media (min-width: 768px) {
          .body-light-text {
            font-size: 16px;
          }
        }

        /* highlight strong text (bold inline) */
        #highlight-strong {
          font-family: "Courier Prime";
          font-weight: 700;
          font-style: bold;
          font-size: 19px;
          line-height: 28px;
          letter-spacing: -1.14px;
          color: rgba(243, 243, 243, 0.95);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .advanced-solutions-section .object-cover {
            height: auto;
            max-height: 420px;
          }
        }

        @media (max-width: 640px) {
          .body-light-text {
            font-size: 16px;
            line-height: 24px;
          }
          /* move the top-right box inside viewport on small screens by hiding it */
          .advanced-solutions-section > div .absolute.-top-10.right-8 {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
