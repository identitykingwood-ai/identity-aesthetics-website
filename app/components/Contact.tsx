export default function Contact() {
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=2610+Chestnut+Ridge+Rd+Kingwood+TX+77339";

  const mapUrl =
    "https://www.google.com/maps?q=Identity+Aesthetics+MedSpa,+2610+Chestnut+Ridge+Rd,+Kingwood,+TX+77339&output=embed";

  const readReviewsUrl =
    "https://maps.app.goo.gl/AWef66GEQmqqwB7W8";

  const leaveReviewUrl =
    "https://g.page/r/CUwxC-uAiDXqEAI/review";

  const instagramUrl =
    "https://www.instagram.com/identityaesthetic/";

  const facebookUrl =
    "https://www.facebook.com/Identityaestheticsmedspa";

  return (
    <>
      {/* Contact and Map */}
      <section
        id="contact"
        className="bg-[#f9f7f4] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-24"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm lg:grid-cols-[42%_58%]">
            <div className="flex items-center px-8 py-14 sm:px-12 lg:px-14">
              <div className="max-w-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6f876f] sm:text-sm">
                  Visit Identity Aesthetics
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-tight text-[#222222] sm:text-5xl">
                  Luxury Aesthetic Care
                  <span className="block text-[#6f876f]">
                    in Kingwood, Texas
                  </span>
                </h2>

                <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg">
                  Experience personalized injectables, advanced laser
                  treatments, laser hair removal, and customized skincare in a
                  warm, private medspa environment.
                </p>

                <div className="mt-9 border-t border-stone-200 pt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c7a35b]">
                    Our Location
                  </p>

                  <address className="mt-3 not-italic text-lg leading-8 text-stone-700">
                    Identity Aesthetics MedSpa
                    <br />
                    2610 Chestnut Ridge Rd
                    <br />
                    Kingwood, TX 77339
                  </address>
                </div>

                <div className="mt-7 space-y-3">
                  <a
                    href="tel:+13466009090"
                    className="block text-lg font-medium text-stone-700 transition hover:text-[#6f876f]"
                  >
                    (346) 600-9090
                  </a>

                  <a
                    href="mailto:identitykingwood@713botoxme.com"
                    className="block break-all text-stone-700 transition hover:text-[#6f876f]"
                  >
                    identitykingwood@713botoxme.com
                  </a>
                </div>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#6f876f] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#536b53]"
                  >
                    Get Directions
                  </a>

                  <a
                    href="/#book-now"
                    className="inline-flex items-center justify-center rounded-full border border-[#6f876f] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[#536b53] transition hover:bg-[#6f876f] hover:text-white"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>

            <div className="relative min-h-[450px] lg:min-h-[620px]">
              <iframe
                src={mapUrl}
                title="Map showing Identity Aesthetics MedSpa in Kingwood, Texas"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222222] px-6 py-16 text-white sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-[1500px]">
          {/* Centered Brand */}
          <div className="border-b border-white/15 pb-12 text-center">
            <a
              href="/"
              aria-label="Identity Aesthetics MedSpa homepage"
              className="inline-flex justify-center"
            >
              <img
                src="/identity-logo.png"
                alt="Identity Aesthetics MedSpa"
                className="h-28 w-auto object-contain sm:h-32"
              />
            </a>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/70">
              Personalized injectables, advanced laser treatments, laser hair
              removal, and customized skincare in a relaxing, luxury
              environment.
            </p>

            <p className="mt-4 text-sm leading-6 text-white/55">
              Physician-directed aesthetic care under the direction of Dallas
              Alvey, MD.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 transition hover:text-[#c7a35b]"
              >
                Instagram
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 transition hover:text-[#c7a35b]"
              >
                Facebook
              </a>

              <a
                href={readReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 transition hover:text-[#c7a35b]"
              >
                Google Profile
              </a>
            </div>
          </div>

          {/* Footer Columns */}
          <div className="grid gap-12 border-b border-white/15 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c7a35b]">
                Treatments
              </p>

              <nav className="mt-5 space-y-3 text-white/75">
                <a
                  href="#injectables"
                  className="block transition hover:text-white"
                >
                  Injectables
                </a>

                <a
                  href="#laser"
                  className="block transition hover:text-white"
                >
                  Laser Treatments
                </a>

                <a
                  href="#laser-hair-removal"
                  className="block transition hover:text-white"
                >
                  Laser Hair Removal
                </a>

                <a
                  href="#facials"
                  className="block transition hover:text-white"
                >
                  Customized Facials
                </a>

                <a
                  href="#results"
                  className="block transition hover:text-white"
                >
                  Before &amp; After Results
                </a>
              </nav>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c7a35b]">
                Explore
              </p>

              <nav className="mt-5 space-y-3 text-white/75">
                <a
                  href="#about"
                  className="block transition hover:text-white"
                >
                  About Identity
                </a>

                <a
                  href="#contact"
                  className="block transition hover:text-white"
                >
                  Contact
                </a>

                <a
                  href="#financing"
                  className="block transition hover:text-white"
                >
                  Financing Options
                </a>

                <a
                  href="#gift-cards"
                  className="block transition hover:text-white"
                >
                  Gift Cards
                </a>

                <a
                  href="/#book-now"
                  className="block transition hover:text-white"
                >
                  Book Consultation
                </a>
              </nav>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c7a35b]">
                Contact
              </p>

              <address className="mt-5 not-italic leading-7 text-white/75">
                Identity Aesthetics MedSpa
                <br />
                2610 Chestnut Ridge Rd
                <br />
                Kingwood, TX 77339
              </address>

              <a
                href="tel:+13466009090"
                className="mt-5 block text-white transition hover:text-[#c7a35b]"
              >
                (346) 600-9090
              </a>

              <a
                href="mailto:identitykingwood@713botoxme.com"
                className="mt-3 block break-all text-white transition hover:text-[#c7a35b]"
              >
                identitykingwood@713botoxme.com
              </a>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex border-b border-[#c7a35b] pb-1 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:text-[#c7a35b]"
              >
                Get Directions
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c7a35b]">
                Hours
              </p>

              <div className="mt-5 space-y-3 text-white/75">
                <div className="flex justify-between gap-6">
                  <span>Monday</span>
                  <span>Closed</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span>Tuesday</span>
                  <span>10:00–5:00</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span>Wednesday</span>
                  <span>10:00–5:00</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span>Thursday</span>
                  <span>10:00–5:00</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span>Friday</span>
                  <span>10:00–5:00</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span>Saturday</span>
                  <span>10:00–2:00</span>
                </div>

                <div className="flex justify-between gap-6">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews and Service Area */}
          <div className="grid gap-10 border-b border-white/15 py-12 lg:grid-cols-[40%_60%]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c7a35b]">
                Serving the Greater Kingwood Area
              </p>

              <p className="mt-4 max-w-xl leading-7 text-white/70">
                Proudly serving clients from Kingwood, Humble, Atascocita,
                Porter, Huffman, and surrounding communities.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm sm:p-8">
              <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p
                    className="text-xl tracking-[0.18em] text-[#c7a35b]"
                    aria-label="Five stars"
                  >
                    ★★★★★
                  </p>

                  <p className="mt-3 text-2xl font-semibold text-white">
                    40+ Google Reviews
                  </p>

                  <p className="mt-2 max-w-lg leading-7 text-white/70">
                    Read what clients have shared about their experiences at
                    Identity Aesthetics MedSpa.
                  </p>
                </div>

                <div className="flex shrink-0 flex-col gap-3 sm:min-w-[190px]">
                  <a
                    href={readReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#c7a35b] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#c7a35b] hover:text-[#222222]"
                  >
                    Read Reviews
                  </a>

                  <a
                    href={leaveReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#6f876f] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#536b53]"
                  >
                    Leave a Review
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col gap-4 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Identity Aesthetics MedSpa. All
              rights reserved.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="/privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a href="/terms" className="transition hover:text-white">
                Terms of Use
              </a>

              <a
                href="/accessibility"
                className="transition hover:text-white"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}