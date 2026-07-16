const services = [
  {
    title: "Injectables & Facial Balancing",
    description:
      "Natural-looking wrinkle treatments, dermal fillers, lip enhancement, and personalized facial balancing designed to enhance your features.",
    image: "/injectables.png",
    imageAlt:
      "Woman with naturally balanced facial features representing injectable treatments at Identity Aesthetics MedSpa",
    href: "/injectables",
  },
  {
    title: "Laser Skin Rejuvenation",
    description:
      "Advanced laser treatments designed to improve sun damage, redness, uneven tone, fine lines, texture, and visible signs of aging.",
    image: "/laser-rejuvenation.png",
    imageAlt:
      "Woman with radiant skin representing laser skin rejuvenation treatments",
    href: "/laser-treatments",
  },
  {
    title: "Laser Hair Removal",
    description:
      "Personalized laser hair removal treatments for smoother skin, lasting confidence, and freedom from frequent shaving.",
    image: "/laser-hair-removal.png",
    imageAlt:
      "Woman with smooth skin representing professional laser hair removal",
    href: "/laser-hair-removal",
  },
  {
    title: "Customized Facials",
    description:
      "Results-driven facial treatments customized to cleanse, nourish, correct, and restore healthy-looking skin.",
    image: "/customized-facials.png",
    imageAlt:
      "Client receiving a relaxing customized facial treatment",
    href: "/facials",
  },
];

export default function FeaturedServices() {
  return (
    <section
      id="featured-treatments"
      className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-24"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6f876f] sm:text-sm">
            Personalized Aesthetic Treatments
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#222222] sm:text-5xl lg:text-6xl">
            Discover Treatments Designed Around You
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            From subtle injectable enhancements to advanced laser treatments
            and customized skincare, every treatment plan is created around
            your concerns, goals, and natural features.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[1.75rem] border border-stone-200 bg-[#f9f7f4] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <a
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
                className="block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                <div className="flex min-h-[290px] flex-col p-7">
                  <h3 className="text-2xl font-semibold leading-snug text-[#292929]">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-base leading-7 text-stone-600">
                    {service.description}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#5f765f]">
                    Explore Treatment
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/services"
            className="inline-flex rounded-full border border-[#6f876f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#536b53] transition hover:bg-[#6f876f] hover:text-white"
          >
            View All Treatments
          </a>
        </div>
      </div>
    </section>
  );
}