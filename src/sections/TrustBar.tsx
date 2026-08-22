import { BadgeCheck, Clock, Layers, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { trustPoints, business } from "../data/content";

const icons: Record<string, LucideIcon> = {
  experience: BadgeCheck,
  "same-day": Clock,
  warranty: ShieldCheck,
  brands: Layers,
};

export default function TrustBar() {
  return (
    <section aria-label="Why choose us at a glance" className="bg-brand-700">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-7 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-white/15 lg:py-12">
        {trustPoints.map((point, index) => {
          const Icon = icons[point.id] ?? ShieldCheck;
          return (
            <div
              key={point.id}
              className={`flex items-center gap-4 ${
                index === 0 ? "lg:pr-6" : "lg:px-6"
              }`}
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/25">
                <Icon className="size-[22px]" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-white sm:text-base">
                  {point.title}
                </p>
                <p className="mt-0.5 text-xs leading-snug text-red-100 sm:text-[13px]">
                  {point.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="sr-only">
        {business.name}: {trustPoints.map((point) => point.title).join(", ")}.
      </p>
    </section>
  );
}
