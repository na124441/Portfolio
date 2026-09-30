'use client';

import React, { useEffect, useRef } from 'react';

interface AsciiDonutProps {
  className?: string;
}

export const AsciiDonut: React.FC<AsciiDonutProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mouse tilt tracking for subtle interactive depth
  const mouseOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth - 0.5) * 2;
      const ny = (e.clientY / innerHeight - 0.5) * 2;
      mouseOffsetRef.current = { x: ny * 0.35, y: nx * 0.35 };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Torus geometry
    const R1 = 1.0; // tube radius
    const R2 = 2.0; // torus radius (distance from center of tube to center of torus)
    const K2 = 5.0; // camera distance
    const maxExtent = R1 + R2; // 3.0

    // Classic rich ASCII shade ramp
    const SHADES = ' .,-~:;=!*#$@';

    let A = 0.5; // X rotation
    let B = 0.5; // Z rotation
    let rafId = 0;
    let isVisible = true;

    // Buffer dimensions
    let charW = 9;
    let charH = 14;
    let cols = 0;
    let rows = 0;
    let K1 = 0;
    let dpr = 1;

    let zBuffer: Float32Array = new Float32Array(0);
    let charBuffer: string[] = [];
    let lumBuffer: Uint8Array = new Uint8Array(0);

    const resize = () => {
      if (!container || !canvas) return;
      const width = container.clientWidth || 600;
      const height = container.clientHeight || 600;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const isMobile = width < 640;
      charW = isMobile ? 8 : 9;
      charH = isMobile ? 12 : 14;

      cols = Math.floor(width / charW);
      rows = Math.floor(height / charH);

      if (cols <= 0 || rows <= 0) return;

      const charAspect = charH / charW;
      // Scale to fit the container space
      const maxSpanCols = cols * 0.44;
      const maxSpanRowsInCols = rows * 0.44 * charAspect;
      const maxSpan = Math.min(maxSpanCols, maxSpanRowsInCols);
      K1 = (maxSpan / maxExtent) * K2;

      zBuffer = new Float32Array(cols * rows);
      charBuffer = new Array(cols * rows).fill(' ');
      lumBuffer = new Uint8Array(cols * rows);
    };

    resize();
    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

    const renderFrame = () => {
      if (!ctx || !canvas || cols <= 0 || rows <= 0) return;

      zBuffer.fill(0);
      charBuffer.fill(' ');
      lumBuffer.fill(0);

      const rotA = A + mouseOffsetRef.current.x;
      const rotB = B + mouseOffsetRef.current.y;

      const cosA = Math.cos(rotA);
      const sinA = Math.sin(rotA);
      const cosB = Math.cos(rotB);
      const sinB = Math.sin(rotB);

      const charAspect = charH / charW;

      // Sample theta (cross-sectional circle) and phi (revolution around center)
      const thetaStep = 0.07;
      const phiStep = 0.03;

      for (let theta = 0; theta < 6.283; theta += thetaStep) {
        const costheta = Math.cos(theta);
        const sintheta = Math.sin(theta);

        for (let phi = 0; phi < 6.283; phi += phiStep) {
          const cosphi = Math.cos(phi);
          const sinphi = Math.sin(phi);

          // 3D coordinates on torus before rotation
          const circlex = R2 + R1 * costheta;
          const circley = R1 * sintheta;

          // 3D rotation
          const x = circlex * (cosB * cosphi + sinA * sinB * sinphi) - circley * cosA * sinB;
          const y = circlex * (sinB * cosphi - sinA * cosB * sinphi) + circley * cosA * cosB;
          const z = K2 + cosA * circlex * sinphi + circley * sinA;
          const ooz = 1 / z;

          // 2D projection
          const xp = Math.floor(cols / 2 + (K1 * ooz * x));
          const yp = Math.floor(rows / 2 - (K1 * ooz * y) / charAspect);

          if (xp < 0 || xp >= cols || yp < 0 || yp >= rows) continue;

          // Normal & luminance calculation
          const L =
            cosphi * costheta * sinB -
            cosA * costheta * sinphi -
            sinA * sintheta +
            cosB * (cosA * sintheta - costheta * sinA * sinphi);

          const idx = xp + yp * cols;
          if (ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;
            // Map L to [0, SHADES.length - 1]
            const lumIndex = Math.max(0, Math.min(SHADES.length - 1, Math.floor((L + 1.25) * 3.2)));
            charBuffer[idx] = SHADES[lumIndex];
            lumBuffer[idx] = lumIndex;
          }
        }
      }

      // Draw text to canvas
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      ctx.font = `${charH - 2}px "JetBrains Mono", var(--font-jetbrains), ui-monospace, monospace`;
      ctx.textBaseline = 'top';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = c + r * cols;
          const ch = charBuffer[idx];
          if (ch === ' ') continue;

          const lum = lumBuffer[idx];
          // Restrained ByteLogic editorial palette:
          // lum >= 10: high specular Logic Cyan
          // lum >= 7: muted cyan
          // lum >= 4: crisp light slate
          // lum < 4: deep structural slate
          if (lum >= 10) {
            ctx.fillStyle = '#4FD8E8'; // Logic Cyan specular
          } else if (lum >= 7) {
            ctx.fillStyle = '#019AA2'; // Logic Cyan
          } else if (lum >= 4) {
            ctx.fillStyle = '#8A9296'; // Light slate
          } else {
            ctx.fillStyle = '#3A444C'; // Dark structural slate
          }

          ctx.fillText(ch, c * charW, r * charH);
        }
      }
      ctx.restore();
    };

    const tick = () => {
      if (!isVisible) return;
      renderFrame();
      A += 0.014;
      B += 0.018;
      rafId = requestAnimationFrame(tick);
    };

    if (prefersReducedMotion) {
      renderFrame();
    } else {
      rafId = requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !prefersReducedMotion) {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(tick);
      }
    });
    observer.observe(canvas);

    const onVisibilityChange = () => {
      if (document.hidden) {
        isVisible = false;
      } else {
        isVisible = true;
        if (!prefersReducedMotion) {
          cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(tick);
        }
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none overflow-hidden ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
      />
    </div>
  );
};
