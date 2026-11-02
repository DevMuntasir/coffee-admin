import type { ComponentProps } from 'react';
import { cn } from '@/shared/lib/utils';
export function Card({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'relative mb-6 min-w-0 overflow-hidden rounded-2xl border border-border/80 bg-card text-card-foreground shadow-[0_1px_2px_rgba(31,24,18,0.03),0_8px_24px_rgba(31,24,18,0.04)] transition-shadow duration-200 hover:shadow-[0_2px_4px_rgba(31,24,18,0.04),0_12px_32px_rgba(31,24,18,0.06)]',
        className,
      )}
      {...props}
    />
  );
}
export function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn('border-b border-border/70 px-6 py-5', className)}
      {...props}
    />
  );
}
export function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('p-6', className)} {...props} />;
}
export function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('border-t border-border/70 px-6 py-5', className)}
      {...props}
    />
  );
}
