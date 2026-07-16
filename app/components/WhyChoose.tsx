const benefits = [
  {
    title: "Physician-Directed Care",
    description:
      "Our team provides thoughtful aesthetic care under the direction of Dallas Alvey, MD.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <path d="M12 3 4.5 6v5.5c0 4.7 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.8 7.5-9.5V6L12 3Z" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
  },
  {
    title: "Advanced Technology",
    description:
      "We use advanced laser platforms and professional treatment technologies selected for safety and results.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    title: "Customized Treatment Plans",
    description:
      "Every recommendation is tailored to your goals, skin, comfort level, and desired outcome.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21c.7-4.3 3.4-7 7.5-7s6.8 2.7 7.5 7" />
        <path d="m17.5 4.5 1 1 2-2" />
      </svg>
    ),
  },
  {
    title: "Natural-Looking Results",
    description:
      "Our goal is to help you look refreshed, balanced, and confident while still looking like yourself.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <path d="M20 4.5C13 4.5 7.5 8 5 14c4.5 1 8.8-.3 12-3.5" />
        <path d="M5 20c.5-5.5 4.2-9.8 10.5-12.5" />
      </svg>
    ),
  },
  {
    title: "Boutique Spa Experience",
    description:
      "Receive advanced aesthetic treatments in a warm, private, and welcoming environment.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <path d="M12 21c-4.8-2.8-8-6.4-8-10a4 4 0 0 1 7-2.6A4 4 0 0 1 18 11c0 3.6-3.2 7.2-8 10Z" />
        <path d="M12 8.4V15" />
      </svg>
    ),
  },
  {
    title: "Flexible Payment Options",
    description:
      "Convenient financing options can help make larger treatment plans more manageable.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18M7 15h4" />
      </svg>
    ),
  },
];

const highlights = [
  {
    value: "12+",
    label: "Years of Laser Experience",
  },
  {
    value: "MD",
    label: "Physician-Directed Care",
  },
  {
    value: "5-Star",
    label: "Client Experiences",
  },
  {
    value: "Kingwood",
    label: "Locally Established",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-gradient-to-b from-[#fbfaf6] to-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6f876f] sm:text-sm">
            Why Choose Identity
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#222222] sm:text-5xl">
            Luxury care.
            <span className="block text-[#6f876f]">Beautiful results.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            We combine physician-directed care, advanced technology, and a
            personalized approach to help you look refreshed, confident, and
            naturally beautiful.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c8a76a]/60 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e7efe6] text-[#536b53] transition duration-300 group-hover:bg-[#6f876f] group-hover:text-white">
                {benefit.icon}
              </div>

              <h3 className="mt-7 text-xl font-semibold text-[#222222]">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[30px] border border-stone-200 bg-[#6f876f] px-6 py-10 shadow-sm sm:px-10">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.label}
                className={`px-4 ${
                  index > 0
                    ? "sm:border-l sm:border-white/20"
                    : ""
                }`}
              >
                <p className="text-3xl font-semibold text-white sm:text-4xl">
                  {highlight.value}
                </p>

                <p className="mt-3 text-sm uppercase tracking-[0.14em] text-white/80">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
