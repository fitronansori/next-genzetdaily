import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  post_count: number;
}

type CategoryCardProps = {
  category: Category;
  index: number;
};

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  const getRotationClass = () => {
    if (index % 3 === 0) return "rotate-2";
    if (index % 3 === 1) return "-rotate-1";
    return "rotate-1";
  };

  return (
    <Link key={category.id} href={"/"} className="group">
      <Card
        className={cn(
          `bg-${category.color}`,
          "border-2 border-border shadow-shadow transition-all duration-300",
          "group-hover:shadow-[10px_10px_0px_0px_theme(colors.border)] group-hover:-translate-y-2",
          getRotationClass()
        )}
      >
        <CardContent className="pt-6">
          {/* Category Icon */}
          <div
            className={cn(
              "text-6xl mb-4 transition-transform duration-300",
              "group-hover:scale-110"
            )}
          >
            {category.icon}
          </div>

          {/* Category Info */}
          <CardHeader className="px-0 pb-4">
            <CardTitle
              className={cn("text-2xl font-black text-foreground mb-2")}
            >
              {category.name}
            </CardTitle>

            <p className=" leading-relaxed">{category.description}</p>
          </CardHeader>

          {/* Post Count */}
          <div className="flex items-center justify-between">
            <span
              className={cn(
                "text-sm font-bold text-foreground bg-background",
                "px-3 py-1 border-2 border-border rotate-1"
              )}
            >
              {category.post_count} artikel
            </span>
            <div
              className={cn(
                "text-foreground transition-transform duration-300",
                "group-hover:translate-x-2"
              )}
            >
              →
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
