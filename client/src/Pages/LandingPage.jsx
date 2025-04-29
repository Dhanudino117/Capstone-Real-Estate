import React from "react";
import LandingPageHeader from "../Components/LandingPageHeader";
import Hero from "./LandingPageUI/Hero";
import Features from "./LandingPageUI/Features";
import PropertyShowcase from "./LandingPageUI/PropertyShowCase";
import LandingPageTestimonials from "./LandingPageUI/LandingPageTestimonials";
import CallToAction from "./LandingPageUI/CallToAction";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div>
      <LandingPageHeader />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Hero />
          <Features />
          <PropertyShowcase />
          <LandingPageTestimonials />
          <CallToAction />
          <br />
          <Footer/>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
