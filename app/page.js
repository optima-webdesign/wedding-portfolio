// app/page.js
"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";

import Process from "@/components/Process";
import VisitStudio from "@/components/VisitStudio";
import OfferGallery from "@/components/OfferGallery";
import Gallery from "@/components/Gallery";
import AboutPreview from "@/components/AboutPreview";
import CTASection from "@/components/CTA";

// Baaki components hum yahan import karenge jaise jaise banenge

export default function Home() {
  // Initialize Locomotive Scroll for smooth scrolling
  useEffect(() => {
    let locomotiveScroll;
    
    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll({
        smooth: true,
        multiplier: 1, // Scroll speed
      });
    };

    initScroll();

    // Cleanup on unmount
    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-coral-light text-dark-text selection:bg-coral-muted selection:text-white">
      <Hero />
      <AboutPreview />
      <Process />
      <OfferGallery />
      <Gallery />
      <VisitStudio />
      <CTASection />
      
    </main>
  );
}