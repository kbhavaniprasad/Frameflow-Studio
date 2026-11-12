'use client';

import { motion } from 'framer-motion';
import { Film, Code, Users as UsersIcon, Zap, Layout, Rocket } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Section, SectionHeader } from '../ui/Section';
import { servicePillars } from '../../data/agency';

const iconMap = {
  Film,
  Code,
  Users: UsersIcon,
  Zap,
  Layout,
  Rocket,
};

export function ServicePillars() {
  return (
    <Section id="services" size="lg" background="default">
      <SectionHeader
        title="Two Engines. One Revenue System."
        subtitle="Our Core Service Pillars"
        description="We don't bolt video onto websites — we build both in sync so reach converts and conversion scales."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {servicePillars.map((pillar) => {
          const Icon = iconMap[pillar.icon];
          return (
            <motion.div
              key={pillar.id}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <Card variant="gradient-border" padding="lg" className="h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-primary-500/10 text-primary-400 shadow-lg shadow-primary-500/20">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                    {pillar.id === 'video' ? 'Pillar A' : 'Pillar B'}
                  </span>
                </div>
                <h3 className="text-heading-lg font-bold text-neutral-900 dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-body text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {pillar.subtitle}
                </p>
                <p className="text-body-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-3 mb-6">
                  {pillar.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-500 group-hover:bg-primary-400 transition-colors shrink-0" aria-hidden="true" />
                      <span className="text-body-sm text-neutral-600 dark:text-neutral-400 leading-snug">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pillar.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-[11px] font-medium border border-neutral-200/60 bg-white/60 text-neutral-600 backdrop-blur dark:border-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-neutral-200/40 dark:border-neutral-700/40">
                  <Button variant="outline" size="sm" onClick={() => {}} fullWidth>
                    {pillar.cta} <span aria-hidden="true">→</span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
