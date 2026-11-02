import type { ComponentProps } from 'react';
import { cn } from '@/shared/lib/utils';
export function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'min-h-28 w-full rounded-xl border border-input bg-card px-3.5 py-3 shadow-xs outline-none transition-all placeholder:text-muted-foreground/75 hover:border-primary/25 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/12',
        className,
      )}
      {...props}
    />
  );
}
