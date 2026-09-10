import React from 'react';
import { ByteLogicHero } from '@/components/bytelogic/hero/ByteLogicHero';
import { FeaturedConceptSection } from '@/components/bytelogic/sections/FeaturedConceptSection';
import { LearningPathsSection } from '@/components/bytelogic/sections/LearningPathsSection';
import { ContentShowcaseSection } from '@/components/bytelogic/sections/ContentShowcaseSection';
import { ByteLogicLabSection } from '@/components/bytelogic/sections/ByteLogicLabSection';
import { PhilosophySection } from '@/components/bytelogic/sections/PhilosophySection';

export default function ByteLogicHomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 01 — Hero Section with Computational Visual */}
      <ByteLogicHero />

      {/* 02 — Featured Concept: K-Means Deep Dive */}
      <FeaturedConceptSection />

      {/* 03 — 7 Core Learning Paths */}
      <LearningPathsSection />

      {/* 04 — Latest Multi-Format Content Showcase */}
      <ContentShowcaseSection />

      {/* 05 — ByteLogic Lab: Interactive Experimentation Instrumentation */}
      <ByteLogicLabSection />

      {/* 06 — Pedagogical Philosophy: The 5-Stage First-Principles Loop */}
      <PhilosophySection />
    </div>
  );
}
