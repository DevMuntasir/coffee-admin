import { PreviewProvider } from '@/shared/components/preview';
import { PaymentSettingsPaymentTypesSection } from '../components/PaymentSettingsPaymentTypesSection';
import { PaymentSettingsOverviewSection } from '../components/PaymentSettingsOverviewSection';

export default function PaymentSettingsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <PaymentSettingsPaymentTypesSection />
      <PaymentSettingsOverviewSection />
    </PreviewProvider>
  );
}
