import { PreviewProvider } from '@/shared/components/preview';
import { ReservationsHeaderSection } from '../components/ReservationsHeaderSection';
import { ReservationsOverviewSection } from '../components/ReservationsOverviewSection';
import { ReservationsContentSection } from '../components/ReservationsContentSection';
import { ReservationsDialogs } from '../components/ReservationsDialogs';

export default function ReservationsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <ReservationsHeaderSection />
      <ReservationsOverviewSection />
      <ReservationsContentSection />
      <ReservationsDialogs />
    </PreviewProvider>
  );
}
