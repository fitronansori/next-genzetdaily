import {
  ArticleHeader,
  ArticleStats,
  ArticleList,
} from "@/components/layouts/dashboard/Article";
import { dashboard_articles_data } from "@/constants/data";

export default function ArticlesPage() {
  return (
    <div className="space-y-6">
      <ArticleHeader />

      <ArticleStats
        total_articles={24}
        published={18}
        draft={6}
        total_views="12.5K"
      />

      <ArticleList articles_data={dashboard_articles_data} />
    </div>
  );
}
