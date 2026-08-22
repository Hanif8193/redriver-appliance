import { ArrowUp, Clock, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { business } from "../data/content";

const serviceLinks = [
  "Washer Repair",
  "Dryer Repair",
  "Refrigerator Repair",
  "Stove & Oven Repair",
  "Dishwasher Repair",
  "Commercial Appliances",
] as const;

const companyLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
] as const;

const footerLinkClass =
  "rounded-sm text-sm text-stone-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-400">
            {business.tagline}
          </p>
        </div>

        <nav aria-label="Footer services">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
            Services
          </h2>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((label) => (
              <li key={label}>
                <a href="#services" className={footerLinkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer company">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
            Company
          </h2>
          <ul className="mt-5 space-y-3">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={footerLinkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div id="contact-info">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
            Contact
          </h2>
          <a
            href={business.phoneHref}
            aria-label={`Call ${business.name} at ${business.phoneDisplay}`}
            className="mt-5 inline-flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-white transition-colors hover:text-brand-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
          >
            <Phone className="size-5 shrink-0" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <ul className="mt-4 space-y-2.5 text-sm text-stone-400">
            <li className="flex items-center gap-2.5">
              <Clock className="size-4 shrink-0 text-stone-500" aria-hidden="true" />
              {business.availability}
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 shrink-0 text-stone-500" aria-hidden="true" />
              Serving {business.city}, {business.region}
            </li>
            <li className="pl-[26px]">Residential &amp; commercial</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-stone-500 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>Appliance repair &amp; maintenance in Winnipeg, Manitoba</p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-sm font-semibold text-stone-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
          >
            Back to top
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
