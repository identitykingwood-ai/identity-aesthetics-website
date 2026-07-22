import BoulevardBookingFix from "../components/BoulevardBookingFix";

const treatmentAreas = [
  {
    title: "Brazilian",
    description:
      "Private, professional treatment designed to reduce unwanted hair and simplify your personal-care routine.",
    image:
      "/images/services/laser-hair-removal/brazilian-laser-hair-removal-card.png",
    alt: "Woman feeling confident after Brazilian laser hair removal at Identity Aesthetics MedSpa",
    href: "#brazilian",
  },
  {
    title: "Face",
    description:
      "Target unwanted hair on the upper lip, chin, jawline, sideburns, and other appropriate facial areas.",
    image:
      "/images/services/laser-hair-removal/face-laser-hair-removal-card.png",
    alt: "Facial laser hair removal at Identity Aesthetics MedSpa in Kingwood Texas",
    href: "#hormonal-hair-growth",
  },
  {
    title: "Underarms",
    description:
      "Enjoy smoother underarms with less time spent shaving and managing irritation or razor bumps.",
    image:
      "/images/services/laser-hair-removal/underarm-laser-hair-removal-card.png",
    alt: "Smooth underarms after laser hair removal treatment",
    href: "#popular-areas",
  },
  {
    title: "Legs",
    description:
      "Reduce unwanted hair across the lower legs, upper legs, or full legs for a smoother daily routine.",
    image:
      "/images/services/laser-hair-removal/legs-laser-hair-removal-card.png",
    alt: "Woman enjoying smooth legs after laser hair removal",
    href: "#popular-areas",
  },
  {
    title: "Back & Chest",
    description:
      "A practical treatment option for men and women who want to reduce dense or difficult-to-manage body hair.",
    image:
      "/images/services/laser-hair-removal/back-chest-laser-hair-removal-card.png",
    alt: "Man receiving professional back laser hair removal treatment",
    href: "#popular-areas",
  },
  {
    title: "Personalized Consultation",
    description:
      "We evaluate your hair color, skin tone, medical history, treatment area, and goals before creating your plan.",
    image:
      "/images/services/laser-hair-removal/laser-hair-removal-consultation-card.png",
    alt: "Personalized laser hair removal consultation at Identity Aesthetics MedSpa",
    href: "#consultation",
  },
];

const benefits = [
  {
    number: "01",
    title: "Less Shaving & Waxing",
    description:
      "Spend less time managing unwanted hair with razors, waxing appointments, creams, and frequent touch-ups.",
  },
  {
    number: "02",
    title: "Fewer Ingrown Hairs",
    description:
      "Reducing active hair growth may help minimize the recurring ingrown hairs and razor bumps associated with shaving or waxing.",
  },
  {
    number: "03",
    title: "Smoother-Feeling Skin",
    description:
      "As treated hair becomes reduced and finer, many clients enjoy skin that feels smoother and easier to maintain.",
  },
  {
    number: "04",
    title: "Customized Treatment",
    description:
      "Your settings and treatment schedule are selected according to your skin tone, hair characteristics, treatment area, and response.",
  },
  {
    number: "05",
    title: "Multiple Treatment Areas",
    description:
      "Laser hair removal can treat many areas, including the face, underarms, bikini area, Brazilian, legs, arms, chest, and back.",
  },
  {
    number: "06",
    title: "Long-Lasting Reduction",
    description:
      "A completed series can produce significant, long-lasting hair reduction, although occasional maintenance may be needed.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We review your goals, health history, medications, skin tone, hair color, and previous hair-removal experience.",
  },
  {
    number: "02",
    title: "Customized Plan",
    description:
      "We recommend the appropriate treatment areas, session schedule, and personalized laser settings.",
  },
  {
    number: "03",
    title: "Treatment Series",
    description:
      "Treatments are spaced according to the natural hair-growth cycle so we can target follicles during the appropriate stage.",
  },
  {
    number: "04",
    title: "Maintenance",
    description:
      "After your initial series, occasional maintenance may be recommended if new or finer hair growth appears.",
  },
];

