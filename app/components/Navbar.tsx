const navLinks = [
  { label: "Injectables", href: "/injectables" },
  { label: "Laser Rejuvenation", href: "/laser-rejuvenation" },
  { label: "Laser Hair Removal", href: "/laser-hair-removal" },
  { label: "Facials", href: "/facials" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-28 max-w-[1500px] items-center justify-between px-6 sm:px-8">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/images/logos/logo.png"
              alt="Identity Aesthetics MedSpa"
              className="h-24 w-auto transition duration-300 hover:opacity-90"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
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

          {/* Header Booking Button */}
          <a
            href="#book-now"
            className="hidden items-center justify-center rounded-full bg-[#0c8a63] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#097353] lg:inline-flex"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* Floating Booking Button */}
      <a
        href="#book-now"
        aria-label="Book your consultation"
        className="group fixed bottom-6 right-6 z-[9999] inline-flex h-14 items-center overflow-hidden rounded-full bg-[#0c8a63] text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#097353] focus:outline-none focus:ring-4 focus:ring-[#0c8a63]/25"
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