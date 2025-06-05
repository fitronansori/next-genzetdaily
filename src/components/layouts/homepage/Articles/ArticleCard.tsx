import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  image_url: string;
  is_trending: boolean;
  views?: string;
  published_date: string;
}

type ArticleCardProps = {
  article: Article;
  index: number;
};

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  const getColorClass = () => {
    const colors = ["chart-1", "chart-2", "chart-3", "chart-4"];
    return colors[index % 4];
  };

  return (
    <Link href={`/articles/${article.id}`} className="group">
      <Card
        className={cn(
          "pt-0 bg-background overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_theme(colors.border)]"
        )}
      >
        {/* Image Section */}
        <div className="aspect-video relative overflow-hidden bg-chart-2">
          {article.is_trending && (
            <div className="absolute top-2 left-2 z-10 bg-main text-main-foreground font-bold border-2 border-border px-2 py-1 text-xs">
              🔥 HOT
            </div>
          )}
          <Image
            src={article.image_url || "/images/placeholder.webp"}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <CardHeader className="px-0 pb-0">
            {/* Category and Read Time */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className={cn(
                  "text-foreground font-bold border-2 border-border px-2 py-1 text-xs",
                  `bg-${getColorClass()}`
                )}
              >
                {article.category}
              </span>
              <span className="text-xs">{article.read_time}</span>
            </div>

            {/* Title */}
            <CardTitle className="text-lg font-black text-foreground group-hover:text-main transition-colors mb-2 line-clamp-2">
              {article.title}
            </CardTitle>
          </CardHeader>

          {/* Excerpt */}
          <p className="text-sm line-clamp-2 mb-4 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Stats and CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              {article.views && <span>👀 {article.views}</span>}
              <span>📅 {article.published_date}</span>
            </div>
            <Button size="sm" variant="neutral">
              Baca yuk!
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
