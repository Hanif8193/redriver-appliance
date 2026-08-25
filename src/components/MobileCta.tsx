import { Phone, MessageSquare } from "lucide-react";
import { business } from "../data/content";

export default function MobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-stone-200 bg-white px-4 py-3 shadow-lg sm:hidden">
      <div className="flex gap-3">
        <a
          href={business.phoneHref}
          aria-label={`Call ${business.name} at ${business.phoneDisplay}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-700 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call Now
        </a>
        <a
          href="#contact"
          aria-label="Request service"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white py-3 text-sm font-semibold text-stone-900 shadow-sm transition-colors hover:border-brand-500 hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          <MessageSquare className="size-4" aria-hidden="true" />
          Request Service
        </a>
      </div>
    </div>
  );
}
