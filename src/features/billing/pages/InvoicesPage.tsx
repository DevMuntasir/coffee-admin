import { PreviewProvider } from '@/shared/components/preview';
import { InvoicesHeaderSection } from '../components/InvoicesHeaderSection';
import { InvoicesColumnSection } from '../components/InvoicesColumnSection';
import { InvoicesDialogs } from '../components/InvoicesDialogs';

export default function InvoicesPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <InvoicesHeaderSection />
      <InvoicesColumnSection />
      <InvoicesDialogs />
    </PreviewProvider>
  );
}
