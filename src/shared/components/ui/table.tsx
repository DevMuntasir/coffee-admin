import type { ComponentProps } from 'react';
import { cn } from '@/shared/lib/utils';
export function Table({ className, ...props }: ComponentProps<'table'>) {
  return (
    <table
      data-slot="table"
      className={cn(
        'w-full border-collapse text-left text-sm [&_thead]:bg-muted/70 [&_th]:whitespace-nowrap [&_th]:px-4 [&_th]:py-3 [&_th]:font-semibold [&_td]:border-t [&_td]:px-4 [&_td]:py-3 [&_tbody_tr:hover]:bg-muted/40',
        className,
      )}
      {...props}
    />
  );
}
