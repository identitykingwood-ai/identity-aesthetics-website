import BoulevardBookingFix from "../components/BoulevardBookingFix";

const facialTreatments = [
  {
    title: "Customized Facial",
    eyebrow: "Personalized Skin Care",
    image: "/images/services/facials/customized-facial-card.png",
    alt: "Client receiving a customized facial at Identity Aesthetics MedSpa",
    description:
      "A personalized facial designed around your current skin condition, concerns, comfort level, and goals. Your esthetician selects the appropriate cleansing, exfoliation, treatment products, masks, and finishing care.",
    bestFor: [
      "First-time facial clients",
      "Hydration",
      "Congestion",
      "Dullness",
      "Maintenance",
    ],
    downtime: "None expected",
  },
  {
    title: "Dermaplaning",
    eyebrow: "Smooth Surface Exfoliation",
    image: "/images/services/facials/dermaplaning-card.png",
    alt: "Client receiving a professional dermaplaning treatment",
    description:
      "A precise exfoliation treatment that removes accumulated surface debris and fine vellus hair to leave the skin feeling smoother and more polished.",
    bestFor: [
      "Rough texture",
      "Dull skin",
      "Product buildup",
      "Special events",
      "Smoother makeup",
    ],
    downtime: "Minimal to none",
  },
  {
    title: "Geneo Glo2 Facial",
    eyebrow: "Advanced Facial Technology",
    image: "/images/services/facials/geneo-glo2-card.png",
    alt: "Client receiving a Geneo Glo2 advanced facial treatment",
    description:
      "A multi-step treatment combining customized exfoliation, oxygenation, ultrasound infusion, and facial massage technology to support a brighter, refreshed appearance.",
    bestFor: [
      "Dull complexion",
      "Dry skin",
      "Uneven tone",
      "Special events",
      "Visible glow",
    ],
    downtime: "None expected",
  },
  {
    title: "Chemical Peel",
    eyebrow: "Professional Skin Renewal",
    image: "/images/services/facials/chemical-peel-card.png",
    alt: "Professional chemical peel being applied during a facial treatment",
    description:
      "A professionally selected peel designed to improve visible dullness, congestion, discoloration, and uneven texture. Peel strength and formulation are selected according to your skin and treatment goals.",
    bestFor: [
      "Uneven tone",
      "Congestion",
      "Dullness",
      "Texture",
      "Visible discoloration",
    ],
    downtime: "Varies by peel",
  },
  {
    title: "Nano Infusion",
    eyebrow: "No-Downtime Product Infusion",
    image: "/images/services/facials/nanoneedling-card.png",
    alt: "Client receiving a nano infusion facial treatment",
    description:
      "A gentle, noninvasive facial treatment that supports product infusion and surface renewal without traditional needles or significant downtime.",
    bestFor: [
      "Hydration",
      "Glow",
      "Surface texture",
      "Special events",
      "No-downtime care",
    ],
    downtime: "Minimal to none",
  },
  {
    title: "Microneedling",
    eyebrow: "Collagen-Focused Skin Rejuvenation",
    image: "/images/services/facials/microneedling-card.png",
    alt: "Client receiving a professional microneedling treatment",
    description:
      "A collagen-induction treatment designed to improve the appearance of acne scars, enlarged pores, fine lines, and uneven texture through controlled skin renewal.",
    bestFor: [
      "Acne scars",
      "Fine lines",
      "Enlarged pores",
      "Uneven texture",
      "Collagen renewal",
    ],
    downtime: "Approximately 2–4 days",
  },
];

const skinConcerns = [
  {
    title: "Dryness & Dehydration",
    description:
      "Restore comfort and support a softer, more supple-looking complexion with customized hydration and barrier-focused care.",
    recommendation: "Customized Facial or Geneo Glo2",
  },
  {
    title: "Dullness & Uneven Tone",
    description:
      "Professional exfoliation and renewal treatments can help brighten the appearance of tired or lackluster skin.",
    recommendation: "Dermaplaning, Chemical Peel, or Geneo Glo2",
  },
  {
    title: "Congestion & Breakouts",
    description:
      "A customized approach may include cleansing, appropriate exfoliation, extractions when suitable, and home-care recommendations.",
    recommendation: "Customized Facial or Chemical Peel",
  },
  {
    title: "Fine Lines & Texture",
    description:
      "Treatment may focus on surface smoothing, hydration, collagen support, or a progressive combination selected for your skin.",
    recommendation: "Nano Infusion, Microneedling, or Chemical Peel",
  },
  {
    title: "Acne Scars & Enlarged Pores",
    description:
      "Collagen-focused treatments may help soften the appearance of selected acne scars, enlarged pores, and uneven texture over time.",
    recommendation: "Microneedling",
  },
  {
    title: "Special-Event Glow",
    description:
      "Choose a low-downtime treatment designed to leave the skin looking hydrated, refreshed, and polished before an important occasion.",
    recommendation: "Geneo Glo2, Dermaplaning, or Nano Infusion",
  },
];

