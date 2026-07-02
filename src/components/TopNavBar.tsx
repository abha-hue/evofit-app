"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TopNavBar() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressBarRef.current) return;

    // Use gsap.context to handle React 18/19 Strict Mode double-rendering safely
    const ctx = gsap.context(() => {
      gsap.to(progressBarRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.1, // very fast tracking
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert(); // cleans up all GSAP tweens and ScrollTriggers
  }, []);

  return (
    <>
      {/* Scroll Progress Bar - Fixed at the absolute top of the viewport */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 w-full h-[4px] z-[9999]"
        style={{
          backgroundColor: "#CE2D01", // explicit orange color
          transform: "scaleX(0)",
          transformOrigin: "left",
        }}
      />

      <header className="fixed top-0 w-full z-50 bg-deep-black/40 backdrop-blur-lg border-b border-surface-container-highest/50">
        <nav className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
          <div className="font-display-xl text-headline-md tracking-tighter text-impact-orange">
            EVOFIT
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              className="text-on-surface font-label-bold text-label-bold hover:text-impact-orange transition-colors uppercase"
              href="#training"
            >
              TRAINING
            </Link>
            <Link
              className="text-on-surface font-label-bold text-label-bold hover:text-impact-orange transition-colors uppercase"
              href="#pricing"
            >
              PRICING
            </Link>
            <Link
              className="text-on-surface font-label-bold text-label-bold hover:text-impact-orange transition-colors uppercase"
              href="#results"
            >
              RESULTS
            </Link>
            <Link
              className="text-on-surface font-label-bold text-label-bold hover:text-impact-orange transition-colors uppercase"
              href="#community"
            >
              COMMUNITY
            </Link>
          </div>
          <button className="bg-impact-orange text-pure-white px-6 py-2 font-headline-md text-label-bold uppercase hover:bg-impact-orange hover:text-pure-white transition-all duration-300 scale-95 active:scale-90 transition-transform">
            JOIN NOW
          </button>
        </nav>
      </header>
    </>
  );
}
