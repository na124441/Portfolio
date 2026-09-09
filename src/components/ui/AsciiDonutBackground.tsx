'use client';

import React, { useEffect, useRef } from 'react';

/**
 * AsciiDonutBackground
 * ---------------------------------------------------------
 * Canvas-rendered spinning 3D ASCII torus (Donut), engineered
 * to sit as a quiet, textured mathematical background element
 * on the left of the Hero section.
 *
 * - Left-aligned composition with right-edge dissolution.
 * - Depth-aware shading: Crisp specular white (near) -> Metallic Gold (far).
 * - Soft right-edge alpha gradient: dissolves before reaching centered copy.
 * - Pauses on tab blur and respects prefers-reduced-motion.
 */

export interface AsciiDonutProps {
  /** Fraction of hero width the donut occupies (e.g. 0.46 = left 46%). Default: 0.46 */
  widthFraction?: number;
  /** Overall opacity of the effect (0-1). Default: 0.4 */
  opacity?: number;
  className?: string;
}

const SHADES = '.,-~:;=!*#$@';

export const AsciiDonutBackground: React.FC<AsciiDonutProps> = ({
  widthFraction = 0.46,
  opacity = 0.4,
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
    let K1 = 0;
    let dpr = 1;
    let grid: string[] = [];
    let depthGrid: Float32Array = new Float32Array(0);

    function resize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const totalW = parent ? parent.clientWidth : window.innerWidth;
      const totalH = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      // On mobile devices, allow the donut to sit subtly across full width with lower density
      const isMobile = totalW < 768;
      const effectiveFraction = isMobile ? 0.95 : widthFraction;

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

      K1 = (cols * 2.2 * K2) / (8 * (R1 + R2));
      grid = new Array(cols * rows).fill(' ');
      depthGrid = new Float32Array(cols * rows);
    }

    resize();
    window.addEventListener('resize', resize);

    let A = 0;
    let B = 0;
    let raf = 0;
    let visible = !document.hidden;

    function onVisibility() {
      visible = !document.hidden;
      if (visible && !prefersReducedMotion) {
        tick();
      }
    }
    document.addEventListener('visibilitychange', onVisibility);

    function frame() {
      if (!ctx || !canvas) return;
      grid.fill(' ');
      depthGrid.fill(0);

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

        const xp = Math.floor(cols / 2 + K1 * ooz * x * 2);
        const yp = Math.floor(rows / 2 + K1 * ooz * y * 0.85);

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
        }
      }

      // ---- Paint Canvas ----
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      ctx.font = `${cellH - 3}px var(--font-jetbrains), "JetBrains Mono", monospace`;
      ctx.textBaseline = 'top';

      const fadeStartCol = cols * 0.65; // Soft gradient dissolve toward right edge
      const fadeEndCol = cols * 0.98;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ch = grid[r * cols + c];
          if (ch === ' ') continue;

          const depth = depthGrid[r * cols + c]; // higher = closer
          // depth roughly ranges ~0.14 - 0.33
          const depthT = Math.min(1, Math.max(0, (depth - 0.14) / 0.2));

          // Edge fade so the ASCII torus dissolves before reaching centered copy
          let edgeFade = 1;
          if (c > fadeStartCol) {
            edgeFade = 1 - (c - fadeStartCol) / (fadeEndCol - fadeStartCol);
            edgeFade = Math.max(0, edgeFade);
          }

          const alpha = opacity * edgeFade * (0.55 + 0.45 * depthT);
          if (alpha <= 0.01) continue;

          // Metallic Gold Palette: White specular highlight (near) -> Metallic Gold (far)
          const gold = [212, 175, 55]; // #d4af37 metallic gold
          const white = [254, 255, 255]; // #feffff editorial white
          const rC = Math.round(white[0] + (gold[0] - white[0]) * (1 - depthT));
          const gC = Math.round(white[1] + (gold[1] - white[1]) * (1 - depthT));
          const bC = Math.round(white[2] + (gold[2] - white[2]) * (1 - depthT));

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
      if (visible && !prefersReducedMotion) {
        raf = requestAnimationFrame(tick);
      }
    }

    if (prefersReducedMotion) {
      frame(); // Static single frame for accessibility
    } else {
      tick();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [widthFraction, opacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 left-0 select-none ${className}`}
    />
  );
};

export default AsciiDonutBackground;
