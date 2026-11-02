import type { ComponentProps } from 'react';
import { cn } from '@/shared/lib/utils';
export function Table({ className, ...props }: ComponentProps<'table'>) {
  return (
    <table
      data-slot="table"
      className={cn(
        'w-full border-separate border-spacing-0 text-left text-sm [&_thead]:bg-muted/65 [&_th]:whitespace-nowrap [&_th]:border-b [&_th]:border-border/80 [&_th]:px-5 [&_th]:py-3.5 [&_th]:text-[11px] [&_th]:font-semibold [&_th]:uppercase [&_th]:tracking-[0.07em] [&_th]:text-muted-foreground [&_td]:border-b [&_td]:border-border/60 [&_td]:px-5 [&_td]:py-4 [&_tbody_tr]:transition-colors [&_tbody_tr:hover]:bg-primary/[0.025] [&_tbody_tr:last-child_td]:border-b-0',
        className,
      )}
      {...props}
    />
  );
}
