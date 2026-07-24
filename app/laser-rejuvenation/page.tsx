import BoulevardBookingFix from "../components/BoulevardBookingFix";

const treatments = [
  {
    title: "Sciton® BBL HERO™",
    eyebrow: "Light-Based Skin Rejuvenation",
    image:
      "/images/services/laser-rejuvenation/bbl-hero-card.png",
    alt: "Client preparing for a Sciton BBL HERO photofacial at Identity Aesthetics MedSpa",
    description:
      "Advanced broadband light treatment designed to improve visible sun damage, brown spots, redness, uneven tone, and overall skin clarity.",
    bestFor: [
      "Sun damage",
      "Brown spots",
      "Redness",
      "Uneven skin tone",
    ],
    downtime: "Minimal",
  },
  {
    title: "MicroLaserPeel™",
    eyebrow: "Polished, Refreshed Skin",
    image:
      "/images/services/laser-rejuvenation/microlaserpeel-card.png",
    alt: "Client with refreshed skin after a MicroLaserPeel treatment",
    description:
      "A customizable resurfacing treatment that removes damaged outer layers of skin to improve dullness, rough texture, fine lines, and visible signs of aging.",
    bestFor: [
      "Fine lines",
      "Dull skin",
      "Rough texture",
      "Uneven tone",
    ],
    downtime: "Approximately 3–5 days",
  },
  {
    title: "ProFractional™",
    eyebrow: "Targeted Collagen Renewal",
    image:
      "/images/services/laser-rejuvenation/profractional-card.png",
    alt: "Confident client considering ProFractional laser resurfacing for acne scars and skin texture",
    description:
      "Fractional laser resurfacing creates targeted channels in the skin to support collagen renewal and improve the appearance of acne scars, textural irregularities, and deeper skin concerns.",
    bestFor: [
      "Acne scars",
      "Selected scars",
      "Deeper texture",
      "Collagen renewal",
    ],
    downtime: "Approximately 5–7 days",
  },
];

const concerns = [
  {
    title: "Pigmentation & Redness",
    image:
      "/images/services/laser-rejuvenation/pigmentation-redness-card.png",
    alt: "Woman with visible pigmentation and facial redness",
    description:
      "Brown spots, sun damage, redness, and uneven tone may respond well to a customized light-based treatment plan.",
    treatment: "Often treated with Sciton® BBL HERO™",
  },
  {
    title: "Texture & Fine Lines",
    image:
      "/images/services/laser-rejuvenation/texture-fine-lines-card.png",
    alt: "Mature woman with natural fine lines and visible skin texture",
    description:
      "Resurfacing treatments can help improve rough texture, dullness, and the appearance of fine lines.",
    treatment: "Often treated with MicroLaserPeel™",
  },
  {
    title: "Acne Scars & Deeper Texture",
    image:
      "/images/services/laser-rejuvenation/profractional-card.png",
    alt: "Woman considering treatment for acne scars and textural irregularities",
    description:
      "Targeted fractional resurfacing may help soften the appearance of selected acne scars and deeper texture concerns.",
    treatment: "Often treated with ProFractional™",
  },
];

const journeySteps = [
  {
    number: "01",
    title: "Private Consultation",
    description:
      "We evaluate your skin, discuss your concerns, review relevant health history, and learn what type of result you would like to achieve.",
  },
  {
    number: "02",
    title: "Customized Recommendation",
    description:
      "Your treatment is selected according to your skin tone, concern, desired correction, available downtime, and long-term goals.",
  },
  {
    number: "03",
    title: "Treatment & Aftercare",
    description:
      "We provide detailed preparation and recovery instructions based on the treatment and intensity chosen for your skin.",
  },
  {
    number: "04",
    title: "Progressive Results",
    description:
      "Your skin continues to improve as pigmentation clears, texture renews, and collagen remodeling develops over time.",
  },
];

