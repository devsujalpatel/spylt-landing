import { useRef } from "react";
import { cards } from "../constants";

export const TestimonialSection = () => {
  const vdRef = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (idx: number) => {
    const video = vdRef.current[idx];
    if (!video) return;
    video.play();
  };

  const handlePause = (idx: number) => {
    const video = vdRef.current[idx];
    if (!video) return;
    video.pause();
  };

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">What's </h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(idx)}
            onMouseLeave={() => handlePause(idx)}
          >
            <video
              ref={(el) => {
                vdRef.current[idx] = el;
              }}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
