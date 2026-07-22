const teamMembers = [
  {
    name: "Dallas Alvey, MD",
    title: "Aesthetic Physician & Medical Director",
    image: "/images/team/dallas-alvey-md.png",
    alt: "Dallas Alvey, MD, aesthetic physician and medical director at Identity Aesthetics MedSpa",
    bio: "Dallas Alvey, MD, is an experienced aesthetic physician specializing in injectable treatments and natural-looking facial rejuvenation. With more than 13 years of experience in aesthetics, he uses a thoughtful, anatomy-based approach to create personalized treatment plans that help patients look refreshed, balanced, and confident without appearing overdone.",
  },
  {
    name: "Crystal Winn, LHR-P",
    title: "Licensed Laser Professional",
    image: "/images/team/crystal-winn-laser-professional.png",
    alt: "Crystal Winn, licensed laser professional at Identity Aesthetics MedSpa",
    bio: "Crystal Winn is a Licensed Laser Professional with more than 12 years of experience in laser aesthetics. She specializes in laser skin rejuvenation, corrective treatments, scar improvement, laser hair removal, and personalized treatment planning. Crystal is known for her honest, careful approach and her commitment to helping clients achieve healthier, more confident skin.",
  },
  {
    name: "Abigail Winn",
    title: "Licensed Esthetician & Licensed Laser Technician",
    image: "/images/team/abigail-winn-esthetician.png",
    alt: "Abigail Winn, licensed esthetician and licensed laser technician at Identity Aesthetics MedSpa",
    bio: "Abigail Winn is a Licensed Esthetician and Licensed Laser Technician who focuses on customized facials, acne care, hyperpigmentation, anti-aging treatments, laser services, and long-term skin health. Her warm and attentive approach helps clients feel comfortable, informed, and confident throughout their skincare journey.",
  },
  {
    name: "Astrid Ariano",
    title: "Licensed Esthetician",
    image: "/images/team/astrid-ariano-esthetician.png",
    alt: "Astrid Ariano, licensed esthetician at Identity Aesthetics MedSpa",
    bio: "Astrid Ariano is a Licensed Esthetician with more than 10 years of experience in advanced skincare and medical aesthetics. Her specialties include customized facials, chemical peels, microneedling, and corrective skin treatments. She combines extensive experience with a gentle, personalized approach to help clients improve tone, texture, and overall skin health.",
  },
  {
    name: "Autumn Naquin",
    title: "Patient Care Coordinator",
    image: "/images/team/autumn-naquin.png",
    alt: "Autumn Naquin, patient care coordinator at Identity Aesthetics MedSpa",
    bio: "Autumn Naquin is often one of the first friendly faces clients see at Identity Aesthetics MedSpa. As our Patient Care Coordinator, she helps make every visit welcoming, organized, and personal. From assisting with scheduling and answering questions to helping clients feel comfortable when they arrive, Autumn is dedicated to creating an exceptional experience.",
  },
];

