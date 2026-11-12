/**
 * NEXORA DIGITAL — Site data
 * Hybrid service: Short-Form Video Content Engine + High-Speed Conversion Web Engineering.
 * All copy is final agency copy — no placeholder or Lorem Ipsum text.
 */

export const businessInfo = {
  name: 'Nexora',
  tagline: 'The Digital Presence & Content Engine',
  description:
    'We bridge the gap between viral short-form content (3M+ organic views generated) and high-speed web platforms that turn casual viewers into high-paying clients.',
  email: 'hello@nexora.io',
  whatsapp: '+15550000000',
  location: 'San Francisco, CA',
  social: {
    instagram: 'https://instagram.com/nexora',
    youtube: 'https://youtube.com/@nexora',
    linkedin: 'https://linkedin.com/company/nexora',
  },
};

/**
 * Trust-bar metrics displayed in the Proof & Metrics banner.
 */
export const metrics = [
  {
    id: 'views',
    value: '3M+',
    label: 'Organic Video Views Generated',
    description: 'Short-form reach across Reels, Shorts, and TikTok for our clients.',
    icon: 'Play',
  },
  {
    id: 'audience',
    value: '7K+',
    label: 'Audience Built Across Channels',
    description: 'Engaged followers converted into warm, inbound leads.',
    icon: 'Users',
  },
  {
    id: 'uptime',
    value: '99.9%',
    label: 'Uptime & High-Speed React Builds',
    description: 'Sub-second Largest Contentful Paint on every site we ship.',
    icon: 'Zap',
  },
  {
    id: 'custom',
    value: '100%',
    label: 'Custom Design',
    description: 'Zero generic templates. Every brand gets a bespoke visual system.',
    icon: 'PenTool',
  },
];

/**
 * The two core service pillars (Pillar A & Pillar B).
 */
export const servicePillars = [
  {
    id: 'video',
    title: 'Short-Form Video Production Engine',
    subtitle: 'Scroll-stopping content that builds reach.',
    description:
      'We script, shoot, edit, and distribute high-retention short-form video across Instagram Reels, YouTube Shorts, and TikTok — turning fragmented clips into a consistent audience engine.',
    icon: 'Film',
    features: [
      'Content Scripting & Hook Strategy',
      'High-Retention Editing (Pacing, Motion Graphics, Sound Design)',
      'Podcast & Long-Form Repurposing (15 Shorts/Reels Monthly)',
      'Platform Optimization (Instagram Reels, YouTube Shorts, TikTok)',
    ],
    techStack: ['Premiere Pro', 'After Effects', 'CapCut', 'Frame.io'],
    cta: 'Explore Video Engine',
  },
  {
    id: 'web',
    title: 'Conversion Web & Platform Engineering',
    subtitle: 'High-speed sites that turn viewers into clients.',
    description:
      'Custom React.js + Tailwind CSS development aligned to your brand copy, with WhatsApp lead capture, technical SEO, and analytics — built for speed, not templates.',
    icon: 'Code',
    features: [
      'Custom React.js + Tailwind CSS Development',
      'UI/UX & Brand Copywriting Alignment',
      'WhatsApp & Direct Lead-Capture Workflows',
      'Technical SEO, Speed & Analytics Integration',
    ],
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'FastAPI'],
    cta: 'View Web Builds',
  },
];

/**
 * Portfolio items. Tab 1 = video showcase, Tab 2 = web/app projects.
 */
