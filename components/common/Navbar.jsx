'use client';
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "HOME", dropdown: false },
  { 
    href: "/products", 
    label: "PRODUCTS", 
    dropdown: false,
  },
  { href: "/technology", label: "TECHNOLOGY", dropdown: false },
  { href: "/careers", label: "CAREERS", dropdown: false },
  { 
    href: "/about", 
    label: "ABOUT US", 
    dropdown: true,
    dropdownItems: [
      { href: "/about", label: "Founding Team" },
      { href: "/advisors", label: "Advisors" },
      { href: "/contact", label: "Contact Us" },
      { href: "/products/resources", label: "Resources" }
    ]
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed sm:py-3 sm:pb-4 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(18,18,18,0.15)] border-b border-white/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[60px] sm:h-[80px] max-w-[1400px] items-center justify-between pl-4 pb-2 pr-4 transition-all duration-300 ">
        <Link href="/" className="mt-2 sm:mt-4 sm:ml-4  flex items-center">
          <img
            src="/images/home/logo 1.png"
            alt="QuBeats logo"
            className="h-[40px] w-auto sm:h-[80px] object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-6 lg:gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            const isDropdownOpen = openDropdown === link.label;
            
            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`relative text-center uppercase transition-all lg:text-base ${
                    isActive ? "text-white font-weight-900" : "text-[rgba(189,189,189,1)] font-weight-300 hover:text-white"
                  }`}
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "19px",
                    lineHeight: "21.6px",
                    letterSpacing: "0px",
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    {link.label}
                    {link.dropdown && (
                      <span className={`text-[14px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>▾</span>
                    )}
                  </span>
                </Link>
                
                {/* Dropdown Menu */}
                {link.dropdown && link.dropdownItems && isDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-48 z-50">
                    <div className="bg-[rgba(0,0,0,0.95)] border border-white/10 rounded-lg shadow-lg py-2">
                      {link.dropdownItems.map((item) => {
                        const isItemActive = isActiveLink(item.href);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-2 text-sm uppercase transition-colors ${
                              isItemActive 
                                ? "text-white bg-white/10" 
                                : "text-[rgba(189,189,189,1)] hover:text-white hover:bg-white/5"
                            }`}
                            style={{
                              fontFamily: "'Courier New', monospace",
                              fontSize: "14px",
                              lineHeight: "21.6px",
                            }}
                            onClick={handleDropdownClose}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-white md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-white/10 bg-[rgba(0,0,0,0.95)] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              const isDropdownOpen = openDropdown === link.label;
              
              return (
                <div key={link.href} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={`text-center uppercase transition-opacity flex-1 ${
                        isActive ? "text-white" : "text-[rgba(189,189,189,1)] hover:text-white"
                      }`}
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontWeight: 700,
                        fontSize: "19px",
                        lineHeight: "21.6px",
                        letterSpacing: "0px",
                      }}
                      onClick={() => {
                        if (!link.dropdown) {
                          setIsOpen(false);
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && link.dropdownItems && (
                      <button
                        type="button"
                        onClick={() => handleDropdownToggle(link.label)}
                        className="text-white ml-2"
                      >
                        <span className={`text-[14px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>▾</span>
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown Items */}
                  {link.dropdown && link.dropdownItems && isDropdownOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2 border-l border-white/20 pl-4">
                      {link.dropdownItems.map((item) => {
                        const isItemActive = isActiveLink(item.href);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm uppercase transition-opacity ${
                              isItemActive ? "text-white" : "text-[rgba(189,189,189,1)] hover:text-white"
                            }`}
                            style={{
                              fontFamily: "'Courier New', monospace",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "21.6px",
                            }}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}