import type { ComponentProps } from 'react';
import { cn } from '@/shared/lib/utils';
/** Native select adapter: accessible keyboard behavior without a plugin dependency. */
export function Select({ className, ...props }: ComponentProps<'select'>) {
  return (
    <select
      className={cn(
        'h-9 w-full rounded-md border border-input bg-card px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
      {...props}
    />
  );
}
