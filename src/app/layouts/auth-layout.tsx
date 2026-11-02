import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LoadingScreen } from '@/shared/components/loading-screen';
import manifest from '@/app/page-manifest.json';
export function AuthLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${manifest.find((page) => `/${page.slug}` === pathname)?.title || 'Account'} | Restaurant POS`;
  }, [pathname]);
  return (
    <main className="auth-layout min-h-screen bg-card">
      <Suspense fallback={<LoadingScreen />}>
        <Outlet key={pathname} />
      </Suspense>
    </main>
  );
}
