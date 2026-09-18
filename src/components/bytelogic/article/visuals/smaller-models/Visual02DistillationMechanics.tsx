'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface VisualProps {
  className?: string;
}

export const Visual02DistillationMechanics: React.FC<VisualProps> = ({ className }) => {
  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-[#0E151B] border border-[#1C2830] overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="Conceptual architecture diagram of knowledge distillation showing teacher soft targets transferring structural knowledge to student"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-[#1C2830] bg-[#0A0F14] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="text-[#F3F6F7] font-semibold">
            VISUAL 02 // KNOWLEDGE DISTILLATION & SOFT TARGETS
          </span>
        </div>
        <span className="text-[11px] text-[#68747D] uppercase tracking-wider">
          FUNCTION TRANSFER
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="p-4 sm:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl aspect-[16/9] sm:aspect-[2.1/1] relative">
          <svg
            viewBox="0 0 680 320"
            className="w-full h-full overflow-visible font-mono select-none"
          >
            {/* Top Block: Teacher Model */}
            <g transform="translate(60, 20)">
              <rect
                x="0"
                y="0"
                width="240"
                height="70"
                rx="6"
                fill="#0A0F14"
                stroke="#68747D"
                strokeWidth="1.5"
              />
              <text x="14" y="22" fill="#68747D" fontSize="10">LARGE TEACHER</text>
              <text x="14" y="42" fill="#F3F6F7" fontSize="13" fontWeight="bold">70B Foundation Model</text>
              <text x="14" y="58" fill="#A8B3BA" fontSize="9">Trained on Web Scale · High Entropy</text>
            </g>

            {/* Teacher Probability Distribution (Soft targets) */}
            <g transform="translate(360, 15)">
              <rect
                x="0"
                y="0"
                width="260"
                height="80"
                rx="6"
                fill="#0E151B"
                stroke="#019AA2"
                strokeWidth="1"
              />
              <text x="14" y="20" fill="#019AA2" fontSize="10" fontWeight="bold">
                SOFT TARGETS (T &gt; 1) · &quot;DARK KNOWLEDGE&quot;
              </text>

              {/* Mini probability bars */}
              <g transform="translate(14, 30)">
                <text x="0" y="10" fill="#F3F6F7" fontSize="9">Husky: 0.68</text>
                <rect x="65" y="2" width="110" height="9" rx="2" fill="#019AA2" />

                <text x="0" y="25" fill="#F3F6F7" fontSize="9">Dog:   0.28</text>
                <rect x="65" y="17" width="45" height="9" rx="2" fill="#019AA2" opacity="0.7" />

                <text x="0" y="40" fill="#A8B3BA" fontSize="9">Fox:   0.04</text>
                <rect x="65" y="32" width="9" height="9" rx="2" fill="#d4af37" />
              </g>
            </g>

            {/* Connecting Flow / Loss Transfer */}
            <g transform="translate(0, 0)">
              {/* Arrow down from Teacher to Soft targets */}
              <path
                d="M 300 55 L 360 55"
                fill="none"
                stroke="#019AA2"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <text x="330" y="45" fill="#019AA2" fontSize="9" textAnchor="middle">Logits / T</text>

              {/* Central KL Divergence Transfer */}
              <path
                d="M 490 95 L 490 190"
                fill="none"
                stroke="#019AA2"
                strokeWidth="2"
              />
              <circle cx="490" cy="142" r="16" fill="#0E151B" stroke="#019AA2" strokeWidth="1.5" />
              <text x="490" y="146" fill="#019AA2" fontSize="9" textAnchor="middle" fontWeight="bold">
                KL
              </text>
              <text x="545" y="145" fill="#A8B3BA" fontSize="10">
                L_KD = KL( p_T || p_S )
              </text>
            </g>

            {/* Student Probability Distribution */}
            <g transform="translate(360, 190)">
              <rect
                x="0"
                y="0"
                width="260"
                height="80"
                rx="6"
                fill="#0E151B"
                stroke="#019AA2"
                strokeWidth="1"
              />
              <text x="14" y="20" fill="#019AA2" fontSize="10" fontWeight="bold">
                STUDENT PREDICTION (T &gt; 1)
              </text>

              <g transform="translate(14, 30)">
                <text x="0" y="10" fill="#F3F6F7" fontSize="9">Husky: 0.67</text>
                <rect x="65" y="2" width="108" height="9" rx="2" fill="#019AA2" />

                <text x="0" y="25" fill="#F3F6F7" fontSize="9">Dog:   0.29</text>
                <rect x="65" y="17" width="46" height="9" rx="2" fill="#019AA2" opacity="0.7" />

                <text x="0" y="40" fill="#A8B3BA" fontSize="9">Fox:   0.04</text>
                <rect x="65" y="32" width="9" height="9" rx="2" fill="#d4af37" />
              </g>
            </g>

            {/* Bottom Block: Student Model */}
            <g transform="translate(60, 195)">
              <rect
                x="0"
                y="0"
                width="240"
                height="70"
                rx="6"
                fill="#0A0F14"
                stroke="#019AA2"
                strokeWidth="1.5"
              />
              <text x="14" y="22" fill="#019AA2" fontSize="10" fontWeight="bold">COMPACT STUDENT</text>
              <text x="14" y="42" fill="#F3F6F7" fontSize="13" fontWeight="bold">3B Distilled Model</text>
              <text x="14" y="58" fill="#A8B3BA" fontSize="9">Learns Smooth Decision Manifold</text>
            </g>

            {/* Arrow from student to student distribution */}
            <path
              d="M 300 230 L 360 230"
              fill="none"
              stroke="#019AA2"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <text x="330" y="220" fill="#019AA2" fontSize="9" textAnchor="middle">Logits / T</text>
          </svg>
        </div>
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-3 border-t border-[#1C2830] bg-[#0A0F14] text-xs text-[#A8B3BA] leading-relaxed">
        <span className="font-mono text-[#019AA2] font-semibold mr-1">Mechanism:</span>
        Instead of learning from binary 0/1 hard labels, the compact student trains on the temperature-scaled probability distribution of the teacher. This imparts relative semantic similarities and confidence gradients without requiring the student to reproduce the teacher&apos;s parameter scale.
      </figcaption>
    </figure>
  );
};
