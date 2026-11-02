import type { ComponentProps } from 'react';
import { cn } from '@/shared/lib/utils';
export function Badge({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      data-slot="badge"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold tracking-[0.01em] text-secondary-foreground',
        className,
      )}
      {...props}
    />
  );
}