const faqs = [
  {
    question: "Which laser treatment is right for me?",
    answer:
      "That depends on your primary concern, skin tone, treatment history, desired results, and available downtime. BBL HERO is generally selected for visible pigmentation and redness, MicroLaserPeel for surface texture and fine lines, and ProFractional for selected scars and deeper textural concerns. Your provider will recommend the most appropriate option after evaluating your skin.",
  },
  {
    question: "How much downtime should I expect?",
    answer:
      "Downtime varies by treatment and intensity. BBL HERO usually involves minimal interruption to normal activities. MicroLaserPeel commonly involves several days of redness, dryness, or flaking. ProFractional typically requires a longer recovery period and more detailed aftercare.",
  },
  {
    question: "Will I need more than one treatment?",
    answer:
      "Some clients notice improvement after one session, while others benefit from a series. Pigmentation, redness, acne scarring, deeper texture, and long-term correction often require a customized treatment plan rather than a single procedure.",
  },
  {
    question: "Can laser treatments be combined?",
    answer:
      "In some cases, different treatments may be combined or scheduled as part of a progressive plan. This may allow us to address pigmentation, texture, and collagen renewal in a strategic order while respecting the skin’s recovery needs.",
  },
  {
    question: "Can ProFractional treat every type of scar?",
    answer:
      "No single treatment is appropriate for every scar. The type, depth, color, age, location, and cause of the scar all matter. We evaluate scars individually and provide realistic recommendations. Some scars may require a combination approach or referral.",
  },
  {
    question: "When will I see results?",
    answer:
      "Some improvements, such as clearer tone and brighter skin, may become visible as the skin recovers. Texture and collagen-related improvements typically continue developing over the following weeks and months.",
  },
];

