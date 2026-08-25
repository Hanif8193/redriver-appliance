import { ChevronDown } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { business, faqs } from "../data/content";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Straight answers about our appliance repair service."
        />

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              name="faq"
              className="group rounded-xl border border-stone-200 bg-white px-5 shadow-sm transition-colors open:border-brand-300 open:bg-red-50/30 sm:px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-5 font-semibold text-stone-900 transition-colors hover:text-brand-800 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-600 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="-mt-1 pb-5 pr-8 text-sm leading-relaxed text-stone-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-stone-600">
          Still have questions? Call us at{" "}
          <a
            href={business.phoneHref}
            className="font-semibold text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
          >
            {business.phoneDisplay}
          </a>{" "}
          — we're happy to help.
        </p>
      </div>
    </section>
  );
}
