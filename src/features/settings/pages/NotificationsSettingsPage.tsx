import { PreviewProvider } from '@/shared/components/preview';
import { NotificationsSettingsNotificationsSection } from '../components/NotificationsSettingsNotificationsSection';
import { NotificationsSettingsOverviewSection } from '../components/NotificationsSettingsOverviewSection';

export default function NotificationsSettingsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <NotificationsSettingsNotificationsSection />
      <NotificationsSettingsOverviewSection />
    </PreviewProvider>
  );
}
