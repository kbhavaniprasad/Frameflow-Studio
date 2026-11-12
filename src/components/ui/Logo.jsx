import { cn } from '../../utils/helpers';

export function Logo({ className }) {
  return (
    <a
      href="#home"
      className={cn(
        'flex items-center gap-2 text-xl font-bold text-[var(--color-foreground)] hover:opacity-80 transition-opacity',
        className
      )}
      aria-label="Go to homepage"
    >
      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center shrink-0">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </span>
      <span className="hidden sm:block">Nexora</span>
    </a>
  );
}
