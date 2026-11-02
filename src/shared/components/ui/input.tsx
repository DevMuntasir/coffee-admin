import type { ComponentProps } from 'react';
import { cn } from '@/shared/lib/utils';
export function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(
        'flex h-10 w-full min-w-0 rounded-xl border border-input bg-card px-3.5 py-2 text-sm shadow-xs outline-none transition-all placeholder:text-muted-foreground/75 hover:border-primary/25 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/12 disabled:bg-muted disabled:opacity-60',
        className,
      )}
      {...props}
    />
  );
}
