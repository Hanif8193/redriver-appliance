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
import { services } from "../data/content";

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
          eyebrow="Our Services"
          title="One call fixes every major appliance"
          description="Residential and commercial repair for the appliances you rely on every day — done on-site by experienced technicians."
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

        <p className="mt-10 text-center text-sm text-stone-600">
          Not sure what's wrong with your appliance?{" "}
          <a
            href="#contact"
            className="font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Book a diagnostic visit
          </a>
          .
        </p>
      </div>
    </section>
  );
}
