import { Card, CardContent } from "@/components/ui/card";

type ArticleStatsProps = {
  total_articles: number;
  published: number;
  draft: number;
  total_views: string;
};

const ArticleStats = ({
  total_articles,
  published,
  draft,
  total_views,
}: ArticleStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="bg-chart-1">
        <CardContent className="p-4">
          <div className="text-2xl font-black text-main-foreground">
            {total_articles}
          </div>
          <div className="text-sm text-main-foreground">Total Articles</div>
        </CardContent>
      </Card>
      <Card className="bg-chart-2">
        <CardContent className="p-4">
          <div className="text-2xl font-black text-main-foreground">
            {published}
          </div>
          <div className="text-sm text-main-foreground">Published</div>
        </CardContent>
      </Card>
      <Card className="bg-chart-3">
        <CardContent className="p-4">
          <div className="text-2xl font-black text-main-foreground">
            {draft}
          </div>
          <div className="text-sm text-main-foreground">Draft</div>
        </CardContent>
      </Card>
      <Card className="bg-chart-4">
        <CardContent className="p-4">
          <div className="text-2xl font-black text-main-foreground">
            {total_views}
          </div>
          <div className="text-sm text-main-foreground">Total Views</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleStats;
