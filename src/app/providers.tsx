import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './store';
import { router } from './router';
import { useAppSelector } from './hooks';
import { ErrorBoundary } from '@/shared/components/error-boundary';
function ThemeSync() {
  const theme = useAppSelector((state) => state.ui.theme);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  }, [theme]);
  return null;
}
export function AppProviders() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeSync />
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  );
}
