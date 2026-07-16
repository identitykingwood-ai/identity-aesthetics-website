const results = [
  {
    title: "Lip Enhancement",
    image: "/results-lip-enhancement.png",
    href: "/injectables",
  },
  {
    title: "Sciton BBL HERO™",
    image: "/results-bbl-hero.png",
    href: "/laser-treatments",
  },
  {
    title: "Sciton MicroLaserPeel™",
    image: "/results-microlaserpeel.png",
    href: "/laser-treatments",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="bg-[#f7f6f1] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6f876f] sm:text-sm">
            Real Patients. Real Results.
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#222222] sm:text-5xl lg:text-6xl">
            Beautiful,
            <span className="block text-[#6f876f]">
              Natural-Looking Results.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Every treatment at Identity Aesthetics MedSpa is customized around
            your unique goals, helping you achieve refreshed, confident, and
            natural-looking results.
          </p>
        </div>

        {/* Results Grid */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {results.map((result) => (
            <article
              key={result.title}
              className="group overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={result.image}
                  alt={`${result.title} before and after results`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex items-center justify-center p-8">
                <a
                  href={result.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[#6f876f] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#536b53] transition hover:bg-[#6f876f] hover:text-white"
                >
                  View Treatment
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-16 text-center">
          <a
            href="/gallery"
            className="inline-flex rounded-full bg-[#6f876f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#536b53]"
          >
            View Complete Gallery
          </a>
        </div>

        {/* Disclaimer */}

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-stone-500">
          Individual results vary. Before-and-after images are shared with
          client permission and are intended for educational purposes only.
        </p>
      </div>
    </section>
  );
}