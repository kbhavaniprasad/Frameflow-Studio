import { forwardRef } from 'react';
import { cn } from '../../utils/helpers';
import { Container } from './Container';

export const Section = forwardRef(({ children, size = 'lg', background = 'default', containerSize = 'lg', id, className, ...props }, ref) => {
  const sizeStyles = {
    sm: 'py-16 sm:py-20 lg:py-24',
    md: 'py-20 sm:py-24 lg:py-28',
    lg: 'py-24 sm:py-28 lg:py-32',
    xl: 'py-28 sm:py-32 lg:py-36',
  };

  const backgroundStyles = {
    default: 'bg-[var(--color-background)]',
    muted: 'bg-[var(--color-muted)]',
    dark: 'bg-[var(--color-card)] text-[var(--color-card-foreground)]',
    gradient: 'bg-gradient-to-b from-[var(--color-background)] via-[var(--color-muted)] to-[var(--color-background)]',
  };

  return (
    <section
      ref={ref}
      id={id}
      data-reveal
      className={cn(
        'reveal',
        sizeStyles[size],
        backgroundStyles[background],
        className
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
});

Section.displayName = 'Section';

export function SectionHeader({ title, subtitle, description, align = 'left', className }) {
  return (
    <div
      data-reveal
      className={cn(
        'mb-12 sm:mb-16',
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl',
        className
      )}
    >
      {subtitle && (
        <p data-reveal data-reveal-delay="0" className="mb-3 text-body-sm font-medium text-primary-600 uppercase tracking-wider">
          {subtitle}
        </p>
      )}
      <h2 data-reveal="heading" data-reveal-delay="1" className="text-display-sm font-bold text-[var(--color-foreground)] tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p data-reveal data-reveal-delay="2" className="mt-4 text-body-lg text-[var(--color-muted-foreground)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
