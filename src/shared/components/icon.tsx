import { cn } from '@/shared/lib/utils';
/** Isolates the original locally hosted Lucide font; feature code never depends on its CSS API. */
export function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <i aria-hidden="true" className={cn(`icon-${name}`, 'inline-block shrink-0', className)} />
  );
}
