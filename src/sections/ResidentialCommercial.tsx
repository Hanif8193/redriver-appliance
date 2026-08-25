import { Building2, Home, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const pathways = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Appliance Repair",
    description:
      "Your home appliances keep your daily life running smoothly. When a refrigerator stops cooling, a washer won't spin, or an oven won't heat, our experienced technicians diagnose and fix the problem on-site — same day when you need it.",
    appliances: "Refrigerators, Washers, Dryers, Ovens, Dishwashers",
    ctaLabel: "Request Residential Service",
    href: "#residential-conversion",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Equipment Repair",
    description:
      "Equipment downtime costs your business money. We service commercial laundry and kitchen equipment with fast response times and reliable repairs — helping you minimize disruption and keep operations running.",
    appliances: "Commercial Laundry & Kitchen Equipment",
    ctaLabel: "Request Commercial Service",
    href: "#commercial-conversion",
  },
] as const;

export default function ResidentialCommercial() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Repair service for home & business"
          description="Whether it's your home washer or your business's commercial equipment, Red River Appliance Service has the expertise to fix it."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pathways.map((pathway) => (
            <article
              key={pathway.id}
              id={pathway.id}
              className="scroll-mt-20 group relative flex flex-col rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg sm:p-10"
            >
              <span className="grid size-14 place-items-center rounded-xl bg-red-50 text-brand-700 transition-colors duration-200 group-hover:bg-brand-700 group-hover:text-white">
                <pathway.icon className="size-7" aria-hidden="true" />
              </span>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
                {pathway.title}
              </h3>

              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-stone-600">
                {pathway.description}
              </p>

              <p className="mt-4 text-sm font-medium text-stone-500">
                {pathway.appliances}
              </p>

              <a
                href={pathway.href}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-800 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
              >
                {pathway.ctaLabel}
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
