import { PreviewProvider } from '@/shared/components/preview';
import { KitchenHeaderSection } from '../components/KitchenHeaderSection';
import { KitchenOverviewSection } from '../components/KitchenOverviewSection';
import { KitchenDialogs } from '../components/KitchenDialogs';

export default function KitchenPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <KitchenHeaderSection />
      <KitchenOverviewSection />
      <KitchenDialogs />
    </PreviewProvider>
  );
}
