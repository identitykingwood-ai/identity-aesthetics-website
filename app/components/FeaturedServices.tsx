const services = [
  {
    id: "injectables",
    eyebrow: "Enhance Your Natural Features",
    title: "Injectables & Facial Balancing",
    description:
      "Refresh your appearance with physician-directed injectables and personalized facial balancing. Every treatment plan is designed around your anatomy, goals, and comfort while preserving natural expression.",
    treatments: [
      "Botox®, Jeuveau®, Dysport® & Xeomin®",
      "Lip Enhancement",
      "Cheek, Chin & Jawline Filler",
      "Full Facial Balancing",
    ],
    image: "/images/services/injectables.png",
    imageAlt:
      "Natural-looking injectable treatment at Identity Aesthetics MedSpa in Kingwood",
    href: "/injectables",
    reverse: false,
  },
  {
    id: "laser",
    eyebrow: "Advanced Skin Rejuvenation",
    title: "Laser Skin Rejuvenation",
    description:
      "Improve discoloration, redness, fine lines, texture, and signs of sun damage with advanced laser treatments selected for your skin concerns and desired downtime.",
    treatments: [
      "Sciton BBL HERO™",
      "MicroLaserPeel™",
      "ProFractional™ Resurfacing",
      "Personalized Laser Consultations",
    ],
    image: "/images/services/laser-rejuvenation.png",
    imageAlt:
      "Laser skin rejuvenation treatment at Identity Aesthetics MedSpa",
    href: "/laser-rejuvenation",
    reverse: true,
  },
  {
    id: "laser-hair-removal",
    eyebrow: "Smoother Skin, Lasting Confidence",
    title: "Laser Hair Removal",
    description:
      "Reduce unwanted hair with customized treatment packages for the face and body. Our experienced laser professionals adjust each session based on your skin, hair, and treatment progress.",
    treatments: [
      "Face & Neck",
      "Underarms",
      "Brazilian & Bikini",
      "Legs, Arms, Back & Full Body",
    ],
    image: "/images/services/laser-hair-removal.png",
    imageAlt:
      "Professional laser hair removal treatment using advanced technology",
    href: "/laser-hair-removal",
    reverse: false,
  },
  {
    id: "facials",
    eyebrow: "Customized for Your Skin",
    title: "Customized Facials",
    description:
      "Your facial should be as individual as your skin. We begin with your goals and concerns, then personalize the treatment with professional exfoliation, hydration, corrective care, and optional enhancements.",
    treatments: [
      "Customized Facial Treatments",
      "Dermaplaning & Microdermabrasion",
      "Chemical Peels",
      "Nano Infusion & Glo2Facial",
    ],
    image: "/images/services/customized-facials.png",
    imageAlt:
      "Relaxing customized facial treatment at Identity Aesthetics MedSpa",
    href: "/facials",
    reverse: true,
  },
];

export default function FeaturedServices() {
  return (
    <section
      id="services"
      className="overflow-hidden bg-[#f9f7f4] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6f876f] sm:text-sm">
            Our Signature Services
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#222222] sm:text-5xl">
            Personalized Care for
            <span className="block text-[#6f876f]">
              Your Most Confident Self
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600">
            Explore customized aesthetic treatments designed around your
            features, skin, goals, and lifestyle.
          </p>
        </div>

        <div className="mt-14 space-y-12 sm:mt-16 sm:space-y-16 lg:space-y-20">
          {services.map((service) => (
            <article
              id={service.id}
              key={service.title}
              className="grid items-center overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm lg:grid-cols-2"
            >
              <div
                className={`relative min-h-[300px] overflow-hidden sm:min-h-[360px] lg:min-h-[420px] ${
                  service.reverse ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div
                className={`flex items-center px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16 ${
                  service.reverse ? "lg:order-1" : ""
                }`}
              >
                <div className="max-w-xl">
                  <div className="flex items-center gap-4">
                    <span className="h-px w-10 bg-[#c7a35b]" />

                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6f876f] sm:text-xs">
                      {service.eyebrow}
                    </p>
                  </div>

                  <h3 className="mt-5 font-serif text-3xl leading-tight text-[#222222] sm:text-4xl lg:text-[2.75rem]">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-stone-600">
                    {service.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.treatments.map((treatment) => (
                      <div
                        key={treatment}
                        className="flex items-start gap-3 text-sm leading-6 text-stone-700"
                      >
                        <span
                          className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-[#c7a35b]"
                          aria-hidden="true"
                        />

                        <span>{treatment}</span>
                      </div>
                    ))}
                  </div>

                  <a
  href={service.href}
  className="mt-8 inline-flex items-center gap-3 border-b border-[#c7a35b] pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#536b53] transition hover:text-[#344834]"
>
                  
                    Explore This Service
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}