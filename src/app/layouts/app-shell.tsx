import { useState, useEffect, Suspense, type CSSProperties } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { sectionForPath, type SidebarSectionId } from '@/app/sidebar-navigation';
import { LoadingScreen } from '@/shared/components/loading-screen';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import manifest from '@/app/page-manifest.json';
export function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [selection, setSelection] = useState<{
    pathname: string;
    section: SidebarSectionId;
  } | null>(null);
  const { pathname } = useLocation();
  const isPos = pathname === '/pos';
  const section = selection?.pathname === pathname ? selection.section : sectionForPath(pathname);
  function selectSection(section: SidebarSectionId) {
    setSelection({ pathname, section });
    setCollapsed(false);
  }
  useEffect(() => {
    const page = manifest.find((page) => `/${page.slug}` === pathname);
    document.title = `${page?.title || 'Workspace'} | Restaurant POS`;
  }, [pathname]);
  return (
    <div
      className={cn('min-h-screen bg-background', !isPos && 'workspace-with-sidebar')}
      style={{ '--workspace-sidebar-width': collapsed ? '130px' : '276px' } as CSSProperties}
    >
      <a
        href="#main-content"
        className="sr-only z-50 rounded bg-primary p-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header hasSidebar={!isPos} onToggleNavigation={() => setMobileOpen(true)} />
      {!isPos && (
        <aside className="workspace-desktop-sidebar" aria-label="Restaurant sidebar">
          <Sidebar
            section={section}
            onSelectSection={selectSection}
            onNavigate={() => setMobileOpen(false)}
            collapsed={collapsed}
            onToggleCollapse={() => setCollapsed((current) => !current)}
          />
        </aside>
      )}
      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogContent className="left-0 top-0 h-dvh max-h-dvh w-[276px] max-w-[100vw] translate-x-0 translate-y-0 rounded-none border-0 p-0 [&>button]:hidden">
          <DialogTitle className="sr-only">Workspace navigation</DialogTitle>
          <DialogDescription className="sr-only">
            Choose a category using the minibar, then select a screen.
          </DialogDescription>
          <Sidebar
            mobile
            section={section}
            onSelectSection={selectSection}
            onNavigate={() => setMobileOpen(false)}
          />
        </DialogContent>
      </Dialog>
      <main
        id="main-content"
        tabIndex={-1}
        className={cn(
          'workspace-main min-w-0 px-4 pb-6 pt-[82px] outline-none md:px-6',
          isPos && 'pos-workspace',
        )}
      >
        <Suspense fallback={<LoadingScreen />}>
          <Outlet key={pathname} />
        </Suspense>
        <footer className="mt-6 flex flex-wrap justify-between gap-2 border-t pt-4 text-xs text-muted-foreground">
          <span>Restaurant POS</span>
          {/* <span>Template data · UI preview</span> */}
        </footer>
      </main>
    </div>
  );
}
