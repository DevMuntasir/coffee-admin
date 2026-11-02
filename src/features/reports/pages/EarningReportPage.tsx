import { PreviewProvider } from '@/shared/components/preview';
import { EarningReportReportsSection } from '../components/EarningReportReportsSection';
import { EarningReportOverviewSection } from '../components/EarningReportOverviewSection';
import { EarningReportContentSection } from '../components/EarningReportContentSection';

export default function EarningReportPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <EarningReportReportsSection />
      <EarningReportOverviewSection />
      <EarningReportContentSection />
    </PreviewProvider>
  );
}
