import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatItem {
  stat_value: string;
  stat_label: string;
}

type AboutStatsCardProps = {
  stats_title: string;
  stats_subtitle: string;
  stats_data: StatItem[];
  card_rotation?: string;
};

const AboutStatsCard = ({
  stats_title,
  stats_subtitle,
  stats_data,
  card_rotation = "-rotate-1",
}: AboutStatsCardProps) => {
  return (
    <Card className={`bg-muted/30 ${card_rotation} mb-16`}>
      <CardContent className="">
        <div className="text-center mb-8">
          <CardHeader className="px-0">
            <CardTitle className="text-3xl md:text-4xl font-black text-foreground mb-4">
              {stats_title}
            </CardTitle>
          </CardHeader>
          <p className="">{stats_subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats_data.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-main mb-2">
                {stat.stat_value}
              </div>
              <div className="text-sm">{stat.stat_label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutStatsCard;
