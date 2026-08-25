import { Award, Clock, ShieldCheck, Wrench } from "lucide-react";
import ButtonLink from "../components/ButtonLink";
import { business } from "../data/content";

const finalUsps = [
  { icon: Clock, text: "Same-Day Service" },
  { icon: Award, text: "10+ Years Experience" },
  { icon: ShieldCheck, text: "3-Month Warranty" },
  { icon: Wrench, text: "All Major Brands" },
];

export default function FinalCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-brand-700"
    >
      <div
        aria-hidden="true"
        className="bg-dots-light absolute inset-0"
      />
      <Wrench
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-14 -right-14 size-80 rotate-12 text-white/10"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          Need Your Appliance Fixed Today?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-red-100">
          Same-day appointments, on-site diagnostics and repairs backed by our
          3-month warranty. One call and your appliance is in good hands.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {finalUsps.map((usp) => (
            <span
              key={usp.text}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20"
            >
              <usp.icon className="size-4" aria-hidden="true" />
              {usp.text}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
          <ButtonLink
            href={business.phoneHref}
            variant="light"
            size="lg"
            withPhoneIcon
            ariaLabel={`Call ${business.name} now at ${business.phoneDisplay}`}
            className="px-8 py-4 font-bold shadow-lg shadow-black/15"
          >
            Call Now — {business.phoneDisplay}
          </ButtonLink>
          <ButtonLink
            href="#contact"
            variant="outline-light"
            size="lg"
            ariaLabel="Request service"
          >
            Request Service
          </ButtonLink>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white ring-1 ring-inset ring-white/20">
          <Clock className="size-3.5" aria-hidden="true" />
          {business.availability} · Residential &amp; commercial service across{" "}
          {business.city}, {business.region}
        </p>
      </div>
    </section>
  );
}
