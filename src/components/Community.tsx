"use client";

import { useRef } from "react";
import { gsap } from "gsap";

export default function Community() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: number) => {
    const cards = containerRef.current?.querySelectorAll(".bento-card");
    if (!cards) return;

    cards.forEach((card, idx) => {
      const img = card.querySelector(".bento-img");
      if (idx === index) {
        // Hovered card: Scale up, raise shadow, and pop border
        gsap.to(card, {
          scale: 1.03,
          boxShadow: "0 20px 40px rgba(206, 45, 1, 0.3)",
          borderColor: "#CE2D01",
          zIndex: 10,
          duration: 0.45,
          ease: "power3.out",
        });
        gsap.to(img, {
          scale: 1.06,
          duration: 0.6,
          ease: "power3.out",
        });
      } else {
        // Other cards: Dim opacity and scale down slightly to push focus
        gsap.to(card, {
          opacity: 0.25,
          scale: 0.98,
          duration: 0.45,
          ease: "power3.out",
        });
      }
    });
  };

  const handleMouseLeave = () => {
    const cards = containerRef.current?.querySelectorAll(".bento-card");
    if (!cards) return;

    cards.forEach((card) => {
      const img = card.querySelector(".bento-img");
      // Reset all cards back to original layout
      gsap.to(card, {
        scale: 1,
        opacity: 1,
        boxShadow: "none",
        borderColor: "#353434", // border-surface-container-highest
        zIndex: 1,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(img, {
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    });
  };

  return (
    <section className="py-section-gap bg-deep-black" id="community">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-4">
          <div>
            <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg uppercase text-pure-white leading-none">
              JOIN THE <span className="text-impact-orange">PACK</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-secondary-container max-w-xl mt-4">
              Forge bonds with those who share the same relentless commitment to victory.
            </p>
          </div>
          <button className="bg-impact-orange text-pure-white px-10 py-4 font-headline-md text-headline-md uppercase hover:bg-on-primary-container transition-all cursor-pointer">
            JOIN THE COMMUNITY
          </button>
        </div>

        {/* Bento Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[650px] relative"
        >
          {/* Card 1 (Large 2x2 Square - Cyclist) */}
          <div
            className="bento-card md:col-span-2 md:row-span-2 relative overflow-hidden bg-surface-grey border-2 border-surface-container-highest cursor-pointer z-1"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="bento-img w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/comm1.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80 pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 pointer-events-none">
              <span className="bg-impact-orange text-pure-white px-3 py-1 font-label-bold text-caption uppercase">
                MOTIVATION
              </span>
            </div>
          </div>

          {/* Card 2 (Standard Block - Deadlift Front) */}
          <div
            className="bento-card relative overflow-hidden bg-surface-grey border-2 border-surface-container-highest cursor-pointer z-1"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="bento-img w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/comm2.jpg')",
              }}
            ></div>
          </div>

          {/* Card 3 (Standard Block - Deadlift Back) */}
          <div
            className="bento-card relative overflow-hidden bg-surface-grey border-2 border-surface-container-highest cursor-pointer z-1"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="bento-img w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/comm3.jpg')",
              }}
            ></div>
          </div>

          {/* Card 4 (Wide Horizontal Block - Pull-up) */}
          <div
            className="bento-card md:col-span-2 relative overflow-hidden bg-surface-grey border-2 border-surface-container-highest cursor-pointer z-1"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="bento-img w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/comm4.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80 pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 pointer-events-none">
              <span className="bg-impact-orange text-pure-white px-3 py-1 font-label-bold text-caption uppercase">
                TEAMWORK
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
