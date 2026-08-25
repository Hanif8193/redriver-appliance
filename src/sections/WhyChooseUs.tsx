import {
  Award,
  Clock,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import ButtonLink from "../components/ButtonLink";
import { business } from "../data/content";

const differentiators = [
  {
    id: "same-day",
    icon: Clock,
    title: "Same-Day Service",
    description:
      "When an appliance breaks down, waiting days isn't an option. We offer same-day appointments so you can get back to your routine quickly.",
  },
  {
    id: "experience",
    icon: Award,
    title: "10+ Years Experience",
    description:
      "A decade of hands-on experience repairing household and commercial appliances across Winnipeg. We've seen and fixed it all.",
  },
  {
    id: "warranty",
    icon: ShieldCheck,
    title: "3-Month Warranty",
    description:
      "Every replaced part carries a three-month warranty, so you can book with confidence knowing the fix holds up.",
  },
  {
    id: "brands",
    icon: Wrench,
    title: "All Major Brands",
    description:
      "From Whirlpool and GE to Miele and KitchenAid — we repair appliances from any manufacturer, residential or commercial.",
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-stone-900 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-1 w-10 rounded-full bg-brand-600" />
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
              Why Red River
            </p>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Winnipeg's trusted appliance repair team
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-stone-400">
            We've spent a decade earning trust one repair at a time — with
            professional diagnostics, quality parts and service that respects
            your schedule.
          </p>

          <div className="mt-8 rounded-lg border border-brand-500/30 bg-brand-600/15 p-5">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand-600/25 text-brand-300 ring-1 ring-inset ring-brand-500/40">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed text-stone-200">
                Every repair is backed by our{" "}
                <strong className="font-semibold text-white">
                  3-month warranty on replaced parts
                </strong>{" "}
                — so you can book with confidence.
              </p>
            </div>
          </div>

          <ButtonLink
            href={business.phoneHref}
            variant="primary"
            size="md"
            withPhoneIcon
            ariaLabel={`Call ${business.name} at ${business.phoneDisplay}`}
            className="mt-8"
          >
            Call {business.phoneDisplay}
          </ButtonLink>
        </div>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="flex gap-5 py-6 first:border-t-0">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white/10 text-brand-300 ring-1 ring-inset ring-white/10">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-bold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-stone-400">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
