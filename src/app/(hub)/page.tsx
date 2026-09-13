import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { CurrentlyBuildingSection } from '@/components/sections/CurrentlyBuildingSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { LabPreviewSection } from '@/components/sections/LabPreviewSection';
import { NowSection } from '@/components/sections/NowSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HubHomePage() {
  return (
    <div className="flex flex-col">
      {/* 01. Master Hero Section (4-Phase GSAP scroll-triggered emergence) */}
      <HeroSection />

      {/* 02. Currently Building — Command Center Status */}
      <CurrentlyBuildingSection />

      {/* 03. Selected Flagship & Major Projects */}
      <ProjectsSection />

      {/* 04. Laboratory & Knowledge Domains Preview */}
      <LabPreviewSection />

      {/* 05. Now — Current Operational Vector */}
      <NowSection />

      {/* 06. Direct Contact & Coordinates */}
      <ContactSection />
    </div>
  );
}
