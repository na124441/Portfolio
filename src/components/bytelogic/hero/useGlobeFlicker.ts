'use client';

import { useEffect, useRef } from 'react';

export interface GlobePoint {
  id: number;
  theta: number;
  phi: number;
  char: '0' | '1';
  x: number;
  y: number;
  z: number;
  depth: number; // 0 (far) to 1 (near)
}

export function useGlobeFlicker(
  containerRef: React.RefObject<HTMLDivElement | null>,
  charRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>,
  points: GlobePoint[],
  radius: number
) {
  const timeoutsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  // Idle flicker effect
  useEffect(() => {
    if (points.length === 0) return;

    const timeouts = timeoutsRef.current;

    const interval = setInterval(() => {
      // Pick 2% to 4% of points
      const count = Math.max(1, Math.floor(points.length * (0.02 + Math.random() * 0.02)));

      for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * points.length);
        const pt = points[idx];
        const el = charRefs.current[idx];
        if (!el || !pt) continue;

        // Stability gradient: characters closer to visual center have 40% lower probability of flicker
        const distFromCenter = Math.hypot(pt.x, pt.y);
        if (distFromCenter < 0.35 * radius && Math.random() < 0.4) {
          continue;
        }

        // Flip digit 0 <-> 1
        const currentVal = el.textContent?.trim();
        el.textContent = currentVal === '0' ? '1' : '0';
        el.classList.add('active');

        const revertDelay = 280 + Math.floor(Math.random() * 200);
        const tid = setTimeout(() => {
          el.classList.remove('active');
          timeouts.delete(tid);
        }, revertDelay);
        timeouts.add(tid);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
      timeouts.clear();
    };
  }, [points, charRefs, radius]);

  // Cursor proximity & displacement interaction
  useEffect(() => {
    const container = containerRef.current;
    if (!container || points.length === 0) return;

    // Skip attaching mouse listeners on touch-only devices
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const timeouts = timeoutsRef.current;
    let rafId: number | null = null;
    let cursorX = 0;
    let cursorY = 0;
    let isInside = false;

    const INTERACTION_RADIUS = Math.min(120, Math.max(70, radius * 0.35));
    const activeIndices = new Set<number>();
    const pendingRemovalTimeouts = new Map<number, ReturnType<typeof setTimeout>>();

    const updateFrame = () => {
      rafId = null;
      if (!isInside) return;

      const rect = container.getBoundingClientRect();
      const cx = cursorX - rect.left - rect.width / 2;
      const cy = cursorY - rect.top - rect.height / 2;

      for (let i = 0; i < points.length; i++) {
        const el = charRefs.current[i];
        const pt = points[i];
        if (!el || !pt) continue;

        const dist = Math.hypot(cx - pt.x, cy - pt.y);

        if (dist < INTERACTION_RADIUS) {
          // Cancel any pending removal for this char
          if (pendingRemovalTimeouts.has(i)) {
            const existingTid = pendingRemovalTimeouts.get(i)!;
            clearTimeout(existingTid);
            timeouts.delete(existingTid);
            pendingRemovalTimeouts.delete(i);
          }

          if (!activeIndices.has(i)) {
            activeIndices.add(i);
            el.classList.add('active');
            // Occasional character flip on initial displacement
            if (Math.random() < 0.25) {
              el.textContent = el.textContent === '0' ? '1' : '0';
            }
          }

          // Push 3px to 8px radially away from cursor
          const angle = Math.atan2(pt.y - cy, pt.x - cx);
          const push = 3 + 5 * (1 - dist / INTERACTION_RADIUS);
          const dx = (Math.cos(angle) * push).toFixed(1);
          const dy = (Math.sin(angle) * push).toFixed(1);
          el.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
        } else if (activeIndices.has(i)) {
          // Point just exited radius: schedule smooth removal (200ms debounce)
          if (!pendingRemovalTimeouts.has(i)) {
            const tid = setTimeout(() => {
              el.classList.remove('active');
              el.style.transform = '';
              activeIndices.delete(i);
              pendingRemovalTimeouts.delete(i);
              timeouts.delete(tid);
            }, 200);
            timeouts.add(tid);
            pendingRemovalTimeouts.set(i, tid);
          }
        }
      }
    };

    const handleMouseEnter = () => {
      isInside = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      if (rafId === null) {
        rafId = requestAnimationFrame(updateFrame);
      }
    };

    const handleMouseLeave = () => {
      isInside = false;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      // Settle all active characters back
      activeIndices.forEach((i) => {
        const el = charRefs.current[i];
        if (el) {
          const tid = setTimeout(() => {
            el.classList.remove('active');
            el.style.transform = '';
            timeouts.delete(tid);
          }, 180);
          timeouts.add(tid);
        }
      });
      activeIndices.clear();
      pendingRemovalTimeouts.clear();
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [containerRef, charRefs, points, radius]);
}
