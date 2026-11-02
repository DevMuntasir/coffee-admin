import { createBrowserRouter, Navigate, Link } from 'react-router-dom';
import { AppShell } from './layouts/app-shell';
import { AuthLayout } from './layouts/auth-layout';
import { routePages } from './route-pages';
import manifest from './page-manifest.json';
import { Button } from '@/shared/components/ui/button';

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      ...manifest
        .filter((page) => page.layout === 'workspace')
        .map((page) => {
          const Page = routePages[page.slug as keyof typeof routePages];
          return { path: page.slug, element: <Page /> };
        }),
    ],
  },
  {
    element: <AuthLayout />,
    children: manifest
      .filter((page) => page.layout === 'auth')
      .map((page) => {
        const Page = routePages[page.slug as keyof typeof routePages];
        return { path: page.slug, element: <Page /> };
      }),
  },
  ...manifest.map((page) => ({
    path: page.legacy,
    element: <Navigate to={`/${page.slug}`} replace />,
  })),
  { path: 'index.htm', element: <Navigate to="/dashboard" replace /> },
  {
    path: '*',
    element: (
      <main className="grid min-h-screen place-content-center gap-5 p-6 text-center">
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <Button asChild>
          <Link to="/dashboard">Back to dashboard</Link>
        </Button>
      </main>
    ),
  },
]);
