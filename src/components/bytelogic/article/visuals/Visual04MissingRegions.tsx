'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Visual04MissingRegions: React.FC<{ className?: string }> = ({ className }) => {
  const [showTargeted, setShowTargeted] = useState(false);

  // Dense region (observed frequently) points
  const densePoints = [
    { x: 120, y: 70 }, { x: 135, y: 80 }, { x: 150, y: 65 }, { x: 140, y: 95 },
    { x: 160, y: 85 }, { x: 175, y: 75 }, { x: 165, y: 105 }, { x: 180, y: 95 },
    { x: 130, y: 110 }, { x: 145, y: 120 }, { x: 155, y: 115 }, { x: 190, y: 110 },
    { x: 125, y: 85 }, { x: 170, y: 65 }, { x: 150, y: 100 }, { x: 185, y: 80 },
    { x: 140, y: 75 }, { x: 165, y: 125 }, { x: 175, y: 115 }, { x: 135, y: 95 },
  ];

  // Sparse edge points (underrepresented)
  const sparsePoints = [
    { x: 230, y: 90 }, { x: 245, y: 140 }, { x: 200, y: 160 }, { x: 110, y: 150 },
  ];

  // New targeted points filling previously unseen territories
  const targetedPoints = [
    { x: 420, y: 80, label: 'Heavy Rain' },
    { x: 450, y: 130, label: 'Night Fog' },
    { x: 380, y: 170, label: 'Camera Glare' },
    { x: 490, y: 180, label: 'Snow Occlusion' },
    { x: 350, y: 95, label: 'Tunnel Entry' },
    { x: 410, y: 210, label: 'Unmarked Lane' },
    { x: 470, y: 75, label: 'Low Visibility' },
  ];

  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-[#0E151B] border border-[#1C2830] overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="2D Problem space illustrating coverage vs unseen operational domains"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-[#1C2830] bg-[#0A0F14] text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-[#019AA2]" />
          <span className="text-[#F3F6F7] font-semibold">VISUAL 04 // THE PROBLEM SPACE (COVERAGE HORIZON)</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowTargeted(false)}
            className={cn(
              'px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer border',
              !showTargeted
                ? 'bg-[#019AA2]/15 border-[#019AA2] text-[#019AA2] font-semibold'
                : 'bg-[#131C24] border-[#1C2830] text-[#A8B3BA] hover:text-[#F3F6F7]'
            )}
          >
            Baseline Distribution
          </button>
          <button
            onClick={() => setShowTargeted(true)}
            className={cn(
              'flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer border',
              showTargeted
                ? 'bg-[#019AA2]/15 border-[#019AA2] text-[#019AA2] font-semibold'
                : 'bg-[#131C24] border-[#1C2830] text-[#A8B3BA] hover:text-[#F3F6F7]'
            )}
          >
            <Sparkles className="w-3 h-3" />
            <span>Targeted Sampling</span>
          </button>
        </div>
      </div>

      {/* 2D Problem Space Canvas */}
      <div className="p-4 sm:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl aspect-[16/9] sm:aspect-[2.1/1] relative bg-[#05070A] rounded-[6px] border border-[#1C2830] overflow-hidden p-2 sm:p-4">
          <svg viewBox="0 0 600 280" className="w-full h-full select-none font-mono">
            {/* Subtle background grid ticks */}
            <g stroke="#1C2830" strokeWidth="1" opacity="0.6">
              <line x1="50" y1="50" x2="550" y2="50" strokeDasharray="3 3" />
              <line x1="50" y1="140" x2="550" y2="140" strokeDasharray="3 3" />
              <line x1="50" y1="230" x2="550" y2="230" strokeDasharray="3 3" />
              <line x1="175" y1="30" x2="175" y2="250" strokeDasharray="3 3" />
              <line x1="300" y1="30" x2="300" y2="250" strokeDasharray="3 3" />
              <line x1="425" y1="30" x2="425" y2="250" strokeDasharray="3 3" />
            </g>

            {/* Region A: Dense Cluster (Observed frequently) */}
            <rect
              x="100"
              y="50"
              width="110"
              height="90"
              rx="4"
              fill="rgba(1, 154, 162, 0.08)"
              stroke="#019AA2"
              strokeWidth="1.2"
            />
            <text x="155" y="42" fill="#019AA2" fontSize="10" textAnchor="middle" fontWeight="600">
              Observed Frequently
            </text>

            {densePoints.map((pt, idx) => (
              <circle key={idx} cx={pt.x} cy={pt.y} r="3" fill="#F3F6F7" opacity="0.85" />
            ))}

            {/* Region B: Underrepresented zone */}
            <rect
              x="85"
              y="135"
              width="180"
              height="50"
              rx="4"
              fill="none"
              stroke="#A8B3BA"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.4"
            />
            <text x="250" y="165" fill="#A8B3BA" fontSize="9" textAnchor="middle">
              Underrepresented
            </text>
            {sparsePoints.map((pt, idx) => (
              <circle key={idx} cx={pt.x} cy={pt.y} r="3" fill="#A8B3BA" opacity="0.6" />
            ))}

            {/* Region C: Previously Unseen Realm (Large unexplored expanse) */}
            <rect
              x="320"
              y="40"
              width="240"
              height="200"
              rx="6"
              fill={showTargeted ? 'rgba(1, 154, 162, 0.05)' : 'rgba(255, 255, 255, 0.01)'}
              stroke={showTargeted ? '#019AA2' : '#1C2830'}
              strokeWidth="1.2"
              strokeDasharray={showTargeted ? 'none' : '4 4'}
              className="transition-colors duration-500"
            />
            <text
              x="440"
              y="32"
              fill={showTargeted ? '#019AA2' : '#68747D'}
              fontSize="10"
              textAnchor="middle"
              fontWeight="600"
              letterSpacing="0.05em"
            >
              {showTargeted ? 'Discovered via Targeted Sampling' : 'Previously Unseen (Void)'}
            </text>

            {!showTargeted && (
              <g opacity="0.4">
                <text x="440" y="125" fill="#68747D" fontSize="11" textAnchor="middle">
                  Nighttime · Heavy Rain · Dense Fog
                </text>
                <text x="440" y="145" fill="#68747D" fontSize="9" textAnchor="middle">
                  Zero training observations in current dataset
                </text>
              </g>
            )}

            {/* If targeted is toggled on: show targeted points */}
            {showTargeted &&
              targetedPoints.map((pt, idx) => (
                <g key={idx}>
                  <motion.circle
                    cx={pt.x}
                    cy={pt.y}
                    r="4.5"
                    fill="#019AA2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.08, duration: 0.3 }}
                  />
                  <motion.text
                    x={pt.x}
                    y={pt.y - 8}
                    fill="#019AA2"
                    fontSize="8.5"
                    textAnchor="middle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.08 + 0.1 }}
                  >
                    {pt.label}
                  </motion.text>
                </g>
              ))}
          </svg>
        </div>

        {/* Legend row */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F3F6F7]" />
            <span className="text-[#A8B3BA]">Observed frequently</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#68747D]" />
            <span className="text-[#A8B3BA]">Underrepresented</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#019AA2]" />
            <span className="text-[#019AA2]">Previously unseen</span>
          </div>
        </div>
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-3 border-t border-[#1C2830] bg-[#0A0F14] text-xs font-mono text-[#A8B3BA] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>
          <strong className="text-[#F3F6F7]">Figure 04:</strong> Exploring missing regions in operational problem space.
        </span>
        <span className="text-[#68747D] text-[11px]">
          Adding more daylight photos expands the left box; it never resolves the right void.
        </span>
      </figcaption>
    </figure>
  );
};
