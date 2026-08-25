export interface Service {
  id: string;
  name: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface JourneyStep {
  id: string;
  title: string;
  description: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
}

export const business = {
  name: "Red River Appliance Service",
  shortName: "Red River Appliance",
  city: "Winnipeg",
  region: "MB",
  phoneDisplay: "431-668-8184",
  phoneHref: "tel:+14316688184",
  tagline:
    "Fast, dependable appliance repair for homes and businesses across Winnipeg.",
  availability: "Same-Day Service Available",
} as const;

export const services: Service[] = [
  {
    id: "washer-repair",
    name: "Washer Repair",
    description:
      "Leaks, drainage problems, drum issues and error codes fixed on-site.",
  },
  {
    id: "dryer-repair",
    name: "Dryer Repair",
    description:
      "No heat, long drying times, unusual noise or shutdowns resolved quickly.",
  },
  {
    id: "refrigerator-repair",
    name: "Refrigerator Repair",
    description:
      "Cooling failures, frost buildup, leaks and compressor issues diagnosed fast.",
  },
  {
    id: "stove-oven-repair",
    name: "Stove & Oven Repair",
    description:
      "Burners, heating elements, thermostats and controls repaired safely.",
  },
  {
    id: "dishwasher-repair",
    name: "Dishwasher Repair",
    description:
      "Poor cleaning, draining faults, leaks and pump repairs done right.",
  },
  {
    id: "commercial-appliance-repair",
    name: "Commercial Appliances",
    description:
      "Reliable maintenance and repair for commercial laundry and kitchen equipment.",
  },
];

export const brands: string[] = [
  "Electrolux",
  "Samsung",
  "Frigidaire",
  "Whirlpool",
  "Kenmore",
  "Maytag",
  "GE",
  "Miele",
  "Inglis",
  "KitchenAid",
];

export const trustPoints: ValueProp[] = [
  {
    id: "experience",
    title: "10 Years' Experience",
    description: "A decade of hands-on appliance repair",
  },
  {
    id: "same-day",
    title: "Same-Day Service",
    description: "Appointments when you need them most",
  },
  {
    id: "warranty",
    title: "3-Month Warranty",
    description: "On every part we replace",
  },
  {
    id: "brands",
    title: "All Major Brands",
    description: "From Samsung and GE to Miele",
  },
];

export const whyUsPoints: ValueProp[] = [
  {
    id: "experience",
    title: "A decade of hands-on experience",
    description:
      "Ten dedicated years repairing household and commercial appliances across Winnipeg.",
  },
  {
    id: "fast",
    title: "Same-day service",
    description:
      "When an appliance breaks down, waiting days isn't an option. We offer same-day appointments.",
  },
  {
    id: "warranty",
    title: "3-month warranty on parts",
    description:
      "Every replaced part carries a three-month warranty, so the fix holds up.",
  },
  {
    id: "brands",
    title: "Expertise across major brands",
    description:
      "From Whirlpool and GE to Miele and KitchenAid, we repair appliances from any manufacturer.",
  },
  {
    id: "convenience",
    title: "Service built around you",
    description:
      "Straightforward scheduling, budget-friendly pricing and repairs done right in your home.",
  },
];

export const journeySteps: JourneyStep[] = [
  {
    id: "contact",
    title: "Contact Us",
    description:
      "Call us and tell us what's acting up. We'll arrange a visit that fits your schedule.",
  },
  {
    id: "diagnose",
    title: "Diagnose the Problem",
    description:
      "A technician examines your appliance, identifies the fault and walks you through it before any work begins.",
  },
  {
    id: "repair",
    title: "Repair Your Appliance",
    description:
      "We complete the repair on-site with quality replacement parts — covered by our 3-month warranty.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Why is there a charge for a diagnostic service call?",
    answer:
      "The fee covers sending a qualified technician to your location to inspect your appliance and identify the exact problem on-site.",
  },
  {
    question: "Do I still pay for diagnostics if I go ahead with the repair?",
    answer:
      "No. If you proceed with the recommended repair, the diagnostic is included.",
  },
  {
    question: "What kind of warranty comes with a repair?",
    answer:
      "Every replaced part is guaranteed with a 3-month warranty, so you're covered if something goes wrong.",
  },
  {
    question: "Can you come the same day?",
    answer:
      "In most cases, yes. Same-day appointments are available so a broken appliance doesn't derail your week.",
  },
  {
    question: "Which brands do you repair?",
    answer:
      "We work on appliances from any manufacturer, including Electrolux, Samsung, Frigidaire, Whirlpool, Kenmore, Maytag, GE, Miele, Inglis and KitchenAid.",
  },
  {
    question: "Do you repair commercial appliances?",
    answer:
      "Yes. Alongside household appliances we also service commercial laundry and kitchen equipment.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "john-smith",
    name: "John Smith",
    quote:
      "My oven malfunctioned on the eve of a holiday dinner with a houseful of guests. I called Red River Appliance Service and they responded within two hours and saved the situation. Everything has been functioning flawlessly since.",
  },
  {
    id: "david-white",
    name: "David White",
    quote:
      "Technician Alex was friendly and knowledgeable while assessing my washing machine. He asked thorough questions to understand the issue, resolved it completely and even provided valuable maintenance advice. I'll definitely call Red River again.",
  },
  {
    id: "jenny-lapanov",
    name: "Jenny Lapanov",
    quote:
      "We are highly satisfied with the service provided. Having our appliances repaired was an exceptional experience, and the complimentary estimate helped us stay on budget while keeping our existing appliances running.",
  },
];
