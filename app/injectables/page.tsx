const injectableServices = [
  {
    title: "Botox®, Jeuveau®, Dysport® & Xeomin®",
    description:
      "Personalized neurotoxin treatments soften expression lines while preserving natural movement and facial character.",
    image: "/images/services/injectables/botox-neurotoxins-card.png",
    alt: "Woman receiving a personalized neurotoxin treatment at Identity Aesthetics MedSpa",
    href: "#neurotoxins",
  },
  {
    title: "Lip Enhancement",
    description:
      "Enhance lip shape, hydration, symmetry, and definition with a treatment plan tailored to your natural features.",
    image: "/images/services/injectables/lip-enhancement-card.png",
    alt: "Lip enhancement treatment at Identity Aesthetics MedSpa in Kingwood Texas",
    href: "#lip-enhancement",
  },
  {
    title: "Cheek & Midface Restoration",
    description:
      "Restore subtle support and youthful contour through carefully placed cheek and midface filler.",
    image: "/images/services/injectables/cheek-filler-card.png",
    alt: "Cheek filler and midface restoration treatment at Identity Aesthetics MedSpa",
    href: "#dermal-fillers",
  },
  {
    title: "Chin & Jawline Contouring",
    description:
      "Create greater facial balance and definition with customized chin and jawline enhancement.",
    image: "/images/services/injectables/chin-jawline-card.png",
    alt: "Chin and jawline contouring treatment at Identity Aesthetics MedSpa",
    href: "#dermal-fillers",
  },
  {
    title: "Full Facial Balancing",
    description:
      "A comprehensive consultation that considers your facial proportions, movement, structure, and personal goals.",
    image: "/images/services/injectables/facial-balancing-card.png",
    alt: "Full facial balancing consultation at Identity Aesthetics MedSpa",
    href: "#facial-balancing",
  },
  {
    title: "Natural-Looking Results",
    description:
      "Thoughtful treatment planning designed to help you look refreshed, balanced, and confident without appearing overdone.",
    image: "/images/services/injectables/natural-results-card.png",
    alt: "Woman admiring natural-looking injectable results at Identity Aesthetics MedSpa",
    href: "#natural-results",
  },
];

const injectableSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We listen to your concerns, discuss your goals, and evaluate your facial anatomy, movement, and proportions.",
  },
  {
    number: "02",
    title: "Personalized Plan",
    description:
      "Your provider creates a customized treatment plan based on your features, comfort level, and desired outcome.",
  },
  {
    number: "03",
    title: "Treatment",
    description:
      "Your treatment is performed with careful placement, attention to detail, and a focus on natural-looking results.",
  },
  {
    number: "04",
    title: "Follow-Up",
    description:
      "We provide aftercare guidance and recommend follow-up when appropriate to evaluate your results.",
  },
];

const faqs = [
  {
    question: "Will I still look natural?",
    answer:
      "Yes. Our goal is to enhance your features without changing what makes you look like yourself. Every treatment plan is customized to your anatomy and desired level of correction.",
  },
  {
    question: "How many units of neurotoxin will I need?",
    answer:
      "The number of units varies based on the treatment area, muscle strength, facial movement, product selected, and your goals. Your provider will make a personalized recommendation during your consultation.",
  },
  {
    question: "What is the difference between Botox®, Jeuveau®, Dysport®, and Xeomin®?",
    answer:
      "Each is a prescription neuromodulator used to temporarily soften certain expression lines. They have differences in formulation, dosing, and how they may behave in different treatment areas. Your provider will help select the best option for you.",
  },
  {
    question: "How long do dermal fillers last?",
    answer:
      "Longevity varies by product, treatment area, metabolism, and the amount used. Many hyaluronic-acid fillers may last approximately six months to two years, depending on the product and placement.",
  },
  {
    question: "Do lip fillers hurt?",
    answer:
      "Most clients describe pressure, pinching, or brief discomfort. Topical numbing is included, and a lidocaine lip block may be added for clients who want additional comfort.",
  },
  {
    question: "Can I combine neurotoxin and filler in one visit?",
    answer:
      "Many clients can receive both during the same appointment. Your provider will determine whether combining treatments is appropriate after evaluating your goals and medical history.",
  },
  {
    question: "How much downtime should I expect?",
    answer:
      "Neurotoxin treatment generally has minimal downtime. Filler may cause temporary swelling, tenderness, redness, or bruising. Lip filler commonly produces more noticeable swelling during the first few days.",
  },
  {
    question: "Am I a good candidate?",
    answer:
      "A consultation is the best way to determine candidacy. Your provider will review your health history, medications, previous treatments, anatomy, and expectations before recommending treatment.",
  },
];

