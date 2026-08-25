import { Home, Check } from "lucide-react";
import ButtonLink from "../components/ButtonLink";
import { business } from "../data/content";

const appliances = [
  "Refrigerators",
  "Washers",
  "Dryers",
  "Ovens & Stoves",
  "Dishwashers",
];

export default function ResidentialConversion() {
  return (
    <section
      id="residential-conversion"
      className="scroll-mt-20 bg-stone-50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200 sm:p-10">
            <div className="flex items-center gap-3">
              <Home className="size-6 text-brand-600" aria-hidden="true" />
              <p className="text-lg font-bold text-stone-900">
                Home Appliances We Repair
              </p>
            </div>
            <ul className="mt-5 space-y-3">
              {appliances.map((appliance) => (
                <li
                  key={appliance}
                  className="flex items-center gap-3 text-sm text-stone-700"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-red-50 text-brand-600">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {appliance}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg bg-red-50 p-4">
              <p className="text-sm font-medium text-stone-700">
                Same-day appointments available for residential customers
                throughout Winnipeg.
              </p>
            </div>
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-stone-600 shadow-sm">
              <Home className="size-3.5" aria-hidden="true" />
              Residential Service
            </p>

            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
              Need your home appliance working again?
            </h2>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-stone-600">
              A broken appliance disrupts your entire household. Our experienced
              technicians provide fast, reliable repair for all major home
              appliances — on-site and backed by our 3-month warranty.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href={business.phoneHref}
                variant="primary"
                size="lg"
                withPhoneIcon
                ariaLabel={`Call ${business.name} for residential service at ${business.phoneDisplay}`}
                className="px-7 py-4 font-bold shadow-lg shadow-brand-900/20"
              >
                Call Now — {business.phoneDisplay}
              </ButtonLink>
              <ButtonLink
                href={business.phoneHref}
                variant="secondary"
                size="lg"
                ariaLabel="Request residential service"
              >
                Request Home Service
              </ButtonLink>
            </div>

            <ul className="mt-6 space-y-3">
              {[
                "Same-day service for urgent repairs",
                "Experienced, professional technicians",
                "3-month warranty on replaced parts",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-stone-600"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
