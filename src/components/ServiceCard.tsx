import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceCard({
  name,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <article className="group flex flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg focus-within:border-brand-300 focus-within:shadow-lg">
      <div className="grid size-12 place-items-center rounded-lg bg-red-50 text-brand-700 transition-colors duration-200 group-hover:bg-brand-700 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-stone-900">
        {name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
        {description}
      </p>
      <a
        href="#contact"
        className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-sm text-sm font-semibold text-brand-700 underline-offset-4 transition-colors hover:text-brand-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
        aria-label={`Request ${name.toLowerCase()}`}
      >
        Request this service
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </a>
    </article>
  );
}
