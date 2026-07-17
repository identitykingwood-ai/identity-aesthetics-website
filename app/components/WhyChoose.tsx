const features = [
  {
    title: "Physician-Directed Care",
    description:
      "Thoughtful aesthetic care provided under the direction of Dallas Alvey, MD.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M12 3 5 6v5c0 4.6 2.8 8.2 7 10 4.2-1.8 7-5.4 7-10V6l-7-3Z" />
        <path d="M9.5 12.2 11 13.7l3.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Advanced Technology",
    description:
      "Advanced laser platforms and treatment technologies selected for safety and results.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
  },
  {
    title: "Customized Treatment Plans",
    description:
      "Every recommendation is tailored to your goals, comfort level, and desired outcome.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="3" />
        <path d="M6 20c.7-4 3-6 6-6s5.3 2 6 6" />
        <path d="M18 5v4M16 7h4" />
      </svg>
    ),
  },
  {
    title: "Natural-Looking Results",
    description:
      "Our goal is to help you look refreshed, balanced, and confidently like yourself.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M20 4C12 4 6 8.5 6 15c0 2.2 1.8 4 4 4 6.5 0 10-7 10-15Z" />
        <path d="M5 20c3-5 7-8 12-10" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section id="about" className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid gap-8 lg:grid-cols-[34%_66%] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6f876f] sm:text-sm">
              Why Choose Identity
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#222222] sm:text-5xl">
              Luxury Care.
              <span className="block text-[#6f876f]">Beautiful Results.</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-stone-600">
              We combine physician-directed care, advanced technology, and a
              personalized approach to help you look refreshed, confident, and
              naturally beautiful.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.5rem] border border-stone-200 bg-[#f9f7f4] p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8eee5] text-[#5f765f]">
                  {feature.icon}
                </div>

                <h3 className="mt-4 font-serif text-lg leading-6 text-[#222222]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}