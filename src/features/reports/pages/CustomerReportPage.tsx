import { PreviewProvider } from '@/shared/components/preview';
import { CustomerReportReportsSection } from '../components/CustomerReportReportsSection';
import { CustomerReportOverviewSection } from '../components/CustomerReportOverviewSection';
import { CustomerReportContentSection } from '../components/CustomerReportContentSection';

export default function CustomerReportPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <CustomerReportReportsSection />
      <CustomerReportOverviewSection />
      <CustomerReportContentSection />
    </PreviewProvider>
  );
}
