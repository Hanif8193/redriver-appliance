import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Droplets,
  Flame,
  Snowflake,
  Sparkles,
  Wind,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services, business } from "../data/content";

const icons: Record<string, LucideIcon> = {
  "washer-repair": Droplets,
  "dryer-repair": Wind,
  "refrigerator-repair": Snowflake,
  "stove-oven-repair": Flame,
  "dishwasher-repair": Sparkles,
  "commercial-appliance-repair": Building2,
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Fix"
          title="Expert repair for every major appliance"
          description="From household washers to commercial kitchen equipment, our experienced technicians diagnose and repair it all on-site."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.id] ?? Sparkles;
            return (
              <ServiceCard
                key={service.id}
                name={service.name}
                description={service.description}
                icon={<Icon className="size-6" aria-hidden="true" />}
              />
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-stone-600">
            Not sure what's wrong? Our technicians will diagnose the problem and explain
            your options before any work begins.
          </p>
          <a
            href={business.phoneHref}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
          >
            Call us for a diagnostic visit →
          </a>
        </div>
      </div>
    </section>
  );
}
