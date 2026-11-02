import { CustomerAddCustomerDialog } from './dialogs/CustomerAddCustomerDialog';
import { CustomerEditCustomerDialog } from './dialogs/CustomerEditCustomerDialog';
import { CustomerDeleteModalDialog } from './dialogs/CustomerDeleteModalDialog';
import { CustomerViewDetailsDialog } from './dialogs/CustomerViewDetailsDialog';

export function CustomerDialogs() {
  return (
    <>
      <CustomerAddCustomerDialog />
      <CustomerEditCustomerDialog />
      <CustomerDeleteModalDialog />
      <CustomerViewDetailsDialog />
    </>
  );
}
