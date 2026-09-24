import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Terminal, BrainCircuit, ArrowRight, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Question Banks — ByteLogic | Technical Problem Sets',
  description:
    'Choose your problem set on ByteLogic: Interactive Data Structures & Algorithms (DSA) or Hands-On Machine Learning (ML) Problem Banks.',
};

export default function QuestionsHubPage() {
  return (
    <div className="min-h-screen bg-[#05070A] text-[#F3F6F7] pt-20 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-10">
      {/* Top Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-[#68747D]">
        <Link
          href="/bytelogic"
          className="flex items-center gap-1 hover:text-[#019AA2] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>ByteLogic</span>
        </Link>
        <span>/</span>
        <span className="text-[#A8B3BA]">Question Banks</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-3">
        <span className="font-mono text-xs text-[#019AA2] font-semibold tracking-wider uppercase">
          CURRICULUM DIRECTORY //
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-sans tracking-tight text-[#F3F6F7] uppercase">
          INTERACTIVE QUESTION BANKS.
        </h1>
        <p className="text-sm sm:text-base text-[#A8B3BA] font-sans max-w-2xl leading-relaxed">
          Structured problem sets designed to build deep mental models through active implementation, progressive hints, and complexity analysis.
        </p>
      </div>

      {/* Dual Problem Set Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* DSA Pillar */}
        <Link
          href="/bytelogic/questions/dsa"
          className="group p-6 sm:p-8 rounded-lg bg-[#0A0F14] border border-[#1C2830] hover:border-[#019AA2]/50 hover:-translate-y-1 transition-all bl-tick-box flex flex-col justify-between"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded bg-[#019AA2]/10 border border-[#019AA2]/30 flex items-center justify-center text-[#019AA2]">
              <Terminal className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#019AA2]">
              <span>01 / CODING PRACTICE</span>
              <span>•</span>
              <span className="text-[#A8B3BA]">WARM-UP → HARD</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-sans text-[#F3F6F7] group-hover:text-[#feffff] transition-colors">
              Data Structures &amp; Algorithms
            </h2>

            <p className="text-sm text-[#A8B3BA] font-sans leading-relaxed">
              Master the core interview and competitive programming curriculum: Arrays, Linked Lists, Stacks, Trees, Heaps, Graphs, Dynamic Programming, and Game Dev spatial data structures.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-[#1C2830] flex items-center justify-between text-xs font-mono text-[#019AA2]">
            <span>Explore DSA Catalog</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>

        {/* Machine Learning Pillar */}
        <Link
          href="/bytelogic/learn/question-bank"
          className="group p-6 sm:p-8 rounded-lg bg-[#0A0F14] border border-[#1C2830] hover:border-[#20BEFF]/50 hover:-translate-y-1 transition-all bl-tick-box flex flex-col justify-between"
        >
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded bg-[#20BEFF]/10 border border-[#20BEFF]/30 flex items-center justify-center text-[#20BEFF]">
              <BrainCircuit className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#20BEFF]">
              <span>02 / EMPIRICAL PRACTICE</span>
              <span>•</span>
              <span className="text-[#A8B3BA]">20 TOPICS · 5 TIERS</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-sans text-[#F3F6F7] group-hover:text-[#feffff] transition-colors">
              Machine Learning Hands-On
            </h2>

            <p className="text-sm text-[#A8B3BA] font-sans leading-relaxed">
              20 topics from Linear Regression to Foundation Model Evaluation, matched with Kaggle, Hugging Face, and UCI datasets across 5 progressive difficulty tiers.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-[#1C2830] flex items-center justify-between text-xs font-mono text-[#20BEFF]">
            <span>Explore ML Problem Set</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
