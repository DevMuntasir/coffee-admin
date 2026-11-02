import { PreviewProvider } from '@/shared/components/preview';
import { SalesReportReportsSection } from '../components/SalesReportReportsSection';
import { SalesReportOverviewSection } from '../components/SalesReportOverviewSection';
import { SalesReportContentSection } from '../components/SalesReportContentSection';

export default function SalesReportPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <SalesReportReportsSection />
      <SalesReportOverviewSection />
      <SalesReportContentSection />
    </PreviewProvider>
  );
}
