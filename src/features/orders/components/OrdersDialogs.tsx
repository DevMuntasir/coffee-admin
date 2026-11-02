import { OrdersPrintRecieptDialog } from './dialogs/OrdersPrintRecieptDialog';
import { OrdersPayCompleteOrderDialog } from './dialogs/OrdersPayCompleteOrderDialog';
import { OrdersViewDetailsDialog } from './dialogs/OrdersViewDetailsDialog';
import { OrdersDeleteModalDialog } from './dialogs/OrdersDeleteModalDialog';
import { OrdersCalculatorDialog } from './dialogs/OrdersCalculatorDialog';

export function OrdersDialogs() {
  return (
    <>
      <OrdersPrintRecieptDialog />
      <OrdersPayCompleteOrderDialog />
      <OrdersViewDetailsDialog />
      <OrdersDeleteModalDialog />
      <OrdersCalculatorDialog />
    </>
  );
}
