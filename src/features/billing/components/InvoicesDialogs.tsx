import { InvoicesDeleteModalDialog } from './dialogs/InvoicesDeleteModalDialog';
import { InvoicesFilterOffcanvasDialog } from './dialogs/InvoicesFilterOffcanvasDialog';

export function InvoicesDialogs() {
  return (
    <>
      <InvoicesDeleteModalDialog />
      <InvoicesFilterOffcanvasDialog />
    </>
  );
}
