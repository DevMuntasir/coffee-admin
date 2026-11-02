import { KanbanViewPrintRecieptDialog } from './dialogs/KanbanViewPrintRecieptDialog';
import { KanbanViewPayCompleteOrderDialog } from './dialogs/KanbanViewPayCompleteOrderDialog';
import { KanbanViewViewDetailsDialog } from './dialogs/KanbanViewViewDetailsDialog';
import { KanbanViewDeleteModalDialog } from './dialogs/KanbanViewDeleteModalDialog';
import { KanbanViewCalculatorDialog } from './dialogs/KanbanViewCalculatorDialog';

export function KanbanViewDialogs() {
  return (
    <>
      <KanbanViewPrintRecieptDialog />
      <KanbanViewPayCompleteOrderDialog />
      <KanbanViewViewDetailsDialog />
      <KanbanViewDeleteModalDialog />
      <KanbanViewCalculatorDialog />
    </>
  );
}
