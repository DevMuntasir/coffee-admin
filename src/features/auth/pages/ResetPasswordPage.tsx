import { PreviewProvider } from '@/shared/components/preview';
import { ResetPasswordHeaderSection } from '../components/ResetPasswordHeaderSection';

export default function ResetPasswordPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <ResetPasswordHeaderSection />
    </PreviewProvider>
  );
}
