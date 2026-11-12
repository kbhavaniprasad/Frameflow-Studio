import { forwardRef } from 'react';
import { cn } from '../../utils/helpers';

export const Container = forwardRef(({ children, size = 'lg', padding = 'md', className, ...props }, ref) => {
  const sizeStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[90rem]',
    full: 'max-w-full',
  };

  const paddingStyles = {
    none: '',
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12',
  };

  return (
    <div
      ref={ref}
      className={cn('mx-auto w-full', sizeStyles[size], paddingStyles[padding], className)}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';
