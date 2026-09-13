'use client';

import React from 'react';
import { FEATURED_LEARNING_PATHS } from '@/lib/bytelogic/learnData';
import { LearningPathCard } from '@/components/bytelogic/learn/LearningPathCard';
import { Route } from 'lucide-react';

export const LearningPathsSection: React.FC = () => {
  return (
    <section id="paths" className="relative w-full border-b border-[#1C2830] bg-[#05070A] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-[#1C2830]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-[#019AA2] font-semibold tracking-wider">
                04 //
              </span>
              <span className="text-xs font-mono text-[#68747D] uppercase tracking-widest">
                WHERE SHOULD I GO NEXT?
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans tracking-tight text-[#F3F6F7] uppercase">
              FEATURED LEARNING PATHS
            </h2>
          </div>

          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-[#A8B3BA] font-sans max-w-md leading-relaxed">
            While domains identify <em>what subject</em> you are exploring, learning paths answer <em>where you should progress next</em> through structured, sequential curricula.
          </p>
        </div>

        {/* 2-Column Responsive Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {FEATURED_LEARNING_PATHS.map((path) => (
            <LearningPathCard key={path.id} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
};
