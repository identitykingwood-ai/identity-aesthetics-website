export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f9f7f4]">
      <div className="grid lg:min-h-[640px] lg:grid-cols-[43%_57%]">
        <div className="relative z-10 flex items-center px-6 py-14 sm:px-10 sm:py-16 lg:pl-[max(4rem,calc((100vw-1440px)/2+4rem))] lg:pr-12 lg:py-16 xl:pl-[max(6rem,calc((100vw-1440px)/2+6rem))] xl:pr-16">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#c7a35b]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5f765f] sm:text-sm">
                Luxury Medical Spa · Kingwood, Texas
              </p>
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[1.03] text-[#222222] sm:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
              Reveal Your
              <span className="mt-1 block text-[#6f876f]">
                Most Confident Self
              </span>
            </h1>

            <p className="mt-6 max-w-[520px] text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Personalized injectables, advanced laser treatments, and
              customized facials designed to help you look refreshed, balanced,
              and naturally confident.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#book-now"
                className="inline-flex items-center justify-center rounded-full bg-[#6f876f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#536b53] hover:shadow-lg"
              >
                Book a Consultation
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-[#6f876f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#536b53] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f876f] hover:text-white hover:shadow-lg"
              >
                Explore Treatments
              </a>
            </div>

            <div className="mt-9 border-t border-stone-300 pt-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span
                  className="text-base tracking-[0.14em] text-[#c7a35b]"
                  aria-label="Five-star client experiences"
                >
                  ★★★★★
                </span>

                <p className="text-sm font-medium text-stone-700">
  Trusted by thousands of clients
</p>
              </div>

              <div className="mt-5 grid gap-3 text-sm text-stone-600 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#c7a35b]"
                    aria-hidden="true"
                  />
                  <span>Physician-Directed</span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#c7a35b]"
                    aria-hidden="true"
                  />
                  <span>Customized Care</span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[#c7a35b]"
                    aria-hidden="true"
                  />
                  <span>Payment Options</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-full">
          <img
            src="/images/heroes/hero-office.png"
            alt="Bright and welcoming treatment environment at Identity Aesthetics MedSpa in Kingwood, Texas"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#f9f7f4]/25 lg:via-transparent lg:to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/40 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-auto sm:right-8 sm:w-[350px]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6f876f]">
              Boutique Aesthetic Care
            </p>

            <p className="mt-2 text-sm leading-6 text-stone-700">
              Advanced treatments delivered in a warm, private setting with a
              focus on natural-looking results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}