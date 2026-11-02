import type { LucideIcon } from 'lucide-react';
export interface NavigationItem {
  readonly label: string;
  readonly path: string;
  readonly icon: LucideIcon;
}
export interface NavigationGroup {
  readonly label: string;
  readonly items: readonly NavigationItem[];
}
