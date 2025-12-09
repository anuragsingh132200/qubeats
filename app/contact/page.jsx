import SectionWrapper from "@/components/common/SectionWrapper";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | QuBeats",
  description:
    "Get in touch with QuBeats. Contact us for inquiries about quantum sensing solutions, partnerships, and collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <SectionWrapper id="contact" className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-[rgba(11,11,11,1)]">
        <div className="relative overflow-hidden">
          {/* Background pattern */}
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/images/home/bg-pattern-2.png"
              alt=""
              fill
              priority
              className="object-cover opacity-80"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white lg:text-6xl mb-6 sm:mb-8">
              Contact <span className="text-[#cb3f24]">Us</span>
            </h1>

            {/* Description */}
            <p
              className="max-w-2xl text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-[rgba(255, 255, 255, 0.8)] mb-8 sm:mb-12"
              style={{ fontFamily: "Courier New", fontWeight: 400, letterSpacing: "-0.1em" }}
            >
              Have questions about our quantum sensing solutions? Want to explore partnership opportunities? 
              We'd love to hear from you. Get in touch with our team.
            </p>

            {/* Contact Button */}
            <div className="flex justify-start">
              <a
                href="mailto:contact@qubeats.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base transition-all hover:opacity-90"
                style={{
                  fontFamily: '"Courier Prime", monospace',
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  background: "linear-gradient(90deg,#CB3F24 0%,#BE3B22 100%)",
                  color: "#FFFFFF",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

