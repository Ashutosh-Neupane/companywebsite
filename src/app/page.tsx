import Hero from "@/sections/home/Hero";
import FeaturesSection from "@/sections/home/FeaturesSection";
import TestimonialSection from "@/sections/home/Testimonial";
import Faq from "@/sections/home/FaqSection";

import "@/app/globals.css";
import FeatureDescription from "@/sections/home/FeatureDescription";

import ClientSection from "@/sections/home/Client";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Hero />
        {/* <HowItWorks/> */}
        <ClientSection/>
        <FeaturesSection/>
        {/* <FeatureDescription/> */}
        <TestimonialSection/>
        {/* <PricingSection/> */}
        <Faq/>
      </main>
    </div>
  );
}
