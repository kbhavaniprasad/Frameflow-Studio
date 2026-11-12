import { forwardRef } from 'react';
import { cn } from '../../utils/helpers';

export const Card = forwardRef(({ children, variant = 'default', padding = 'md', className, ...props }, ref) => {
  const baseStyles = 'rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] transition-all duration-300 ease-premium';

  const variantStyles = {
    default: 'hover:border-neutral-300 hover:shadow-lg',
    interactive: 'hover:border-primary-300/50 hover:-translate-y-1 hover:shadow-elevated group cursor-pointer',
    'gradient-border': 'relative before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-primary-500 before:to-accent-500 before:-z-10',
  };

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      ref={ref}
      data-reveal
      className={cn(baseStyles, variantStyles[variant], paddingStyles[padding], className)}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export const CardHeader = forwardRef(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn('mb-4', className)} {...props}>
    {children}
  </div>
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef(({ children, className, ...props }, ref) => (
  <h3 ref={ref} data-reveal data-reveal-delay="0" className={cn('text-heading-md font-semibold text-neutral-900', className)} {...props}>
    {children}
  </h3>
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef(({ children, className, ...props }, ref) => (
  <p ref={ref} data-reveal data-reveal-delay="1" className={cn('mt-1 text-body-sm text-neutral-600', className)} {...props}>
    {children}
  </p>
));
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props}>
    {children}
  </div>
));
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn('mt-4 flex items-center gap-2', className)} {...props}>
    {children}
  </div>
));
CardFooter.displayName = 'CardFooter';
