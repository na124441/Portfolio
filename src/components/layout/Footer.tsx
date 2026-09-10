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
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
              <span className="font-display font-bold text-sm tracking-tight text-[#feffff]">
                {PORTFOLIO_METADATA.name}
              </span>
              <span className="font-mono text-xs text-white/40">// v0.1 PROTOYPE</span>
            </div>
            <p className="text-xs font-sans text-white/60 max-w-sm leading-relaxed">
              {PORTFOLIO_METADATA.role} · Specializing in {PORTFOLIO_METADATA.specialization}.
            </p>
            <p className="text-[11px] font-mono text-white/40">
              Designed around evidence-first technical editorial principles.
            </p>
          </div>

          {/* Quick navigation */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#dfb15b] mb-3">
              Index
            </div>
            <ul className="space-y-1.5 font-mono text-xs">
              <li>
                <Link href="/#now" className="hover:text-[#dfb15b] transition-colors">
                  01. Current Focus
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-[#dfb15b] transition-colors">
                  02. Selected Projects
                </Link>
              </li>
              <li>
                <Link href="/#philosophy" className="hover:text-[#dfb15b] transition-colors">
                  03. Philosophy
                </Link>
              </li>
              <li>
                <Link href="/#journey" className="hover:text-[#dfb15b] transition-colors">
                  04. Journey
                </Link>
              </li>
              <li>
                <Link href="/#contributions" className="hover:text-[#dfb15b] transition-colors">
                  05. Contributions
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#dfb15b] transition-colors">
                  06. About
                </Link>
              </li>
            </ul>
          </div>

          {/* Colophon & Contact */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#dfb15b] mb-3">
              Colophon
            </div>
            <div className="space-y-1 font-mono text-[11px] text-white/50">
              <div>Next.js 15 App Router</div>
              <div>Tailwind CSS v4 · Framer Motion</div>
              <div>Type: Comfortaa · Inter · JetBrains Mono</div>
              <div>Palette: #010a0b · #feffff · Metallic Gold</div>
            </div>

            <div className="pt-3 flex items-center gap-3 text-white/70">
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_METADATA.name}. All technical rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Bangalore, India</span>
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
