import { PreviewProvider } from '@/shared/components/preview';
import { StoreSettingsHeaderSection } from '../components/StoreSettingsHeaderSection';
import { StoreSettingsOverviewSection } from '../components/StoreSettingsOverviewSection';

export default function StoreSettingsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <StoreSettingsHeaderSection />
      <StoreSettingsOverviewSection />
    </PreviewProvider>
  );
}
