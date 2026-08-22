import type { LucideIcon } from "lucide-react";
import { BadgeCheck, PhoneCall, SearchCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { journeySteps } from "../data/content";

const icons: Record<string, LucideIcon> = {
  contact: PhoneCall,
  diagnose: SearchCheck,
  repair: BadgeCheck,
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-stone-50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How It Works"
          title="From broken to fixed in three simple steps"
          description="No hassle, no guesswork — just a clear process from your first call to a working appliance."
        />

        <ol className="relative mt-14 grid gap-12 sm:gap-10 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-7 hidden h-0.5 bg-stone-200 md:block"
          />
          {journeySteps.map((step, index) => {
            const Icon = icons[step.id] ?? SearchCheck;
            return (
              <li
                key={step.id}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative">
                  <span className="relative z-10 grid size-14 place-items-center rounded-full border-2 border-brand-700 bg-white text-brand-700 shadow-sm">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -right-1.5 -top-1.5 z-20 grid size-6 place-items-center rounded-full text-[11px] font-bold text-white ring-2 ring-stone-50"
                  >
                    {index + 1}
                  </span>
                </div>

                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">
                  Step {index + 1}
                </p>
                <h3 className="mt-1.5 text-lg font-bold tracking-tight text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-600">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
