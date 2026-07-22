import BoulevardBookingFix from "../components/BoulevardBookingFix";

const browseCategories = [
  {
    title: "Lip Enhancement",
    image: "/images/results/injectables/lip-enhancement-case-01.png",
    alt: "Lip enhancement before and after result",
    href: "#lip-enhancement-results",
    description:
      "Natural-looking lip filler results focused on volume, contour, definition, and facial balance.",
  },
  {
    title: "BBL HERO™",
    image: "/images/results/laser-rejuvenation/bbl-hero-case-01.png",
    alt: "Sciton BBL HERO before and after result",
    href: "#bbl-hero-results",
    description:
      "Visible improvement in sun damage, pigmentation, redness, and uneven skin tone.",
  },
  {
    title: "MicroLaserPeel™",
    image: "/images/results/laser-rejuvenation/microlaserpeel-case-01.png",
    alt: "MicroLaserPeel before and after result",
    href: "#microlaserpeel-results",
    description:
      "Skin resurfacing results focused on smoother texture, brighter tone, and renewed skin.",
  },
];

const technologyCards = [
  {
    name: "Sciton",
    image: "/images/logos/technologies/sciton.png",
    alt: "Sciton advanced laser technology",
  },
  {
    name: "Rohrer Aesthetics",
    image: "/images/logos/technologies/rohrer.png",
    alt: "Rohrer Aesthetics laser technology",
  },
];

const injectableCards = [
  {
    name: "Botox Cosmetic",
    image: "/images/logos/injectables/botox.png",
    alt: "Botox Cosmetic injectable brand",
  },
  {
    name: "Jeuveau",
    image: "/images/logos/injectables/jeuveau.png",
    alt: "Jeuveau injectable brand",
  },
  {
    name: "Dysport",
    image: "/images/logos/injectables/dysport.png",
    alt: "Dysport injectable brand",
  },
  {
    name: "Xeomin",
    image: "/images/logos/injectables/xeomin.png",
    alt: "Xeomin injectable brand",
  },
  {
    name: "Restylane",
    image: "/images/logos/injectables/restylane.png",
    alt: "Restylane dermal filler brand",
  },
  {
    name: "Radiesse",
    image: "/images/logos/injectables/radiesse.png",
    alt: "Radiesse injectable brand",
  },
];

const skincareCards = [
  {
    name: "Epionce",
    image: "/images/logos/skincare/epionce.png",
    alt: "Epionce professional skincare",
  },
  {
    name: "Revision Skincare",
    image: "/images/logos/skincare/revision.png",
    alt: "Revision professional skincare",
  },
];

const financingCards = [
  {
    name: "Cherry",
    image: "/images/logos/financing/cherry.png",
    alt: "Cherry flexible payment options",
  },
  {
    name: "Klarna",
    image: "/images/logos/financing/klarna.png",
    alt: "Klarna flexible payment options",
  },
  {
    name: "Affirm",
    image: "/images/logos/financing/affirm.png",
    alt: "Affirm flexible payment options",
  },
];

const faqs = [
  {
    question: "Are these real client results?",
    answer:
      "Yes. The before-and-after cases shown on this page represent treatments performed for real clients and are shared with permission. Images may be cropped or have the eyes covered to protect client privacy.",
  },
  {
    question: "Why do individual results vary?",
    answer:
      "Results vary because every client has different anatomy, skin condition, treatment history, healing response, lifestyle, and goals. Product selection, treatment intensity, number of sessions, and aftercare may also influence the outcome.",
  },
  {
    question: "How many treatments will I need?",
    answer:
      "Some clients may see a meaningful improvement after one treatment, while others benefit from a series or ongoing maintenance. Your provider will recommend a personalized plan after evaluating your concerns and goals.",
  },
  {
    question: "Can different treatments be combined?",
    answer:
      "Yes, when appropriate. Injectable treatments, laser rejuvenation, professional facials, skincare, and other services may be combined or scheduled as part of a progressive plan.",
  },
  {
    question: "Which treatment is right for me?",
    answer:
      "The most appropriate treatment depends on what you would like to improve, your skin or facial anatomy, your medical history, your comfort level, and your available downtime. A consultation is the best place to begin.",
  },
];

