import { PreviewProvider } from '@/shared/components/preview';
import { AddonsHeaderSection } from '../components/AddonsHeaderSection';
import { AddonsColumnSection } from '../components/AddonsColumnSection';
import { AddonsDialogs } from '../components/AddonsDialogs';

export default function AddonsPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <AddonsHeaderSection />
      <AddonsColumnSection />
      <AddonsDialogs />
    </PreviewProvider>
  );
}
