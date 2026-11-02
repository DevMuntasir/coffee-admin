import { PreviewProvider } from '@/shared/components/preview';
import { PaymentsHeaderSection } from '../components/PaymentsHeaderSection';
import { PaymentsColumnSection } from '../components/PaymentsColumnSection';
import { PaymentsDialogs } from '../components/PaymentsDialogs';

export default function PaymentsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <PaymentsHeaderSection />
      <PaymentsColumnSection />
      <PaymentsDialogs />
    </PreviewProvider>
  );
}
