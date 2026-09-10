'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Box, Compass, Activity, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export type AsciiShape = 'torus' | 'tesseract' | 'saddle' | 'sphere';

interface Ascii3DBackgroundProps {
  className?: string;
  onShapeChange?: (shape: AsciiShape) => void;
}

export const Ascii3DBackground: React.FC<Ascii3DBackgroundProps> = ({
  className,
  onShapeChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [currentShape, setCurrentShape] = useState<AsciiShape>('torus');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Rotation angles
  const angleARef = useRef<number>(0);
  const angleBRef = useRef<number>(0);
  const targetRotationRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Mouse tilt tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth - 0.5) * 2;
      const ny = (e.clientY / innerHeight - 0.5) * 2;
      targetRotationRef.current = { x: ny * 0.4, y: nx * 0.4 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSelectShape = (shape: AsciiShape) => {
    setCurrentShape(shape);
    if (onShapeChange) onShapeChange(shape);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Character ramp containing math, binary 01, and density marks
    const CHAR_RAMP = ' .·:÷01*#%@';

    const renderFrame = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Monospace grid cell size in pixels
      const charWidth = 10;
      const charHeight = 14;

      const cols = Math.floor(width / charWidth);
      const rows = Math.floor(height / charHeight);

      if (cols <= 0 || rows <= 0) return;

      // Buffers for depth and character
      const zBuffer = new Float32Array(cols * rows);
      const charBuffer = new Array<string>(cols * rows).fill(' ');
      const colorBuffer = new Array<string>(cols * rows).fill('#1C2830');

      // Update rotation
      if (isPlaying) {
        angleARef.current += 0.015;
        angleBRef.current += 0.02;
      }

      const A = angleARef.current + targetRotationRef.current.x;
      const B = angleBRef.current + targetRotationRef.current.y;

      const cosA = Math.cos(A);
      const sinA = Math.sin(A);
      const cosB = Math.cos(B);
      const sinB = Math.sin(B);

      // RENDER SHAPE: TORUS
      if (currentShape === 'torus') {
        const R1 = 1.2; // circle radius
        const R2 = 2.4; // distance from donut center
        const K2 = 5.0; // camera distance
        const K1 = cols * K2 * 0.45;

        for (let theta = 0; theta < 6.28; theta += 0.08) {
          const costheta = Math.cos(theta);
          const sintheta = Math.sin(theta);

          for (let phi = 0; phi < 6.28; phi += 0.04) {
            const cosphi = Math.cos(phi);
            const sinphi = Math.sin(phi);

            // 3D coordinates on torus
            const circlex = R2 + R1 * costheta;
            const circley = R1 * sintheta;

            const x = circlex * (cosB * cosphi + sinA * sinB * sinphi) - circley * cosA * sinB;
            const y = circlex * (sinB * cosphi - sinA * cosB * sinphi) + circley * cosA * cosB;
            const z = K2 + cosA * circlex * sinphi + circley * sinA;
            const ooz = 1 / z; // one over z

            // 2D projection
            const xp = Math.floor(cols / 2 + K1 * ooz * x);
            const yp = Math.floor(rows / 2 - (K1 * ooz * y * 0.55)); // adjust for font aspect ratio

            // Luminance calculation
            const L =
              cosphi * costheta * sinB -
              cosA * costheta * sinphi -
              sinA * sintheta +
              cosB * (cosA * sintheta - costheta * sinA * sinphi);

            if (yp >= 0 && yp < rows && xp >= 0 && xp < cols) {
              const idx = xp + yp * cols;
              if (ooz > zBuffer[idx]) {
                zBuffer[idx] = ooz;
                const luminanceIndex = Math.max(0, Math.min(CHAR_RAMP.length - 1, Math.floor((L + 1.2) * 3)));
                charBuffer[idx] = CHAR_RAMP[luminanceIndex];

                // Color based on luminance & depth
                if (luminanceIndex >= 8) {
                  colorBuffer[idx] = '#019AA2'; // Logic Cyan highlight
                } else if (luminanceIndex >= 5) {
                  colorBuffer[idx] = '#132279'; // Byte Blue structural
                } else {
                  colorBuffer[idx] = 'rgba(104, 116, 125, 0.45)'; // Muted gray
                }
              }
            }
          }
        }
      }

      // RENDER SHAPE: TESSERACT / HYPERCUBE
      else if (currentShape === 'tesseract') {
        const size = 1.8;
        const K2 = 4.8;
        const K1 = cols * K2 * 0.48;

        // Vertices of two concentric 3D cubes connected
        const cubePoints: { x: number; y: number; z: number }[] = [];
        const scaleFactors = [1.0, 0.55];

        scaleFactors.forEach((s) => {
          for (let u = -1; u <= 1; u += 0.2) {
            for (let v = -1; v <= 1; v += 0.2) {
              cubePoints.push({ x: u * size * s, y: v * size * s, z: size * s });
              cubePoints.push({ x: u * size * s, y: v * size * s, z: -size * s });
              cubePoints.push({ x: size * s, y: u * size * s, z: v * size * s });
              cubePoints.push({ x: -size * s, y: u * size * s, z: v * size * s });
            }
          }
        });

        cubePoints.forEach((pt, i) => {
          // 3D rotation
          const x = pt.x * cosB - pt.y * sinB;
          const y = (pt.x * sinB + pt.y * cosB) * cosA - pt.z * sinA;
          const z = (pt.x * sinB + pt.y * cosB) * sinA + pt.z * cosA + K2;
          const ooz = 1 / z;

          const xp = Math.floor(cols / 2 + K1 * ooz * x);
          const yp = Math.floor(rows / 2 - K1 * ooz * y * 0.55);

          if (yp >= 0 && yp < rows && xp >= 0 && xp < cols) {
            const idx = xp + yp * cols;
            if (ooz > zBuffer[idx]) {
              zBuffer[idx] = ooz;
              const isOuter = i < cubePoints.length / 2;
              charBuffer[idx] = isOuter ? (i % 2 === 0 ? '0' : '1') : '+';
              colorBuffer[idx] = isOuter ? '#019AA2' : '#132279';
            }
          }
        });
      }

      // RENDER SHAPE: SADDLE SURFACE (Hyperbolic Paraboloid z = x^2 - y^2)
      else if (currentShape === 'saddle') {
        const K2 = 5.0;
        const K1 = cols * K2 * 0.5;

        for (let u = -1.6; u <= 1.6; u += 0.08) {
          for (let v = -1.6; v <= 1.6; v += 0.08) {
            const rawX = u * 1.5;
            const rawY = v * 1.5;
            const rawZ = (u * u - v * v) * 0.6; // Saddle function

            const x = rawX * cosB - rawY * sinB;
            const y = (rawX * sinB + rawY * cosB) * cosA - rawZ * sinA;
            const z = (rawX * sinB + rawY * cosB) * sinA + rawZ * cosA + K2;
            const ooz = 1 / z;

            const xp = Math.floor(cols / 2 + K1 * ooz * x);
            const yp = Math.floor(rows / 2 - K1 * ooz * y * 0.55);

            if (yp >= 0 && yp < rows && xp >= 0 && xp < cols) {
              const idx = xp + yp * cols;
              if (ooz > zBuffer[idx]) {
                zBuffer[idx] = ooz;
                const isStationary = Math.abs(u) < 0.25 && Math.abs(v) < 0.25;
                charBuffer[idx] = isStationary ? '0' : (u * v > 0 ? '·' : ':');
                colorBuffer[idx] = isStationary ? '#019AA2' : 'rgba(168, 179, 186, 0.4)';
              }
            }
          }
        }
      }

      // RENDER SHAPE: SPHERE / MANIFOLD
      else {
        const radius = 2.0;
        const K2 = 5.0;
        const K1 = cols * K2 * 0.48;

        for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += 0.12) {
          for (let lon = 0; lon < 2 * Math.PI; lon += 0.1) {
            const rawX = radius * Math.cos(lat) * Math.cos(lon);
            const rawY = radius * Math.cos(lat) * Math.sin(lon);
            const rawZ = radius * Math.sin(lat);

            const x = rawX * cosB - rawY * sinB;
            const y = (rawX * sinB + rawY * cosB) * cosA - rawZ * sinA;
            const z = (rawX * sinB + rawY * cosB) * sinA + rawZ * cosA + K2;
            const ooz = 1 / z;

            const xp = Math.floor(cols / 2 + K1 * ooz * x);
            const yp = Math.floor(rows / 2 - K1 * ooz * y * 0.55);

            if (yp >= 0 && yp < rows && xp >= 0 && xp < cols) {
              const idx = xp + yp * cols;
              if (ooz > zBuffer[idx]) {
                zBuffer[idx] = ooz;
                const isEquator = Math.abs(lat) < 0.15;
                charBuffer[idx] = isEquator ? '0' : (Math.sin(lon * 4) > 0 ? '1' : '·');
                colorBuffer[idx] = isEquator ? '#019AA2' : 'rgba(19, 34, 121, 0.6)';
              }
            }
          }
        }
      }

      // Draw text buffer onto canvas
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textBaseline = 'top';

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = c + r * cols;
          const ch = charBuffer[idx];
          if (ch !== ' ') {
            ctx.fillStyle = colorBuffer[idx];
            ctx.fillText(ch, c * charWidth, r * charHeight);
          }
        }
      }

      animationFrameId = requestAnimationFrame(renderFrame);
    };

    // Handle high DPI and resizing
    const handleResize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    renderFrame();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentShape, isPlaying]);

  const shapes: { id: AsciiShape; label: string; code: string; icon: React.ReactNode }[] = [
    { id: 'torus', label: 'Torus', code: '01', icon: <Compass className="w-3 h-3" /> },
    { id: 'tesseract', label: 'Tesseract', code: '02', icon: <Box className="w-3 h-3" /> },
    { id: 'saddle', label: 'Saddle Loss', code: '03', icon: <Activity className="w-3 h-3" /> },
    { id: 'sphere', label: 'Manifold', code: '04', icon: <Globe className="w-3 h-3" /> },
  ];

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full h-full select-none overflow-hidden', className)}
    >
      {/* 3D ASCII Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
      />

      {/* Radial Gradient Contrast Mask: Darkens the center so foreground typography has elite legibility */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(5,7,10,0.85)_0%,rgba(5,7,10,0.45)_60%,transparent_100%)]" />

      {/* Top Left Coordinates Telemetry */}
      <div className="absolute top-4 left-4 z-10 text-[10px] font-mono text-[#68747D]/70 space-y-0.5 hidden sm:block pointer-events-none">
        <div>SYS_MATRIX: 3D ASCII ENGINE</div>
        <div>TOPOLOGY: {currentShape.toUpperCase()}</div>
        <div>PRECISION: FLOAT32 Z-BUFFER</div>
      </div>

      {/* Interactive Controls Bar: Centered or Top Right */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2 text-xs font-mono">
        {/* Shape Switcher Pills */}
        <div className="flex items-center gap-1 p-1 rounded-[4px] bg-[#0E151B]/80 backdrop-blur-sm border border-[#1C2830]">
          {shapes.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSelectShape(s.id)}
              className={cn(
                'px-2 py-1 rounded-[3px] text-[10px] tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-1',
                currentShape === s.id
                  ? 'bg-[#019AA2] text-[#05070A] font-bold'
                  : 'text-[#68747D] hover:text-[#A8B3BA]'
              )}
            >
              <span>{s.code}</span>
              <span className="hidden md:inline">{s.label}</span>
            </button>
          ))}
        </div>

        {/* Play/Pause Toggle */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause 3D ASCII animation' : 'Play 3D ASCII animation'}
          className="p-1.5 rounded-[4px] bg-[#0E151B]/80 backdrop-blur-sm border border-[#1C2830] text-[#A8B3BA] hover:text-[#019AA2] transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        {/* Reset Angle */}
        <button
          onClick={() => {
            angleARef.current = 0;
            angleBRef.current = 0;
          }}
          aria-label="Reset 3D ASCII orientation"
          className="p-1.5 rounded-[4px] bg-[#0E151B]/80 backdrop-blur-sm border border-[#1C2830] text-[#A8B3BA] hover:text-[#F3F6F7] transition-colors cursor-pointer hidden sm:block"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
