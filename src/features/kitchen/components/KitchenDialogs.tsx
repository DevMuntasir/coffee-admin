import { KitchenPrintOrderDialog } from './dialogs/KitchenPrintOrderDialog';
import { KitchenCookingStartedModalDialog } from './dialogs/KitchenCookingStartedModalDialog';
import { KitchenCookingDoneModalDialog } from './dialogs/KitchenCookingDoneModalDialog';
import { KitchenOrderPauseDialog } from './dialogs/KitchenOrderPauseDialog';

export function KitchenDialogs() {
  return (
    <>
      <KitchenPrintOrderDialog />
      <KitchenCookingStartedModalDialog />
      <KitchenCookingDoneModalDialog />
      <KitchenOrderPauseDialog />
    </>
  );
}
