'use client';

import React, { useState } from 'react';
import { PORTFOLIO_METADATA } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Mail, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { motion, useReducedMotion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    // Simulated client-side submission for v0.1 prototype
    setTimeout(() => {
      setStatus('submitted');
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="07"
          tag="Channel // Contact"
          title="Get In Touch"
          subtitle="Direct contact channels for engineering inquiries, research collaborations, or technical opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Direct channels */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="md:col-span-5 space-y-4"
          >
            <div className="p-6 glass-panel corner-brackets space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#dfb15b]">
                Direct Coordinates
              </div>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href={`mailto:${PORTFOLIO_METADATA.email}`}
                  className="p-3 border border-white/5 bg-white/[0.02] flex items-center justify-between text-white/80 hover:text-[#dfb15b] hover:border-[#d4af37]/40 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#dfb15b]" />
                    <span>{PORTFOLIO_METADATA.email}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href={PORTFOLIO_METADATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/5 bg-white/[0.02] flex items-center justify-between text-white/80 hover:text-[#dfb15b] hover:border-[#d4af37]/40 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon size={16} className="text-[#dfb15b]" />
                    <span>github.com/nayantsrivastava</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href={PORTFOLIO_METADATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/5 bg-white/[0.02] flex items-center justify-between text-white/80 hover:text-[#dfb15b] hover:border-[#d4af37]/40 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon size={16} className="text-[#dfb15b]" />
                    <span>linkedin.com/in/nayantsrivastava</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div className="pt-2 text-[11px] font-mono text-white/40 leading-relaxed border-t border-white/5">
                Typical response latency: &lt; 24h for technical & recruitment inquiries.
              </div>
            </div>
          </motion.div>

          {/* Client-side contact form */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="p-6 sm:p-7 glass-panel corner-brackets">
              <div className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
                <span>Message Transmission</span>
                <span className="text-[10px] text-white/30">[v0.1 Mock Handler]</span>
              </div>

              {status === 'submitted' ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-10 h-10 border border-[#d4af37] bg-[#d4af37]/10 text-[#dfb15b] flex items-center justify-center mx-auto shadow-[0_0_12px_rgba(212,175,55,0.2)]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#feffff]">
                    Transmission Received
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-white/70 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. In this v0.1 prototype, submission is client-side simulated. Feel free to connect directly via email or LinkedIn.
                  </p>
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    Send Another Transmission
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs text-white/60 mb-1.5 uppercase tracking-wider"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Alan Turing"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-[#feffff] placeholder:text-white/20 focus:outline-none focus:border-[#d4af37] transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs text-white/60 mb-1.5 uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-[#feffff] placeholder:text-white/20 focus:outline-none focus:border-[#d4af37] transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-xs text-white/60 mb-1.5 uppercase tracking-wider"
                    >
                      Message / Inquiry
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Discussing engineering opportunities, reinforcement learning architectures, or technical collaboration..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/15 text-sm text-[#feffff] placeholder:text-white/20 focus:outline-none focus:border-[#d4af37] transition-colors font-sans resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={status === 'submitting'}
                    className="w-full"
                  >
                    {status === 'submitting' ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
