import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Button } from './ui/button';
export class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Application render failed', error, info.componentStack);
  }
  render() {
    if (this.state.failed)
      return (
        <div role="alert" className="grid min-h-screen place-content-center gap-4 p-8 text-center">
          <h1 className="text-xl font-semibold">This screen could not be loaded</h1>
          <p>Reload the application to try again.</p>
          <Button onClick={() => window.location.reload()}>Reload</Button>
        </div>
      );
    return this.props.children;
  }
}
