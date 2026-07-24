import type { Metadata } from "next";
import CherryWidget from "./CherryWidget";

export const metadata: Metadata = {
  title: "Payment Plans | Identity Aesthetics MedSpa Kingwood",
  description:
    "Explore flexible payment plans for aesthetic treatments at Identity Aesthetics MedSpa in Kingwood, Texas.",
};

export default function PaymentPlansPage() {
  return (
    <main className="relative z-0 bg-white">
      {/* Page hero */}
      <section className="border-b border-[#e4dfd5] bg-[#f7f6f1] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7650]">
            Flexible Financing
          </p>

          <h1 className="font-serif text-4xl leading-tight text-[#2f352f] sm:text-5xl lg:text-6xl">
            Treat Now. Pay Over Time.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#666b65] sm:text-lg">
            Flexible payment plans can help you move forward with the treatments
            you want while dividing the cost into more manageable payments.
          </p>
        </div>
      </section>

      {/* Cherry widget */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#e4dfd5] bg-white p-3 shadow-sm sm:p-6 lg:p-8">
          <CherryWidget />
        </div>
      </section>

      {/* Additional payment information */}
      <section className="bg-[#f7f6f1] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8b7650]">
              Additional Options
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#2f352f] sm:text-4xl">
              Convenient Ways to Pay
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#666b65]">
              In addition to Cherry payment plans, eligible clients may have
              access to Klarna and Affirm when completing their purchase through
              our booking and payment platform.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {["Cherry", "Klarna", "Affirm"].map((option) => (
              <div
                key={option}
                className="flex min-h-[135px] items-center justify-center rounded-2xl border border-[#ddd8cd] bg-white px-5 py-8 text-center shadow-sm"
              >
                <p className="font-serif text-2xl text-[#3f4b40]">{option}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-[#767a74]">
            Financing is subject to eligibility and approval. Available terms,
            payment amounts, and rates are determined by the financing provider.
          </p>
        </div>
      </section>

      {/* Final call to action */}
      <section className="bg-[#3f4b40] px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#dcc58f]">
            We’re Here to Help
          </p>

          <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
            Have Questions About Your Treatment Plan?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">
            Schedule a consultation and our team will help you explore treatment
            options, pricing, and available ways to pay.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#booking"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#3f4b40] transition hover:bg-[#f0eee8] sm:w-auto"
            >
              Book a Consultation
            </a>

            <a
              href="tel:+13466009090"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/60 px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#3f4b40] sm:w-auto"
            >
              Call Our Office
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}