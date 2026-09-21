import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import TechMarquee from "@/components/TechMarquee";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedWork />
      <WhyUs />
      <Process />
      <TechMarquee />
      <Pricing />
      <About />
      <Faq />
      <Contact />
    </>
  );
}
