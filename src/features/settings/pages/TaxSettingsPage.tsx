import { PreviewProvider } from '@/shared/components/preview';
import { TaxSettingsStoreSettingsSection } from '../components/TaxSettingsStoreSettingsSection';
import { TaxSettingsOverviewSection } from '../components/TaxSettingsOverviewSection';
import { TaxSettingsDialogs } from '../components/TaxSettingsDialogs';

export default function TaxSettingsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <TaxSettingsStoreSettingsSection />
      <TaxSettingsOverviewSection />
      <TaxSettingsDialogs />
    </PreviewProvider>
  );
}
