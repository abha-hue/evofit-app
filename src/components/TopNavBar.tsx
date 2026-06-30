"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function TopNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b-2 border-surface-container-highest transition-all ${
        isScrolled ? "bg-deep-black/95 shadow-xl" : "bg-background/95 dark:bg-background/95"
      }`}
    >
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
  );
}
