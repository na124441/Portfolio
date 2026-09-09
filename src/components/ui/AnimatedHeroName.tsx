'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

// Balanced mathematical & algorithmic symbols that render cleanly in display typography
const SYMBOLS = ['∇', 'θ', 'λ', 'Ω', 'β', 'α', 'π', 'δ', 'μ', '∑', 'x', '0', '1', 'k', 'v', 'z'];

interface AnimatedHeroNameProps {
  name: string;
  className?: string;
  /** Total animation duration in milliseconds. Default: 1600ms */
  duration?: number;
  /** Initial delay before animation starts in milliseconds. Default: 200ms */
  initialDelay?: number;
  /** Whether to show the [re-scramble] hover hint. Default: true */
  showHint?: boolean;
}

export const AnimatedHeroName: React.FC<AnimatedHeroNameProps> = ({
  name,
  className,
  duration = 1600,
  initialDelay = 200,
  showHint = true,
}) => {
  const [displayText, setDisplayText] = useState<string[]>(() => name.split(''));
  const [resolvedCount, setResolvedCount] = useState<number>(0);
  const [isScrambling, setIsScrambling] = useState(true);
  const [hasResolved, setHasResolved] = useState(false);

  const animRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const lastScrambleTimeRef = useRef<number>(0);

  // Smooth ease-out curve for natural deceleration
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const triggerScramble = useCallback(() => {
    // Respect reduced motion
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setDisplayText(name.split(''));
        setResolvedCount(name.length);
        setHasResolved(true);
        setIsScrambling(false);
        return;
      }
    }

    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
    }

    setIsScrambling(true);
    setHasResolved(false);
    setResolvedCount(0);
    startTimeRef.current = null;
    lastScrambleTimeRef.current = 0;

    const target = name.split('');
    const length = target.length;
    // Cadence at which scrambling characters change glyphs (~45ms = smooth, readable stream)
    const scrambleInterval = 45;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(rawProgress);

      // Number of characters resolved based on eased progression
      const currentResolved = Math.min(Math.floor(easedProgress * (length + 1)), length);
      setResolvedCount(currentResolved);

      // Only re-randomize scrambling glyphs at the controlled scramble interval to avoid jitter
      if (timestamp - lastScrambleTimeRef.current >= scrambleInterval || rawProgress >= 1) {
        lastScrambleTimeRef.current = timestamp;

        setDisplayText(
          target.map((char, index) => {
            if (char === ' ') return ' ';
            if (index < currentResolved) {
              return char;
            }
            return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
          })
        );
      }

      if (rawProgress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(target);
        setResolvedCount(length);
        setIsScrambling(false);
        setHasResolved(true);
      }
    };

    animRef.current = requestAnimationFrame(animate);
  }, [name, duration]);

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerScramble();
    }, initialDelay);

    return () => {
      clearTimeout(timer);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [triggerScramble, initialDelay]);

  return (
    <h1
      className={`font-display font-bold tracking-tight select-none cursor-pointer relative group whitespace-nowrap [text-wrap:nowrap] break-normal [overflow-wrap:normal] ${className || 'text-center'}`}
      style={{
        whiteSpace: 'nowrap',
        textWrap: 'nowrap',
        wordBreak: 'normal',
        overflowWrap: 'normal',
      }}
      onMouseEnter={() => {
        if (!isScrambling) {
          triggerScramble();
        }
      }}
      aria-label={name}
    >
      <span className="sr-only">{name}</span>
      <div className="relative inline-flex items-center whitespace-nowrap">
        <span
          aria-hidden="true"
          className={`inline-flex items-center whitespace-nowrap break-normal ${hasResolved ? 'metallic-text-sweep' : ''}`}
        >
          {displayText.map((char, idx) => {
            const isResolved = idx < resolvedCount || hasResolved;
            const isSpace = char === ' ';

            if (isSpace) {
              return (
                <span key={idx} className="inline-block flex-shrink-0">
                  &nbsp;
                </span>
              );
            }

            return (
              <span
                key={idx}
                className={`inline-block flex-shrink-0 transition-colors duration-150 ${
                  !isResolved
                    ? 'text-[#dfb15b] opacity-90'
                    : 'text-[#feffff]'
                }`}
              >
                {char}
              </span>
            );
          })}
        </span>

        {/* Subtle terminal interactive hint on hover positioned cleanly without disrupting centering */}
        {showHint && (
          <span className="hidden sm:inline-block absolute left-full ml-3.5 top-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-widest text-[#dfb15b]/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            [re-scramble]
          </span>
        )}
      </div>
    </h1>
  );
};
