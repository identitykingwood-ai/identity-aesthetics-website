const results = [
  {
    title: "Lip Enhancement",
    description:
      "Natural-looking volume and definition designed to enhance your unique features.",
    image: "/images/results/results-lip-enhancement.png",
    href: "/#book-now",
  },
  {
    title: "Sciton BBL HERO™",
    description:
      "Improves redness, sun damage, and uneven skin tone for a clearer, brighter complexion.",
    image: "/images/results/results-bbl-hero.png",
    href: "/#book-now",
  },
  {
    title: "Sciton MicroLaserPeel™",
    description:
      "Improves fine lines, texture, and tone while revealing smoother, healthier-looking skin.",
    image: "/images/results/results-microlaserpeel.png",
    href: "/#book-now",
  },
];

export default function Results() {
  return (
    <section id="results" className="bg-[#f7f6f1] py-14 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6f876f] sm:text-sm">
            Real Results
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#222222] sm:text-5xl">
            Personalized Treatments.
            <span className="block text-[#6f876f]">
              Beautiful, Natural-Looking Results.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-600">
            Explore a few of our featured treatment results. Every treatment
            plan is customized to the client’s goals, features, and skin
            concerns.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {results.map((result) => (
            <article
              key={result.title}
              className="group overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                <img
                  src={result.image}
                  alt={`${result.title} before and after result at Identity Aesthetics MedSpa`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-5">
                <h3 className="font-serif text-xl text-[#222222]">
                  {result.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {result.description}
                </p>

                <a
                  href={result.href}
                  className="mt-5 inline-flex items-center gap-2 border-b border-[#c7a35b] pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#5f765f] transition hover:text-[#3f563f]"
                >
                  View Treatment
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/gallery"
            className="inline-flex rounded-full border border-[#6f876f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#536b53] transition hover:bg-[#6f876f] hover:text-white"
          >
            View Full Gallery
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-stone-500">
          Individual results vary. Before-and-after images are shown with client
          permission and are intended for educational purposes only.
        </p>
      </div>
    </section>
  );
}