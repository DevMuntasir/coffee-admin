import { NavLink, Link } from 'react-router-dom';
import { Menu, Moon, Sun, ChefHat, CalendarClock, UtensilsCrossed, ListTodo } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { cn } from '@/shared/lib/utils';
import { setTheme } from '@/app/ui-slice';
const shortcuts = [
  // { label: 'POS', path: '/pos', icon: UtensilsCrossed },
  // { label: 'Orders', path: '/orders', icon: ListTodo },
  // { label: 'Kitchen', path: '/kitchen', icon: ChefHat },
  { label: 'Reservation', path: '/reservations', icon: CalendarClock },
];
export function Header({
  onToggleNavigation,
  hasSidebar = true,
}: {
  onToggleNavigation: () => void;
  hasSidebar?: boolean;
}) {
  const theme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();
  return (
    <header className="workspace-topbar fixed inset-x-0 top-0 z-40 flex h-[58px] items-center gap-3 border-b bg-card px-4 lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleNavigation}
        className="min-[992px]:hidden"
        aria-label="Open navigation"
      >
        <Menu />
      </Button>
      <Link
        to="/dashboard"
        aria-label="Dreams POS dashboard"
        className={cn('flex w-78 shrink-0 items-center', hasSidebar && 'min-[992px]:hidden')}
      >
        <img
          src={theme === 'dark' ? '/assets/img/logo-white.svg' : '/assets/img/logo.png'}
          alt="Dreams POS"
          className="h-11 max-w-full"
        />
      </Link>
      <nav aria-label="Quick navigation" className="hidden flex-1 items-center gap-5 xl:flex">
        {shortcuts.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-1.5 text-[13px] font-medium ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`
            }
          >
            <item.icon className="size-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label={theme === 'light' ? 'Use dark theme' : 'Use light theme'}
          onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}
        >
          {theme === 'light' ? <Moon /> : <Sun />}
        </Button>
        <Link
          to="/users"
          aria-label="View users"
          className="ml-1 flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary"
        >
          AJ
        </Link>
      </div>
    </header>
  );
}
