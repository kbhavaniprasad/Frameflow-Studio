'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Code2, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { businessInfo } from '../../data/agency';
import { BookingModal } from '../ui/BookingModal';

export function Hero() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <Section id="hero" size="xl" background="dark">
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-lg border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-xs font-semibold text-primary-400 uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            {businessInfo.tagline}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-display-lg font-bold tracking-tight text-[var(--color-card-foreground)] text-balance leading-[1.05]"
          >
            We Turn High-Retention Video Reach Into <br />
            <span className="gradient-text">High-Converting Digital Brands.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-2 text-body-lg text-[var(--color-muted-foreground)] leading-relaxed max-w-xl"
          >
            {businessInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => setBookingOpen(true)}
              className="gradient-border px-8 py-4 text-base font-semibold bg-gradient-to-br from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all"
            >
              Get a Free Digital Audit
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => {
                const el = document.getElementById('portfolio');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              leftIcon={<Play className="w-4 h-4" aria-hidden="true" />}
              className="text-[var(--color-muted-foreground)] hover:text-[var(--color-card-foreground)]"
            >
              Explore Our Portfolio
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 flex items-center gap-3 text-xs text-[var(--color-muted-foreground)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" aria-hidden="true" />
            <span>3M+ organic views generated across client channels</span>
          </motion.div>
        </div>

        <div className="relative hidden sm:flex gap-8 items-center" data-theme-media>
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative z-10"
            style={{ transform: 'rotate(-6deg)' }}
          >
            <div className="relative w-64 h-[960px] rounded-3xl border border-neutral-700 bg-black shadow-2xl overflow-hidden ring-1 ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black" />
              <div className="flex items-center justify-center gap-2 px-4 pt-6">
                <div className="w-16 h-2 rounded-full bg-neutral-800" aria-hidden="true" />
              </div>
              <div className="h-12 bg-neutral-800/50 flex items-center justify-between px-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
                  <span className="text-[10px] text-neutral-300 font-medium">10:42</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-neutral-400">LTE</span>
                  <div className="w-3 h-3 bg-primary-400" aria-hidden="true" />
                  <span className="text-[10px] text-neutral-400">84%</span>
                </div>
              </div>
              <div className="relative flex items-center justify-center h-full bg-neutral-950 p-1">
                <div className="relative w-full h-[calc(100%-4rem)] rounded-2xl border border-neutral-700 bg-neutral-900 overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
                    alt="Short-form video preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-end gap-2">
                    <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition-colors">
                      <span className="text-[10px] font-bold">2.4M</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition-colors">
                      <Play className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur backdrop-blur-md text-xs font-medium text-white border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" aria-hidden="true" />
                    Recording · Reel
                  </div>
                </div>
                <div className="absolute bottom-4 w-full flex justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-400/60" aria-hidden="true" />
                  <div className="w-2 h-2 rounded-full bg-primary-400/60" aria-hidden="true" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 rounded-full bg-primary-400/60" aria-hidden="true" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-neutral-800" aria-hidden="true" />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] text-neutral-400" aria-hidden="true">
              VIDEO FRAME
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative z-20"
            style={{ transform: 'rotate(4deg)' }}
          >
            <div className="relative w-full max-w-sm h-[760px] rounded-3xl border border-neutral-700 bg-neutral-900 shadow-2xl overflow-hidden ring-1 ring-white/10 -mt-16 ml-4">
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-950" />
              <div className="h-10 bg-neutral-800 border-b border-neutral-700 flex items-center px-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-green-500" aria-hidden="true" />
                </div>
                <div className="ml-4 flex-1 flex items-center gap-2 text-[11px] text-neutral-400">
                  <Code2 className="w-3 h-3 text-primary-400" aria-hidden="true" />
                  <span>nexora.io • React App</span>
                </div>
              </div>
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1 overflow-hidden bg-black rounded-xl border border-neutral-700 relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afbe65ae8364?w=800&q=80"
                    alt="Web app preview"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-accent-500/10" />
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-white">Conversion Landing Platform</h4>
                  <p className="text-[12px] text-neutral-400 mt-1">Custom React + Tailwind build</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 right-6 w-20 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] text-neutral-400" aria-hidden="true">
              WEB PREVIEW
            </div>
          </motion.div>

          <div className="absolute inset-0 -z-20">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-[120px] pointer-events-none" />
          </div>
        </div>

        <div className="sm:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8" data-theme-media>
          <div className="col-span-2 aspect-video rounded-2xl border border-neutral-700 bg-black overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" alt="" className="w-full h-full object-cover" loading="lazy" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/10">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" aria-hidden="true" />
              Short-Form Video Frame
            </div>
          </div>
          <div className="aspect-[4/5] rounded-2xl border border-neutral-700 bg-neutral-900 overflow-hidden relative flex flex-col justify-end p-4">
            <img src="https://images.unsplash.com/photo-1460925895917-afbe65ae8364?w=800&q=80" alt="" className="absolute inset-0 w-full h-full object-cover -z-10" loading="lazy" aria-hidden="true" />
            <h4 className="text-sm font-bold text-white">React Web App Preview</h4>
            <p className="text-[11px] text-neutral-400">Custom conversion platform</p>
          </div>
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </Section>
  );
}
