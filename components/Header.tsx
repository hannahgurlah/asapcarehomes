"use client";

import { Mail, Menu, Phone, X, Bell } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#D1EBEB]">
        <div className="bg-[#D1EBEB] sm:bg-white py-1">
          <div className="container mx-auto">
            <nav className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
              <div className="mx-auto">
                <div className="relative flex items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}

                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:block">
                      <div className="flex">
                        <a
                          href="#"
                          className="rounded-md text-sm font-medium text-[#2a5557] hover:text-gray-400 pr-10 flex items-center gap-2"
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                          asaphomehealthservices@gmail.com
                        </a>
                        <a
                          href="#"
                          className="rounded-md text-sm font-medium text-[#2a5557] hover:text-gray-400 flex items-center gap-2"
                        >
                          <FontAwesomeIcon icon={faPhone} />
                          +1 510 5891411
                        </a>

                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto bg-black sm:bg-transparent">
                    <a
                      href="#"
                      className="relative flex rounded-full text-[#2a5557] hover:text-gray-400 hidden sm:block"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>

                    {/* Profile dropdown */}
                    <div className="relative ml-3">
                      <a
                        href="#"
                        className="relative flex rounded-full text-[#2a5557] hover:text-gray-400 hidden sm:block"
                      >
                        <span className="absolute -inset-1.5"></span>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>

                    </div>
                  </div>
                </div>
              </div>

              {isMobileMenuOpen && (
                <div id="mobile-menu" className="block sm:hidden">
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-[#2a5557] hover:text-gray-400"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-[#2a5557] hover:text-gray-400"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-[#2a5557] hover:text-gray-400"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-[#2a5557] hover:text-gray-400"
                    >
                      Our Care Homes
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-[#2a5557] hover:text-gray-400"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
        <div className="bg-[#D1EBEB] h-[90px]">
          <div className="container mx-auto">
            <nav className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
              <div className="mx-auto">
                <div className="relative flex h-16 items-center justify-between mt-5">
                  <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <button
                      type="button"
                      onClick={toggleMobileMenu}
                      className="relative inline-flex items-center justify-center rounded-md p-2 text-[#2a5557] hover:text-gray-400"
                    >
                      <span className="sr-only">Open main menu</span>
                      {isMobileMenuOpen ? (
                        <X className="size-6" />
                      ) : (
                        <Menu className="size-6" />
                      )}
                    </button>
                  </div>
                  {/* Logo on the left */}
                  <div className="flex items-center">
                    <Image
                      src="/logo.svg"
                      alt="Logo"
                      width={250}
                      height={100}
                    />
                  </div>
                  {/* Menu on the right Desktop View */}
                  <div className="flex items-center">
                    <div className="hidden sm:block">
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="rounded-md text-sm font-medium px-4 text-[#2a5557] hover:text-gray-400"
                        >
                          Home
                        </a>
                        <a
                          href="#"
                          className="rounded-md text-sm font-medium px-4 text-[#2a5557] hover:text-gray-400"
                        >
                          About
                        </a>
                        <a
                          href="#"
                          className="rounded-md text-sm font-medium px-4 text-[#2a5557] hover:text-gray-400"
                        >
                          Services
                        </a>
                        <a
                          href="#"
                          className="rounded-md text-sm font-medium px-4 text-[#2a5557] hover:text-gray-400"
                        >
                          Our Care Homes
                        </a>
                        <a
                          href="#"
                          className="rounded-md text-sm font-medium pl-4 text-[#2a5557] hover:text-gray-400"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {isMobileMenuOpen && (
                <div id="mobile-menu" className="block sm:hidden">
                  <div className="space-y-1 px-2 pt-2 pb-3">

                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    >
                      Our Care Homes
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