const facialSteps = [
  {
    number: "01",
    title: "Skin Consultation",
    description:
      "We discuss your concerns, current products, lifestyle, sensitivity, previous treatments, and what you would like to improve.",
  },
  {
    number: "02",
    title: "Personalized Treatment",
    description:
      "Your esthetician selects appropriate products, exfoliation, techniques, and optional upgrades according to your skin that day.",
  },
  {
    number: "03",
    title: "Professional Care",
    description:
      "Your treatment is performed in a calm, spa-like environment with attention to comfort, skin response, and your personal goals.",
  },
  {
    number: "04",
    title: "Home-Care Guidance",
    description:
      "When helpful, we provide practical skincare recommendations to protect your results and support long-term skin health.",
  },
];

const faqs = [
  {
    question: "Which facial should I book if I am not sure?",
    answer:
      "Book the New Client Facial Experience or a Customized Facial. Your esthetician can evaluate your skin and select the most appropriate products, exfoliation, and treatment options during your appointment.",
  },
  {
    question: "What is included in the New Client Facial Experience?",
    answer:
      "The New Client Facial Experience includes a professional skin consultation, a customized facial, and a choice of dermaplaning, microdermabrasion, or enzyme exfoliation when appropriate for your skin.",
  },
  {
    question: "What is the difference between nano infusion and microneedling?",
    answer:
      "Nano infusion is a gentle, no-downtime treatment focused on surface renewal, hydration, and product infusion. Microneedling uses controlled microchannels to support collagen renewal and is better suited for concerns such as acne scars, enlarged pores, fine lines, and deeper texture.",
  },
  {
    question: "Will I peel after a chemical peel?",
    answer:
      "Not every chemical peel causes visible peeling. Your response depends on the formulation, strength, preparation, skin condition, and individual healing pattern. Visible peeling is not the only indication that a peel was effective.",
  },
  {
    question: "Can I receive a facial before an important event?",
    answer:
      "Yes, but timing matters. Gentle customized facials, Geneo Glo2, dermaplaning, and nano infusion are often selected for event preparation. Stronger peels and microneedling should be scheduled with enough recovery time before the event.",
  },
  {
    question: "How often should I receive a facial?",
    answer:
      "Many clients schedule professional facials every four to six weeks, although the ideal timing depends on your skin, treatment type, home-care routine, budget, and goals.",
  },
  {
    question: "Can extractions be included?",
    answer:
      "Extractions may be included when appropriate and safe for your skin. They are not forced when the skin is inflamed, overly sensitive, or unlikely to respond well.",
  },
  {
    question: "Do you recommend home skincare products?",
    answer:
      "Yes. Product recommendations are optional and based on your concerns, current routine, preferences, and budget. Our goal is to create a realistic routine you can follow consistently.",
  },
];

