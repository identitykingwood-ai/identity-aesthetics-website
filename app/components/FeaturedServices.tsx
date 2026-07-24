import Image from "next/image";
import Link from "next/link";

type Service = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const services: Service[] = [
  {
    title: "Injectables & Facial Balancing",
    description:
      "Smooth wrinkles, restore volume, and enhance your natural beauty.",
    image: "/images/services/injectables.png",
    href: "/injectables",
  },
  {
    title: "Customized Facials",
    description:
      "Personalized facial treatments designed for your unique skin concerns.",
    image: "/images/services/customized-facials.png",
    href: "/facials",
  },
  {
    title: "Laser Hair Removal",
    description:
      "Comfortable, long-lasting hair reduction using advanced laser technology.",
    image: "/images/services/laser-hair-removal.png",
    href: "/laser-hair-removal",
  },
  {
    title: "Laser Skin Rejuvenation",
    description:
      "Improve tone, texture, pigmentation, and visible signs of aging.",
    image: "/images/services/laser-rejuvenation.png",
    href: "/laser-rejuvenation",
  },
];

export default function FeaturedServices() {
  return (
    <section
      id="services"
      className="bg-[#F9F7F4] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#8A7141]">
            Personalized Aesthetic Care
          </p>

          <h2 className="font-serif text-3xl font-medium tracking-wide text-[#3F463F] sm:text-4xl lg:text-5xl">
            Explore Our Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#666A66] sm:text-base">
            Personalized aesthetic treatments designed to help you look
            refreshed, confident, and naturally beautiful.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              aria-label={`Learn more about ${service.title}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8E2D8] bg-white shadow-[0_8px_28px_rgba(70,70,60,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(70,70,60,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A8B7A2] focus-visible:ring-offset-4"
            >
              {/* Card image */}
              <div className="relative h-56 w-full overflow-hidden sm:h-64 lg:h-72">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
                <h3 className="font-serif text-xl font-medium leading-snug text-[#3F463F] sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6D706C] sm:text-[15px] sm:leading-7">
                  {service.description}
                </p>

                <div className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8A7141] transition-colors duration-300 group-hover:text-[#3F463F]">
                    Learn More
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}