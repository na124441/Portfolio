import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { NowSection } from '@/components/sections/NowSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { JourneySection } from '@/components/sections/JourneySection';
import { ContributionsSection } from '@/components/sections/ContributionsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Current Focus / "Now" */}
      <NowSection />

      {/* 03. Selected Projects */}
      <ProjectsSection />

      {/* 04. Engineering Philosophy */}
      <PhilosophySection />

      {/* 05. Experience / Journey */}
      <JourneySection />

      {/* 06. Contributions */}
      <ContributionsSection />

      {/* 07. About */}
      <AboutSection />

      {/* 08. Contact */}
      <ContactSection />
    </div>
  );
}
