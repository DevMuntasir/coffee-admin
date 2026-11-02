import { PreviewProvider } from '@/shared/components/preview';
import { ItemsHeaderSection } from '../components/ItemsHeaderSection';
import { ItemsOverviewSection } from '../components/ItemsOverviewSection';
import { ItemsContentSection } from '../components/ItemsContentSection';
import { ItemsDialogs } from '../components/ItemsDialogs';

export default function ItemsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <ItemsHeaderSection />
      <ItemsOverviewSection />
      <ItemsContentSection />
      <ItemsDialogs />
    </PreviewProvider>
  );
}
