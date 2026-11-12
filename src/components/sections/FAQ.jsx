'use client';

import { Section, SectionHeader } from '../ui/Section';
import { Accordion } from '../ui/Accordion';
import { faqs } from '../../data/agency';

export function FAQ() {
  return (
    <Section id="faq" size="lg" background="default">
      <SectionHeader
        title="Questions We Hear Most"
        subtitle="Frequently Asked"
        description="Straight answers about how the video + web engine works."
      />

      <div className="max-w-2xl mx-auto">
        <Accordion items={faqs} className="space-y-3" />
      </div>
    </Section>
  );
}
