import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="glass-panel corner-brackets p-8 sm:p-12 max-w-lg text-center space-y-6">
        <div className="font-mono text-xs uppercase tracking-widest text-[#dfb15b] flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          <span>HTTP 404 // NOT_FOUND</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#feffff]">
          Coordinates Uncharted
        </h1>

        <p className="font-sans text-sm text-white/70 leading-relaxed">
          The requested engineering record or route does not exist within the current system index.
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider px-5 py-2.5 bg-metallic-gold font-bold text-[#010a0b] transition-all hover:brightness-110"
          >
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
