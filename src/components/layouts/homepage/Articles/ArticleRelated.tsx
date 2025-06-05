import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface RelatedArticle {
  id: number;
  title: string;
  image_url: string;
  category: string;
  read_time: string;
}

interface ArticleRelatedProps {
  related_articles: RelatedArticle[];
}

const ArticleRelated = ({ related_articles }: ArticleRelatedProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-black text-foreground mb-8 text-center">
        📖 Artikel Lainnya yang Mungkin Kamu Suka
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related_articles.map((related, index) => (
          <Card
            key={related.id}
            className="pt-0 group hover:-translate-y-1 transition-all duration-300 hover:shadow-[4px_4px]"
          >
            <CardContent className="p-0">
              <div className="aspect-video relative overflow-hidden bg-chart-2">
                <Image
                  src={related.image_url}
                  alt={related.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={cn(
                      "text-foreground font-bold border-2 border-border px-2 py-1 text-xs",
                      `bg-chart-${(index % 4) + 1}`
                    )}
                  >
                    {related.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {related.read_time}
                  </span>
                </div>
                <h3 className="font-bold text-foreground group-hover:text-main transition-colors line-clamp-2">
                  {related.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArticleRelated;
