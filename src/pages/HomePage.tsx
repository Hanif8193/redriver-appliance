import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import TrustBar from "../sections/TrustBar";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
import HowItWorks from "../sections/HowItWorks";
import Testimonials from "../sections/Testimonials";
import Brands from "../sections/Brands";
import Faq from "../sections/Faq";
import FinalCta from "../sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <Brands />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
