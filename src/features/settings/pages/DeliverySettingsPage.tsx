import { PreviewProvider } from '@/shared/components/preview';
import { DeliverySettingsDeliverySection } from '../components/DeliverySettingsDeliverySection';
import { DeliverySettingsOverviewSection } from '../components/DeliverySettingsOverviewSection';

export default function DeliverySettingsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <DeliverySettingsDeliverySection />
      <DeliverySettingsOverviewSection />
    </PreviewProvider>
  );
}