export default function LaserRejuvenationPage() {
  return (
    <main className="overflow-hidden bg-[#f9f7f4] text-[#283029]">
      <BoulevardBookingFix />

      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden bg-[#f4f0e9]">
        <div className="mx-auto grid min-h-[760px] max-w-[1600px] lg:grid-cols-2">
          <div className="relative z-10 flex items-center px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a27b37]">
                Advanced Laser Skin Rejuvenation · Kingwood, Texas
              </p>

              <h1 className="mt-7 font-serif text-5xl leading-[1.03] text-[#283029] sm:text-6xl lg:text-7xl">
                Reveal Brighter,
                <span className="mt-2 block italic text-[#647866]">
                  Healthier-Looking Skin.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-base leading-8 text-stone-600 sm:text-lg">
                Customized Sciton® laser and light treatments designed to
                improve sun damage, pigmentation, redness, fine lines,
                uneven texture, and selected acne scars.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  f="#book-now"
                  className="inlhreine-flex min-h-14 items-center justify-center rounded-full bg-[#2d8f72] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#24755d]"
                >
                  Book a Consultation
                </a>

                <a
                  href="#laser-treatments"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#718072] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#354438] transition duration-300 hover:bg-white"
                >
                  Explore Treatments
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-stone-300 pt-7">
                <div>
                  <p className="font-serif text-xl text-[#a27b37]">Clearer</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                    Skin Tone
                  </p>
                </div>

                <div>
                  <p className="font-serif text-xl text-[#a27b37]">Smoother</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                    Texture
                  </p>
                </div>

                <div>
                  <p className="font-serif text-xl text-[#a27b37]">Personalized</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                    Treatment Plans
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] lg:min-h-full">
            <img
              src="/images/services/laser-rejuvenation/laser-rejuvenation-hero.png"
              alt="Woman with radiant skin at Identity Aesthetics MedSpa in Kingwood Texas"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f4f0e9] via-[#f4f0e9]/20 to-transparent lg:block" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f4f0e9] to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Customized Laser Care
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Your Skin Concern Determines the Treatment
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-stone-600">
            <p>
              Laser rejuvenation is not one single procedure. Different
              technologies target different layers and concerns within the
              skin.
            </p>

            <p>
              At Identity Aesthetics MedSpa, we select treatment based on
              your skin, goals, desired correction, and available downtime.
              Your plan may focus on pigmentation, redness, surface
              resurfacing, collagen renewal, or a thoughtful combination
              performed over time.
            </p>

            <p className="font-medium text-[#3e5342]">
              The goal is visible improvement while preserving natural,
              healthy-looking skin.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section
        id="laser-treatments"
        className="scroll-mt-28 bg-[#eef1eb] px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Sciton® Laser Treatments
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Three Treatments. Three Distinct Purposes.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600">
              Each treatment addresses different concerns and depths within
              the skin. Your consultation helps determine the best starting
              point.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {treatments.map((treatment) => (
              <article
                key={treatment.title}
                className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a27b37]">
                    {treatment.eyebrow}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl text-[#283029]">
                    {treatment.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-stone-600">
                    {treatment.description}
                  </p>

                  <div className="mt-7 border-t border-stone-200 pt-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#55705a]">
                      Best for
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {treatment.bestFor.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#eef1eb] px-3 py-2 text-xs text-[#435346]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 text-xs text-stone-500">
                      <span className="font-semibold text-[#354438]">
                        Typical downtime:
                      </span>{" "}
                      {treatment.downtime}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONCERNS */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              What Would You Like to Improve?
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Start With Your Skin Concern
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {concerns.map((concern) => (
              <article
                key={concern.title}
                className="overflow-hidden rounded-[2rem] border border-stone-200 bg-[#f9f7f4]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={concern.image}
                    alt={concern.alt}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-7">
                  <h3 className="font-serif text-2xl text-[#283029]">
                    {concern.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {concern.description}
                  </p>

                  <p className="mt-5 border-t border-stone-200 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#55705a]">
                    {concern.treatment}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BBL HERO FEATURE */}
      <section className="bg-[#2f4638] px-6 py-20 text-white sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/services/laser-rejuvenation/pigmentation-redness-card.png"
              alt="Woman with visible pigmentation and facial redness"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6b66b]">
              Sciton® BBL HERO™
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Clearer Tone. Brighter-Looking Skin.
            </h2>

            <p className="mt-7 text-base leading-8 text-white/75">
              BBL HERO uses broadband light to address visible signs of sun
              exposure and vascular or pigment-related concerns. Treatment
              settings are selected according to your skin and the specific
              discoloration being treated.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Sun damage",
                "Brown spots",
                "Visible redness",
                "Uneven skin tone",
                "Selected capillaries",
                "Dull complexion",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-white/15 pb-4 text-sm text-white/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d6b66b]" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#book-now"
className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[#2d8f72] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#24755d]"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* RESURFACING FEATURE */}
      <section className="bg-[#f4f0e9] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="lg:order-2">
            <img
              src="/images/services/laser-rejuvenation/texture-fine-lines-card.png"
              alt="Woman with natural fine lines and visible skin texture"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
            />
          </div>

          <div className="lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Laser Resurfacing
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Renew Texture at the Appropriate Depth
            </h2>

            <p className="mt-7 text-base leading-8 text-stone-600">
              MicroLaserPeel and ProFractional address different depths and
              concerns. One focuses primarily on controlled surface
              renewal, while the other creates targeted fractional channels
              that support deeper collagen remodeling.
            </p>

            <div className="mt-9 space-y-6">
              <div className="border-l-2 border-[#c7a35b] pl-6">
                <h3 className="font-serif text-2xl text-[#354438]">
                  MicroLaserPeel™
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  Selected for visible surface damage, fine lines, dullness,
                  and rough or uneven texture.
                </p>
              </div>

              <div className="border-l-2 border-[#c7a35b] pl-6">
                <h3 className="font-serif text-2xl text-[#354438]">
                  ProFractional™
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  Selected for certain acne scars, deeper textural
                  irregularities, and more focused collagen renewal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Treatment Comparison
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Compare Our Laser Treatments
            </h2>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-stone-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead className="bg-[#eef1eb]">
                  <tr>
                    <th className="px-6 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#435346]">
                      Primary Concern
                    </th>
                    <th className="px-6 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#435346]">
                      Recommended Treatment
                    </th>
                    <th className="px-6 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#435346]">
                      Typical Downtime
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-stone-200 bg-white text-sm text-stone-600">
                  {[
                    ["Sun damage", "Sciton® BBL HERO™", "Minimal"],
                    ["Brown spots", "Sciton® BBL HERO™", "Minimal"],
                    ["Redness", "Sciton® BBL HERO™", "Minimal"],
                    ["Uneven skin tone", "Sciton® BBL HERO™", "Minimal"],
                    ["Fine lines", "MicroLaserPeel™", "Approximately 3–5 days"],
                    ["Rough texture", "MicroLaserPeel™", "Approximately 3–5 days"],
                    ["Acne scars", "ProFractional™", "Approximately 5–7 days"],
                    ["Selected scars", "ProFractional™", "Approximately 5–7 days"],
                  ].map(([concern, treatment, downtime]) => (
                    <tr key={concern}>
                      <td className="px-6 py-5 font-medium text-[#354438]">
                        {concern}
                      </td>
                      <td className="px-6 py-5">{treatment}</td>
                      <td className="px-6 py-5">{downtime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-stone-500">
            Treatment selection and recovery vary by skin condition,
            intensity, treatment area, and individual response. Your
            consultation determines the most appropriate recommendation.
          </p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-[#eef1eb] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Your Laser Journey
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Personalized From Consultation to Recovery
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step) => (
              <article
                key={step.number}
                className="rounded-[2rem] border border-white/80 bg-white p-7 shadow-sm"
              >
                <p className="font-serif text-4xl text-[#c7a35b]">
                  {step.number}
                </p>

                <h3 className="mt-6 font-serif text-2xl text-[#283029]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS LIFESTYLE */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src="/images/services/laser-rejuvenation/smooth-radiant-results-card.png"
              alt="Woman enjoying smooth radiant skin after laser rejuvenation"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Progressive Skin Improvement
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Results Designed to Look Like Healthy Skin
            </h2>

            <p className="mt-7 text-base leading-8 text-stone-600">
              Our goal is not to make your skin look artificial or overly
              treated. It is to improve the visible concerns that distract
              from your natural complexion.
            </p>

            <p className="mt-5 text-base leading-8 text-stone-600">
              Depending on the treatment, improvement may include clearer
              tone, softened discoloration, smoother texture, and continued
              collagen renewal over time.
            </p>

            <div className="mt-9 rounded-[1.5rem] border border-[#d9dfd7] bg-[#f9f7f4] p-6">
              <p className="font-serif text-xl italic text-[#55705a]">
                Thoughtful correction. Natural-looking improvement.
                Healthier-looking skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section className="bg-[#f4f0e9] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="lg:order-2">
            <img
              src="/images/services/laser-rejuvenation/laser-consultation-card.png"
              alt="Laser skin rejuvenation consultation at Identity Aesthetics MedSpa"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
            />
          </div>

          <div className="lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Begin With a Consultation
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Your Treatment Should Match Your Skin
            </h2>

            <p className="mt-7 text-base leading-8 text-stone-600">
              During your consultation, we evaluate your concerns, skin
              characteristics, treatment history, lifestyle, and available
              recovery time.
            </p>

            <p className="mt-5 text-base leading-8 text-stone-600">
              We will explain which treatment is most appropriate, what
              improvement may be realistic, and whether a single treatment
              or progressive series makes the most sense.
            </p>

            <a
              href="#book-now"
className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[#2d8f72] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#24755d]"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Laser Rejuvenation Questions
            </h2>
          </div>

          <div className="mt-14 divide-y divide-stone-200 border-y border-stone-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <h3 className="font-serif text-xl text-[#283029] sm:text-2xl">
                    {faq.question}
                  </h3>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-300 text-xl text-[#55705a] transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="max-w-3xl pt-5 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="laser-rejuvenation-booking-cta"
        className="relative overflow-hidden bg-[#5e735f] px-6 py-24 text-white sm:px-10 lg:py-32"
      >
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -right-20 bottom-[-120px] h-96 w-96 rounded-full bg-[#c7a35b]/15" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ead7a7]">
            Your Skin. Your Goals. Your Treatment Plan.
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Ready for Brighter, Healthier-Looking Skin?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/75">
            Schedule a private consultation to discover which laser or
            light treatment best matches your skin concerns, goals, and
            desired recovery time.
          </p>

          <a
            href="#book-now"
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-9 text-xs font-semibold uppercase tracking-[0.18em] text-[#435346] transition duration-300 hover:bg-[#f1e8d7]"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </main>
  );
}