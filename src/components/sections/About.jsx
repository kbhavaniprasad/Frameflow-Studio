'use client';

import { motion } from 'framer-motion';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, GithubIcon } from '../ui/SocialIcons';
import { Card } from '../ui/Card';
import { Section, SectionHeader } from '../ui/Section';
import { teamMembers } from '../../data/agency';

const iconMap = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  github: GithubIcon,
};

export function About() {
  return (
    <Section id="about" size="lg" background="muted">
      <SectionHeader
        title="No Corporate Fluff. Just Specialists Who Ship."
        subtitle="About The Team"
        description="Three owners. One engine. Every role is hands-on production — not account management."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => {
          const socials = [
            { key: 'instagram', url: member.socialLinks?.instagram },
            { key: 'linkedin', url: member.socialLinks?.linkedin },
            { key: 'youtube', url: member.socialLinks?.youtube },
            { key: 'github', url: member.socialLinks?.github },
          ].filter((s) => s.url);

          return (
            <motion.div
              key={member.id}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Card variant="interactive" padding="lg" className="section-card-hover h-full">
                <div className="mb-4">
                  <h3 className="text-heading-md font-bold text-neutral-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-body-sm text-primary-600 dark:text-primary-400 font-medium mt-0.5">
                    {member.role}
                  </p>
                </div>
                <p className="text-body-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="skill-badge"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200/40 dark:border-neutral-700/40">
                  <div className="flex gap-2">
                    {socials.map((s) => {
                      const Icon = iconMap[s.key];
                      return (
                        <a
                          key={s.key}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-primary-600 dark:text-neutral-500 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all border border-transparent hover:border-primary-200 dark:hover:border-primary-500/20"
                          aria-label={s.key}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
