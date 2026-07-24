"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Injectables", href: "/injectables" },
  { label: "Laser Treatments", href: "/laser-rejuvenation" },
  { label: "Facials", href: "/facials" },
  { label: "Gallery", href: "/gallery" },
 { label: "Meet the Team", href: "/about" }, 
  { label: "Payment Plans", href: "/payment-plans" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-5 sm:h-28 sm:px-8">
          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-stone-700 transition hover:border-[#a8b7a2] hover:text-[#6f876f] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <a
            href="/"
            aria-label="Identity Aesthetics MedSpa home"
            className="absolute left-1/2 flex-shrink-0 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <img
              src="/images/logos/logo.png"
              alt="Identity Aesthetics MedSpa"
              className="h-20 w-auto transition duration-300 hover:opacity-90 sm:h-24"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 xl:gap-10 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide text-stone-700 transition hover:text-[#6f876f]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Booking Button */}
          <a
            href="#book-now"
            className="hidden items-center justify-center rounded-full bg-[#0c8a63] px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#097353] lg:inline-flex"
          >
            Book Consultation
          </a>

          {/* Mobile Booking Icon */}
          <a
            href="#book-now"
            aria-label="Book a consultation"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0c8a63] text-white transition hover:bg-[#097353] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        aria-hidden={!mobileMenuOpen}
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-[9998] bg-black/35 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Left-Side Navigation */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`fixed left-0 top-0 z-[9999] flex h-full w-[86%] max-w-sm flex-col bg-[#f9f7f4] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
          <a
            href="/"
            onClick={closeMobileMenu}
            aria-label="Identity Aesthetics MedSpa home"
          >
            <img
              src="/images/logos/logo.png"
              alt="Identity Aesthetics MedSpa"
              className="h-20 w-auto"
            />
          </a>

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMobileMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 text-stone-700 transition hover:border-[#a8b7a2] hover:text-[#6f876f]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </button>
        </div>

        <nav
          aria-label="Mobile menu links"
          className="flex flex-1 flex-col overflow-y-auto px-7 py-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="border-b border-stone-200 py-4 text-base font-medium tracking-wide text-stone-700 transition hover:pl-2 hover:text-[#6f876f]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#book-now"
            onClick={closeMobileMenu}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0c8a63] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#097353]"
          >
            Book Consultation
          </a>
        </nav>

        <div className="border-t border-stone-200 px-7 py-5">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
            Identity Aesthetics MedSpa
          </p>
          <p className="mt-1 text-sm text-stone-600">Kingwood, Texas</p>
        </div>
      </aside>

      {/* Floating Booking Button */}
      <a
        href="#book-now"
        aria-label="Book your consultation"
        className="group fixed bottom-6 right-6 z-[9000] hidden h-14 items-center overflow-hidden rounded-full bg-[#0c8a63] text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#097353] focus:outline-none focus:ring-4 focus:ring-[#0c8a63]/25 sm:inline-flex"
      >
        <span className="flex h-14 w-14 flex-none items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </span>

        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold uppercase tracking-[0.12em] opacity-0 transition-all duration-300 group-hover:max-w-[240px] group-hover:pr-6 group-hover:opacity-100">
          Book Your Consultation
        </span>

        <span className="pr-5 text-sm font-semibold uppercase tracking-[0.12em] group-hover:hidden">
          Book
        </span>
      </a>
    </>
  );
}