export default function InjectablesPage() {
  return (
    <main className="overflow-hidden bg-[#F9F7F4] text-[#30352f]">
      {/* HERO */}
      <section className="relative border-b border-stone-200 bg-[#f3efe9]">
        <div className="mx-auto grid min-h-[680px] max-w-[1600px] lg:grid-cols-[43%_57%]">
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#a27b37]">
                Aesthetic Injectables · Kingwood, Texas
              </p>

              <h1 className="font-serif text-5xl leading-[1.05] text-[#283029] sm:text-6xl lg:text-7xl">
                Look Refreshed.
                <span className="mt-2 block italic text-[#5d745f]">
                  Still Look Like You.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-stone-600 sm:text-lg">
                Personalized neurotoxin, dermal filler, lip enhancement, and
                facial balancing treatments designed around your features and
                aesthetic goals.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#book-now"
                  className="inline-flex items-center justify-center rounded-full bg-[#2d8f72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#24755d] hover:shadow-lg"
                >
                  Book a Consultation
                </a>

                <a
                  href="#injectable-services"
                  className="inline-flex items-center justify-center rounded-full border border-[#657764] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3e5141] transition duration-300 hover:bg-[#657764] hover:text-white"
                >
                  Explore Treatments
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-stone-300 pt-7">
                <div>
                  <p className="font-serif text-2xl text-[#a27b37]">Natural</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-stone-500">
                    Results
                  </p>
                </div>

                <div>
                  <p className="font-serif text-2xl text-[#a27b37]">
                    Customized
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-stone-500">
                    Planning
                  </p>
                </div>

                <div>
                  <p className="font-serif text-2xl text-[#a27b37]">
                    Physician
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-stone-500">
                    Led Care
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[500px] lg:min-h-full">
            <img
              src="/injectables.png"
              alt="Aesthetic injectables consultation at Identity Aesthetics MedSpa in Kingwood Texas"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f3efe9]/30 via-transparent to-transparent lg:from-[#f3efe9]/15" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Thoughtful Aesthetic Care
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Injectable treatments should enhance your features—not overpower
              them.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-stone-600 sm:text-lg">
              At Identity Aesthetics MedSpa, every injectable appointment
              begins with a careful consultation. We consider your facial
              anatomy, expression, proportions, lifestyle, and personal
              preferences before recommending treatment.
            </p>

            <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg">
              Whether you want to soften expression lines, restore volume,
              enhance your lips, or create greater facial balance, your plan is
              designed to help you feel refreshed and confident while
              maintaining a natural appearance.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section
        id="injectable-services"
        className="scroll-mt-28 px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Personalized Solutions
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              How Can We Help You Feel More Confident?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600">
              Explore our most requested injectable treatments. Unsure which
              option is right for you? Begin with a personalized consultation.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {injectableServices.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <div className="p-7">
                  <div className="mb-5 h-px w-10 bg-[#c7a35b]" />

                  <h3 className="font-serif text-2xl leading-tight text-[#283029]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-[#55705a]">
                    Learn More
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NEUROTOXINS */}
      <section
        id="neurotoxins"
        className="scroll-mt-28 bg-[#e8ede6] px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/services/injectables/botox-neurotoxins-card.png"
              alt="Botox Jeuveau Dysport and Xeomin treatment in Kingwood Texas"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Smooth Expression Lines
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Botox®, Jeuveau®, Dysport® & Xeomin®
            </h2>

            <p className="mt-6 text-base leading-8 text-stone-600">
              Neuromodulators temporarily relax targeted facial muscles to
              soften the appearance of expression lines while maintaining a
              refreshed, natural look.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Forehead lines",
                "Frown lines",
                "Crow’s feet",
                "Brow positioning",
                "Lip flip",
                "Chin dimpling",
                "Masseter treatment",
                "Neck and lower-face concerns",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-4"
                >
                  <span className="h-2 w-2 flex-none rounded-full bg-[#c7a35b]" />
                  <span className="text-sm text-stone-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-7 text-sm leading-7 text-stone-500">
              Treatment areas and product selection are determined after an
              individualized consultation. Prescription products are
              administered only when medically appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* FILLER */}
      <section
        id="dermal-fillers"
        className="scroll-mt-28 bg-white px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Restore Shape & Support
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Dermal Filler & Facial Contouring
            </h2>

            <p className="mt-6 text-base leading-8 text-stone-600">
              Dermal fillers may be used to restore lost volume, enhance
              facial structure, improve balance, and refine specific features.
              Placement is guided by your anatomy—not a one-size-fits-all
              formula.
            </p>

            <div className="mt-9 space-y-6">
              <div className="border-l-2 border-[#c7a35b] pl-6">
                <h3 className="font-serif text-2xl text-[#283029]">
                  Cheeks & Midface
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  Restore support and contour through strategic midface
                  placement.
                </p>
              </div>

              <div className="border-l-2 border-[#c7a35b] pl-6">
                <h3 className="font-serif text-2xl text-[#283029]">
                  Chin & Jawline
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  Improve profile balance, definition, and lower-face
                  proportions.
                </p>
              </div>

              <div className="border-l-2 border-[#c7a35b] pl-6">
                <h3 className="font-serif text-2xl text-[#283029]">
                  Smile Lines & Lower Face
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  Soften selected folds and restore subtle support where
                  appropriate.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-[2.5rem] lg:order-2">
            <img
              src="/images/services/injectables/cheek-filler-card.png"
              alt="Dermal filler and facial contouring treatment at Identity Aesthetics MedSpa"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* LIPS */}
      <section
        id="lip-enhancement"
        className="scroll-mt-28 bg-[#f1ece6] px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/services/injectables/lip-enhancement-card.png"
              alt="Lip filler and lip enhancement treatment in Kingwood Texas"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Shape · Hydration · Definition
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Lip Enhancement Designed for Your Features
            </h2>

            <p className="mt-6 text-base leading-8 text-stone-600">
              Lip filler can enhance shape, symmetry, hydration, definition,
              and proportion. Your treatment is customized to your anatomy and
              may range from a very subtle refresh to a more visible
              enhancement.
            </p>

            <div className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a27b37]">
                Comfort Options
              </p>

              <p className="mt-3 text-sm leading-7 text-stone-600">
                Topical numbing is included with lip filler appointments. A
                lidocaine lip block may be added for clients who prefer
                additional comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACIAL BALANCING */}
      <section
        id="facial-balancing"
        className="scroll-mt-28 bg-white px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Comprehensive Planning
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Full Facial Balancing
            </h2>

            <p className="mt-6 text-base leading-8 text-stone-600">
              Facial balancing looks beyond a single feature. Your provider
              evaluates how the forehead, cheeks, lips, chin, jawline, and
              profile work together to create overall harmony.
            </p>

            <p className="mt-5 text-base leading-8 text-stone-600">
              Your plan may include neurotoxin, dermal filler, collagen
              stimulators, or a staged combination of treatments. You are
              never obligated to complete every recommendation.
            </p>

            <a
              href="#book-now"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-[#2d8f72] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#24755d] hover:shadow-lg"
            >
              Schedule Your Consultation
            </a>
          </div>

          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/services/injectables/facial-balancing-card.png"
              alt="Facial balancing consultation at Identity Aesthetics MedSpa in Kingwood"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-[#5e735f] px-6 py-20 text-white sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#efd18b]">
              What to Expect
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Your Injectable Experience
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80">
              A personalized process designed to help you feel informed,
              comfortable, and confident at every step.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {injectableSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] border border-white/20 bg-white/10 p-7 backdrop-blur-sm"
              >
                <p className="font-serif text-4xl text-[#efd18b]">
                  {step.number}
                </p>

                <h3 className="mt-7 font-serif text-2xl">{step.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATURAL RESULTS */}
      <section
        id="natural-results"
        className="scroll-mt-28 bg-[#F9F7F4] px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/services/injectables/natural-results-card.png"
              alt="Natural-looking aesthetic results at Identity Aesthetics MedSpa"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Our Treatment Philosophy
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Refreshed, Balanced & Recognizably You
            </h2>

            <p className="mt-6 text-base leading-8 text-stone-600">
              Natural-looking results begin with thoughtful treatment
              planning. Rather than chasing trends or treating every client
              the same way, we focus on your individual anatomy and
              preferences.
            </p>

            <blockquote className="mt-8 border-l-2 border-[#c7a35b] pl-6 font-serif text-2xl italic leading-relaxed text-[#526653]">
              “Our goal is to help you feel more confident—not to make you look
              like someone else.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Common Questions
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Injectable Treatment FAQs
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-stone-200 bg-[#F9F7F4] px-6 py-1"
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
        id="book-now"
        className="relative scroll-mt-28 overflow-hidden bg-[#5e735f] px-6 py-24 text-white sm:px-10 lg:py-32"
      >
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-20 bottom-[-120px] h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#efd18b]">
            Welcome to Identity Aesthetics
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Not Sure What to Book?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Begin with a personalized injectable and facial balancing
            consultation. We will listen to your goals, answer your questions,
            and recommend a plan designed specifically for you.
          </p>

          <a
            href="#"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-[#2d8f72] px-10 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition duration-300 hover:bg-[#24755d] hover:-translate-y-0.5"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </main>
  );
}