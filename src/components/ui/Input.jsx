import { forwardRef } from 'react';
import { cn } from '../../utils/helpers';

export const Input = forwardRef(({ label, error, hint, leftIcon, rightIcon, className, id, ...props }, ref) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" aria-hidden="true">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full rounded-lg border bg-[var(--color-card)] text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
            'disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed',
            leftIcon ? 'pl-10' : 'pl-4',
            rightIcon ? 'pr-10' : 'pr-4',
            'py-3',
            error
              ? 'border-red-300 focus:ring-red-500'
              : 'border-[var(--color-border)] hover:border-neutral-300',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" aria-hidden="true">
            {rightIcon}
          </div>
        )}
      </div>
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-sm text-neutral-500">
          {hint}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export const Textarea = forwardRef(({ label, error, hint, className, id, ...props }, ref) => {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const errorId = `${textareaId}-error`;
  const hintId = `${textareaId}-hint`;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={textareaId} className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        className={cn(
          'w-full rounded-lg border bg-[var(--color-card)] text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] transition-all duration-200 resize-y min-h-[120px]',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          'disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed',
          'p-4',
          error
            ? 'border-red-300 focus:ring-red-500'
            : 'border-neutral-200 hover:border-neutral-300',
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-sm text-neutral-500">
          {hint}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export const Label = forwardRef(({ children, required = false, className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn('block text-sm font-medium text-neutral-900', className)}
    {...props}
  >
    {children}
    {required && <span className="ml-1 text-red-500" aria-hidden="true">*</span>}
  </label>
));

Label.displayName = 'Label';
