import { PreviewProvider } from '@/shared/components/preview';
import { OrdersHeaderSection } from '../components/OrdersHeaderSection';
import { OrdersOverviewSection } from '../components/OrdersOverviewSection';
import { OrdersContentSection } from '../components/OrdersContentSection';
import { OrdersContentSection4 } from '../components/OrdersContentSection4';
import { OrdersContentSection5 } from '../components/OrdersContentSection5';
import { OrdersDialogs } from '../components/OrdersDialogs';

export default function OrdersPage() {
  return (
    <PreviewProvider defaultTabs={{ 'tabs-0': 'order-tab1', 'tabs-1': 'order-tab6' }}>
      <OrdersHeaderSection />
      <OrdersOverviewSection />
      <OrdersContentSection />
      <OrdersContentSection4 />
      <OrdersContentSection5 />
      <OrdersDialogs />
    </PreviewProvider>
  );
}
