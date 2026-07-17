const services = [
  {
    title: "Injectables & Facial Balancing",
    description:
      "Natural-looking wrinkle treatments, dermal fillers, lip enhancement, and personalized facial balancing.",
    image: "/injectables.png",
    href: "/#book-now",
    layout:
      "lg:col-span-5 lg:row-span-2 lg:min-h-[520px]",
    imagePosition: "object-center",
  },
  {
    title: "Laser Skin Rejuvenation",
    description:
      "Advanced treatments for sun damage, redness, fine lines, texture, and visible signs of aging.",
    image: "/laser-rejuvenation.png",
    href: "/#book-now",
    layout:
      "lg:col-span-7 lg:min-h-[250px]",
    imagePosition: "object-center",
  },
  {
    title: "Laser Hair Removal",
    description:
      "Personalized treatments for smoother skin and lasting confidence.",
    image: "/laser-hair-removal.png",
    href: "/#book-now",
    layout:
      "lg:col-span-3 lg:min-h-[250px]",
    imagePosition: "object-center",
  },
  {
    title: "Customized Facials",
    description:
      "Results-driven facials customized to cleanse, nourish, correct, and restore.",
    image: "/customized-facials.png",
    href: "/#book-now",
    layout:
      "lg:col-span-4 lg:min-h-[250px]",
    imagePosition: "object-center",
  },
];

export default function FeaturedServices() {
  return (
    <section
      id="featured-treatments"
      className="bg-[#f9f7f4] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6f876f] sm:text-sm">
            Personalized Aesthetic Treatments
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#222222] sm:text-5xl">
            Discover Treatments
            <span className="block text-[#6f876f]">
              Designed Around You
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-600">
            From subtle injectable enhancements to advanced laser treatments
            and customized skincare, every treatment plan is created around
            your concerns, goals, and natural features.
          </p>
        </div>

        {/* Staggered Service Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          {services.map((service) => (
            <article
              key={service.title}
              className={`group relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-stone-200 shadow-sm ${service.layout}`}
            >
              <img
                src={service.image}
                alt={`${service.title} at Identity Aesthetics MedSpa in Kingwood, Texas`}
                className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] ${service.imagePosition}`}
              />

              {/* Image shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              {/* Card Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  Identity Aesthetics
                </p>

                <h3 className="mt-2 max-w-md font-serif text-2xl leading-tight text-white sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-2 border-b border-[#d6ba7a] pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:text-[#e3cb96]"
                >
                  Explore Treatment
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="/#book-now"
            className="inline-flex items-center justify-center rounded-full border border-[#6f876f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#536b53] transition hover:bg-[#6f876f] hover:text-white"
          >
            Find Your Treatment
          </a>
        </div>
      </div>
    </section>
  );
}