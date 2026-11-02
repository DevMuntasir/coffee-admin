import { createContext, useContext, useState, type ComponentProps, type ReactNode } from 'react';
import { Button, type ButtonProps } from '@/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';

type PreviewState = {
  dialog: string | null;
  openDialog: (id: string | null) => void;
  tabs: Readonly<Record<string, string>>;
  selectTab: (group: string, value: string) => void;
};
const PreviewContext = createContext<PreviewState | null>(null);
function usePreview() {
  const context = useContext(PreviewContext);
  if (!context) throw new Error('Preview controls require PreviewProvider');
  return context;
}
/** Transient presentation state only; remounts at every route boundary. */
export function PreviewProvider({
  children,
  defaultTabs = {},
}: {
  children: ReactNode;
  defaultTabs?: Record<string, string>;
}) {
  const [dialog, openDialog] = useState<string | null>(null);
  const [tabs, setTabs] = useState(defaultTabs);
  return (
    <PreviewContext
      value={{
        dialog,
        openDialog,
        tabs,
        selectTab: (group, value) => setTabs((current) => ({ ...current, [group]: value })),
      }}
    >
      {children}
    </PreviewContext>
  );
}
export function DialogAction({ target, ...props }: ButtonProps & { target: string }) {
  const { openDialog } = usePreview();
  return <Button {...props} onClick={() => openDialog(target)} />;
}
export function DialogDismiss(props: ButtonProps) {
  const { openDialog } = usePreview();
  return <Button {...props} onClick={() => openDialog(null)} />;
}
export function PreviewDialog({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  const { dialog, openDialog } = usePreview();
  return (
    <Dialog open={dialog === id} onOpenChange={(open) => openDialog(open ? id : null)}>
      <DialogContent>
        <DialogTitle className="mb-1 pr-6 text-lg font-semibold">{title}</DialogTitle>
        <DialogDescription className="mb-5 text-sm text-muted-foreground">
          Layout preview. Changes are not saved.
        </DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}
type TabProps = { group: string; value: string };
export function PreviewTabTrigger({
  group,
  value,
  className,
  children,
  ...props
}: ComponentProps<'button'> & TabProps) {
  const { tabs, selectTab } = usePreview();
  return (
    <button
      {...props}
      type="button"
      className={cn(className, tabs[group] === value && 'bg-primary/10 text-primary')}
      aria-pressed={tabs[group] === value}
      onClick={() => selectTab(group, value)}
    >
      {children}
    </button>
  );
}
export function PreviewTabPanel({
  group,
  value,
  children,
  ...props
}: ComponentProps<'div'> & TabProps) {
  const { tabs } = usePreview();
  return tabs[group] === value ? <div {...props}>{children}</div> : null;
}
export function PreviewForm(props: ComponentProps<'form'>) {
  return <form {...props} onSubmit={(event) => event.preventDefault()} />;
}

/** Card-shaped preview trigger without nesting the card's layout inside a button. */
export function DialogCardAction({
  target,
  children,
  ...props
}: ComponentProps<'div'> & { target: string }) {
  const { openDialog } = usePreview();
  return (
    <div
      {...props}
      role="button"
      tabIndex={0}
      onClick={() => openDialog(target)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openDialog(target);
        }
      }}
    >
      {children}
    </div>
  );
}
