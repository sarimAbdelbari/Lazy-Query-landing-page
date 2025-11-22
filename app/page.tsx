"use client";

import { useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import FeaturesGrid from "./components/sections/FeaturesGrid";
import UseCases from "./components/sections/UseCases";
import FinalCTA from "./components/sections/FinalCTA";
import EmailModal from "./components/EmailModal";
import FixedCTA from "./components/ui/FixedCTA";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full relative">
      {/* Animated Background - Behind Everything */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero onOpenWaitlist={() => setIsModalOpen(true)} />
          <HowItWorks />
          <FeaturesGrid />
          <UseCases />
          <FinalCTA onOpenWaitlist={() => setIsModalOpen(true)} />
        </main>

        <Footer />

        <EmailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        
        {/* Fixed CTA Button */}
        <FixedCTA />
      </div>
    </div>
  );
}
