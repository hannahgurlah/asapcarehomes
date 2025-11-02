"use client";

import { Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/**
 * Sticky Header Component based on Figma Design
 *
 * Structure:
 * - Rectangle 49: 44px white top bar (utility bar)
 * - Dropdown header navigation: 110px teal background (#D1EBEB) navigation area
 * - Header: 80px content container centered within navigation area
 *
 * Total height: 154px (44px + 110px)
 * Max width: 1440px (centered)
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        {/* Rectangle 49 - Top utility bar */}
        {/* Hide on mobile (< 768px), show on tablet and up */}
        <div className="hidden md:block absolute left-0 top-0 w-full h-[44px] bg-white z-10">
          {/* Inner container for content positioning - max-width 1440px centered */}
          <div className="relative w-full max-w-[1440px] mx-auto h-full px-4">
            {/* Frame 1171275309 - Email contact */}
            {/* Responsive positioning - adjust for smaller screens */}
            <div className="absolute left-4 md:left-[135px] top-[12px] flex flex-row items-center gap-[5px]">
              {/* Email Icon - 20x20px */}
              <Mail
                className="w-5 h-5 flex-none text-[#050505]"
                strokeWidth={1.5}
              />
              {/* Email text - hide on smaller screens, show text on larger */}
              <a
                href="mailto:asaphomehealthservices@gmail.com"
                className="hidden lg:block w-[268px] h-[21px] font-normal text-sm leading-[21px] text-[#050505] hover:opacity-80 transition-opacity truncate"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                asaphomehealthservices@gmail.com
              </a>
            </div>

            {/* Frame 1171275310 - Phone contact */}
            <div className="absolute left-48 md:left-[447px] top-[12px] flex flex-row items-center gap-[5px]">
              {/* Phone Icon - 20x20px */}
              <Phone
                className="w-5 h-5 flex-none text-[#050505]"
                strokeWidth={1.5}
              />
              {/* Phone text */}
              <a
                href="tel:+15105891411"
                className="w-auto h-[21px] font-normal text-sm leading-[21px] text-[#050505] hover:opacity-80 transition-opacity"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <span className="hidden lg:inline">+1 510 5891411</span>
                <span className="lg:hidden">(510) 589-1411</span>
              </a>
            </div>

            {/* Frame 1171275314 - Social media and language selector */}
            {/* Hide on smaller screens, show on large screens */}
            <div className="hidden xl:flex absolute right-0 top-[10px] flex-row items-center gap-6 w-auto h-6">
              {/* Frame 1171275312 - Social media icons */}
              <div className="flex flex-row items-start gap-6 h-4">
                {/* LinkedIn Icon - 16x16px - Custom SVG */}
                <a
                  href="#"
                  className="w-4 h-4 flex-none hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_0_2164)">
                      <path
                        d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z"
                        fill="#050505"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_2164">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                {/* Facebook Icon - 16x16px - Custom SVG */}
                <a
                  href="#"
                  className="w-4 h-4 flex-none hover:opacity-80 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                      fill="#050505"
                    />
                  </svg>
                </a>
              </div>

              {/* Line divider */}
              <div className="w-3 h-0 border border-[#050505] rotate-90 flex-none" />

              {/* Frame 1171275313 - Language selector */}
              <div className="flex flex-row items-center gap-2 w-[115px] h-6 mr-[141px]">
                {/* Laptop icon with flag */}
                <div className="flex flex-row items-start p-1 gap-[10px] w-6 h-6 bg-black/4 rounded-[40px] flex-none relative">
                  <span
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm leading-6 text-center"
                    style={{
                      fontFamily: "var(--font-plus-jakarta-sans)",
                      fontWeight: 700,
                    }}
                  >
                    🇺🇸
                  </span>
                </div>
                {/* English (US) text */}
                <span
                  className="w-[83px] h-[19px] text-base leading-[120%] text-[#050505] flex-none"
                  style={{ fontFamily: "var(--font-urbanist)" }}
                >
                  English (US)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown header navigation container */}
        {/* Responsive height: 80px on mobile, 110px on desktop */}
        <div
          className={`absolute left-0 top-0 md:top-[44px] w-full ${
            isMobileMenuOpen ? "h-auto min-h-[80px]" : "h-[80px]"
          } md:h-[110px] bg-[#D1EBEB] border-b border-white/11 z-20 box-border relative overflow-visible transition-all duration-300`}
        >
          {/* Inner container for content positioning - max-width 1440px centered */}
          <div className="relative w-full max-w-[1440px] mx-auto h-full px-4">
            {/* Mobile: Flex layout for logo and menu button */}
            {/* Desktop: Absolute positioning for logo and menu */}
            <div className="flex md:block flex-row items-center justify-between md:justify-start h-full md:h-[80px] relative py-2 md:py-0">
              {/* Logo - Responsive sizing and positioning */}
              <div className="relative md:absolute left-0 md:left-[134px] flex items-center h-full md:top-[10px] md:translate-y-0 z-30">
                <Image
                  src="/logo.svg"
                  alt="ASAP Care Homes"
                  width={309.27}
                  height={90}
                  className="h-[50px] md:h-[70px] lg:h-auto w-auto max-h-full"
                  priority
                />
              </div>

              {/* Desktop Navigation menu items - positioned absolutely */}
              <nav className="hidden lg:block">
                {/* Home - left: 654px */}
                <a
                  href="#"
                  className="absolute left-[654px] top-[43px] w-[48px] h-6 font-medium text-base leading-6 text-[#191A23] hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Home
                </a>

                {/* About - left: 766px */}
                <a
                  href="#"
                  className="absolute left-[766px] top-[43px] w-[49px] h-6 font-medium text-base leading-6 text-[#191A23] hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  About
                </a>

                {/* Services - left: 879px */}
                <a
                  href="#"
                  className="absolute left-[879px] top-[43px] w-[68px] h-6 font-medium text-base leading-6 text-[#191A23] hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Services
                </a>

                {/* Our Care Homes - left: 1011px */}
                <a
                  href="#"
                  className="absolute left-[1011px] top-[43px] w-[134px] h-6 font-medium text-base leading-6 text-[#191A23] hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Our Care Homes
                </a>

                {/* Contact Us - left: 1209px */}
                <a
                  href="#"
                  className="absolute left-[1209px] top-[43px] w-[90px] h-6 font-medium text-base leading-6 text-[#191A23] hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Contact Us
                </a>
              </nav>

              {/* Mobile menu button - Touch-friendly 44px minimum */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 -mr-2 text-gray-700 hover:bg-white/20 rounded-lg transition-colors touch-manipulation"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation Menu - Slide down animation */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "max-h-[500px] opacity-100 pb-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <nav className="flex flex-col space-y-1 pt-4">
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-[#191A23] font-medium text-base leading-6 hover:bg-white/20 rounded-lg transition-colors touch-manipulation"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Home
                </a>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-[#191A23] font-medium text-base leading-6 hover:bg-white/20 rounded-lg transition-colors touch-manipulation"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  About
                </a>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-[#191A23] font-medium text-base leading-6 hover:bg-white/20 rounded-lg transition-colors touch-manipulation"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Services
                </a>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-[#191A23] font-medium text-base leading-6 hover:bg-white/20 rounded-lg transition-colors touch-manipulation"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Our Care Homes
                </a>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-[#191A23] font-medium text-base leading-6 hover:bg-white/20 rounded-lg transition-colors touch-manipulation"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Contact Us
                </a>

                {/* Mobile: Social and language selector */}
                <div className="flex flex-row items-center gap-4 px-4 pt-4 border-t border-white/20">
                  <div className="flex flex-row items-center gap-4">
                    {/* Email icon */}
                    <a
                      href="mailto:asaphomehealthservices@gmail.com"
                      className="p-2 hover:opacity-80 transition-opacity touch-manipulation"
                      aria-label="Email"
                    >
                      <Mail
                        className="w-5 h-5 text-[#050505]"
                        strokeWidth={1.5}
                      />
                    </a>
                    {/* Phone icon */}
                    <a
                      href="tel:+15105891411"
                      className="p-2 hover:opacity-80 transition-opacity touch-manipulation"
                      aria-label="Phone"
                    >
                      <Phone
                        className="w-5 h-5 text-[#050505]"
                        strokeWidth={1.5}
                      />
                    </a>
                    {/* LinkedIn icon */}
                    <a
                      href="#"
                      className="p-2 hover:opacity-80 transition-opacity touch-manipulation"
                      aria-label="LinkedIn"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_0_2164)">
                          <path
                            d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z"
                            fill="#050505"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_2164">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    {/* Facebook icon */}
                    <a
                      href="#"
                      className="p-2 hover:opacity-80 transition-opacity touch-manipulation"
                      aria-label="Facebook"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                          fill="#050505"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="h-6 w-px bg-white/20" />
                  <div className="flex flex-row items-center gap-2">
                    <div className="w-6 h-6 bg-black/4 rounded-full flex items-center justify-center">
                      <span className="text-xs">🇺🇸</span>
                    </div>
                    <span
                      className="text-sm text-[#050505]"
                      style={{ fontFamily: "var(--font-urbanist)" }}
                    >
                      English (US)
                    </span>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