const values = [
  {
    number: "01",
    title: "Personalized Care",
    description:
      "Every recommendation begins with listening to your concerns, understanding your goals, and creating a plan designed specifically for you.",
  },
  {
    number: "02",
    title: "Honest Guidance",
    description:
      "We believe in thoughtful recommendations, realistic expectations, and helping you choose treatments that genuinely support your goals.",
  },
  {
    number: "03",
    title: "Advanced Expertise",
    description:
      "Our team combines medical oversight, professional training, and advanced aesthetic technology to provide safe, effective care.",
  },
  {
    number: "04",
    title: "Relationships That Last",
    description:
      "We want every client to feel known, valued, and supported—not only during one appointment, but throughout their entire aesthetic journey.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* ABOUT HERO */}
      <section className="grid bg-[#f9f7f4] lg:min-h-[650px] lg:grid-cols-[45%_55%]">
        <div className="flex items-center px-6 py-16 sm:px-10 lg:pl-[max(4rem,calc((100vw-1440px)/2+4rem))] lg:pr-14 lg:py-20 xl:pl-[max(6rem,calc((100vw-1440px)/2+6rem))]">
          <div className="max-w-[590px]">
            <div className="flex items-center gap-4">
              <span
                className="h-px w-10 bg-[#c7a35b]"
                aria-hidden="true"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5f765f] sm:text-sm">
                About Identity Aesthetics
              </p>
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-[#222222] sm:text-6xl lg:text-[4.25rem]">
              Personal Care.
              <span className="mt-2 block text-[#6f876f]">
                A Family Commitment.
              </span>
            </h1>

            <p className="mt-7 max-w-[540px] text-base leading-8 text-stone-600 sm:text-lg">
              Identity Aesthetics MedSpa is a family-owned and operated practice
              where advanced aesthetic care is delivered with warmth, honesty,
              and a genuine commitment to every client who walks through our
              doors.
            </p>

            <a
              href="#our-team"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-[#6f876f] px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#536b53] hover:shadow-lg"
            >
              Meet Our Team
            </a>
          </div>
        </div>

        <div className="relative min-h-[430px] sm:min-h-[560px] lg:min-h-full">
          <img
            src="/images/team/identity-team.png"
            alt="The team at Identity Aesthetics MedSpa in Kingwood, Texas"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#f9f7f4]/20 lg:via-transparent lg:to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/40 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-auto sm:right-8 sm:w-[370px]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6f876f]">
              Three Generations
            </p>

            <p className="mt-2 text-sm leading-6 text-stone-700">
              Three generations of our family work together alongside our
              physician-led team to provide an experience rooted in trust,
              compassion, and personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f876f] sm:text-sm">
              Our Story
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#222222] sm:text-5xl">
              More Than a
              <span className="block text-[#6f876f]">Medical Spa</span>
            </h2>

            <div className="mt-7 h-px w-16 bg-[#c7a35b]" />
          </div>

          <div className="space-y-6 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              At Identity Aesthetics MedSpa, we believe exceptional results
              begin with genuine relationships. As a family-owned practice in
              Kingwood, we have created a space where advanced aesthetic
              treatments are delivered with honesty, compassion, and
              individualized care.
            </p>

            <p>
              Our family works together every day with one shared purpose:
              helping each client feel confident in their own skin. Whether you
              are visiting for your first facial, a laser treatment, or an
              injectable consultation, we want you to feel welcomed,
              understood, and never rushed.
            </p>

            <p>
              We take the time to listen, explain your options, and develop a
              plan that reflects your personal goals. We celebrate your
              progress, answer your questions, and remain committed to results
              that look natural and feel authentically you.
            </p>

            <p>
              For us, aesthetics is not simply about providing treatments. It
              is about earning your trust, caring about your experience, and
              building relationships that last.
            </p>

            <blockquote className="mt-9 border-l-2 border-[#c7a35b] pl-6 font-serif text-2xl leading-9 text-[#536b53] sm:text-3xl sm:leading-10">
              “Our goal is simple: treat you like family, listen to your goals,
              and deliver results you feel confident sharing.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAMILY DETAIL */}
      <section className="bg-[#eef1eb] px-6 py-16 sm:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6f876f]">
              Family-Owned & Operated
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#222222] sm:text-5xl">
              Care That Feels
              <span className="block text-[#6f876f]">Genuinely Personal</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-stone-600 sm:text-lg">
              Crystal, her daughter Abigail, and her granddaughter Autumn
              represent three generations working together at Identity
              Aesthetics. Alongside Dr. Alvey and our professional aesthetic
              team, they share a commitment to creating an environment where
              clients feel cared for—not processed. We work hard at what we do,
              and we work even harder to give every client the attention,
              support, and results they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        id="our-team"
        className="scroll-mt-28 bg-[#f9f7f4] px-6 py-20 sm:px-10 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1380px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f876f] sm:text-sm">
              The People Behind Your Care
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#222222] sm:text-5xl lg:text-6xl">
              Meet Our Team
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              Our experienced team combines medical expertise, advanced
              technology, and personalized attention to help every client feel
              comfortable, confident, and genuinely cared for.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-10">
    
  {teamMembers.map((member, index) => (
  <article
    key={member.name}
    className={`group w-full overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.75rem)] ${
      index >= 3 ? "max-w-md" : ""
    }`}
  >
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                </div>

                <div className="p-7 sm:p-8">
                  <div className="h-px w-10 bg-[#c7a35b]" />

                  <h3 className="mt-5 font-serif text-2xl text-[#222222] sm:text-[1.7rem]">
                    {member.name}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-[#6f876f]">
                    {member.title}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-stone-600">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f876f] sm:text-sm">
                What Guides Us
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#222222] sm:text-5xl">
                The Values Behind
                <span className="block text-[#6f876f]">Every Appointment</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-stone-600">
                These principles shape the way we recommend treatments, care
                for our clients, and measure the quality of every experience.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-200 sm:grid-cols-2">
              {values.map((value) => (
                <article key={value.title} className="bg-[#f9f7f4] p-8">
                  <p className="font-serif text-3xl text-[#c7a35b]">
                    {value.number}
                  </p>

                  <h3 className="mt-5 font-serif text-2xl text-[#222222]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#536b53] px-6 py-20 text-white sm:px-10 sm:py-24">
        <div
          className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div
          className="absolute -bottom-44 -left-20 h-96 w-96 rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e1c985] sm:text-sm">
            Welcome to Identity Aesthetics
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Become Part of Our Family
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Experience personalized aesthetic care from a team that takes the
            time to understand your goals and genuinely cares about your
            results.
          </p>

          <a
            href="#book-now"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-emerald-500 px-10 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}