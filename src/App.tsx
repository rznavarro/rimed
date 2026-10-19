import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFA] text-[#13262A] font-sans">
      {/* Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Problem: "¿Te identificas?" */}
        <ProblemSection />

        {/* 3. Specialties */}
        <SpecialtiesSection />

        {/* 4. Social Proof & Team */}
        <SocialProofSection />

        {/* 5. Booking: "Pedir tu hora es simple" */}
        <BookingSection />

        {/* 6. Location & Hours */}
        <LocationSection />

        {/* 7. FAQs */}
        <FaqSection />

        {/* 8. Final CTA */}
        <FinalCtaSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Floating WhatsApp for Desktop/Tablet */}
      <FloatingWhatsApp />

      {/* Fixed Bottom Action Bar for Mobile Viewports */}
      <MobileBottomBar />
    </div>
  );
}
