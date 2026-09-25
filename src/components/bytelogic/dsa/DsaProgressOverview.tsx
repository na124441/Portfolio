'use client';

import React from 'react';
import type { DsaProblem } from '@/types/dsa-question';
import type { DsaStateMap } from '@/lib/bytelogic/dsaProgress';
import { DSA_TOPICS } from '@/data/bytelogic/dsa/topics';

interface DsaProgressOverviewProps {
  problems: DsaProblem[];
  stateMap: DsaStateMap;
}

export function DsaProgressOverview({ problems, stateMap }: DsaProgressOverviewProps) {
  const total = problems.length;
  let solved = 0;
  let attempted = 0;

  for (const p of problems) {
    const st = stateMap[p.slug]?.status;
    if (st === 'solved') solved++;
    else if (st === 'attempted') attempted++;
  }

  const remaining = total - solved - attempted;

  // Compute breakdown by topic
  const topicStats = DSA_TOPICS.map((topic) => {
    const topicProblems = problems.filter(
      (p) => p.topic.toLowerCase() === topic.name.toLowerCase()
    );
    const count = topicProblems.length;
    const topicSolved = topicProblems.filter(
      (p) => stateMap[p.slug]?.status === 'solved'
    ).length;
    return {
      name: topic.name,
      count,
      solved: topicSolved,
      percent: count === 0 ? 0 : Math.round((topicSolved / count) * 100),
    };
  }).filter((t) => t.count > 0);

  const [showAllTopics, setShowAllTopics] = React.useState(false);
  const displayedTopicStats = showAllTopics ? topicStats : topicStats.slice(0, 6);

  return (
    <div className="p-5 sm:p-6 bg-[#0A0F14] border border-[#1C2830] rounded-lg bl-tick-box flex flex-col gap-5">
      <div className="flex items-center justify-between border-b border-[#1C2830] pb-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#019AA2]" />
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F3F6F7]">
            Curriculum Mastery Progress
          </h4>
        </div>
        <span className="text-xs font-mono text-[#68747D]">
          {solved} of {total} completed
        </span>
      </div>

      {/* Aggregate Stats */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="p-3 bg-[#0E151B] border border-[#1C2830] rounded">
          <span className="text-[10px] font-mono uppercase text-[#68747D] block mb-1">
            Solved
          </span>
          <span className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">
            {solved}
          </span>
        </div>
        <div className="p-3 bg-[#0E151B] border border-[#1C2830] rounded">
          <span className="text-[10px] font-mono uppercase text-[#68747D] block mb-1">
            In Progress
          </span>
          <span className="text-xl sm:text-2xl font-mono font-bold text-amber-400">
            {attempted}
          </span>
        </div>
        <div className="p-3 bg-[#0E151B] border border-[#1C2830] rounded">
          <span className="text-[10px] font-mono uppercase text-[#68747D] block mb-1">
            Unattempted
          </span>
          <span className="text-xl sm:text-2xl font-mono font-bold text-[#A8B3BA]">
            {remaining}
          </span>
        </div>
      </div>

      {/* Per Topic Completion Bars */}
      {topicStats.length > 0 && (
        <div className="flex flex-col gap-2.5 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#68747D] uppercase tracking-wider">
              Curriculum Topics ({topicStats.length})
            </span>
            {topicStats.length > 6 && (
              <button
                type="button"
                onClick={() => setShowAllTopics((prev) => !prev)}
                className="text-[11px] font-mono text-[#019AA2] hover:underline cursor-pointer"
              >
                {showAllTopics ? 'Show Less' : `View All (${topicStats.length})`}
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {displayedTopicStats.map((item) => (
              <div
                key={item.name}
                className="p-3 bg-[#0E151B]/70 border border-[#1C2830] rounded flex flex-col gap-1.5"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#F3F6F7] font-sans text-xs truncate max-w-[150px]">
                    {item.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#019AA2]">
                    {item.solved}/{item.count}
                  </span>
                </div>
                <div className="w-full h-1 bg-[#131C24] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#019AA2] rounded-full transition-all duration-300"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DsaProgressOverview;
