'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface VisualProps {
  className?: string;
}

export const Visual04QuantizationPrecision: React.FC<VisualProps> = ({ className }) => {
  return (
    <figure
      className={cn(
        'my-10 sm:my-14 rounded-[8px] bg-surface border border-line overflow-hidden bl-tick-box w-full',
        className
      )}
      aria-label="Technical diagram of quantization showing numerical bit-depth and memory compression for a 7-billion parameter model"
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-line bg-bg-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-[2px] bg-accent" />
          <span className="text-fg font-semibold">
            VISUAL 04 // NUMERICAL PRECISION & MEMORY DENSITY
          </span>
        </div>
        <span className="text-[11px] text-fg-muted uppercase tracking-wider">
          REGISTER ALLOCATION
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="p-4 sm:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl aspect-[16/9] sm:aspect-[2.1/1] relative">
          <svg
            viewBox="0 0 680 320"
            className="w-full h-full overflow-visible font-mono select-none"
          >
            {/* Headers */}
            <text x="30" y="24" fill="var(--fg-muted)" fontSize="10" letterSpacing="1">FORMAT</text>
            <text x="140" y="24" fill="var(--fg-muted)" fontSize="10" letterSpacing="1">BIT REPRESENTATION</text>
            <text x="510" y="24" fill="var(--fg-muted)" fontSize="10" letterSpacing="1">WEIGHT MEMORY (7B)</text>

            {/* Row 1: FP32 */}
            <g transform="translate(30, 40)">
              <rect x="0" y="0" width="85" height="42" rx="4" fill="#0A0F14" stroke="var(--line)" />
              <text x="42" y="25" fill="var(--fg-soft)" fontSize="12" textAnchor="middle" fontWeight="bold">FP32</text>

              {/* Bit representation register */}
              <g transform="translate(110, 6)">
                <rect x="0" y="0" width="12" height="30" fill="var(--fg-muted)" opacity="0.4" />
                <rect x="14" y="0" width="80" height="30" fill="var(--fg-muted)" opacity="0.6" />
                <rect x="96" y="0" width="220" height="30" fill="var(--fg-muted)" opacity="0.3" />
                <text x="6" y="19" fill="var(--fg)" fontSize="8" textAnchor="middle">S</text>
                <text x="54" y="19" fill="var(--fg)" fontSize="9" textAnchor="middle">8b Exponent</text>
                <text x="206" y="19" fill="var(--fg)" fontSize="9" textAnchor="middle">23b Mantissa</text>
              </g>

              {/* Memory bar */}
              <rect x="460" y="10" width="160" height="22" rx="3" fill="var(--fg-muted)" opacity="0.5" />
              <text x="540" y="25" fill="var(--fg)" fontSize="11" textAnchor="middle" fontWeight="bold">~28.0 GB</text>
            </g>

            {/* Row 2: FP16 / BF16 */}
            <g transform="translate(30, 95)">
              <rect x="0" y="0" width="85" height="42" rx="4" fill="#0A0F14" stroke="var(--line)" />
              <text x="42" y="25" fill="var(--fg-soft)" fontSize="12" textAnchor="middle" fontWeight="bold">FP16</text>

              <g transform="translate(110, 6)">
                <rect x="0" y="0" width="12" height="30" fill="var(--fg-muted)" opacity="0.4" />
                <rect x="14" y="0" width="50" height="30" fill="var(--fg-muted)" opacity="0.6" />
                <rect x="66" y="0" width="94" height="30" fill="var(--fg-muted)" opacity="0.3" />
                <text x="6" y="19" fill="var(--fg)" fontSize="8" textAnchor="middle">S</text>
                <text x="39" y="19" fill="var(--fg)" fontSize="8.5" textAnchor="middle">5b Exp</text>
                <text x="113" y="19" fill="var(--fg)" fontSize="8.5" textAnchor="middle">10b Mantissa</text>
              </g>

              <rect x="460" y="10" width="80" height="22" rx="3" fill="var(--fg-muted)" opacity="0.7" />
              <text x="500" y="25" fill="var(--fg)" fontSize="11" textAnchor="middle" fontWeight="bold">~14.0 GB</text>
            </g>

            {/* Row 3: INT8 */}
            <g transform="translate(30, 150)">
              <rect x="0" y="0" width="85" height="42" rx="4" fill="#0A0F14" stroke="var(--line)" />
              <text x="42" y="25" fill="var(--accent)" fontSize="12" textAnchor="middle" fontWeight="bold">INT8</text>

              <g transform="translate(110, 6)">
                <rect x="0" y="0" width="80" height="30" fill="var(--accent)" opacity="0.4" />
                <text x="40" y="19" fill="var(--accent)" fontSize="9" textAnchor="middle" fontWeight="bold">
                  8-bit Signed Int
                </text>
              </g>

              <rect x="460" y="10" width="40" height="22" rx="3" fill="var(--accent)" opacity="0.7" />
              <text x="480" y="25" fill="var(--fg)" fontSize="11" textAnchor="middle" fontWeight="bold">~7.0 GB</text>
            </g>

            {/* Row 4: INT4 (Quantized) */}
            <g transform="translate(30, 205)">
              <rect x="0" y="0" width="85" height="42" rx="4" fill="#0A0F14" stroke="var(--accent)" strokeWidth="1.5" />
              <text x="42" y="25" fill="var(--accent)" fontSize="12" textAnchor="middle" fontWeight="bold">INT4</text>

              <g transform="translate(110, 6)">
                <rect x="0" y="0" width="40" height="30" fill="var(--accent)" />
                <text x="20" y="19" fill="var(--bg)" fontSize="9" textAnchor="middle" fontWeight="bold">
                  4-bit
                </text>
              </g>

              <rect x="460" y="10" width="20" height="22" rx="3" fill="#d4af37" />
              <text x="470" y="25" fill="var(--bg)" fontSize="10" textAnchor="middle" fontWeight="bold">3.5</text>
              <text x="510" y="25" fill="#d4af37" fontSize="11" fontWeight="bold">~3.5 GB (4x denser)</text>
            </g>

            {/* Bottom note */}
            <text x="340" y="280" fill="var(--fg-muted)" fontSize="10" textAnchor="middle">
              *Weight storage only. Runtime VRAM also includes dynamic KV cache, activations, and runtime buffers.
            </text>
          </svg>
        </div>
      </div>

      {/* Caption footer */}
      <figcaption className="px-4 sm:px-6 py-3 border-t border-line bg-bg-2 text-xs text-fg-soft leading-relaxed">
        <span className="font-mono text-accent font-semibold mr-1">Precision Scaling:</span>
        Reducing precision from FP16 to INT4 compresses the physical memory bandwidth demand by a factor of 4. Because token generation is memory-bandwidth bound, a 4-bit 8B model streams weights into compute cores four times faster than an FP16 equivalent.
      </figcaption>
    </figure>
  );
};
