'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '../../utils/helpers';
import { useTheme } from '../../hooks/useTheme';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(() =>
    typeof window !== 'undefined' && window.scrollY > 300
  );
  const { resolved } = useTheme();

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 300);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const isDark = resolved === 'dark';
  const bgColor = isDark
    ? 'bg-neutral-800/80 backdrop-blur-md border border-neutral-700/50'
    : 'bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-sm';
  const iconColor = isDark ? 'text-white' : 'text-gray-900';
  const hoverBg = isDark ? 'hover:bg-neutral-700' : 'hover:bg-gray-100';
  const shadow = isDark ? 'shadow-lg shadow-black/30' : 'shadow-lg shadow-gray-200/50';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          className={cn(
            'fixed bottom-[100px] right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2',
            'sm:bottom-10 sm:right-6',
            'md:bottom-14 md:right-8',
            bgColor,
            iconColor,
            hoverBg,
            shadow,
            'active:scale-95 focus:ring-primary-500/50'
          )}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
