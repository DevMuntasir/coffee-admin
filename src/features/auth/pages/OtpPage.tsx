import { PreviewProvider } from '@/shared/components/preview';
import { OtpEnterOtpSection } from '../components/OtpEnterOtpSection';

export default function OtpPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <OtpEnterOtpSection />
    </PreviewProvider>
  );
}
