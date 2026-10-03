'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface VisualProps {
  className?: string;
}

export const Visual01DiminishingReturns: React.FC<VisualProps> = ({ className }) => {
  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-surface border border-line overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="Conceptual diagram showing diminishing returns as dataset size increases"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-line bg-bg-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-accent" />
          <span className="text-fg font-semibold">VISUAL 01 // DIMINISHING RETURNS</span>
        </div>
        <span className="text-[11px] text-fg-muted uppercase tracking-wider">
          CONCEPTUAL ILLUSTRATION
        </span>
      </div>

      {/* SVG Canvas Area */}
      <div className="p-4 sm:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl aspect-[16/9] sm:aspect-[2/1] relative">
          <svg
            viewBox="0 0 640 320"
            className="w-full h-full overflow-visible font-mono select-none"
          >
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="70%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--fg-muted)" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Subtle Cartesian Grid Lines */}
            <g opacity="0.15" stroke="var(--fg-soft)" strokeDasharray="3 3">
              <line x1="80" y1="80" x2="580" y2="80" />
              <line x1="80" y1="140" x2="580" y2="140" />
              <line x1="80" y1="200" x2="580" y2="200" />
              <line x1="200" y1="50" x2="200" y2="260" />
              <line x1="360" y1="50" x2="360" y2="260" />
              <line x1="500" y1="50" x2="500" y2="260" />
            </g>

            {/* Asymptotic Upper Limit Line */}
            <line
              x1="80"
              y1="75"
              x2="580"
              y2="75"
              stroke="var(--fg-muted)"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.4"
            />
            <text
              x="575"
              y="68"
              fill="var(--fg-muted)"
              fontSize="10"
              textAnchor="end"
              letterSpacing="0.05em"
            >
              Performance Ceiling (Capacity / Bayes Limit)
            </text>

            {/* Axes */}
            {/* Y-Axis */}
            <line x1="80" y1="40" x2="80" y2="260" stroke="var(--line)" strokeWidth="2" />
            <polygon points="77,42 80,34 83,42" fill="var(--fg-soft)" />
            <text
              x="30"
              y="150"
              fill="var(--fg-soft)"
              fontSize="12"
              fontWeight="500"
              textAnchor="middle"
              transform="rotate(-90 30 150)"
            >
              Performance
            </text>

            {/* X-Axis */}
            <line x1="80" y1="260" x2="600" y2="260" stroke="var(--line)" strokeWidth="2" />
            <polygon points="598,257 606,260 598,263" fill="var(--fg-soft)" />
            <text
              x="340"
              y="295"
              fill="var(--fg-soft)"
              fontSize="12"
              fontWeight="500"
              textAnchor="middle"
            >
              Dataset Size (Number of Examples)
            </text>

            {/* Shaded Under-Area */}
            <motion.path
              d="M 80,260 Q 160,110 320,88 T 570,76 L 570,260 Z"
              fill="url(#areaGradient)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />

            {/* The Diminishing Returns Curve */}
            {/* Starts steep from (80,260) then flattens out towards (570,76) */}
            <motion.path
              d="M 80,260 Q 160,110 320,88 T 570,76"
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Key Annotation 1: Rapid Initial Gain */}
            <g>
              <circle cx="160" cy="165" r="4" fill="var(--accent)" />
              <line x1="160" y1="165" x2="160" y2="120" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 2" />
              <text x="160" y="112" fill="var(--accent)" fontSize="10" textAnchor="middle" fontWeight="600">
                Rapid Initial Gain
              </text>
              <text x="160" y="124" fill="var(--fg-muted)" fontSize="9" textAnchor="middle">
                High information per sample
              </text>
            </g>

            {/* Key Annotation 2: Flattening / Diminishing Returns */}
            <g>
              <circle cx="480" cy="79" r="4" fill="var(--fg-soft)" />
              <line x1="480" y1="79" x2="480" y2="120" stroke="var(--fg-muted)" strokeWidth="1" strokeDasharray="2 2" />
              <text x="480" y="135" fill="var(--fg)" fontSize="11" textAnchor="middle" fontWeight="600">
                Diminishing Returns
              </text>
              <text x="480" y="148" fill="var(--fg-muted)" fontSize="9" textAnchor="middle">
                Marginal gain approaches zero
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-3 border-t border-line bg-bg-2/50 text-xs font-mono text-fg-soft flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>
          <strong className="text-fg font-semibold">Figure 01:</strong> The trajectory of model improvement against raw sample scale.
        </span>
        <span className="text-fg-muted text-[11px]">
          Note: Conceptual curve illustrating diminishing marginal utility.
        </span>
      </figcaption>
    </figure>
  );
};
