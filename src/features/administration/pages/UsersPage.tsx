import { PreviewProvider } from '@/shared/components/preview';
import { UsersHeaderSection } from '../components/UsersHeaderSection';
import { UsersColumnSection } from '../components/UsersColumnSection';
import { UsersDialogs } from '../components/UsersDialogs';

export default function UsersPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <UsersHeaderSection />
      <UsersColumnSection />
      <UsersDialogs />
    </PreviewProvider>
  );
}
