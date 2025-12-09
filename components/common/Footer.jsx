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
    name: "Facebook", 
    href: "#",
    icon: "/images/home/icons/Facebook.svg"
  },
  { 
    name: "Instagram", 
    href: "#",
    icon: "/images/home/icons/Instagram.svg"
  },
  { 
    name: "Twitter", 
    href: "#",
    icon: "/images/home/icons/Twitter.svg"
  },
  { 
    name: "LinkedIn", 
    href: "#",
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

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 py-12 sm:py-16 md:px-12">
        {/* Top Navigation Links - Centered */}
        <div className="mb-8 sm:mb-12 flex flex-wrap items-center justify-end gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-['Courier_Prime',monospace] text-sm sm:text-base md:text-[18px] font-bold leading-[21.6px] text-[#bdbdbd] opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Main Content: Logo/Tagline and Social Icons */}
        <div className="flex flex-col gap-8 sm:gap-12 md:flex-row md:items-start md:justify-between">
          {/* Left: Logo and Tagline */}
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
            
            {/* Tagline */}
            <p className="font-['Courier_Prime',monospace] text-sm sm:text-base md:text-[17px] font-bold leading-[25px] text-[rgba(192,192,192,0.85)] max-w-[338px] whitespace-pre-wrap">
              Quantum sensors with atomic precision.

              Lab-grade accuracy, engineered for the field.
            </p>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex h-[40px] w-[40px] sm:h-[47px] sm:w-[47px] items-center justify-center rounded-full bg-[silver] transition-opacity hover:opacity-80"
                aria-label={item.name}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={47}
                  height={47}
                  className="h-full w-full object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-8 sm:mt-12 border-t border-white/10 pt-4 sm:pt-6">
          <p className="text-center font-['Courier_Prime',monospace] text-xs sm:text-sm md:text-[17px] font-bold leading-[21.6px] text-[rgba(243,243,243,0.8)] px-4">
            @2025. Qubeats. All Rights Reserved. | Made in India, Build for the World
          </p>
        </div>
      </div>
    </footer>
  );
}

