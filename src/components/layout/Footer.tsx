import React from 'react';
import Link from 'next/link';
import { PORTFOLIO_METADATA } from '@/data/portfolio';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#010a0b] py-12 sm:py-16 text-white/60">
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          {/* Identity column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
              <span className="font-display font-bold text-sm tracking-tight text-[#feffff]">
                {PORTFOLIO_METADATA.name}
              </span>
            </div>
            <p className="text-xs font-sans text-white/60 max-w-sm leading-relaxed">
              {PORTFOLIO_METADATA.role}
            </p>
            <p className="text-[11px] font-mono text-white/40 max-w-sm leading-relaxed">
              {PORTFOLIO_METADATA.tagline}
            </p>
          </div>

          {/* Hub navigation */}
          <div className="md:col-span-4 space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#dfb15b] mb-3">
              Navigate
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
              <ul className="space-y-1.5 font-mono text-xs">
                <li>
                  <Link href="/work" className="hover:text-[#dfb15b] transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/lab" className="hover:text-[#dfb15b] transition-colors">
                    Lab
                  </Link>
                </li>
                <li>
                  <Link href="/bytelogic" className="hover:text-[#dfb15b] transition-colors">
                    Learn
                  </Link>
                </li>
                <li>
                  <Link href="/build" className="hover:text-[#dfb15b] transition-colors">
                    Build
                  </Link>
                </li>
              </ul>
              <ul className="space-y-1.5 font-mono text-xs">
                <li>
                  <Link href="/writing" className="hover:text-[#dfb15b] transition-colors">
                    Writing
                  </Link>
                </li>
                <li>
                  <Link href="/now" className="hover:text-[#dfb15b] transition-colors">
                    Now
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#dfb15b] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#dfb15b] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#dfb15b] mb-3">
              Connect
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <a
                href={PORTFOLIO_METADATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#dfb15b] transition-colors"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={PORTFOLIO_METADATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#dfb15b] transition-colors"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${PORTFOLIO_METADATA.email}`}
                aria-label="Email"
                className="hover:text-[#dfb15b] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3 space-y-1 font-mono text-[11px] text-white/40">
              <div>Next.js 15 · Tailwind v4 · GSAP</div>
              <div>Comfortaa · Inter · JetBrains Mono</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
              System Online
            </span>
            <span>·</span>
            <span>© {new Date().getFullYear()} {PORTFOLIO_METADATA.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{PORTFOLIO_METADATA.location}</span>
            <span>·</span>
            <a
              href="#top"
              className="hover:text-[#dfb15b] flex items-center gap-1 transition-colors"
            >
              Top <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
