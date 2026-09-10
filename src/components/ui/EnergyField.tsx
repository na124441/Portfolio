'use client';

import React, { useEffect, useRef } from 'react';

export interface EnergyFieldProps {
  className?: string;
  intensity?: number;
  reducedMotion?: boolean;
}

interface Particle {
  theta: number;
  phi: number;
  rOffset: number;
  speed: number;
  size: number;
  alpha: number;
  colorType: 'gold' | 'cyan' | 'violet';
}

export const EnergyField: React.FC<EnergyFieldProps> = ({
  className = '',
  intensity = 1,
  reducedMotion = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let isVisible = true;

    // Torus Geometry Constants
    const R_MAJOR = 132; // Distance from center to tube center
    const R_MINOR = 44; // Radius of tube
    const THETA_STEPS = 54;
    const PHI_STEPS = 72;

    // Viewport & DPR
    let width = 0;
    let height = 0;
    let dpr = 1;

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width || 480;
      height = rect.height || 480;
      const isMobile = window.innerWidth < 768;
      dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle Setup
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const particleCount = isMobile ? 32 : 76;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let colorType: 'gold' | 'cyan' | 'violet' = 'gold';
      if (rand > 0.88) colorType = 'violet';
      else if (rand > 0.7) colorType = 'cyan';

      particles.push({
        theta: Math.random() * Math.PI * 2,
        phi: Math.random() * Math.PI * 2,
        rOffset: (Math.random() - 0.5) * 26,
        speed: (0.003 + Math.random() * 0.006) * (Math.random() > 0.5 ? 1 : -1),
        size: 0.8 + Math.random() * 1.6,
        alpha: 0.2 + Math.random() * 0.7,
        colorType,
      });
    }

    // Animation Clock & Parameters
    let time = 0;
    let pulseStart = -100;
    const PULSE_INTERVAL = 8; // Seconds between pulses
    const PULSE_DURATION = 1.8; // Duration of pulse in seconds

    // Visibility Observer to save GPU/CPU cycles
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Handle Motion Preferences
      if (!reducedMotion) {
        time += 0.016;
      }

      // Check for periodic pulse trigger
      if (time - pulseStart > PULSE_INTERVAL) {
        pulseStart = time;
      }
      const pulseAge = time - pulseStart;
      const isPulsing = pulseAge >= 0 && pulseAge <= PULSE_DURATION;
      const pulseProgress = isPulsing ? pulseAge / PULSE_DURATION : 0;
      const pulseCenterPhi = pulseProgress * Math.PI * 2;

      // 3D Organic Rotation Angles
      // rotationY: Slow continuous movement
      // rotationX: Very subtle organic oscillation
      // rotationZ: Almost imperceptible drift
      const rotY = reducedMotion ? 0.35 : time * 0.22;
      const rotX = reducedMotion ? 0.2 : 0.28 + Math.sin(time * 0.35) * 0.06;
      const rotZ = reducedMotion ? -0.1 : Math.sin(time * 0.18) * 0.04;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);

      // Traveling Energy Band Angle (8-14s period)
      const energyPhase = (time * 0.55) % (Math.PI * 2);

      // Pre-calculate and collect projected torus nodes for depth-sorted rendering
      interface Node3D {
        x2d: number;
        y2d: number;
        z: number;
        nx: number;
        ny: number;
        nz: number;
        phi: number;
        theta: number;
      }

      const nodes: Node3D[] = [];

      for (let i = 0; i < THETA_STEPS; i += 2) {
        const theta = (i / THETA_STEPS) * Math.PI * 2;
        const cosT = Math.cos(theta);
        const sinT = Math.sin(theta);

        for (let j = 0; j < PHI_STEPS; j += 2) {
          const phi = (j / PHI_STEPS) * Math.PI * 2;
          const cosP = Math.cos(phi);
          const sinP = Math.sin(phi);

          // 3D Torus model coordinates
          const x0 = (R_MAJOR + R_MINOR * cosT) * cosP;
          const y0 = R_MINOR * sinT;
          const z0 = (R_MAJOR + R_MINOR * cosT) * sinP;

          // Surface normal in model space
          const nx0 = cosT * cosP;
          const ny0 = sinT;
          const nz0 = cosT * sinP;

          // Apply Rotation Y -> Rotation X -> Rotation Z
          // 1. Rot Y
          const x1 = x0 * cosY + z0 * sinY;
          const y1 = y0;
          const z1 = -x0 * sinY + z0 * cosY;

          const nx1 = nx0 * cosY + nz0 * sinY;
          const ny1 = ny0;
          const nz1 = -nx0 * sinY + nz0 * cosY;

          // 2. Rot X
          const x2 = x1;
          const y2 = y1 * cosX - z1 * sinX;
          const z2 = y1 * sinX + z1 * cosX;

          const nx2 = nx1;
          const ny2 = ny1 * cosX - nz1 * sinX;
          const nz2 = ny1 * sinX + nz1 * cosX;

          // 3. Rot Z
          const x3 = x2 * cosZ - y2 * sinZ;
          const y3 = x2 * sinZ + y2 * cosZ;
          const z3 = z2;

          const nx3 = nx2 * cosZ - ny2 * sinZ;
          const ny3 = nx2 * sinZ + ny2 * cosZ;
          const nz3 = nz2;

          // Perspective Projection
          const fov = 440;
          const distance = 480;
          const scale = fov / (distance + z3);

          const x2d = cx + x3 * scale;
          const y2d = cy + y3 * scale;

          nodes.push({
            x2d,
            y2d,
            z: z3,
            nx: nx3,
            ny: ny3,
            nz: nz3,
            phi,
            theta,
          });
        }
      }

      // Sort back-to-front (lowest z to highest z) for clean volumetric occlusion
      nodes.sort((a, b) => a.z - b.z);

      // Light direction: slightly from top-right-front
      const lx = 0.45;
      const ly = -0.55;
      const lz = 0.7;

      // Render Torus Computational Nodes & Filaments
      for (let k = 0; k < nodes.length; k++) {
        const node = nodes[k];

        // Diffuse Lighting calculation
        const dot = node.nx * lx + node.ny * ly + node.nz * lz;
        const diffuse = Math.max(0.04, dot);

        // Volumetric depth attenuation: front is bright, rear is dark metallic
        const depthNorm = (node.z + R_MAJOR + R_MINOR) / ((R_MAJOR + R_MINOR) * 2); // 0 (back) to 1 (front)
        const depthFactor = 0.15 + 0.85 * Math.max(0, Math.min(1, depthNorm));

        // Traveling Energy Band calculation along the circumference (phi)
        let phiDiff = (node.phi - energyPhase + Math.PI * 4) % (Math.PI * 2);
        if (phiDiff > Math.PI) phiDiff = Math.PI * 2 - phiDiff;

        // Localized Color Interpolation:
        // 70% Gold/Amber, 20% Cyan streak, 10% Violet accent
        let r = 212;
        let g = 175;
        let b = 55;
        let nodeAlpha = (0.18 + 0.65 * diffuse) * depthFactor * intensity;

        // Cyan energy streak (localized along trailing edge of energy wave)
        if (phiDiff < 0.6) {
          const tCyan = 1 - phiDiff / 0.6;
          // Blend towards Electric Cyan (rgb(0, 240, 255))
          r = Math.round(r * (1 - tCyan) + 0 * tCyan);
          g = Math.round(g * (1 - tCyan) + 240 * tCyan);
          b = Math.round(b * (1 - tCyan) + 255 * tCyan);
          nodeAlpha += 0.35 * tCyan * depthFactor;
        }
        // Violet accent (small localized node)
        else if (phiDiff > 1.8 && phiDiff < 2.3) {
          const tViolet = 1 - Math.abs(phiDiff - 2.05) / 0.25;
          r = Math.round(r * (1 - tViolet) + 139 * tViolet);
          g = Math.round(g * (1 - tViolet) + 92 * tViolet);
          b = Math.round(b * (1 - tViolet) + 246 * tViolet);
          nodeAlpha += 0.25 * tViolet * depthFactor;
        }

        // Apply Periodic Energy Pulse if active
        if (isPulsing) {
          let pulseDiff = Math.abs(node.phi - pulseCenterPhi);
          if (pulseDiff > Math.PI) pulseDiff = Math.PI * 2 - pulseDiff;
          if (pulseDiff < 0.8) {
            const pulseBoost = (1 - pulseDiff / 0.8) * Math.sin(pulseProgress * Math.PI);
            nodeAlpha = Math.min(1, nodeAlpha + pulseBoost * 0.45);
            // Brighten with intense specular warm gold
            r = Math.min(255, r + Math.round(40 * pulseBoost));
            g = Math.min(255, g + Math.round(40 * pulseBoost));
            b = Math.min(255, b + Math.round(40 * pulseBoost));
          }
        }

        // Draw computational particle point
        const ptSize = (1.2 + diffuse * 1.5) * depthFactor;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, nodeAlpha))})`;
        ctx.fillRect(node.x2d, node.y2d, ptSize, ptSize);
      }

      // Render Orbital Toroidal Energy Particles
      for (let p = 0; p < particles.length; p++) {
        const pt = particles[p];
        if (!reducedMotion) {
          pt.phi += pt.speed;
          pt.theta += pt.speed * 1.5;
        }

        // Toroidal coordinates with slight randomized radial offset
        const rMaj = R_MAJOR + pt.rOffset;
        const rMin = R_MINOR + pt.rOffset * 0.5;

        const x0 = (rMaj + rMin * Math.cos(pt.theta)) * Math.cos(pt.phi);
        const y0 = rMin * Math.sin(pt.theta);
        const z0 = (rMaj + rMin * Math.cos(pt.theta)) * Math.sin(pt.phi);

        // Apply same 3D Rotations
        const x1 = x0 * cosY + z0 * sinY;
        const y1 = y0;
        const z1 = -x0 * sinY + z0 * cosY;

        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        const x3 = x2 * cosZ - y2 * sinZ;
        const y3 = x2 * sinZ + y2 * cosZ;
        const z3 = z2;

        const fov = 440;
        const distance = 480;
        const scale = fov / (distance + z3);

        const x2d = cx + x3 * scale;
        const y2d = cy + y3 * scale;

        const depthNorm = (z3 + R_MAJOR + R_MINOR) / ((R_MAJOR + R_MINOR) * 2);
        const pAlpha = pt.alpha * (0.3 + 0.7 * Math.max(0, Math.min(1, depthNorm))) * intensity;

        // Color attribution
        let pr = 246;
        let pg = 208;
        let pb = 9;
        if (pt.colorType === 'cyan') {
          pr = 0;
          pg = 240;
          pb = 255;
        } else if (pt.colorType === 'violet') {
          pr = 168;
          pg = 85;
          pb = 247;
        }

        ctx.fillStyle = `rgba(${pr}, ${pg}, ${pb}, ${Math.max(0, Math.min(1, pAlpha))})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, pt.size * scale, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [intensity, reducedMotion]);

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      {/* 1. Atmospheric Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,rgba(0,240,255,0.03)_38%,rgba(139,92,246,0.015)_52%,transparent_72%)] blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 2. Primary 3D Computational Canvas */}
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full object-contain"
        style={{ width: '100%', height: '100%' }}
      />

      {/* 3. System Diagnostic Telemetry HUD (Minimalist low-contrast readout) */}
      <div
        className="absolute bottom-1 right-1 sm:bottom-3 sm:right-3 z-20 font-mono text-[8px] sm:text-[9px] text-white/30 tracking-widest flex flex-col items-end space-y-0.5 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[#f6d009]/60 font-semibold">N-01 // ENERGY FIELD</span>
        <span>STATE: ACTIVE [87.4%]</span>
        <span className="hidden sm:inline">FLUX: T-GRAPH_04</span>
        <span className="hidden sm:inline">ROT: 0.18 RAD/S</span>
      </div>
    </div>
  );
};
