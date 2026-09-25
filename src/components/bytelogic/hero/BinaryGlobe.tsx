'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useGlobeFlicker, GlobePoint } from './useGlobeFlicker';

interface BinaryGlobeProps {
  className?: string;
}

const TOTAL_POINTS = 520;

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

  // Slight 15° tilt around X-axis for natural planetary projection
  const tiltRad = (15 * Math.PI) / 180;
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
  const [radiusX, setRadiusX] = useState<number>(380);
  const [radiusY, setRadiusY] = useState<number>(200);
  const [mounted, setMounted] = useState<boolean>(false);

  // Precompute base unit sphere geometry
  const basePoints = useMemo(() => createFibonacciPoints(TOTAL_POINTS), []);

  // Update horizontal and vertical radii dynamically on container resize
  useEffect(() => {
    setMounted(true);
    const container = containerRef.current;
    if (!container) return;

    const updateRadius = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      if (width > 0 && height > 0) {
        setRadiusX(Math.round(width * 0.48));
        setRadiusY(Math.round(height * 0.46));
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

  // Calculate projected point coordinates with current horizontal and vertical radii
  const points: GlobePoint[] = useMemo(() => {
    const avgRadius = (radiusX + radiusY) / 2;
    return basePoints.map((bp) => {
      const x = bp.nx * radiusX;
      const y = bp.ny * radiusY;
      const z = bp.nz * avgRadius;
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
  }, [basePoints, radiusX, radiusY]);

  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Attach idle flicker and cursor proximity interaction
  useGlobeFlicker(containerRef, charRefs, mounted ? points : [], (radiusX + radiusY) / 2);

  return (
    <div
      ref={containerRef}
      className={`binary-globe ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      {/* Central "ByteLogic" Brand Logo — Commands ~65% of hero section space */}
      <div className="globe-logo-wrapper" aria-hidden="true">
        <Image
          src="/images/bytelogic/bytelogic-logo.png"
          alt="ByteLogic"
          width={1024}
          height={341}
          priority
          unoptimized
          className="w-full h-auto max-h-[140px] sm:max-h-[220px] md:max-h-[280px] lg:max-h-[320px] object-contain drop-shadow-[0_16px_45px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:scale-[1.01]"
        />
      </div>

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
