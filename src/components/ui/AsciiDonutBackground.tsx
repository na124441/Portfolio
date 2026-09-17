'use client';

import React, { useEffect, useRef } from 'react';

/**
 * AsciiDonutBackground
 * ---------------------------------------------------------
 * Canvas-rendered spinning 3D ASCII torus (Donut), engineered
 * as a radiant, highly lit computational background element
 * across the Hero section.
 *
 * - Perfectly circular 3D projection scaling across all viewports.
 * - Dynamic metallic lighting: Specular white (#ffffff) highlights -> Radiant Gold (#f6d009) -> Warm amber shadows.
 * - Smooth radial ambient vignette integration.
 * - Pauses on tab blur and respects prefers-reduced-motion.
 */

export interface AsciiDonutProps {
  /** Fraction of hero width the donut occupies. Default: 1.0 */
  widthFraction?: number;
  /** Overall opacity of the atmospheric effect (0-1). Default: 0.22 (15-25% perceived visual intensity) */
  opacity?: number;
  className?: string;
}

const SHADES = '.,-~:;=!*#$@';

export const AsciiDonutBackground: React.FC<AsciiDonutProps> = ({
  widthFraction = 1.0,
  opacity = 0.22,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- Torus + Camera Configuration ----
    const R1 = 1; // tube radius
    const R2 = 2; // torus radius
    const K2 = 5; // camera distance

    // Grid resolution for toroidal sampling
    const THETA_STEPS = 80;
    const PHI_STEPS = 240;

    const theta = new Float32Array(THETA_STEPS * PHI_STEPS);
    const phi = new Float32Array(THETA_STEPS * PHI_STEPS);
    let n = 0;
    for (let i = 0; i < THETA_STEPS; i++) {
      const t = (i / THETA_STEPS) * Math.PI * 2;
      for (let j = 0; j < PHI_STEPS; j++) {
        const p = (j / PHI_STEPS) * Math.PI * 2;
        theta[n] = t;
        phi[n] = p;
        n++;
      }
    }

    const costheta = new Float32Array(n);
    const sintheta = new Float32Array(n);
    const cosphi = new Float32Array(n);
    const sinphi = new Float32Array(n);
    const circlex = new Float32Array(n);
    const circley = new Float32Array(n);

    for (let i = 0; i < n; i++) {
      costheta[i] = Math.cos(theta[i]);
      sintheta[i] = Math.sin(theta[i]);
      cosphi[i] = Math.cos(phi[i]);
      sinphi[i] = Math.sin(phi[i]);
      circlex[i] = R2 + R1 * costheta[i];
      circley[i] = R1 * sintheta[i];
    }

    let cols = 0;
    let rows = 0;
    let cellW = 9;
    let cellH = 15;
    let projK = 0;
    let dpr = 1;
    let grid: string[] = [];
    let depthGrid: Float32Array = new Float32Array(0);
    let lumGrid: Uint8Array = new Uint8Array(0);

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const totalW = parent ? parent.clientWidth : window.innerWidth;
      const totalH = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      const isMobile = totalW < 768;
      const effectiveFraction = isMobile ? 1.0 : widthFraction;

      const renderW = Math.max(280, Math.floor(totalW * effectiveFraction));
      const renderH = totalH;

      canvas.width = renderW * dpr;
      canvas.height = renderH * dpr;
      canvas.style.width = `${renderW}px`;
      canvas.style.height = `${renderH}px`;

      cellW = isMobile ? 10 : 9;
      cellH = isMobile ? 16 : 15;

      cols = Math.ceil(renderW / cellW) + 4;
      rows = Math.ceil(renderH / cellH) + 2;

      // Perfectly circular projection factor matching physical screen pixels
      const targetRadius = Math.min(renderW, renderH) * 0.38;
      projK = (targetRadius * K2) / (R1 + R2);

      grid = new Array(cols * rows).fill(' ');
      depthGrid = new Float32Array(cols * rows);
      lumGrid = new Uint8Array(cols * rows);
    }

    resize();
    window.addEventListener('resize', resize);

    let A = 0;
    let B = 0;
    let raf = 0;
    let isIntersecting = true;
    let isRunning = false;

    function updateRunning() {
      const shouldRun = isIntersecting && !document.hidden && !prefersReducedMotion;
      if (shouldRun && !isRunning) {
        isRunning = true;
        tick();
      } else if (!shouldRun && isRunning) {
        isRunning = false;
        cancelAnimationFrame(raf);
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      updateRunning();
    });
    observer.observe(canvas);

    function onVisibility() {
      updateRunning();
    }
    document.addEventListener('visibilitychange', onVisibility);

    function frame() {
      if (!ctx || !canvas) return;
      grid.fill(' ');
      depthGrid.fill(0);
      lumGrid.fill(0);

      const cosA = Math.cos(A);
      const sinA = Math.sin(A);
      const cosB = Math.cos(B);
      const sinB = Math.sin(B);

      for (let i = 0; i < n; i++) {
        const cx = circlex[i];
        const cy = circley[i];
        const cp = cosphi[i];
        const sp = sinphi[i];
        const ct = costheta[i];
        const st = sintheta[i];

        const x = cx * (cosB * cp + sinA * sinB * sp) - cy * cosA * sinB;
        const y = cx * (sinB * cp - sinA * cosB * sp) + cy * cosA * cosB;
        const z = K2 + cosA * cx * sp + cy * sinA;
        const ooz = 1 / z;

        const xp = Math.floor(cols / 2 + (projK * ooz * x) / cellW);
        const yp = Math.floor(rows / 2 + (projK * ooz * y) / cellH);

        if (xp < 0 || xp >= cols || yp < 0 || yp >= rows) continue;

        const L =
          cp * ct * sinB -
          cosA * ct * sp -
          sinA * st +
          cosB * (cosA * st - ct * sinA * sp);

        if (L <= 0) continue;

        const idx = yp * cols + xp;
        if (ooz > depthGrid[idx]) {
          depthGrid[idx] = ooz;
          const lumIdx = Math.min(11, Math.max(0, Math.floor(L * 8)));
          grid[idx] = SHADES[lumIdx];
          lumGrid[idx] = lumIdx;
        }
      }

      // ---- Paint Canvas ----
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      ctx.font = `600 ${cellH - 2}px var(--font-jetbrains), "JetBrains Mono", monospace`;
      ctx.textBaseline = 'top';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ch = grid[r * cols + c];
          if (ch === ' ') continue;

          const lum = lumGrid[r * cols + c]; // 0 to 11

          // Atmospheric dynamic alpha based on surface normal luminance
          const alpha = opacity * (0.45 + 0.55 * (lum / 11));
          if (alpha <= 0.01) continue;

          // Restrained metallic gold and specular white palette:
          // lum >= 8: brilliant gleaming white highlights
          // lum 3..7: rich, radiant metallic gold (#f6d009)
          // lum 0..2: deep warm amber gold
          let rC: number, gC: number, bC: number;
          if (lum >= 8) {
            const t = (lum - 8) / 3;
            rC = Math.round(246 + (255 - 246) * t);
            gC = Math.round(208 + (255 - 208) * t);
            bC = Math.round(9 + (255 - 9) * t);
          } else if (lum >= 3) {
            const t = (lum - 3) / 5;
            rC = Math.round(212 + (246 - 212) * t);
            gC = Math.round(160 + (208 - 160) * t);
            bC = Math.round(25 + (9 - 25) * t);
          } else {
            const t = lum / 3;
            rC = Math.round(160 + (212 - 160) * t);
            gC = Math.round(120 + (160 - 120) * t);
            bC = Math.round(15 + (25 - 15) * t);
          }

          ctx.fillStyle = `rgba(${rC}, ${gC}, ${bC}, ${alpha.toFixed(3)})`;
          ctx.fillText(ch, c * cellW, r * cellH);
        }
      }
      ctx.restore();
    }

    function tick() {
      frame();
      A += 0.018;
      B += 0.009;
      if (isIntersecting && !document.hidden && !prefersReducedMotion) {
        raf = requestAnimationFrame(tick);
      } else {
        isRunning = false;
      }
    }

    if (prefersReducedMotion) {
      frame(); // Static single frame for accessibility
    } else {
      isRunning = true;
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      observer.disconnect();
    };
  }, [widthFraction, opacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 select-none w-full h-full ${className}`}
    />
  );
};

export default AsciiDonutBackground;
