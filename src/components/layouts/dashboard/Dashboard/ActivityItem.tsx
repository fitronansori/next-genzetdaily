interface ActivityItemProps {
  title: string;
  time: string;
  chartColor: "chart-1" | "chart-2" | "chart-3" | "chart-4";
}

const ActivityItem = ({ title, time, chartColor }: ActivityItemProps) => {
  return (
    <div
      className={`flex items-start space-x-3 p-3 bg-${chartColor} rounded-base border-2 border-border shadow-shadow`}
    >
      <div className="w-3 h-3 bg-background border-2 border-border rounded-full mt-2 shadow-shadow"></div>
      <div>
        <p className="text-sm font-heading text-foreground">{title}</p>
        <p className="text-xs font-base text-foreground/70">{time}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
