import ActivityItem from "./ActivityItem";

interface Activity {
  title: string;
  time: string;
  chartColor: "chart-1" | "chart-2" | "chart-3" | "chart-4";
}

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity = ({ activities }: RecentActivityProps) => {
  return (
    <div className="bg-background rounded-base shadow-shadow border-2 border-border p-6">
      <h2 className="text-lg font-heading text-foreground mb-4">
        Aktivitas Terbaru
      </h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            title={activity.title}
            time={activity.time}
            chartColor={activity.chartColor}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
