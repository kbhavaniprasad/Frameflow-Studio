import { useLayoutEffect } from 'react';

export const CINEMATIC_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';
export const CINEMATIC_DURATION = 1;
export const CHILD_STAGGER = 0.12;
const REVEAL_SELECTOR = '[data-reveal], h1, h2, h3, h4, h5, h6';

function registerReveal(observer, element) {
  if (/^H[1-6]$/.test(element.tagName)) {
    element.dataset.reveal = 'heading';
  }

  if (element.classList.contains('is-visible')) {
    return;
  }

  const explicitDelay = Number(element.dataset.revealDelay);
  const grid = element.closest('.grid');
  const gridChild = grid
    ? Array.from(grid.children).findIndex((child) => child === element || child.contains(element))
    : -1;
  const ancestorDepth = element.parentElement?.closest('[data-reveal]') ? 1 : 0;
  const staggerIndex = Number.isFinite(explicitDelay) && element.dataset.revealDelay !== undefined
    ? explicitDelay
    : Math.max(0, gridChild) + ancestorDepth;

  element.style.setProperty('--reveal-delay', `${staggerIndex * CHILD_STAGGER}s`);
  observer.observe(element);
}

export function useRevealObserver() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || typeof IntersectionObserver === 'undefined'
      || typeof MutationObserver === 'undefined') {
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target;
          element.style.willChange = 'transform, opacity';
          element.classList.add('is-visible');
          revealObserver.unobserve(element);
          element.addEventListener('transitionend', () => {
            element.style.removeProperty('will-change');
          }, { once: true });
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    document.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
      registerReveal(revealObserver, element);
    });

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          const targets = new Set();
          if (node.matches(REVEAL_SELECTOR)) {
            targets.add(node);
          }
          node.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
            targets.add(element);
          });
          targets.forEach((element) => {
            registerReveal(revealObserver, element);
          });
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
    document.documentElement.classList.add('js');

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
      document.documentElement.classList.remove('js');
    };
  }, []);
}
