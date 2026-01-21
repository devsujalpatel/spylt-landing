import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./sections/hero-section";
import gsap from "gsap";
import { MessageSection } from "./sections/message-section";
import { FlavorSection } from "./sections/flavor-section";
import { useGSAP } from "@gsap/react";
import { NutritionSection } from "./sections/nutrition-section";
import { BenefitSection } from "./sections/benefit-section";
import { TestimonialSection } from "./sections/testimonial-section";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>
          <div className="h-[200vh] bg-milk"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
