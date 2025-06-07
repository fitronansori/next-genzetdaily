import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  chartColor: "chart-1" | "chart-2" | "chart-3" | "chart-4";
}

const StatCard = ({ title, value, icon: Icon, chartColor }: StatCardProps) => {
  return (
    <div
      className={`bg-${chartColor} rounded-base shadow-shadow border-2 border-border p-6`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-base text-foreground/80">{title}</p>
          <p className="text-2xl font-heading text-foreground">{value}</p>
        </div>
        <div className="p-3 bg-background border-2 border-border rounded-base shadow-shadow">
          <Icon className="w-6 h-6 text-foreground" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