export default function GalleryPage() {
  return (
    <main className="overflow-hidden bg-[#f9f7f4] text-[#283029]">
      <BoulevardBookingFix />

      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden bg-[#f4f0e9]">
        <div className="mx-auto grid min-h-[760px] max-w-[1600px] lg:grid-cols-2">
          <div className="relative z-10 flex items-center px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#a27b37]">
                Patient Results · Identity Aesthetics MedSpa
              </p>

              <h1 className="mt-7 font-serif text-5xl leading-[1.03] text-[#283029] sm:text-6xl lg:text-7xl">
                Real Results.
                <span className="mt-2 block italic text-[#647866]">
                  Personalized Care.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-base leading-8 text-stone-600 sm:text-lg">
                Explore real client results from customized injectable and
                laser treatments performed at Identity Aesthetics MedSpa in
                Kingwood, Texas.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#browse-results"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2d8f72] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#24755d]"
                >
                  Browse Results
                </a>

                <a
                  href="#book-now"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#718072] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#354438] transition duration-300 hover:bg-white"
                >
                  Book a Consultation
                </a>
              </div>

              <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-stone-300 pt-7">
                <div>
                  <p className="font-serif text-xl text-[#a27b37]">Real</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                    Client Cases
                  </p>
                </div>

                <div>
                  <p className="font-serif text-xl text-[#a27b37]">Natural</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-500">
                    Looking Results
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
              src="/images/heroes/gallery-hero.png"
              alt="Patient results gallery at Identity Aesthetics MedSpa"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f4f0e9] via-[#f4f0e9]/20 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f4f0e9] to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Our Results Philosophy
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Results Should Complement You
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-stone-600">
            <p>
              We believe aesthetic treatments should enhance your features,
              improve the concerns that bother you, and support natural
              confidence without making you look like someone else.
            </p>

            <p>
              Every treatment plan is customized according to your anatomy,
              skin condition, treatment history, comfort, available downtime,
              and desired outcome.
            </p>

            <p className="font-medium text-[#3e5342]">
              Thoughtful recommendations. Natural-looking outcomes.
              Personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* BROWSE RESULTS */}
      <section
  id="browse-results"
  className="scroll-mt-32 bg-[#eef1eb] px-6 pt-36 pb-24 sm:px-10 lg:pt-40 lg:pb-28"
>
    
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Browse by Treatment
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Explore Our Featured Results
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600">
              Select a treatment category to view real client cases and learn
              more about the goals behind each result.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {browseCategories.map((category) => (
              <a
                key={category.title}
                href={category.href}
                className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-7">
                  <div className="h-px w-10 bg-[#c7a35b]" />

                  <h3 className="mt-6 font-serif text-3xl text-[#283029]">
                    {category.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {category.description}
                  </p>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#55705a]">
                    View Results
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LIP ENHANCEMENT RESULTS */}
<section
  id="lip-enhancement-results"
  className="scroll-mt-[170px] bg-white px-6 py-20 sm:px-10 lg:py-28"
>
  <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
                Injectable Results
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
                Lip Enhancement
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-stone-600">
                Customized lip filler treatments designed to improve volume,
                definition, hydration, contour, and balance while maintaining
                a natural appearance.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-[#f9f7f4] shadow-sm">
              <img
                src="/images/results/injectables/lip-enhancement-case-01.png"
                alt="Lip enhancement case one before and after"
                className="h-auto w-full"
              />

              <div className="p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a27b37]">
                  Case 01
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#283029]">
                  Natural Volume & Definition
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Treatment focused on enhancing shape, definition, and
                  balanced fullness while preserving the client’s natural lip
                  characteristics.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-[#f9f7f4] shadow-sm">
              <img
                src="/images/results/injectables/lip-enhancement-case-02.png"
                alt="Lip enhancement case two before and after"
                className="h-auto w-full"
              />

              <div className="p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a27b37]">
                  Case 02
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#283029]">
                  Improved Contour & Balance
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Treatment focused on restoring visible volume, refining lip
                  contour, and supporting a soft, balanced result.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#book-now"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2d8f72] px-9 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#24755d]"
            >
              Book an Injectable Consultation
            </a>
          </div>
        </div>
      </section>

      {/* BBL HERO RESULTS */}
      <section
        id="bbl-hero-results"
        className="scroll-mt-28 bg-[#f4f0e9] px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
                Laser Rejuvenation Results
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
                BBL HERO™ Photofacial
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-stone-600">
                Sciton® BBL HERO™ uses advanced broadband light technology to
                improve visible sun damage, discoloration, redness, and uneven
                skin tone with minimal downtime for many clients.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
              <img
                src="/images/results/laser-rejuvenation/bbl-hero-case-01.png"
                alt="BBL HERO case one before and after"
                className="h-auto w-full"
              />

              <div className="p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a27b37]">
                  Case 01
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#283029]">
                  Brighter, More Even-Looking Skin
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Treatment focused on improving visible discoloration,
                  redness, uneven tone, and overall skin clarity.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
              <img
                src="/images/results/laser-rejuvenation/bbl-hero-case-02.png"
                alt="BBL HERO case two before and after"
                className="h-auto w-full"
              />

              <div className="p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a27b37]">
                  Case 02
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#283029]">
                  Visible Tone & Pigment Improvement
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Treatment focused on reducing the appearance of sun-related
                  discoloration and creating a clearer, more balanced
                  complexion.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#book-now"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#2d8f72] px-9 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#24755d]"
            >
              Book a Laser Consultation
            </a>

            <a
              href="/laser-rejuvenation"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#718072] px-9 text-xs font-semibold uppercase tracking-[0.18em] text-[#354438] transition duration-300 hover:bg-white"
            >
              Explore Laser Rejuvenation
            </a>
          </div>
        </div>
      </section>

      {/* MICROLASERPEEL RESULTS */}
      <section
        id="microlaserpeel-results"
        className="scroll-mt-28 bg-white px-6 py-20 sm:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <img
              src="/images/results/laser-rejuvenation/microlaserpeel-case-01.png"
              alt="MicroLaserPeel case one before and after"
              className="h-auto w-full rounded-[2rem] border border-stone-200 shadow-sm"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Featured Laser Case
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              MicroLaserPeel™
            </h2>

            <p className="mt-7 text-base leading-8 text-stone-600">
              MicroLaserPeel™ removes damaged outer layers of the skin to
              improve visible texture, dullness, fine lines, and uneven tone.
            </p>

            <div className="mt-9 space-y-5">
              {[
                "Smoother-looking surface texture",
                "Brighter and more refreshed complexion",
                "Improved appearance of visible skin damage",
                "Customizable treatment depth",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-stone-200 pb-4 text-sm text-stone-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c7a35b]" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="#book-now"
              className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-[#2d8f72] px-9 text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#24755d]"
            >
              Book a Laser Consultation
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-[#eef1eb] px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white bg-white/80 p-8 text-center shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a27b37]">
            Results Disclaimer
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-stone-600">
            Individual results vary. Outcomes may depend on anatomy, skin
            condition, treatment selection, product used, number of sessions,
            healing response, lifestyle, and adherence to preparation and
            aftercare instructions. Client images are shared with consent and
            may be cropped or have the eyes covered for privacy.
          </p>
        </div>
      </section>

      {/* BRANDS INTRO */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
            Brands & Technologies We Trust
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
            Carefully Selected for Quality, Safety & Results
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-stone-600">
            We carefully select the technologies, injectable products,
            professional skincare, and payment partners used at Identity
            Aesthetics MedSpa.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY CARDS */}
      <section className="bg-[#f4f0e9] px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Advanced Technology
            </p>

            <h2 className="mt-4 font-serif text-3xl text-[#283029] sm:text-4xl">
              Medical Aesthetic Technology
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {technologyCards.map((brand) => (
              <article
                key={brand.name}
                className="overflow-hidden rounded-[2rem] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className="h-auto w-full"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INJECTABLE CARDS */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Trusted Injectable Brands
            </p>

            <h2 className="mt-4 font-serif text-3xl text-[#283029] sm:text-4xl">
              Personalized Product Selection
            </h2>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {injectableCards.map((brand) => (
              <article
                key={brand.name}
                className="overflow-hidden rounded-[1.75rem] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className="h-auto w-full"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKINCARE CARDS */}
      <section className="bg-[#eef1eb] px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Professional Skincare
            </p>

            <h2 className="mt-4 font-serif text-3xl text-[#283029] sm:text-4xl">
              Medical-Grade Skincare We Trust
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {skincareCards.map((brand) => (
              <article
                key={brand.name}
                className="overflow-hidden rounded-[2rem] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className="h-auto w-full"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCING CARDS */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Flexible Payment Options
            </p>

            <h2 className="mt-4 font-serif text-3xl text-[#283029] sm:text-4xl">
              More Flexibility for Your Treatment Plan
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600">
              Flexible payment options may be available for qualifying
              treatments and customized plans.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {financingCards.map((brand) => (
              <article
                key={brand.name}
                className="overflow-hidden rounded-[1.75rem] shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className="h-auto w-full"
                />
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#book-now"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#718072] px-9 text-xs font-semibold uppercase tracking-[0.18em] text-[#354438] transition duration-300 hover:bg-[#eef1eb]"
            >
              Ask About Payment Options
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f4f0e9] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a27b37]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#283029] sm:text-5xl">
              Questions About Treatment Results
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
        id="gallery-booking-cta"
        className="relative overflow-hidden bg-[#5e735f] px-6 py-24 text-white sm:px-10 lg:py-32"
      >
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -right-20 bottom-[-120px] h-96 w-96 rounded-full bg-[#c7a35b]/15" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ead7a7]">
            Your Goals Deserve a Personalized Plan
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Beautiful Results Begin With a Consultation
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/75">
            Let us help you choose the treatment plan that best fits your
            goals, anatomy, skin, comfort, and schedule.
          </p>

          <a
            href="#book-now"
            style={{ color: "#435346" }}
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-9 text-xs font-semibold uppercase tracking-[0.18em] transition duration-300 hover:bg-[#f1e8d7]"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </main>
  );
}