const faqs = [
  {
    question: "How many laser hair removal sessions will I need?",
    answer:
      "Most clients need a series of treatments because individual hairs are in different stages of the growth cycle. Your recommended number of sessions will depend on the area, hair density, hair color, skin tone, and whether hormonal factors are contributing to growth.",
  },
  {
    question: "Is laser hair removal permanent?",
    answer:
      "Laser hair removal is best described as long-lasting hair reduction. Some follicles may stop producing hair, while others may eventually produce finer or lighter regrowth. Maintenance treatments may be needed over time.",
  },
  {
    question: "Can laser hair removal help with ingrown hairs?",
    answer:
      "Reducing the amount of active hair growth can help clients who frequently experience ingrown hairs, razor bumps, and irritation from shaving or waxing. Existing inflamed or infected areas may need to heal before treatment.",
  },
  {
    question: "Can you treat facial hair caused by PCOS or hormone changes?",
    answer:
      "Yes, appropriate dark or coarse facial hair may respond to laser treatment. However, laser hair removal does not treat the underlying hormonal cause, so new hair can develop and maintenance sessions may be needed.",
  },
  {
    question: "What if my hair growth changed after starting hormone therapy?",
    answer:
      "Certain hormone changes or therapies may affect hair-growth patterns. We will review your medications and medical history during your consultation and create a realistic treatment plan. Do not stop or change prescribed medication without speaking with your medical provider.",
  },
  {
    question: "Does laser hair removal work on every hair color?",
    answer:
      "Laser energy targets pigment within the hair. Dark brown and black hair generally respond best. Blonde, gray, white, and some red hair may not contain enough target pigment for effective treatment.",
  },
  {
    question: "Can different skin tones receive laser hair removal?",
    answer:
      "Many skin tones can be treated, but the device, settings, and treatment technique must be selected carefully. We evaluate your skin tone and recent sun exposure before every treatment.",
  },
  {
    question: "What should I do before my appointment?",
    answer:
      "Shave the treatment area as directed, avoid waxing or plucking, limit sun exposure and tanning, and tell us about medications or skincare products you use. We will provide complete preparation instructions before your visit.",
  },
];

