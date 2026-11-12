# [VERIFY] Brand Name - Portfolio Website

A premium, modern, conversion-focused portfolio website for a creative digital agency. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup

```bash
# Copy example environment file
cp .env.example .env.local

# Edit with your actual values
# VITE_SITE_URL=https://yourdomain.com
# VITE_BUSINESS_EMAIL=your@email.com
# etc.
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections (Hero, About, Services, etc.)
│   └── ui/              # Reusable UI components (Button, Card, Input, etc.)
├── data/
│   └── business.ts      # ALL business content - EDIT THIS FILE
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles + Tailwind
```

## ✏️ Customization Guide

### 1. Business Information (CRITICAL)
Edit `src/data/business.ts` - This is the single source of truth for all content:

```typescript
// Business info
export const businessInfo: BusinessInfo = {
  name: 'Your Actual Brand Name',
  tagline: 'Your actual tagline',
  description: 'Your actual description...',
  email: 'your@email.com',
  whatsapp: '+91XXXXXXXXXX',
  // ... etc
};

// Services - ONLY include verified services
export const services: Service[] = [
  // Your actual services with real deliverables
];

// Projects - ONLY real projects
export const projects: Project[] = [
  // Your actual client work
];

// Testimonials - ONLY genuine client feedback
export const testimonials: Testimonial[] = [
  // Real testimonials with permission
];

// Social profiles - ONLY verified accounts you own
export const socialProfiles: SocialMediaProfile[] = [
  // Your actual social media
];
```

### 2. Images
Place project images in `public/images/projects/`:
```
/public/images/projects/
├── project-1-thumb.jpg     # Thumbnail for grid (400x300 recommended)
├── project-1-1.jpg         # Full-size for modal
├── project-1-2.jpg
├── project-2-thumb.jpg
└── ...
```

Social media thumbnails in `public/images/social/`:
```
/public/images/social/
├── instagram-thumb.jpg
├── youtube-thumb.jpg
└── ...
```

Team photos in `public/images/team/`:
```
/public/images/team/
└── founder.jpg
```

### 3. Colors & Typography
Modify `tailwind.config.js` for brand colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#YOUR_PRIMARY_COLOR',
        // ...
      },
      accent: {
        500: '#YOUR_ACCENT_COLOR',
        // ...
      },
    },
    fontFamily: {
      sans: ['Your Font', 'system-ui', 'sans-serif'],
      display: ['Your Display Font', 'system-ui', 'sans-serif'],
    },
  },
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones (`primary-500` = `#0ea5e9`) - CTAs, links, accents
- **Accent**: Purple/pink tones (`accent-500` = `#d946ef`) - Highlights, gradients
- **Neutral**: Gray scale for text, borders, backgrounds

### Typography Scale
- `display-xl` to `display-sm` - Hero headlines
- `heading-xl` to `heading-sm` - Section titles
- `body-lg`, `body`, `body-sm` - Body text
- `caption` - Small labels

### Spacing Scale
- `space-4xs` (2px) to `space-5xl` (128px)

## 🧩 Key Components

### Sections (in order)
1. **Hero** - First impression with stats
2. **About** - Mission, values, approach, team
3. **Services** - Service cards with deliverables
4. **Portfolio** - Filterable project gallery with modals
5. **Process** - 5-step workflow visualization
6. **Industries** - Industry expertise cards
7. **WhyChooseUs** - Differentiators + comparison table
8. **Testimonials** - Client feedback (or placeholder)
9. **SocialShowcase** - Verified social profiles
10. **FAQ** - Accordion-style questions
11. **Contact** - Form + contact info

### UI Components
- `Button` - 4 variants, 3 sizes, loading state
- `Card` - 3 variants, flexible padding
- `Input` / `Textarea` - With labels, errors, hints
- `Badge` - 6 variants, optional dot indicator
- `Container` - Responsive max-widths
- `Section` - Consistent section wrapper

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels and roles
- Focus-visible states
- Reduced motion support
- Color contrast compliance (WCAG AA)
- Keyboard navigation
- Screen reader friendly

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `sm`       | 640px | Large phones |
| `md`       | 768px | Tablets |
| `lg`       | 1024px | Laptops |
| `xl`       | 1280px | Desktops |
| `2xl`      | 1536px | Large screens |

## 🚀 Deployment

### Netlify (Recommended)
```bash
# Build command
npm run build

# Publish directory
dist

# Environment variables in Netlify dashboard
VITE_SITE_URL=https://yoursite.netlify.app
VITE_BUSINESS_EMAIL=...
```

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Environment variables in Vercel dashboard
```

### Static Hosting (Any)
```bash
npm run build
# Upload dist/ folder to your host
```

### Docker
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📝 Pre-Launch Checklist

- [ ] All `[VERIFY]` placeholders replaced in `src/data/business.ts`
- [ ] Real project images added to `public/images/projects/`
- [ ] Social media thumbnails added
- [ ] Team photos added
- [ ] Favicon updated (`public/favicon.svg`)
- [ ] Open Graph image created (`public/og-image.jpg`, 1200x630)
- [ ] Environment variables configured
- [ ] Contact form endpoint configured (Formspree, Netlify Forms, or custom API)
- [ ] Analytics added (Google Analytics, Plausible, etc.)
- [ ] SEO metadata updated in `index.html`
- [ ] Structured data (JSON-LD) updated with real info
- [ ] Tested on mobile, tablet, desktop
- [ ] Lighthouse scores checked (Performance, Accessibility, SEO, Best Practices)
- [ ] Forms tested end-to-end
- [ ] All external links working
- [ ] 404 page created (optional)

## 🔧 Contact Form Setup

### Option 1: Formspree (Easiest)
1. Create form at https://formspree.io
2. Add `VITE_FORMSPREE_ENDPOINT` to `.env.local`
3. Update `Contact.tsx` to use the endpoint

### Option 2: Netlify Forms
1. Add `data-netlify="true"` to form element
2. Add hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Enable in Netlify dashboard

### Option 3: Custom API
Create `src/api/contact.ts` and update form submission handler.

## 📊 Performance Tips

- Images: Use WebP/AVIF, proper dimensions, lazy loading
- Fonts: Preload critical fonts, use `font-display: swap`
- Code splitting: Automatic via Vite/Rollup
- Caching: Configure proper cache headers on host
- Compression: Enable gzip/brotli on server

## 🛠️ Scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint (if configured)
npm run typecheck    # Run TypeScript check
```

## 📚 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build**: Vite 5
- **Styling**: Tailwind CSS 3
- **Animation**: Framer Motion 11
- **Icons**: Lucide React
- **Forms**: Native HTML5 + custom validation

## 📄 License

Private project - All rights reserved.

---

**Need help?** Check the `src/data/business.ts` file first - it contains all customizable content with clear `[VERIFY]` markers for required fields.