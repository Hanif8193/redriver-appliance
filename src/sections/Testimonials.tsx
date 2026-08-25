import { Quote } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/content";

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What our customers say"
          description="Feedback from homeowners and businesses we've helped across Winnipeg."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="relative flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <Quote
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-3 size-24 rotate-12 text-stone-100"
              />

              <div className="relative">
                <blockquote className="flex-1 text-[15px] leading-relaxed text-stone-700">
                  "{testimonial.quote}"
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-stone-100 pt-5">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-bold tracking-wide text-brand-800 ring-1 ring-inset ring-brand-100"
                  >
                    {initialsOf(testimonial.name)}
                  </span>
                  <span className="text-sm font-bold text-stone-900">
                    {testimonial.name}
                    <span className="block text-xs font-medium normal-case tracking-normal text-stone-500">
                      Customer
                    </span>
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