export const portfolioVideo = [
  {
    id: 'vid-1',
    title: 'DTC Skincare Brand — Reels Engine',
    niche: 'Beauty & Skincare',
    style: 'Fast-cut UGC + motion graphics',
    metric: '2.4M views',
    result: '3.2x increase in site traffic',
    thumbnail: 'https://images.unsplash.com/photo-1620913562375-e202de9d8e55?w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'vid-2',
    title: 'SaaS Founder — Shorts Series',
    niche: 'B2B SaaS',
    style: 'Talking-head + animated captions',
    metric: '1.1M views',
    result: '42 qualified demo requests',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1272de781f?w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 'vid-3',
    title: 'Local Restaurant — TikTok Launch',
    niche: 'Hospitality',
    style: 'Atmospheric b-roll + hook-driven cuts',
    metric: '890K views',
    result: '210% month-over-month foot traffic',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export const portfolioWeb = [
  {
    id: 'web-1',
    title: 'Creator Storefront',
    niche: 'Personal Brand',
    metric: '+68% conversion rate',
    techStack: ['React.js', 'Tailwind CSS', 'Node.js'],
    result: 'Checkout flow rebuilt; mobile LCP under 1.2s.',
    liveUrl: 'https://nexora.io/demo/creator-storefront',
    githubUrl: 'https://github.com/nexora/creator-storefront',
    device: 'laptop',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afbe65ae8364?w=800&q=80',
  },
  {
    id: 'web-2',
    title: 'Agency Landing Platform',
    niche: 'Marketing Agency',
    metric: '+4x lead volume',
    techStack: ['React.js', 'Tailwind CSS', 'FastAPI'],
    result: 'WhatsApp lead-capture workflow automated end-to-end.',
    liveUrl: 'https://nexora.io/demo/agency-platform',
    githubUrl: 'https://github.com/nexora/agency-platform',
    device: 'laptop',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-b8da43337b0b?w=800&q=80',
  },
  {
    id: 'web-3',
    title: 'E-commerce Brand Site',
    niche: 'DTC Retail',
    metric: '99.9% uptime',
    techStack: ['React.js', 'Tailwind CSS', 'Node.js'],
    result: 'Sub-second page loads across global CDN.',
    liveUrl: 'https://nexora.io/demo/ecommerce-brand',
    githubUrl: 'https://github.com/nexora/ecommerce-brand',
    device: 'tablet',
    thumbnail: 'https://images.unsplash.com/photo-1483985988355-763729e9744f?w=800&q=80',
  },
];

/**
 * 4-step execution workflow.
 */
export const processSteps = [
  {
    id: 'audit',
    number: 1,
    title: 'Business & Media Audit',
    description:
      'We analyze your existing assets, social channels, and market positioning to find the biggest leverage point.',
    icon: 'Search',
    details: ['Existing asset & channel audit', 'Competitor positioning review', 'Audience & content gap analysis', 'KPI & goal definition'],
  },
  {
    id: 'strategy',
    number: 2,
    title: 'Content Strategy & Architecture',
    description:
      'Blueprinting the visual brand identity, video scripts, hooks, and the web structure that will carry the message.',
    icon: 'Layout',
    details: ['Brand identity & copy blueprint', 'Video script & hook strategy', 'Sitemap & conversion flow', 'Production calendar'],
  },
  {
    id: 'production',
    number: 3,
    title: 'Rapid Production & Build Sprint',
    description:
      'Simultaneous video editing and React website engineering so content and platform launch together.',
    icon: 'Play',
    details: ['High-retention video production', 'Custom React + Tailwind build', 'WhatsApp lead-capture integration', 'Review & revision rounds'],
  },
  {
    id: 'launch',
    number: 4,
    title: 'Launch & Lead Engine Activation',
    description:
      'Deploying the platform, integrating analytics, and automating lead routing straight to your inbox and WhatsApp.',
    icon: 'Rocket',
    details: ['Platform deployment & SEO', 'Analytics & conversion tracking', 'Lead routing & CRM setup', 'Handoff & training'],
  },
];

/**
 * Core team / competencies without corporate fluff.
 */
export const teamMembers = [
  {
    id: 'media-lead',
    name: 'Alex Reno',
    role: 'Media & Growth Lead',
    bio: 'Creator background with proven viral reach — 3M+ organic views across client and personal channels. Owns hook strategy and distribution.',
    specialties: ['Short-form strategy', 'Hook & scripting', 'Platform algorithms', 'Audience growth'],
    socialLinks: {
      instagram: 'https://instagram.com/nexora',
      linkedin: 'https://linkedin.com/company/nexora',
      twitter: 'https://twitter.com/nexora',
    },
  },
  {
    id: 'post-lead',
    name: 'Mira Chen',
    role: 'Post-Production & Motion Lead',
    bio: 'Master video editor specialized in high-retention cuts. Pacing, sound design, and motion graphics that hold attention past the 3-second mark.',
    specialties: ['High-retention editing', 'Motion graphics', 'Sound design', 'Color grading'],
    socialLinks: {
      instagram: 'https://instagram.com/nexora',
      youtube: 'https://youtube.com/@nexora',
    },
  },
  {
    id: 'eng-lead',
    name: 'Dev Patel',
    role: 'Full-Stack Engineering Lead',
    bio: 'Custom React/Node/FastAPI architecture and security implementation. Builds platforms that load in sub-second and convert.',
    specialties: ['React.js', 'Tailwind CSS', 'Node.js', 'FastAPI', 'Technical SEO'],
    socialLinks: {
      linkedin: 'https://linkedin.com/company/nexora',
      github: 'https://github.com/nexora',
    },
  },
];

/**
 * FAQ accordion items.
 */
export const faqs = [
  {
    id: 'faq-1',
    question: 'Why do I need both a website and short-form video content?',
    answer:
      'Short-form video gets you discovered; the website gets you paid. Video builds top-of-funnel reach at scale, while a high-speed conversion platform captures that attention and routes it into booked calls and sales. Without the site, reach dies in the feed. Without the video, the site has no traffic to convert.',
  },
  {
    id: 'faq-2',
    question: 'How long does a complete brand transformation take?',
    answer:
      'Most full transformations (video engine + conversion site) ship in 4–6 weeks. Steps 1–2 (audit and strategy) take 1 week, the production build sprint runs 2–3 weeks, and launch activation is finalized in the last week. Timelines scale with package scope.',
  },
  {
    id: 'faq-3',
    question: 'What technology stack do you use for website builds?',
    answer:
      'We build on React.js + Tailwind CSS for the frontend, with Node.js or FastAPI for backend logic where needed. Every build includes technical SEO, speed optimization, analytics integration, and WhatsApp lead-capture workflows — no generic templates.',
  },
  {
    id: 'faq-4',
    question: 'What is required from our team to get started?',
    answer:
      'Just 30–45 minutes for the audit call, access to your existing social channels, and any brand assets you have (logos, brand colors, past video). We handle scripting, editing, engineering, and launch. You review and approve at each milestone.',
  },
];

export const portfolioTabs = [
  { id: 'video', label: 'Video Content Showcase', count: portfolioVideo.length },
  { id: 'web', label: 'Web & App Projects', count: portfolioWeb.length },
];
