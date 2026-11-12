'use client';

import { motion } from 'framer-motion';
import { Play, Users, Zap, PenTool } from 'lucide-react';
import { Section } from '../ui/Section';
import { metrics } from '../../data/agency';

const iconMap = {
  Play,
  Users,
  Zap,
  PenTool,
};

export function ProofMetrics() {
  return (
    <Section id="proof" size="sm" background="muted">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = iconMap[metric.icon];
          return (
            <motion.div
              key={metric.id}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-neutral-200/60 bg-[var(--color-card)] shadow-sm transition-all duration-300 dark:border-neutral-700/40"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary-500/10 text-primary-400 shadow-lg shadow-primary-500/20">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="text-center">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {metric.value}
                </span>
                <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-200">
                  {metric.label}
                </p>
              </div>
              <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 leading-tight">
                {metric.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
