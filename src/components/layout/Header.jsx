'use client';

import { useState, useEffect } from 'react';
import { cn } from '../../utils/helpers';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useScrollPosition } from '../../hooks/useScrollSpy';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Proof & Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About Us', href: '#about' },
];

export function Header() {
  const scrolled = useScrollPosition(24);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolved } = useTheme();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(resolved === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo',
          scrolled
            ? 'bg-[var(--color-header-bg)] backdrop-blur-md border-b border-[var(--color-border)] shadow-soft'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <div data-reveal>
          <Container>
            <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
              {/* Logo */}
              <Logo />

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Desktop CTA + Theme toggle */}
              <div className="hidden lg:flex items-center gap-3">
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-ghost hidden sm:inline-flex text-sm font-semibold text-neutral-600 dark:text-neutral-300"
                >
                  Book Strategy Call <ArrowRight className="ml-1.5 w-3 h-3 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                </button>
                <button
                  onClick={toggleTheme}
                  className="interactive-control p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="interactive-control lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div
                id="mobile-menu"
                className={cn(
                  'lg:hidden overflow-hidden transition-all duration-300 ease-out-expo border-t border-[var(--color-border)] bg-[var(--color-mobile-menu-bg)] backdrop-blur-md pb-6',
                  scrolled ? '' : 'absolute top-full left-0 right-0'
                )}
                role="navigation"
                aria-label="Mobile navigation"
              >
                <div className="py-4 space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full px-4 py-3 text-left text-base font-medium rounded-lg transition-colors text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-4 border-t border-[var(--color-border)] flex flex-col gap-3">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="btn-primary w-full justify-center"
                    >
                      Book Strategy Call
                    </button>
                    <button
                      onClick={toggleTheme}
                      className="w-full justify-center px-4 py-3 text-left text-base font-medium text-neutral-600 dark:text-neutral-300 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                      {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Container>
        </div>
      </header>

      {/* Booking drawer trigger state is managed by parent via context-style prop would be ideal;
          here we expose a lightweight inline modal through the sections layer. */}
    </>
  );
}
