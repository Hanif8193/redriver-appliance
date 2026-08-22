import SectionHeading from "../components/SectionHeading";
import { brands, business } from "../data/content";

export default function Brands() {
  return (
    <section
      id="brands"
      className="scroll-mt-20 border-y border-stone-200 bg-stone-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Brands We Repair"
          title="Experienced with all major appliance brands"
          description="Whatever's sitting in your laundry room or kitchen, chances are we've fixed it before."
        />

        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5 sm:gap-3">
          {brands.map((brand) => (
            <li
              key={brand}
              className="rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold tracking-wide text-stone-700 shadow-sm transition-all duration-150 hover:-translate-y-px hover:border-brand-300 hover:text-brand-800 sm:px-5"
            >
              {brand}
            </li>
          ))}
        </ul>

        <p className="mt-9 text-center text-sm text-stone-600">
          Don't see your brand?{" "}
          <a
            href={business.phoneHref}
            className="font-semibold text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
          >
            Give us a call
          </a>{" "}
          — we service appliances from any manufacturer.
        </p>
      </div>
    </section>
  );
}
