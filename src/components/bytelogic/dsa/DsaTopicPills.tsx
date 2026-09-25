'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TopicPillItem {
  id: string;
  label: string;
  count?: number;
}

export const LEETCODE_TOPIC_PILLS: TopicPillItem[] = [
  { id: 'ALL', label: 'All Topics' },
  { id: 'Algorithms', label: 'Algorithms' },
  { id: 'Database', label: 'Database' },
  { id: 'Shell', label: 'Shell' },
  { id: 'Concurrency', label: 'Concurrency' },
  { id: 'JavaScript', label: 'JavaScript' },
  { id: 'Arrays and Vectors', label: 'Arrays' },
  { id: 'Linked Lists', label: 'Linked List' },
  { id: 'Stacks', label: 'Stack' },
  { id: 'Queues and Deques', label: 'Queue' },
  { id: 'Hash Tables and Hashing', label: 'Hash Table' },
  { id: 'Binary trees and traversals', label: 'Tree' },
  { id: 'Binary search trees', label: 'Binary Search Tree' },
  { id: 'Heaps and priority queues', label: 'Heap (Priority Queue)' },
  { id: 'Graph representation and traversal', label: 'Graph' },
  { id: 'Dynamic programming', label: 'Dynamic Programming' },
  { id: 'Two pointers', label: 'Two Pointers' },
  { id: 'Sliding window', label: 'Sliding Window' },
  { id: 'Backtracking', label: 'Backtracking' },
  { id: 'Elementary sorting', label: 'Sorting' },
  { id: 'Linear and binary search', label: 'Binary Search' },
  { id: 'Tries', label: 'Trie' },
  { id: 'Segment trees', label: 'Segment Tree' },
  { id: 'Disjoint Set Union (Union-Find)', label: 'Union Find' },
  { id: 'String indexing and suffix structures', label: 'String' },
  { id: 'Brute force and optimization', label: 'Math & Logic' },
];

interface DsaTopicPillsProps {
  selectedTopic: string;
  onSelectTopic: (topicId: string) => void;
}

export function DsaTopicPills({ selectedTopic, onSelectTopic }: DsaTopicPillsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -240 : 240;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full flex items-center group py-2">
      {/* Scroll Left Button */}
      <button
        type="button"
        onClick={() => scroll('left')}
        className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full bg-[#1e1e1e] hover:bg-[#2c2c2c] text-[#a1a1aa] hover:text-white border border-[#333] shadow-md z-10 shrink-0 mr-1.5 transition-colors cursor-pointer"
        aria-label="Scroll topics left"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Horizontal Pills Container */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 flex-1"
      >
        {LEETCODE_TOPIC_PILLS.map((pill) => {
          const isSelected =
            selectedTopic === pill.id ||
            (pill.id === 'ALL' && selectedTopic === 'ALL') ||
            (pill.label.toLowerCase() === selectedTopic.toLowerCase());

          return (
            <button
              key={pill.id}
              type="button"
              onClick={() => onSelectTopic(pill.id)}
              className={cn(
                'whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer shrink-0',
                isSelected
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'bg-[#262626] text-[#d4d4d8] hover:bg-[#333333] hover:text-white'
              )}
            >
              {pill.label}
            </button>
          );
        })}
      </div>

      {/* Scroll Right Button */}
      <button
        type="button"
        onClick={() => scroll('right')}
        className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full bg-[#1e1e1e] hover:bg-[#2c2c2c] text-[#a1a1aa] hover:text-white border border-[#333] shadow-md z-10 shrink-0 ml-1.5 transition-colors cursor-pointer"
        aria-label="Scroll topics right"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default DsaTopicPills;
