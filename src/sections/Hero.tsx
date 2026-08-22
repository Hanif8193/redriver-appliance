import { Check, Clock, MapPin, Phone } from "lucide-react";
import ButtonLink from "../components/ButtonLink";
import { business } from "../data/content";

const heroUsps = [
  "Same-day service",
  "3-month warranty on replaced parts",
  "Residential & commercial",
] as const;

export default function Hero() {
  return (
    <section id="top" className="bg-dots-neutral bg-stone-50">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-stone-600 shadow-sm">
            <MapPin className="size-3.5 shrink-0 text-brand-600" aria-hidden="true" />
            Residential &amp; Commercial · {business.city}, {business.region}
          </p>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.06] tracking-tight text-stone-900 sm:text-5xl sm:leading-[1.08] xl:text-[3.6rem]">
            Fast, dependable{" "}
            <span className="text-brand-700">appliance repair</span> in{" "}
            {business.city}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            Washers, dryers, refrigerators, stoves and dishwashers — repaired
            on-site by experienced technicians. We service every major brand,
            offer same-day appointments, and back replaced parts with a
            3-month warranty.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink
              href={business.phoneHref}
              variant="primary"
              size="lg"
              withPhoneIcon
              ariaLabel={`Call ${business.name} now at ${business.phoneDisplay}`}
              className="px-7 py-4 text-base font-bold shadow-lg shadow-brand-900/20 sm:text-lg"
            >
              Call Now — {business.phoneDisplay}
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary" size="lg">
              Request Service
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2.5">
            {heroUsps.map((usp) => (
              <li
                key={usp}
                className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-[13px] font-medium text-stone-700"
              >
                <Check
                  className="size-4 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                {usp}
              </li>
            ))}
          </ul>
        </div>

        <aside
          aria-label={`Contact ${business.name}`}
          className="rounded-2xl bg-stone-900 p-7 shadow-xl ring-1 ring-black/10 sm:p-9 lg:p-10"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-stone-200">
            <Clock className="size-3.5" aria-hidden="true" />
            {business.availability}
          </p>

          <p className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Need it fixed today?
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-stone-300">
            Speak with our team about your appliance problem — day or night,
            we'll help you get it sorted.
          </p>

          <a
            href={business.phoneHref}
            aria-label={`Call ${business.name} at ${business.phoneDisplay}`}
            className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-xl bg-white py-4 text-lg font-extrabold tracking-tight text-brand-800 transition-all hover:bg-red-50 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Phone className="size-5" aria-hidden="true" />
            {business.phoneDisplay}
          </a>

          <ul className="mt-7 space-y-3 border-t border-white/10 pt-7">
            {[
              "All major brands repaired",
              "Same-day appointments available",
              "3-month warranty on replaced parts",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-stone-200"
              >
                <Check
                  className="mt-0.5 size-4 shrink-0 text-brand-400"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-stone-400">
            Residential &amp; commercial service across {business.city},{" "}
            {business.region}.
          </p>
        </aside>
      </div>
    </section>
  );
}
