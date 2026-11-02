import { PreviewProvider } from '@/shared/components/preview';
import { KanbanViewOrdersSection } from '../components/KanbanViewOrdersSection';
import { KanbanViewOverviewSection } from '../components/KanbanViewOverviewSection';
import { KanbanViewOrdersSection3 } from '../components/KanbanViewOrdersSection3';
import { KanbanViewContentSection } from '../components/KanbanViewContentSection';
import { KanbanViewDialogs } from '../components/KanbanViewDialogs';

export default function KanbanViewPage() {
  return (
    <PreviewProvider defaultTabs={{ 'tabs-0': 'order-tab6' }}>
      <KanbanViewOrdersSection />
      <KanbanViewOverviewSection />
      <KanbanViewOrdersSection3 />
      <KanbanViewContentSection />
      <KanbanViewDialogs />
    </PreviewProvider>
  );
}
