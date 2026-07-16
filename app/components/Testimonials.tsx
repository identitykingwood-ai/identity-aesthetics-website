export default function Testimonials() {
  const reviews = [
    {
      name: "Elisa",
      service: "Laser Hair Removal",
      review: "Great first experience! Looking forward to the journey.",
    },
    {
      name: "Donna",
      service: "Customized Facial",
      review:
        "The facial was amazing. My provider was knowledgeable, personalized every step of the treatment, and I highly recommend Identity Aesthetics.",
    },
    {
      name: "Darla",
      service: "Laser Hair Removal",
      review:
        "I'm so grateful for my laser hair removal treatments. I've already seen less hair growth, and every visit has helped me get closer to my goals.",
    },
    {
      name: "Dominick",
      service: "Laser Hair Removal",
      review:
        "Professional, friendly, and a great experience from start to finish. I highly recommend Identity Aesthetics.",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6f876f] sm:text-sm">
            Patient Reviews
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#222222] sm:text-5xl lg:text-6xl">
            Loved by Our Clients
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            Our greatest compliment is the trust our clients place in us. Read
            what they have shared about their experiences at Identity
            Aesthetics MedSpa.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.service}`}
              className="group flex min-h-[300px] flex-col rounded-[1.75rem] border border-stone-200 bg-[#f9f7f4] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="text-lg tracking-[0.18em] text-[#c7a35b]"
                aria-label="Five-star review"
              >
                ★★★★★
              </div>

              <blockquote className="mt-6 flex-1">
                <p className="text-lg italic leading-8 text-stone-700">
                  “{review.review}”
                </p>
              </blockquote>

              <footer className="mt-8 border-t border-stone-200 pt-5">
                <p className="font-semibold text-[#222222]">{review.name}</p>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#6f876f]">
                  {review.service}
                </p>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://g.page/r/CcJzv9oNQ9jTEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#008866] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#006f54]"
          >
            Read More Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}