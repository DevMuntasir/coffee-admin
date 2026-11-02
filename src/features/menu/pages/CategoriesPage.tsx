import { PreviewProvider } from '@/shared/components/preview';
import { CategoriesHeaderSection } from '../components/CategoriesHeaderSection';
import { CategoriesColumnSection } from '../components/CategoriesColumnSection';
import { CategoriesDialogs } from '../components/CategoriesDialogs';

export default function CategoriesPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <CategoriesHeaderSection />
      <CategoriesColumnSection />
      <CategoriesDialogs />
    </PreviewProvider>
  );
}
