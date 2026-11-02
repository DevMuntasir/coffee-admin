import { PreviewProvider } from '@/shared/components/preview';
import { EmailVerificationCheckYourEmailSection } from '../components/EmailVerificationCheckYourEmailSection';

export default function EmailVerificationPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <EmailVerificationCheckYourEmailSection />
    </PreviewProvider>
  );
}
