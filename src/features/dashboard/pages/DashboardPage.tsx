import { PreviewProvider } from '@/shared/components/preview';
import { DashboardHeaderSection } from '../components/DashboardHeaderSection';
import { DashboardOverviewSection } from '../components/DashboardOverviewSection';
// import { DashboardTotalRevenueSection } from '../components/DashboardTotalRevenueSection';
// import { DashboardCategoryStatisticsSection } from '../components/DashboardCategoryStatisticsSection';
// import { DashboardTrendingMenusSection } from '../components/DashboardTrendingMenusSection';
// import { DashboardReservationsSection } from '../components/DashboardReservationsSection';

export default function DashboardPage() {
  return (
    <PreviewProvider defaultTabs={{}}>
      <DashboardHeaderSection />
      <DashboardOverviewSection />
      {/* <DashboardTotalRevenueSection />
      <DashboardCategoryStatisticsSection />
      <DashboardTrendingMenusSection />
      <DashboardReservationsSection /> */}
    </PreviewProvider>
  );
}
