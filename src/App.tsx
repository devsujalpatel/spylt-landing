import { ScrollTrigger } from "gsap/all";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./sections/hero-section";
import gsap from "gsap";
import { MessageSection } from "./sections/message-section";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <div className="h-dvh border border-red-500 bg-blue-500"></div>
    </main>
  );
};

export default App;
