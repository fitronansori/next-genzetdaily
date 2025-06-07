import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type ArticleItemType = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author_name: string;
  author_avatar: string;
  published_date: string;
  status: "published" | "draft";
  views: string;
  read_time: string;
};

type ArticleItemProps = {
  article: ArticleItemType;
};

const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <div className="flex gap-4 p-4 border-2 border-border rounded-base bg-background hover:bg-muted/30 transition-colors">
      {/* Article Content */}
      <div className="flex-1 space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-black text-foreground text-lg mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
              {article.excerpt}
            </p>
          </div>
          <span
            className={`ml-4 px-2 py-1 text-xs font-bold border-2 border-border rounded ${
              article.status === "published"
                ? "bg-chart-4 text-main-foreground"
                : "bg-chart-2 text-main-foreground"
            }`}
          >
            {article.status === "published" ? "Published" : "Draft"}
          </span>
        </div>

        {/* Article Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src={article.author_avatar} />
              <AvatarFallback className="text-xs">
                {article.author_name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium">{article.author_name}</span>
          </div>
          <span className="px-2 py-1 bg-muted border border-border rounded text-xs">
            {article.category}
          </span>
          <span>👀 {article.views}</span>
          <span>📅 {article.published_date}</span>
          <span>⏱️ {article.read_time}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="default">
            Edit
          </Button>
          <Button size="sm" variant="neutral">
            View
          </Button>
          {article.status === "draft" && (
            <Button size="sm" variant="neutral">
              Publish
            </Button>
          )}
          <Button size="sm" variant="neutral">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
