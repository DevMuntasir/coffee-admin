import { PreviewProvider } from '@/shared/components/preview';
import { PosRecentOrdersSection } from '../components/PosRecentOrdersSection';
import { PosDialogs } from '../components/PosDialogs';

export default function PosPage() {
  return (
    <PreviewProvider
      defaultTabs={{
        'tabs-0': 'takeaway',
        'tabs-1': 'all-menu',
        'tabs-2': 'order-tab2',
        'tabs-3': 'order-tab15',
      }}
    >
      <PosRecentOrdersSection />
      <PosDialogs />
    </PreviewProvider>
  );
}
