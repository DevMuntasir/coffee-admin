import { PreviewProvider } from '@/shared/components/preview';
import { ForgotPasswordHeaderSection } from '../components/ForgotPasswordHeaderSection';

export default function ForgotPasswordPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <ForgotPasswordHeaderSection />
    </PreviewProvider>
  );
}
