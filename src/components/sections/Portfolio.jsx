'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Section, SectionHeader } from '../ui/Section';
import { TabGroup, TabPanel } from '../ui/TabGroup';
import { portfolioTabs, portfolioVideo, portfolioWeb } from '../../data/agency';

export function Portfolio() {
  return (
    <Section id="portfolio" size="lg" background="muted">
      <SectionHeader
        title="Proof & Work"
        subtitle="Selected Showcase"
        description="A cross-section of short-form video engines and conversion platforms we've built."
      />

      <TabGroup tabs={portfolioTabs} defaultActiveId="video">
        {/* Tab 1: Video Content Showcase */}
        <TabPanel id="video">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioVideo.map((item) => (
              <Card key={item.id} variant="interactive" padding="none" className="overflow-hidden aspect-[9/16] group relative" data-theme-media>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button
                    onClick={() => {
                      window.open(item.videoUrl, '_blank', 'noopener,noreferrer');
                    }}
                    className="interactive-control w-14 h-14 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white shadow-xl shadow-black/40 hover:scale-110 hover:bg-black/80 transition-all border border-white/20"
                    aria-label={`Watch ${item.title}`}
                  >
                    <Play className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-primary-400 bg-primary-500/20 px-2.5 py-0.5 rounded-full border border-primary-500/30">
                      {item.metric}
                    </span>
                    <span className="text-xs font-medium text-neutral-300 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur">
                      {item.niche}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5">{item.style}</p>
                </div>
              </Card>
            ))}
          </div>
        </TabPanel>

        {/* Tab 2: Web & App Projects */}
        <TabPanel id="web">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioWeb.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col"
                >
                  <Card variant="default" padding="none" className="overflow-hidden relative aspect-[4/5]" data-theme-media>
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundImage: `url(${item.thumbnail})` }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <button
                        onClick={() => {
                          if (item.liveUrl) window.open(item.liveUrl, '_blank', 'noopener,noreferrer');
                        }}
                        className="interactive-control w-12 h-12 rounded-full bg-[var(--color-card)] flex items-center justify-center text-[var(--color-card-foreground)] shadow-xl hover:scale-110 hover:bg-primary-600 hover:text-white transition-all border border-[var(--color-border)]"
                        aria-label={`Live demo: ${item.title}`}
                        disabled={!item.liveUrl}
                      >
                        <ArrowRight className="w-5 h-5" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-20 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                      <div className="flex items-center gap-2 mb-2">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded text-[10px] font-medium border border-white/20 bg-[var(--color-card)]/10 text-[var(--color-card-foreground)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-neutral-300 mt-1">{item.result}</p>
                    </div>
                  </Card>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-white truncate">{item.title}</h4>
                      <p className="text-[12px] text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">{item.niche}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 rounded bg-primary-500/10 text-primary-400 border border-primary-500/20">
                        {item.metric}
                      </span>
                      <Button variant="ghost" size="sm" onClick={() => {}} className="px-3">
                        Details <span aria-hidden="true">→</span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </TabPanel>
      </TabGroup>
    </Section>
  );
}
