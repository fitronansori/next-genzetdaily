import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface TrendingNewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  image_url: string;
  is_trending: boolean;
  views: string;
  trending_rank: number;
  published_date: string;
}

type TrendingCardProps = {
  news: TrendingNewsItem;
  className?: string;
};

const TrendingCard = ({ news, className = "" }: TrendingCardProps) => {
  // Add animation delay based on trending rank
  const animationDelay = `hero-fade-delay-${Math.min(
    news.trending_rank * 100,
    700
  )}`;

  return (
    <Card
      className={cn(
        "pt-0 bg-background overflow-hidden group hover:-translate-y-1 transition-all duration-300 hero-fade-in hover:shadow-[8px_8px]",
        animationDelay,
        className
      )}
    >
      {/* Image Section */}
      <div className="aspect-video relative overflow-hidden bg-chart-2">
        {/* Trending Rank Badge */}
        <div className="absolute z-10 bg-main text-main-foreground font-black border-2 border-border top-2 left-2 px-3 py-1 text-sm rotate-2">
          #{news.trending_rank}
        </div>

        {/* Views Badge */}
        <div className="absolute z-10 bg-background text-foreground font-bold border-2 border-border top-2 right-2 px-2 py-1 text-xs -rotate-1">
          {news.views} views
        </div>

        <Image
          src={news.image_url || "/images/placeholder.webp"}
          alt={news.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <CardHeader className="px-0 pb-0">
          {/* Category and Read Time */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-foreground font-bold border-2 border-border bg-chart-4 px-2 py-1 text-xs">
              {news.category}
            </span>
            <span className="text-muted-foreground text-xs">
              {news.read_time}
            </span>
            <span className="text-muted-foreground text-xs">
              • {news.published_date}
            </span>
          </div>

          {/* Title */}
          <CardTitle className="font-black text-foreground group-hover:text-main transition-colors text-lg mb-2 line-clamp-2">
            {news.title}
          </CardTitle>
        </CardHeader>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {news.excerpt}
        </p>

        {/* CTA Button */}
        <Button size="sm" variant="neutral" asChild>
          <Link href={`/articles/${news.id}`}>READ TRENDING NEWS!</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default TrendingCard;
