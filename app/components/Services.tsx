const services = [
  {
    title: "Injectables",
    description:
      "Natural-looking Botox, Jeuveau, Dysport, dermal filler, lip filler, and facial balancing with Dallas Alvey, MD.",
  },
  {
    title: "Laser Treatments",
    description:
      "Advanced laser hair removal, Sciton BBL HERO, MicroLaserPeel, ProFractional, and laser skin rejuvenation.",
  },
  {
    title: "Customized Facials",
    description:
      "Luxury facials, dermaplaning, microdermabrasion, chemical peels, nanoneedling, and membership options.",
  },
];

export default function Services() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
            Signature Treatments
          </p>

          <h2 className="text-4xl font-semibold text-stone-900 md:text-5xl">
            Personalized aesthetic care for every stage of confidence.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[32px] border border-stone-200 bg-stone-50 p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="mb-5 text-2xl font-semibold text-stone-900">
                {service.title}
              </h3>

              <p className="mb-8 text-stone-600">{service.description}</p>

              <a
                href="#"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}