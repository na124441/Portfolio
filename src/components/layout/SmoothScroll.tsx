'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let isMounted = true;
    let lenis: Lenis | null = null;
    let updateTicker: ((time: number) => void) | null = null;
    let activeGsap: typeof import('gsap').default | null = null;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([{ default: gsap }, { ScrollTrigger }]) => {
      if (!isMounted) return;
      gsap.registerPlugin(ScrollTrigger);
      activeGsap = gsap;

      lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      lenis.on('scroll', ScrollTrigger.update);

      updateTicker = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);
    });

    return () => {
      isMounted = false;
      if (updateTicker && activeGsap) {
        activeGsap.ticker.remove(updateTicker);
      }
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
};
