import { useState, useEffect, useCallback } from 'react';

const THEME_KEY = 'webservices-portfolio-theme';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem(THEME_KEY);
    return stored === 'light' || stored === 'dark' ? stored : 'dark';
  });
  const [systemPreference, setSystemPreference] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateSystemPreference = () => setSystemPreference(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', updateSystemPreference);
    return () => mediaQuery.removeEventListener('change', updateSystemPreference);
  }, []);

  const resolveTheme = useCallback(() => {
    return theme === 'system' ? systemPreference : theme;
  }, [theme, systemPreference]);

  useEffect(() => {
    const root = document.documentElement;
    const resolvedTheme = resolveTheme();
    root.dataset.theme = resolvedTheme;
    root.classList.toggle('dark', resolvedTheme === 'dark');
  }, [theme, resolveTheme]);

  const setThemeValue = useCallback(
    (next) => {
      setTheme(next);
      localStorage.setItem(THEME_KEY, next);
    },
    []
  );

  return { theme, setTheme: setThemeValue, resolved: resolveTheme() };
}
