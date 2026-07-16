export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f6f1]">
      <div className="mx-auto grid max-w-[1600px] lg:min-h-[620px] lg:grid-cols-[46%_54%]">
        <div className="flex items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-12 xl:px-24">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#5f765f] sm:text-sm">
              Luxury Medical Spa · Kingwood, Texas
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] text-[#222222] sm:text-6xl xl:text-7xl">
              Reveal Your
              <span className="mt-1 block text-[#6f876f]">
                Most Confident Self
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Personalized injectables, advanced laser treatments, and
              customized facials designed to enhance your natural beauty with
              results that look refreshed, balanced, and authentically you.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/#book-now"
                className="rounded-full bg-[#6f876f] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#536b53]"
              >
                Book Consultation
              </a>

              <a
                href="#featured-treatments"
                className="rounded-full border border-[#6f876f] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[#536b53] transition hover:bg-[#6f876f] hover:text-white"
              >
                Explore Treatments
              </a>
            </div>

            <div className="mt-9 grid max-w-xl gap-4 border-t border-stone-300 pt-6 text-sm text-stone-600 sm:grid-cols-3">
              <p>Physician-Directed Care</p>
              <p>Advanced Technology</p>
              <p>Flexible Payment Options</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[480px] lg:min-h-full">
          <img
            src="/hero-office.png"
            alt="Woman with radiant skin in a bright, luxurious medical spa environment"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
          />

          <div className="absolute bottom-5 right-5 left-5 rounded-2xl border border-white/30 bg-white/85 p-5 shadow-lg backdrop-blur-md sm:left-auto sm:w-80">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6f876f]">
              Boutique Aesthetic Care
            </p>

            <p className="mt-2 text-sm leading-6 text-stone-700">
              A warm, private environment where advanced treatments meet
              personalized attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}