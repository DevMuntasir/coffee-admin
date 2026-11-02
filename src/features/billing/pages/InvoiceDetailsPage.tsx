import { PreviewProvider } from '@/shared/components/preview';
import { InvoiceDetailsInvoicesDetailsSection } from '../components/InvoiceDetailsInvoicesDetailsSection';
import { InvoiceDetailsOverviewSection } from '../components/InvoiceDetailsOverviewSection';
import { InvoiceDetailsContentSection } from '../components/InvoiceDetailsContentSection';

export default function InvoiceDetailsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <InvoiceDetailsInvoicesDetailsSection />
      <InvoiceDetailsOverviewSection />
      <InvoiceDetailsContentSection />
    </PreviewProvider>
  );
}
