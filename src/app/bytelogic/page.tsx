import React from 'react';
import { ByteLogicHero } from '@/components/bytelogic/hero/ByteLogicHero';
import { ByteLogicIdeaSection } from '@/components/bytelogic/sections/ByteLogicIdeaSection';
import { LearningLoopSection } from '@/components/bytelogic/sections/LearningLoopSection';
import { ConceptShowcaseSection } from '@/components/bytelogic/sections/ConceptShowcaseSection';
import { KnowledgeDomainsSection } from '@/components/bytelogic/sections/KnowledgeDomainsSection';
import { LatestKnowledgeSection } from '@/components/bytelogic/sections/LatestKnowledgeSection';
import { ByteLogicLabSection } from '@/components/bytelogic/sections/ByteLogicLabSection';
import { TeachingMethodSection } from '@/components/bytelogic/sections/TeachingMethodSection';
import { FinalCTASection } from '@/components/bytelogic/sections/FinalCTASection';

export default function ByteLogicHomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 00 — Hero Section with 3D Computational Visual (FINAL & UNTOUCHED) */}
      <ByteLogicHero />

      {/* 01 — What is ByteLogic? (The ByteLogic Idea: Technical Knowledge Without the Black Box) */}
      <ByteLogicIdeaSection />

      {/* 02 — How Does It Teach? (The ByteLogic Loop: 5-Stage First-Principles Cycle) */}
      <LearningLoopSection />

      {/* 03 — See a Concept (See a Concept Come Alive: Interactive K-Means Geometric Partitioning) */}
      <ConceptShowcaseSection />

      {/* 04 — Explore Knowledge (7 Rigorous Knowledge Domains Technical Index) */}
      <KnowledgeDomainsSection />

      {/* 05 — Latest Knowledge (Technical Research & Archive Index) */}
      <LatestKnowledgeSection />

      {/* 06 — Run an Experiment (ByteLogic Lab: Don't Just Read It. Run It.) */}
      <ByteLogicLabSection />

      {/* 07 — Understand the Method (From Intuition to Implementation: Pedagogy) */}
      <TeachingMethodSection />

      {/* 08 — Start Exploring (Final Launchpad CTA) */}
      <FinalCTASection />
    </div>
  );
}
