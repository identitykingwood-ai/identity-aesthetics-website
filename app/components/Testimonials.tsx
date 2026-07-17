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

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="border-y border-stone-200 bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6f876f] sm:text-sm">
            Client Experiences
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#222222] sm:text-5xl">
            Trusted by Hundreds of
            <span className="block text-[#6f876f]">Happy Clients</span>
          </h2>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span
              className="text-lg tracking-[0.16em] text-[#c7a35b]"
              aria-label="Five stars"
            >
              ★★★★★
            </span>

            <span className="text-sm font-medium text-stone-600">
              Five-star client experiences
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600">
            Our greatest compliment is the trust our clients place in us.
            Discover what they have shared about their experiences at Identity
            Aesthetics MedSpa in Kingwood.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.service}`}
              className="group flex min-h-[235px] flex-col rounded-[1.5rem] border border-stone-200 bg-[#f9f7f4] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="text-sm tracking-[0.14em] text-[#c7a35b]"
                aria-label="Five-star review"
              >
                ★★★★★
              </div>

              <blockquote className="mt-4 flex-1">
                <p className="text-[15px] italic leading-7 text-stone-700">
                  “{review.review}”
                </p>
              </blockquote>

              <footer className="mt-5 border-t border-stone-200 pt-4">
                <p className="font-serif text-lg text-[#222222]">
                  {review.name}
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6f876f]">
                  {review.service}
                </p>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://g.page/r/CcJzv9oNQ9jTEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#6f876f] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#536b53] transition hover:bg-[#6f876f] hover:text-white"
          >
            See More on Google
          </a>
        </div>
      </div>
    </section>
  );
}