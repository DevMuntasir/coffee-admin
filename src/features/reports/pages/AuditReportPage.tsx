import { PreviewProvider } from '@/shared/components/preview';
import { AuditReportReportsSection } from '../components/AuditReportReportsSection';
import { AuditReportOverviewSection } from '../components/AuditReportOverviewSection';
import { AuditReportContentSection } from '../components/AuditReportContentSection';

export default function AuditReportPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <AuditReportReportsSection />
      <AuditReportOverviewSection />
      <AuditReportContentSection />
    </PreviewProvider>
  );
}
