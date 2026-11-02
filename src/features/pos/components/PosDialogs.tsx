import { PosOrderModalDialog } from './dialogs/PosOrderModalDialog';
import { PosAddNotesDialog } from './dialogs/PosAddNotesDialog';
import { PosItemsDetailsDialog } from './dialogs/PosItemsDetailsDialog';
import { PosTransactionsDetailsDialog } from './dialogs/PosTransactionsDetailsDialog';
import { PosDraftDetailsDialog } from './dialogs/PosDraftDetailsDialog';
import { PosPrintRecieptDialog } from './dialogs/PosPrintRecieptDialog';
import { PosAddCustomerDialog } from './dialogs/PosAddCustomerDialog';
import { PosEditCustomerDialog } from './dialogs/PosEditCustomerDialog';
import { PosDeleteModalDialog } from './dialogs/PosDeleteModalDialog';
import { PosItemViewDialog } from './dialogs/PosItemViewDialog';
import { PosViewInvoicesDialog } from './dialogs/PosViewInvoicesDialog';

export function PosDialogs() {
  return (
    <>
      <PosOrderModalDialog />
      <PosAddNotesDialog />
      <PosItemsDetailsDialog />
      <PosTransactionsDetailsDialog />
      <PosDraftDetailsDialog />
      <PosPrintRecieptDialog />
      <PosAddCustomerDialog />
      <PosEditCustomerDialog />
      <PosDeleteModalDialog />
      <PosItemViewDialog />
      <PosViewInvoicesDialog />
    </>
  );
}
