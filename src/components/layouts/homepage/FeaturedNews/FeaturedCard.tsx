import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  image_url: string;
  is_trending: boolean;
}

type FeaturedCardProps = {
  news: NewsItem;
  variant?: "main" | "side";
  className?: string;
};

const FeaturedCard = ({
  news,
  variant = "side",
  className = "",
}: FeaturedCardProps) => {
  const isMain = variant === "main";
  return (
    <Card
      className={cn(
        "pt-0 bg-background border-2 border-border overflow-hidden group hover:-translate-y-1 transition-all duration-300",
        isMain
          ? "shadow-shadow hover:shadow-[12px_12px]"
          : "shadow-shadow hover:shadow-[8px_8px]",
        className
      )}
    >
      {/* Image Section */}
      <div
        className={cn(
          "aspect-video relative overflow-hidden",
          isMain ? "bg-chart-2" : "bg-chart-4"
        )}
      >
        {news.is_trending && (
          <div
            className={cn(
              "absolute z-10 bg-main text-main-foreground font-bold border-2 border-border",
              isMain
                ? "top-4 left-4 px-4 py-2 text-sm rotate-3"
                : "top-2 left-2 px-2 py-1 text-xs rotate-2"
            )}
          >
            🔥 {isMain ? "TRENDING" : "HOT"}
          </div>
        )}
        <Image
          src={news.image_url || "/images/placeholder.webp"}
          alt={news.title}
          layout="fill"
          objectFit="cover"
          className={"transition-transform duration-300 group-hover:scale-105"}
        />
      </div>

      <CardContent className={cn(isMain ? "p-6" : "p-4")}>
        <CardHeader className="px-0 pb-0">
          {/* Category and Read Time */}
          <div
            className={cn(
              "flex items-center",
              isMain ? "gap-4 mb-4" : "gap-2 mb-3"
            )}
          >
            <span
              className={cn(
                "text-foreground font-bold border-2 border-border",
                isMain
                  ? "bg-chart-3 px-3 py-1 text-sm"
                  : "bg-chart-1 px-2 py-1 text-xs"
              )}
            >
              {news.category}
            </span>
            <span
              className={cn(
                "text-muted-foreground",
                isMain ? "text-sm" : "text-xs"
              )}
            >
              {news.read_time}
            </span>
          </div>
          {/* Title */}
          <CardTitle
            className={cn(
              "font-black text-foreground group-hover:text-main transition-colors",
              isMain ? "text-2xl md:text-3xl mb-4" : "text-lg mb-2 line-clamp-2"
            )}
          >
            {news.title}
          </CardTitle>
        </CardHeader>
        {/* Excerpt */}
        <p
          className={cn(
            "text-muted-foreground",
            isMain ? "mb-6 leading-relaxed" : "text-sm line-clamp-2 mb-4"
          )}
        >
          {news.excerpt}
        </p>
        {/* CTA Button */}
        <Button
          size={isMain ? "default" : "sm"}
          variant={isMain ? "default" : "neutral"}
          asChild
        >
          <Link href={"/"}>
            {isMain ? "BACA SELENGKAPNYA, BESTIE" : "READ MORE, CUY!"}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeaturedCard;
