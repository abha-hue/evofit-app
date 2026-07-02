"use client";

import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import TopNavBar from "@/components/TopNavBar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Moodboard from "@/components/Moodboard";
import Training from "@/components/Training";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import Community from "@/components/Community";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollAnimate();

  return (
    <>
      <TopNavBar />
      <main>
        <Hero />
        <Marquee />
        <Moodboard />
        <Training />
        <Pricing />
        <Results />
        <Community />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