export default function FacialsPage() {
  return (
    <main className="overflow-hidden bg-[#f9f7f4] text-[#283029]">
      <BoulevardBookingFix />

      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden bg-[#f4f0e9]">
        <div className="mx-auto grid min-h-[760px] max-w-[1600px] lg:grid-cols-2">
          <div className="relative z-10 flex items-center px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a27b37]">
                Customized Facials · Kingwood, Texas
              </p>

              <h1 className="mt-7 font-serif text-5xl leading-[1.03] text-[#283029] sm:text-6xl lg:text-7xl">
                Thoughtful Skin Care,
                <span className="mt-2 block italic text-[#647866]">
                  Made Personal.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-base leading-8 text-stone-600 sm:text-lg">
                Customized facials and advanced skin treatments designed
                around your complexion, concerns, comfort, and long-term
                goals.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  
  href="#book-now"
  style={{ color: "#ffffff" }}
  className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-[#2f4638] px-10 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 hover:bg-[#3d5a48]"
>
  Book a Facial
</a>
                <a
                  href="#facial-treatments"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#718072] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#354438] transition duration-300 hover:bg-white"
                >
                  Explore Treatments
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-stone-300 pt-7">
                <div>
                  <p className="font-serif text-xl text-[#a27b37]">Customized</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                    For Your Skin
                  </p>
                </div>

                <div>
                  <p className="font-serif text-xl text-[#a27b37]">Relaxing</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                    Spa Experience
                  </p>
                </div>

                <div>
                  <p className="font-serif text-xl text-[#a27b37]">Professional</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                    Skin Guidance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] lg:min-h-full">
            <img
              src="/images/services/facials/facials-hero.png"
              alt="Client receiving a relaxing customized facial at Identity Aesthetics MedSpa"
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
              Personalized Skin Care
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Your Facial Should Change as Your Skin Changes
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-stone-600">
            <p>
              Your skin does not need the exact same treatment at every
              appointment. Hydration, sensitivity, congestion, seasonal
              changes, stress, products, and previous procedures can all
              influence what your skin needs.
            </p>

            <p>
              Our customized approach allows your esthetician to adjust
              products, exfoliation, masks, techniques, and optional
              upgrades based on your skin at the time of your visit.
            </p>

            <p className="font-medium text-[#3e5342]">
              You do not need to know every treatment name before booking.
              We will help guide you.
            </p>
          </div>
        </div>
      </section>

      {/* NEW CLIENT EXPERIENCE */}
      <section className="bg-[#2f4638] px-6 py-20 text-white sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/services/facials/facial-consultation-card.png"
              alt="New client skin consultation at Identity Aesthetics MedSpa"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6b66b]">
              New Client Facial Experience
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              The Best Place to Begin
            </h2>

            <p className="mt-7 text-base leading-8 text-white/75">
              Designed for new facial clients or anyone who is unsure where
              to start, this experience combines professional skin
              evaluation with a customized treatment.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Professional skin consultation",
                "Customized facial treatment",
                "Choice of dermaplaning, microdermabrasion, or enzyme exfoliation when appropriate",
                "Personalized treatment and home-care recommendations",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b border-white/15 pb-4 text-sm leading-6 text-white/85"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6b66b]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-end gap-4">
              <p className="font-serif text-5xl text-white">$89</p>
              <p className="pb-1 text-xs uppercase tracking-[0.18em] text-white/60">
                A $149+ value
              </p>
            </div>

            <a

  href="#book-now"
  className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-white px-10 transition duration-300 hover:bg-[#f1e8d7]"
>
  <span className="text-sm font-semibold uppercase tracking-[0.18em] !text-[#2f4638]">
    Book the New Client Experience
  </span>
</a>
          </div>
        </div>
      </section>

      {/* FACIAL TREATMENTS */}
      <section
        id="facial-treatments"
        className="scroll-mt-28 bg-[#eef1eb] px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Facial & Skin Treatments
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Professional Care for Every Stage of Your Skin
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600">
              Treatments may be booked individually or incorporated into a
              customized skin plan based on your concerns and goals.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facialTreatments.map((treatment) => (
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

      {/* SKIN CONCERNS */}
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

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skinConcerns.map((concern) => (
              <article
                key={concern.title}
                className="rounded-[2rem] border border-stone-200 bg-[#f9f7f4] p-7"
              >
                <div className="h-px w-10 bg-[#c7a35b]" />

                <h3 className="mt-6 font-serif text-2xl text-[#283029]">
                  {concern.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {concern.description}
                </p>

                <p className="mt-6 border-t border-stone-200 pt-5 text-xs font-semibold uppercase tracking-[0.13em] text-[#55705a]">
                  Often recommended: {concern.recommendation}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HYDRATION FEATURE */}
      <section className="bg-[#f4f0e9] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src="/images/services/facials/hydration-glow-card.png"
              alt="Client receiving a hydrating facial treatment"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Hydration, Comfort & Glow
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Healthy-Looking Skin Begins With the Basics
            </h2>

            <p className="mt-7 text-base leading-8 text-stone-600">
              Not every client needs an aggressive treatment. Dry,
              compromised, sensitive, or overtreated skin may benefit more
              from thoughtful hydration and barrier-supportive care.
            </p>

            <p className="mt-5 text-base leading-8 text-stone-600">
              Your esthetician will help determine whether your skin needs
              exfoliation, calming support, hydration, congestion care, or
              time to recover before progressing to a stronger treatment.
            </p>

            <div className="mt-9 rounded-[1.5rem] border border-[#d9dfd7] bg-white p-6">
              <p className="font-serif text-xl italic text-[#55705a]">
                Stronger is not always better. The right treatment is the
                one your skin can respond to safely and comfortably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Customize Your Facial
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Optional Boosted Facial Add-Ons
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600">
              Add-ons are selected according to your skin and may not be
              appropriate during every visit.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dermaplaning",
                description:
                  "Adds precise surface exfoliation and removal of fine vellus hair.",
              },
              {
                title: "Microdermabrasion",
                description:
                  "Provides controlled mechanical exfoliation for selected skin types.",
              },
              {
                title: "Express Chemical Peel",
                description:
                  "Adds professional chemical exfoliation when appropriate for your skin.",
              },
              {
                title: "Nano Infusion",
                description:
                  "Supports product infusion, hydration, and visible surface renewal.",
              },
              {
                title: "LED Light Therapy",
                description:
                  "A gentle light-based add-on selected according to your skin concerns.",
              },
              {
                title: "Neck & Décolleté Mask",
                description:
                  "Extends hydrating and conditioning care beyond the face.",
              },
              {
                title: "Geneo Pod Upgrade",
                description:
                  "Upgrades your treatment with a selected Geneo oxygenation experience.",
              },
            ].map((addon) => (
              <article
                key={addon.title}
                className="rounded-[1.5rem] border border-stone-200 bg-[#f9f7f4] p-6"
              >
                <h3 className="font-serif text-xl text-[#354438]">
                  {addon.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {addon.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FACIAL JOURNEY */}
      <section className="bg-[#eef1eb] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Your Facial Experience
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Personalized From Consultation to Home Care
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {facialSteps.map((step) => (
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

      {/* SKIN CLUB */}
<section className="bg-[#2f4638] px-6 py-20 text-white sm:px-10 lg:py-28">
  <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
    <div className="overflow-hidden rounded-[2rem] bg-[#f4f0e9]">
      <img
        src="/images/services/facials/identity-skin-club-card.png"
        alt="Identity Skin Club facial membership"
        className="h-auto w-full object-contain"
      />
    </div>

    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6b66b]">
        Identity Skin Club™
      </p>

      <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
        Consistency Makes the Difference
      </h2>

      <p className="mt-7 text-base leading-8 text-white/75">
        The Identity Skin Club was created for clients who want to make
        professional skincare a consistent part of their routine.
      </p>

      <div className="mt-8 space-y-4">
        {[
          "One Customized Facial each month",
          "One included Boosted Facial Add-On each month",
          "10% off skincare products",
          "Member pricing and exclusive promotions when available",
        ].map((item) => (
          <div
            key={item}
            className="flex gap-3 border-b border-white/15 pb-4 text-sm leading-6 text-white/85"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6b66b]" />
            {item}
          </div>
        ))}
      </div>
             

            <div className="mt-8 flex items-end gap-4">
              <p className="font-serif text-5xl text-white">$129</p>
              <p className="pb-1 text-xs uppercase tracking-[0.18em] text-white/60">
                Per month
              </p>
            </div>

            <p className="mt-5 text-xs leading-6 text-white/55">
              Chemical peel, Geneo, and infusion upgrades are not included
              as the monthly add-on but may receive applicable member
              pricing.
            </p>

            <a
  href="#book-now"
  style={{ color: "#2f4638" }}
  className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-center text-xs font-semibold uppercase tracking-[0.18em] transition duration-300 hover:bg-[#f1e8d7]"
>
  Ask About the Skin Club
</a>
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section className="bg-[#f4f0e9] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="lg:order-2">
            <img
              src="/images/services/facials/facial-consultation-card.png"
              alt="Personalized facial consultation at Identity Aesthetics MedSpa"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
            />
          </div>

          <div className="lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Not Sure What to Book?
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              We Will Help You Choose
            </h2>

            <p className="mt-7 text-base leading-8 text-stone-600">
              You do not need to diagnose your skin or select the perfect
              treatment before arriving. Book a Customized Facial or the
              New Client Facial Experience and tell us what you would like
              to improve.
            </p>

            <p className="mt-5 text-base leading-8 text-stone-600">
              We will evaluate your skin, explain your options, and help
              create a plan that fits your goals, comfort, schedule, and
              budget.
            </p>

            <a
  href="#book-now"
  style={{ color: "#2f4638" }}
  className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-center text-xs font-semibold uppercase tracking-[0.18em] transition duration-300 hover:bg-[#f1e8d7]"
>
  Book the New Client Experience
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
              Facial & Skincare Questions
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
        id="facial-booking-cta"
        className="relative overflow-hidden bg-[#5e735f] px-6 py-24 text-white sm:px-10 lg:py-32"
      >
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -right-20 bottom-[-120px] h-96 w-96 rounded-full bg-[#c7a35b]/15" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ead7a7]">
            Your Skin Deserves Personalized Care
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Ready for a Facial Designed Around You?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/75">
            Schedule your facial experience and let our team help select
            the treatment, products, and options that best match your skin.
          </p>

                    <a
            href="#book-now"
            className="booking-button-light mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-9 text-xs font-semibold uppercase tracking-[0.18em] transition duration-300 hover:bg-[#f1e8d7]"
          >
            Book Your Facial
          </a>
        </div>
      </section>
    </main>
  );
}