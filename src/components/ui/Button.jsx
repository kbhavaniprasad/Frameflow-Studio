import { forwardRef } from 'react';
import { cn } from '../../utils/helpers';

export const Button = forwardRef(({ children, variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, fullWidth = false, className, disabled, ...props }, ref) => {
  const baseStyles =
    'ui-button inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus-visible:ring-primary-500 shadow-sm hover:shadow-md',
    secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300 focus-visible:ring-neutral-500 border border-neutral-200',
    outline: 'border-2 border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 active:bg-neutral-100 focus-visible:ring-neutral-500',
    ghost: 'text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200 focus-visible:ring-neutral-500',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3.5 text-sm rounded-lg',
    lg: 'px-8 py-4 text-base rounded-xl',
  };

  return (
    <button
      ref={ref}
      data-reveal
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], fullWidth && 'w-full', className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0" aria-hidden="true">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0" aria-hidden="true">{rightIcon}</span>}
        </>
      )}
    </button>
  );
});

Button.displayName = 'Button';
