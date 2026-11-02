import { PreviewProvider } from '@/shared/components/preview';
import { OrderReportReportsSection } from '../components/OrderReportReportsSection';
import { OrderReportOverviewSection } from '../components/OrderReportOverviewSection';
import { OrderReportContentSection } from '../components/OrderReportContentSection';

export default function OrderReportPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <OrderReportReportsSection />
      <OrderReportOverviewSection />
      <OrderReportContentSection />
    </PreviewProvider>
  );
}
