import { PreviewProvider } from '@/shared/components/preview';
import { LoginHiWelcomeBackSection } from '../components/LoginHiWelcomeBackSection';

export default function LoginPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <LoginHiWelcomeBackSection />
    </PreviewProvider>
  );
}
