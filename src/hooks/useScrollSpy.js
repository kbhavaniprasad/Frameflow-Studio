import { useState, useEffect, useCallback } from 'react';

export function useScrollSpy({
  sectionIds,
  offset = 100,
  rootMargin = '-100px 0px -60% 0px',
}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.43;
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section) => section !== null);
      const containingSection = sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= marker && bounds.bottom > marker;
      });
      const nearestSection = sections.reduce((nearest, section) => {
        if (!nearest) {
          return section;
        }
        const sectionDistance = Math.abs(section.getBoundingClientRect().top - marker);
        const nearestDistance = Math.abs(nearest.getBoundingClientRect().top - marker);
        return sectionDistance < nearestDistance ? section : nearest;
      }, null);
      const active = containingSection ?? nearestSection;
      if (active) {
        setActiveSection(active.id);
      }
    };

    const observer = new IntersectionObserver(
      updateActiveSection,
      { rootMargin, threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    updateActiveSection();

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  const activateSection = useCallback((id) => {
    setActiveSection(id);
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = offset;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, [offset]);

  return { activeSection, scrollToSection, activateSection };
}

export function useScrollPosition(threshold = 10) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > threshold);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
        frame = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [threshold]);

  return scrolled;
}

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (event) => setReducedMotion(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return reducedMotion;
}
