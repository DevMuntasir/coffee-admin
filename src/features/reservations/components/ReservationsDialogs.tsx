import { ReservationsAddReservationDialog } from './dialogs/ReservationsAddReservationDialog';
import { ReservationsEditReservationDialog } from './dialogs/ReservationsEditReservationDialog';
import { ReservationsDeleteModalDialog } from './dialogs/ReservationsDeleteModalDialog';
import { ReservationsAddCustomerDialog } from './dialogs/ReservationsAddCustomerDialog';

export function ReservationsDialogs() {
  return (
    <>
      <ReservationsAddReservationDialog />
      <ReservationsEditReservationDialog />
      <ReservationsDeleteModalDialog />
      <ReservationsAddCustomerDialog />
    </>
  );
}
