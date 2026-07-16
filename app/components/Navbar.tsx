const navLinks = [
  { label: "Injectables", href: "#injectables" },
  { label: "Laser Treatments", href: "#laser" },
  { label: "Facials", href: "#facials" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-35 max-w-[1500px] items-center gap-14 px-6">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/identity-logo.png"
            alt="Identity Aesthetics MedSpa"
            className="h-35 w-auto transition duration-300 hover:opacity-90"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-2 text-sm font-medium text-stone-700 transition hover:text-[#6f876f]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/#book-now"
          className="inline-flex items-center justify-center rounded-full bg-[#0c8a63] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#097353]"
        >
          Book Consultation
        </a>
      </div>
    </header>
  );
}