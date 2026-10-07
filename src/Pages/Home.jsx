import { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import ServicesPreview from "../sections/ServicesPreview";
import WhyChooseUs from "../sections/WhyChooseUs";
import Process from "../sections/Process";
import Technologies from "../sections/Technologies";
import CTA from "../sections/CTA";
import { COMPANY } from "../data/company";

export default function Home() {
  useEffect(() => {
    document.title = `${COMPANY.name} – ${COMPANY.tagline}`;
  }, []);

  return (
    <PageTransition>
      <Hero />
      <Intro />
      <ServicesPreview />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <CTA />
    </PageTransition>
  );
}