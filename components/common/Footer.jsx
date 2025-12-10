import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/products", label: "PRODUCTS" },
  { href: "/technology", label: "TECHNOLOGY" },
  { href: "/about", label: "ABOUT US" },
  { href: "/careers", label: "CAREERS" },
  { href: "/contact", label: "CONTACT" },
];

const socialItems = [
  { 
    name: "Twitter", 
    href: "https://x.com/QuBeatsTech",
    icon: "/images/home/researchparteners/images (1).svg"
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/company/qubeats/",
    icon: "/images/home/icons/LinkedIn.svg"
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#070707] overflow-hidden">
      {/* Background pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, rgba(0,240,255,0.15) 0px, rgba(0,240,255,0.15) 1px, transparent 1px, transparent 96px),
                            repeating-linear-gradient(90deg, rgba(0,240,255,0.15) 0px, rgba(0,240,255,0.15) 1px, transparent 1px, transparent 96px)`,
        }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 pt-12 sm:pt-16 pb-4 sm:pb-6 md:px-12">
        {/* Main Content: Two-column layout with top alignment */}
        <div className="flex flex-col gap-8 sm:gap-12 md:flex-row md:items-start md:justify-between">
          {/* Left: Logo, Company Name, Tagline, and Description */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/LogoNew.png"
                alt="QuBeats logo"
                width={156}
                height={133}
                className="h-auto w-[120px] sm:w-[140px] md:w-[156px]"
              />
            </div>
            
            {/* Description */}
            <p className="font-['Courier_Prime',monospace] text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-[rgba(192,192,192,0.85)] max-w-[338px] whitespace-pre-wrap">
              Quantum sensors with atomic precision.
              Lab-grade accuracy, engineered for the field.
            </p>
          </div>

          {/* Right: Navigation Links and Social Icons */}
          <div className="flex flex-col gap-6 sm:gap-8 items-end">
            {/* Top Navigation Links */}
            <div className="flex flex-wrap items-center justify-end gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-['Courier_Prime',monospace] text-sm sm:text-base md:text-[18px] font-bold leading-[21.6px] text-white transition-opacity hover:opacity-80"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {socialItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex h-[40px] w-[40px] sm:h-[47px] sm:w-[47px] items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80 overflow-hidden"
                  aria-label={item.name}
                >
                  {item.name === "LinkedIn" ? (
                    <svg
                      className="h-full w-full p-2 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ) : (
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={47}
                      height={47}
                      className="h-full w-full object-cover rounded-full grayscale opacity-70"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className=" border-t border-white/10 pt-3 sm:pt-4 pb-0">
          <p className="text-center font-['Courier_Prime',monospace] text-xs sm:text-sm md:text-[17px] font-bold leading-[21.6px] text-[rgba(243,243,243,0.8)] px-4">
            @2025. Qubeats. All Rights Reserved. | Made in India, Build for the World
          </p>
        </div>
      </div>
    </footer>
  );
}

