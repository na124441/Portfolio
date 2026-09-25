'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useGlobeFlicker, GlobePoint } from './useGlobeFlicker';

interface BinaryGlobeProps {
  className?: string;
}

const TOTAL_POINTS = 460;

// Deterministic Fibonacci sphere sampling
function createFibonacciPoints(count: number): Array<{
  id: number;
  nx: number;
  ny: number;
  nz: number;
  theta: number;
  phi: number;
  initialChar: '0' | '1';
}> {
  const points = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~2.39996 rad

  // Slight 18° tilt around X-axis for natural planetary projection
  const tiltRad = (18 * Math.PI) / 180;
  const cosT = Math.cos(tiltRad);
  const sinT = Math.sin(tiltRad);

  for (let i = 0; i < count; i++) {
    const y0 = 1 - (i / (count - 1)) * 2; // -1 to 1
    const rAtY = Math.sqrt(Math.max(0, 1 - y0 * y0));
    const theta = goldenAngle * i;

    const x0 = Math.cos(theta) * rAtY;
    const z0 = Math.sin(theta) * rAtY;

    // Apply tilt
    const nx = x0;
    const ny = y0 * cosT - z0 * sinT;
    const nz = y0 * sinT + z0 * cosT;

    // Alternating pseudo-random deterministic initial char
    const initialChar = ((i * 37 + 13) % 100 > 48) ? '1' : '0';

    points.push({
      id: i,
      nx,
      ny,
      nz,
      theta,
      phi: Math.acos(Math.max(-1, Math.min(1, ny))),
      initialChar: initialChar as '0' | '1',
    });
  }

  return points;
}

export const BinaryGlobe: React.FC<BinaryGlobeProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState<number>(240);
  const [mounted, setMounted] = useState<boolean>(false);

  // Precompute base unit sphere geometry
  const basePoints = useMemo(() => createFibonacciPoints(TOTAL_POINTS), []);

  // Update radius dynamically on container resize
  useEffect(() => {
    setMounted(true);
    const container = containerRef.current;
    if (!container) return;

    const updateRadius = () => {
      const width = container.offsetWidth;
      if (width > 0) {
        // Radius is ~45% of container width to prevent any boundary overflow
        setRadius(Math.round(width * 0.45));
      }
    };

    updateRadius();

    const resizeObserver = new ResizeObserver(() => {
      updateRadius();
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Calculate projected point coordinates with current radius
  const points: GlobePoint[] = useMemo(() => {
    return basePoints.map((bp) => {
      const x = bp.nx * radius;
      const y = bp.ny * radius;
      const z = bp.nz * radius;
      const depth = (bp.nz + 1) / 2; // 0 (back) to 1 (front)

      return {
        id: bp.id,
        theta: bp.theta,
        phi: bp.phi,
        char: bp.initialChar,
        x,
        y,
        z,
        depth,
      };
    });
  }, [basePoints, radius]);

  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Attach idle flicker and cursor proximity interaction
  useGlobeFlicker(containerRef, charRefs, mounted ? points : [], radius);

  return (
    <div
      ref={containerRef}
      className={`binary-globe ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      {/* Central "ByteLogic" Wordmark */}
      <span className="globe-wordmark" aria-hidden="true">
        ByteLogic
      </span>

      {/* Binary Character Field — only rendered on client once mounted */}
      {mounted &&
        points.map((pt, i) => {
          // Depth-based opacity: rear points 0.12, front points 0.88
          const opacity = 0.12 + 0.76 * pt.depth;
          // Depth-based font size: rear points 10px, front points 13.5px
          const fontSize = 10 + 3.5 * pt.depth;
          // Depth-based z-index (1 to 10)
          const zIndex = Math.max(1, Math.min(10, Math.round(pt.depth * 10)));

          return (
            <span
              key={pt.id}
              ref={(el) => {
                charRefs.current[i] = el;
              }}
              className="binary-char"
              style={{
                left: `calc(50% + ${pt.x.toFixed(1)}px)`,
                top: `calc(50% + ${pt.y.toFixed(1)}px)`,
                opacity,
                fontSize: `${fontSize.toFixed(1)}px`,
                zIndex,
              }}
            >
              {pt.char}
            </span>
          );
        })}
    </div>
  );
};
