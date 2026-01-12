import { ScrollTrigger } from "gsap/all";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./sections/hero-section";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="h-dvh border border-red-500 bg-blue-500"></div>
    </main>
  );
};

export default App;
