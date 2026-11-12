import { forwardRef } from 'react';
import { cn } from '../../utils/helpers';

export const Badge = forwardRef(({ children, variant = 'default', size = 'md', dot = false, className, ...props }, ref) => {
  const variantStyles = {
    default: 'bg-neutral-100 text-neutral-700',
    primary: 'bg-primary-100 text-primary-700',
    accent: 'bg-accent-100 text-accent-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-amber-100 text-amber-700',
    outline: 'bg-transparent border border-neutral-200 text-neutral-600',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
  };

  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            variant === 'default' && 'bg-neutral-400',
            variant === 'primary' && 'bg-primary-500',
            variant === 'accent' && 'bg-accent-500',
            variant === 'success' && 'bg-green-500',
            variant === 'warning' && 'bg-amber-500',
            variant === 'outline' && 'bg-neutral-400'
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';
