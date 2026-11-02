import { PreviewProvider } from '@/shared/components/preview';
import { RegisterSignUpSection } from '../components/RegisterSignUpSection';

export default function RegisterPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <RegisterSignUpSection />
    </PreviewProvider>
  );
}
