# Design Improvements Plan

## Current State Analysis

**Tech Stack:** React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion

**Strengths:**
- Well-structured component architecture
- Comprehensive design system with CSS variables (Tailwind v4 @theme)
- Good accessibility practices (ARIA labels, focus-visible, semantic HTML)
- Framer Motion animations already in use
- Clean, modern UI with good color palette

**Areas for Improvement:**
1. **No dark mode support** - Color tokens exist but no dark mode implementation
2. **Basic card hover effects** - Only border/shadow changes, no lift or gradient glow
3. **No 3D tilt effect** - Missing mouse-following perspective transforms
4. **No scroll-reveal animations** - Framer Motion used but not IntersectionObserver-based reveals
5. **No parallax/floating backgrounds** - Hero has floating elements but no persistent effect
6. **Missing gradient border glow on hover** - Gradient border variant exists but not as interactive hover
7. **Reduced motion** - Respected in CSS but not in Framer Motion components

## Implementation Plan

### Phase 1: Design System Enhancements (index.css)
- [x] Already has comprehensive CSS variables
- [ ] Add dark mode color tokens
- [ ] Add 3D tilt utility classes
- [ ] Add scroll-reveal utilities
- [ ] Add parallax utilities
- [ ] Enhance card hover effects with gradient border glow
- [ ] Add consistent focus-visible styles

### Phase 2: New Utility Components
- [ ] Create `TiltCard` component with 3D tilt effect
- [ ] Create `ScrollReveal` wrapper component
- [ ] Create `ParallaxBackground` component
- [ ] Create `FloatingElements` component
- [ ] Update `Card` to support enhanced hover states

### Phase 3: Section Updates
- [ ] Hero: Add parallax background, enhance floating elements
- [ ] All card-based sections (Services, Portfolio, About, Industries, WhyChooseUs, Testimonials, SocialShowcase): Add 3D tilt and enhanced hover
- [ ] Process: Enhance visual cards with tilt
- [ ] Contact: Enhance form card

### Phase 4: Global Enhancements
- [ ] Add dark mode toggle in Header
- [ ] Ensure prefers-reduced-motion disables all heavy animations
- [ ] Add smooth scroll behavior globally
- [ ] Test responsiveness across breakpoints

## Files to Modify

1. `src/index.css` - Enhanced design system
2. `src/components/ui/Card.tsx` - Enhanced card with tilt support
3. `src/components/ui/Section.tsx` - Add scroll-reveal support
4. `src/components/layout/Header.tsx` - Add dark mode toggle
4. `src/components/sections/Hero.tsx` - Add parallax, enhanced animations
5. `src/components/sections/Services.tsx` - Add tilt cards
6. `src/components/sections/Portfolio.tsx` - Add tilt cards
7. `src/components/sections/About.tsx` - Add tilt cards
8. `src/components/sections/Industries.tsx` - Add tilt cards
9. `src/components/sections/WhyChooseUs.tsx` - Add tilt cards
10. `src/components/sections/Testimonials.tsx` - Add tilt cards
11. `src/components/sections/SocialShowcase.tsx` - Add tilt cards
12. `src/components/sections/Process.tsx` - Enhance visual cards
13. `src/components/sections/Contact.tsx` - Enhance form card
14. `src/components/sections/FAQ.tsx` - Enhance cards
15. `src/hooks/useReducedMotion.ts` - Already exists, use in components
16. `src/main.tsx` - Add dark mode initialization