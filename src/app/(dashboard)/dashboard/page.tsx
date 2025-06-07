import {
  WelcomeSection,
  StatsCards,
  QuickActions,
  RecentActivity,
} from "@/components/layouts/dashboard/Dashboard";
import {
  dashboard_stats_data,
  dashboard_activities_data,
} from "@/constants/data";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <WelcomeSection
        title="Selamat Datang di Dashboard"
        description="Kelola konten Anda dan pantau kinerja"
      />

      {/* Stats Cards */}
      <StatsCards
        total_articles={dashboard_stats_data.total_articles}
        total_views={dashboard_stats_data.total_views}
        comments={dashboard_stats_data.comments}
        published={dashboard_stats_data.published}
      />

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions />
        <RecentActivity activities={dashboard_activities_data} />
      </div>
    </div>
  );
};
export default DashboardPage;
