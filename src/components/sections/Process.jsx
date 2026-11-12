'use client';

import { motion } from 'framer-motion';
import { Search, Layout, Play, Rocket } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { processSteps } from '../../data/agency';

const iconMap = {
  Search,
  Layout,
  Play,
  Rocket,
};

export function Process() {
  return (
    <Section id="process" size="lg" background="default">
      <SectionHeader
        title="The 4-Step Execution Workflow"
        subtitle="How We Deliver"
        description="A repeatable pipeline that moves you from audit to live, lead-generating presence — fast."
      />

      <div className="hidden md:flex items-end gap-12 mb-12">
        {processSteps.map((step, i) => {
          const Icon = iconMap[step.icon];
          const isLast = i === processSteps.length - 1;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex-1 flex flex-col items-center relative"
            >
              {!isLast && (
                <div className="absolute left-1/2 top-8 -translate-x-1/2 w-[calc(100%+4rem)] h-[2px] bg-neutral-200 dark:bg-neutral-800" aria-hidden="true" />
              )}
              <div className="relative z-10 flex flex-col items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 mb-3 relative">
                  <span className="text-sm font-bold">{step.number}</span>
                  <div className="absolute -top-3 -left-3 w-2 h-2 rounded-full bg-primary-400 ring-2 ring-white" aria-hidden="true" />
                </div>
                <Icon className="w-5 h-5 text-neutral-400 mb-2" aria-hidden="true" />
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 text-center leading-none">
                  {step.title}
                </span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center max-w-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="md:hidden grid gap-6">
        {processSteps.map((step) => {
          const Icon = iconMap[step.icon];
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-4 rounded-2xl border border-neutral-200/60 p-5 bg-[var(--color-card)] shadow-sm dark:border-neutral-700/40"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center text-xs font-bold text-white">
                    {step.number}
                  </span>
                  <span className="text-heading-sm font-bold text-neutral-900 dark:text-white">{step.title}</span>
                </div>
                <p className="text-body-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
                <ul className="mt-3 space-y-1.5 text-[12px] text-neutral-500 dark:text-neutral-400 list-disc pl-5">
                  {step.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
