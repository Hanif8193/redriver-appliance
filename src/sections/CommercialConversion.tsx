import { Building2, Clock, Wrench } from "lucide-react";
import ButtonLink from "../components/ButtonLink";
import { business } from "../data/content";

export default function CommercialConversion() {
  return (
    <section
      id="commercial-conversion"
      className="scroll-mt-20 bg-stone-900 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-stone-200">
              <Building2 className="size-3.5" aria-hidden="true" />
              Commercial Service
            </p>

            <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Equipment down? Don't let it slow your business down.
            </h2>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-stone-300">
              Commercial kitchen and laundry equipment demands fast, reliable repair.
              Our experienced technicians minimize your downtime with same-day service
              and quality parts backed by our 3-month warranty.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Fast response times for urgent commercial repairs",
                "Experienced with commercial kitchen and laundry equipment",
                "Minimize costly business downtime",
                "3-month warranty on all replaced parts",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-stone-200"
                >
                  <Wrench
                    className="mt-0.5 size-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href={business.phoneHref}
                variant="light"
                size="lg"
                withPhoneIcon
                ariaLabel={`Call ${business.name} for commercial service at ${business.phoneDisplay}`}
                className="px-7 py-4 font-bold shadow-lg shadow-black/15"
              >
                Call Now — {business.phoneDisplay}
              </ButtonLink>
              <ButtonLink
                href={business.phoneHref}
                variant="outline-light"
                size="lg"
                ariaLabel="Request commercial service"
              >
                Request Commercial Service
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 sm:p-10">
            <div className="flex items-center gap-3">
              <Clock className="size-6 text-brand-400" aria-hidden="true" />
              <p className="text-lg font-bold text-white">
                Same-Day Commercial Service
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-stone-300">
              We understand that commercial equipment downtime directly impacts your
              bottom line. That's why we prioritize fast response times for business
              customers throughout Winnipeg.
            </p>
            <div className="mt-6 rounded-lg bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">
                Commercial Equipment We Service:
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-300">
                Commercial laundry and kitchen equipment — including washers, dryers,
                ovens and other commercial appliances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
