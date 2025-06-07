import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ArticleItem, { ArticleItemType } from "./ArticleItem";

type ArticleListProps = {
  articles_data: ArticleItemType[];
};

const ArticleList = ({ articles_data }: ArticleListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-black">Recent Articles</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {articles_data.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </CardContent>
    </Card>
  );
};

export default ArticleList;
