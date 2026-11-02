import { PreviewProvider } from '@/shared/components/preview';
import { CustomerHeaderSection } from '../components/CustomerHeaderSection';
import { CustomerOverviewSection } from '../components/CustomerOverviewSection';
import { CustomerContentSection } from '../components/CustomerContentSection';
import { CustomerDialogs } from '../components/CustomerDialogs';

export default function CustomerPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <CustomerHeaderSection />
      <CustomerOverviewSection />
      <CustomerContentSection />
      <CustomerDialogs />
    </PreviewProvider>
  );
}
