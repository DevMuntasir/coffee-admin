import { PreviewProvider } from '@/shared/components/preview';
import { PrintSettingsHeaderSection } from '../components/PrintSettingsHeaderSection';
import { PrintSettingsHeaderSection2 } from '../components/PrintSettingsHeaderSection2';

export default function PrintSettingsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <PrintSettingsHeaderSection />
      <PrintSettingsHeaderSection2 />
    </PreviewProvider>
  );
}
