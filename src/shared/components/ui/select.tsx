import type { ComponentProps } from 'react';
import { cn } from '@/shared/lib/utils';
/** Native select adapter: accessible keyboard behavior without a plugin dependency. */
export function Select({ className, ...props }: ComponentProps<'select'>) {
  return (
    <select
      className={cn(
        'h-10 w-full rounded-xl border border-input bg-card px-3.5 text-sm shadow-xs outline-none transition-all hover:border-primary/25 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/12',
        className,
      )}
      {...props}
    />
  );
}
