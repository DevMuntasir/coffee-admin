import { PreviewProvider } from '@/shared/components/preview';
import { ReservationsCalendar } from '../components/ReservationsCalendar';
import { ReservationsDialogs } from '../components/ReservationsDialogs';

export default function ReservationsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <ReservationsCalendar />
      <ReservationsDialogs />
    </PreviewProvider>
  );
}
