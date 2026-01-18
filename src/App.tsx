import { ScrollTrigger } from "gsap/all";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./sections/hero-section";
import gsap from "gsap";
import { MessageSection } from "./sections/message-section";
import { FlavorSection } from "./sections/flavor-section";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <div className="h-dvh border border-red-500 bg-blue-500"></div>
    </main>
  );
};

export default App;
