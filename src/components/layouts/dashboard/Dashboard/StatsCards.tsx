import { FileText, Eye, MessageCircle, CheckCircle } from "lucide-react";
import StatCard from "./StatCard";

interface StatsCardsProps {
  total_articles: number;
  total_views: string;
  comments: number;
  published: number;
}

const StatsCards = ({
  total_articles,
  total_views,
  comments,
  published,
}: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Artikel"
        value={total_articles.toString()}
        icon={FileText}
        chartColor="chart-1"
      />
      <StatCard
        title="Total Tampilan"
        value={total_views}
        icon={Eye}
        chartColor="chart-2"
      />
      <StatCard
        title="Komentar"
        value={comments.toString()}
        icon={MessageCircle}
        chartColor="chart-3"
      />
      <StatCard
        title="Diterbitkan"
        value={published.toString()}
        icon={CheckCircle}
        chartColor="chart-4"
      />
    </div>
  );
};

export default StatsCards;
