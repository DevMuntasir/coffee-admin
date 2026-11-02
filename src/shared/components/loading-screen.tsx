export function LoadingScreen() {
  return (
    <div role="status" className="grid min-h-64 place-items-center text-muted-foreground">
      <span className="animate-pulse">Loading workspace…</span>
    </div>
  );
}
