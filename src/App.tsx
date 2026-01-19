import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./sections/hero-section";
import gsap from "gsap";
import { MessageSection } from "./sections/message-section";
import { FlavorSection } from "./sections/flavor-section";
import { useGSAP } from "@gsap/react";

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
          <div className="h-dvh border border-red-500 bg-blue-500"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