export default function LaserHairRemovalPage() {
  return (
    <main className="overflow-hidden bg-[#F9F7F4] text-[#30352f]">
 <BoulevardBookingFix />
      {/* HERO */}
      <section className="relative border-b border-stone-200 bg-[#f3efe9]">
        <div className="mx-auto grid min-h-[700px] max-w-[1600px] lg:grid-cols-[43%_57%]">
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#a27b37]">
                Laser Hair Removal · Kingwood, Texas
              </p>

              <h1 className="font-serif text-5xl leading-[1.05] text-[#283029] sm:text-6xl lg:text-7xl">
                Smooth Skin.
                <span className="mt-2 block italic text-[#5d745f]">
                  Lasting Confidence.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-stone-600 sm:text-lg">
                Reduce unwanted hair, recurring razor bumps, and the daily
                frustration of shaving or waxing with personalized laser hair
                removal treatments.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/laser-hair-removal/#book-now"
                  className="inline-flex items-center justify-center rounded-full bg-[#2d8f72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#24755d] hover:shadow-lg"
                >
                  Book a Consultation
                </a>

                <a
                  href="#treatment-areas"
                  className="inline-flex items-center justify-center rounded-full border border-[#657764] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3e5141] transition duration-300 hover:bg-[#657764] hover:text-white"
                >
                  Explore Treatment Areas
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-stone-300 pt-7">
                <div>
                  <p className="font-serif text-2xl text-[#a27b37]">
                    Smoother
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-stone-500">
                    Skin
                  </p>
                </div>

                <div>
                  <p className="font-serif text-2xl text-[#a27b37]">Fewer</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-stone-500">
                    Ingrown Hairs
                  </p>
                </div>

                <div>
                  <p className="font-serif text-2xl text-[#a27b37]">
                    Personalized
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-stone-500">
                    Care
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] lg:min-h-full">
            <img
              src="/images/services/laser-hair-removal/laser-hair-removal-hero.png"
              alt="Woman feeling confident after laser hair removal at Identity Aesthetics MedSpa"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#f3efe9]/25 via-transparent to-transparent lg:from-[#f3efe9]/10" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              A Simpler Routine
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Spend less time removing hair and more time feeling comfortable
              in your skin.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-stone-600 sm:text-lg">
              Laser hair removal uses concentrated light energy to target
              pigment within the hair follicle. Over a carefully scheduled
              series, treated hair may become reduced, finer, lighter, and
              slower to return.
            </p>

            <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">
              Treatments at Identity Aesthetics are customized according to
              your skin tone, hair characteristics, treatment area, medical
              history, and personal goals.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Why Clients Choose Laser
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              More Than Hair Reduction
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600">
              Laser hair removal can simplify your routine while addressing
              many of the frustrations associated with frequent shaving,
              waxing, and plucking.
            </p>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-[2rem] border border-stone-200 bg-white md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="border-b border-stone-200 p-8 last:border-b-0 md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              >
                <p className="font-serif text-3xl text-[#c7a35b]">
                  {benefit.number}
                </p>

                <h3 className="mt-6 font-serif text-2xl text-[#283029]">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT AREAS */}
      <section
        id="treatment-areas"
        className="scroll-mt-28 bg-[#eef1eb] px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Customized for You
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Popular Laser Hair Removal Areas
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600">
              Choose one treatment area or combine areas into a customized
              treatment plan.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {treatmentAreas.map((area) => (
  <article
    key={area.title}
    className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={area.image}
        alt={area.alt}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
      />
    </div>

    <div className="p-7">
      <div className="mb-5 h-px w-10 bg-[#c7a35b]" />

      <h3 className="font-serif text-2xl text-[#283029]">
        {area.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-stone-600">
        {area.description}
      </p>
    </div>
  </article>
))}
          </div>
        </div>
      </section>

      {/* INGROWN HAIRS */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/services/laser-hair-removal/smooth-results-card.png"
              alt="Woman enjoying smooth skin after laser hair removal"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Razor Bumps & Ingrown Hairs
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Break the Cycle of Shaving, Irritation & Ingrown Hair
            </h2>

            <p className="mt-6 text-base leading-8 text-stone-600">
              Shaving and waxing can leave some clients dealing with recurring
              bumps, redness, discomfort, dark marks, and hairs trapped beneath
              the skin.
            </p>

            <p className="mt-5 text-base leading-8 text-stone-600">
              By reducing active hair growth, laser treatment may help reduce
              the repeated cycle that contributes to ingrown hairs and razor
              irritation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Less frequent shaving",
                "Fewer recurring razor bumps",
                "Reduced waxing and plucking",
                "Easier skin maintenance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-[#F9F7F4] px-4 py-4"
                >
                  <span className="h-2 w-2 flex-none rounded-full bg-[#c7a35b]" />
                  <span className="text-sm text-stone-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HORMONAL HAIR GROWTH */}
      <section
        id="hormonal-hair-growth"
        className="scroll-mt-28 bg-[#5e735f] px-6 py-20 text-white sm:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#efd18b]">
              Hormone-Related Hair Growth
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Compassionate Support for Facial Hair Changes
            </h2>

            <p className="mt-6 text-base leading-8 text-white/80">
              Unwanted facial hair can appear or become more noticeable due to
              PCOS, menopause, changing androgen levels, certain medications,
              or some forms of hormone therapy.
            </p>

            <p className="mt-5 text-base leading-8 text-white/80">
              We understand that these changes can feel frustrating and deeply
              personal. Our goal is to provide private, respectful care without
              judgment.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/20 bg-white/10 p-7">
              <h3 className="font-serif text-2xl text-[#efd18b]">
                What Laser Can—and Cannot—Do
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/80">
                Laser hair removal can reduce appropriate dark, coarse hair,
                but it does not correct the underlying hormonal cause. New
                follicles may become active over time, particularly on the
                face, so maintenance sessions may be necessary.
              </p>
            </div>

            <p className="mt-7 text-sm leading-7 text-white/65">
              Sudden, severe, or rapidly increasing facial or body hair should
              be discussed with a qualified medical provider. Never stop or
              change prescribed hormone therapy without speaking with the
              clinician managing your treatment.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/services/laser-hair-removal/face-laser-hair-removal-card.png"
              alt="Woman receiving compassionate support for hormone-related facial hair"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BRAZILIAN */}
      <section
        id="brazilian"
        className="scroll-mt-28 bg-[#F9F7F4] px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/services/laser-hair-removal/brazilian-laser-hair-removal-card.png"
              alt="Woman feeling confident following Brazilian laser hair removal"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Private & Professional Care
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Brazilian Laser Hair Removal
            </h2>

            <p className="mt-6 text-base leading-8 text-stone-600">
              Brazilian laser hair removal can reduce unwanted hair while
              helping simplify grooming and minimize the irritation associated
              with frequent shaving or waxing.
            </p>

            <p className="mt-5 text-base leading-8 text-stone-600">
              Your comfort and privacy are always prioritized. Treatment
              boundaries are discussed before beginning, and only the area
              being treated is uncovered.
            </p>

            <a
              href="/laser-hair-removal/#book-now"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-[#2d8f72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#24755d] hover:shadow-lg"
            >
              Schedule a Private Consultation
            </a>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="popular-areas"
        className="scroll-mt-28 bg-white px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Advanced Laser Technology
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Personalized Treatments with the Rohrer Spectrum
            </h2>

            <p className="mt-6 text-base leading-8 text-stone-600">
              Identity Aesthetics uses the Rohrer Spectrum laser platform for
              professional laser hair removal treatments.
            </p>

            <p className="mt-5 text-base leading-8 text-stone-600">
              Every treatment begins with an evaluation so settings can be
              selected according to your skin tone, hair type, treatment area,
              sensitivity, and response to previous sessions.
            </p>

            <div className="mt-8 rounded-[2rem] border border-stone-200 bg-[#F9F7F4] p-7">
              <p className="text-sm leading-7 text-stone-600">
                Laser hair removal is most effective when the hair contains
                sufficient pigment. Blonde, white, gray, and some red hair may
                not respond adequately and may require a different hair-removal
                method.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/services/laser-hair-removal/legs-laser-hair-removal-card.png"
              alt="Professional laser hair removal experience at Identity Aesthetics MedSpa"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#e8ede6] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              What to Expect
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Your Laser Hair Removal Journey
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] border border-stone-200 bg-white p-7"
              >
                <p className="font-serif text-4xl text-[#c7a35b]">
                  {step.number}
                </p>

                <h3 className="mt-7 font-serif text-2xl text-[#283029]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section
        id="consultation"
        className="scroll-mt-28 bg-white px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/services/laser-hair-removal/laser-hair-removal-consultation-card.png"
              alt="Laser hair removal consultation in Kingwood Texas"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Begin with a Consultation
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              A Treatment Plan Designed Around You
            </h2>

            <p className="mt-6 text-base leading-8 text-stone-600">
              Your consultation allows us to review your goals, examine the
              treatment area, evaluate your skin and hair characteristics, and
              discuss realistic expectations.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Review of medications and health history",
                "Assessment of skin tone and hair characteristics",
                "Discussion of hormonal influences when applicable",
                "Customized treatment-area recommendations",
                "Preparation, aftercare, and maintenance guidance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#c7a35b]" />
                  <span className="text-sm leading-7 text-stone-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/laser-hair-removal/#book-now"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-[#2d8f72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#24755d] hover:shadow-lg"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F9F7F4] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Common Questions
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Laser Hair Removal FAQs
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-stone-200 bg-white px-6 py-1"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-xl text-[#283029]">
                  {faq.question}

                  <span className="text-2xl font-light text-[#a27b37] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="border-t border-stone-200 pb-6 pt-5 text-sm leading-7 text-stone-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
  id="laser-booking-cta"
  className="relative scroll-mt-28 overflow-hidden bg-[#5e735f]"
>
      
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-20 bottom-[-120px] h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#efd18b]">
            Smooth Skin Starts Here
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Ready to Simplify Your Routine?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Schedule a private consultation to discuss your treatment areas,
            goals, skin and hair characteristics, and customized laser hair
            removal plan.
          </p>

          <a
            href="#book-now"            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#2d8f72] px-10 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#24755d]"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </main>
  );
}