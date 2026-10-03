'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface VisualProps {
  className?: string;
}

export const Visual01HeroCapacityManifold: React.FC<VisualProps> = ({ className }) => {
  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-surface border border-line overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="Conceptual diagram comparing diffuse capacity in massive generalists with concentrated density on a task manifold in specialized models"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-line bg-bg-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-accent" />
          <span className="text-fg font-semibold">
            VISUAL 01 // CAPACITY VS. TASK MANIFOLD DENSITY
          </span>
        </div>
        <span className="text-[11px] text-fg-muted uppercase tracking-wider">
          CONCEPTUAL ARCHITECTURE
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="p-4 sm:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl aspect-[16/9] sm:aspect-[2.1/1] relative">
          <svg
            viewBox="0 0 680 320"
            className="w-full h-full overflow-visible font-mono select-none"
          >
            <defs>
              <linearGradient id="generalistGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--line)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0E151B" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="specialistGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0E151B" stopOpacity="0.6" />
              </linearGradient>
              <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Left Panel: 70B Generalist */}
            <g transform="translate(40, 20)">
              <rect
                x="0"
                y="0"
                width="280"
                height="240"
                rx="6"
                fill="url(#generalistGrad)"
                stroke="var(--line)"
                strokeWidth="1.5"
              />
              <text x="14" y="24" fill="var(--fg-muted)" fontSize="11" letterSpacing="1">
                70B DENSE GENERALIST
              </text>
              <text x="14" y="42" fill="var(--fg-soft)" fontSize="13" fontWeight="bold">
                Diffuse High-Dimensional Space
              </text>

              {/* Scattered Sub-manifolds */}
              <circle cx="60" cy="90" r="28" fill="var(--line)" stroke="var(--fg-muted)" strokeDasharray="3 3" />
              <text x="60" y="93" fill="var(--fg-muted)" fontSize="9" textAnchor="middle">POETRY</text>

              <circle cx="210" cy="85" r="32" fill="var(--line)" stroke="var(--fg-muted)" strokeDasharray="3 3" />
              <text x="210" y="88" fill="var(--fg-muted)" fontSize="9" textAnchor="middle">HISTORICAL TRIVIA</text>

              <circle cx="80" cy="180" r="30" fill="var(--line)" stroke="var(--fg-muted)" strokeDasharray="3 3" />
              <text x="80" y="183" fill="var(--fg-muted)" fontSize="9" textAnchor="middle">MULTILINGUAL</text>

              <circle cx="205" cy="175" r="26" fill="var(--line)" stroke="var(--fg-muted)" strokeDasharray="3 3" />
              <text x="205" y="178" fill="var(--fg-muted)" fontSize="9" textAnchor="middle">CREATIVE CHAT</text>

              {/* Diluted Target Task in center */}
              <rect
                x="100"
                y="110"
                width="80"
                height="46"
                rx="4"
                fill="#0E151B"
                stroke="var(--accent)"
                strokeWidth="1"
                strokeDasharray="2 2"
              />
              <text x="140" y="130" fill="var(--accent)" fontSize="9" textAnchor="middle" fontWeight="bold">
                TARGET TASK
              </text>
              <text x="140" y="145" fill="var(--fg-muted)" fontSize="8" textAnchor="middle">
                (&lt; 5% capacity)
              </text>

              <text x="14" y="222" fill="var(--fg-muted)" fontSize="10">
                Risk: Attention diffusion, hallucinations
              </text>
            </g>

            {/* Right Panel: 7B Specialist / Distilled Student */}
            <g transform="translate(360, 20)">
              <rect
                x="0"
                y="0"
                width="280"
                height="240"
                rx="6"
                fill="url(#specialistGrad)"
                stroke="var(--accent)"
                strokeWidth="1.5"
              />
              <text x="14" y="24" fill="var(--accent)" fontSize="11" letterSpacing="1" fontWeight="bold">
                7B COMPACT SPECIALIST
              </text>
              <text x="14" y="42" fill="var(--fg)" fontSize="13" fontWeight="bold">
                Target Manifold Alignment
              </text>

              {/* Concentrated Task Manifold */}
              <rect
                x="30"
                y="65"
                width="220"
                height="125"
                rx="6"
                fill="#0A0F14"
                stroke="var(--accent)"
                strokeWidth="2"
                filter="url(#cyanGlow)"
              />
              <path
                d="M 50 145 C 90 85, 170 175, 230 105"
                fill="none"
                stroke="#d4af37"
                strokeWidth="2.5"
              />
              <text x="140" y="90" fill="var(--accent)" fontSize="11" textAnchor="middle" fontWeight="bold">
                100% LATENT CAPACITY
              </text>
              <text x="140" y="106" fill="var(--fg)" fontSize="10" textAnchor="middle">
                Dedicated to Target Geometry
              </text>
              <text x="140" y="170" fill="var(--fg-soft)" fontSize="9" textAnchor="middle">
                Zero capacity lost to orthogonal trivia
              </text>

              <text x="14" y="222" fill="var(--accent)" fontSize="10">
                Result: Sharper boundaries, lower latency
              </text>
            </g>

            {/* Sub-label comparison */}
            <g transform="translate(40, 280)">
              <text x="300" y="15" fill="var(--fg-soft)" fontSize="11" textAnchor="middle">
                More parameters expand the total hypothesis space; calibration focuses it on the solution.
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-3 border-t border-line bg-bg-2 text-xs text-fg-soft leading-relaxed">
        <span className="font-mono text-accent font-semibold mr-1">Takeaway:</span>
        A massive model partitions its parameter budget across thousands of semantic domains. A compact model aligned with a target task concentrates its entire representational capacity on the target manifold, frequently producing sharper decision boundaries.
      </figcaption>
    </figure>
  );
};
