import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";

export const FlavorSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sliderRef.current) return;

      const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: "+=1500px",
          scrub: true,
          markers: true,
        },
      });

      tl.to(".flavor-section", {
        x: "-1500px",
        ease: "power1.inOut",
      });
    },
    { scope: sliderRef },
  );

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt={flavor.name}
              className="absolute bottom-0"
            />
            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt={flavor.name}
              className="drinks"
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
