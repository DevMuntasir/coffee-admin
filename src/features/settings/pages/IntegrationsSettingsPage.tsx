import { PreviewProvider } from '@/shared/components/preview';
import { IntegrationsSettingsIntegrationsApiSection } from '../components/IntegrationsSettingsIntegrationsApiSection';
import { IntegrationsSettingsOverviewSection } from '../components/IntegrationsSettingsOverviewSection';

export default function IntegrationsSettingsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <IntegrationsSettingsIntegrationsApiSection />
      <IntegrationsSettingsOverviewSection />
    </PreviewProvider>
  );
}
