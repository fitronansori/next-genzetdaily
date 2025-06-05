import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterCategory {
  name: string;
  slug: string;
  count?: number;
  post_count?: number;
  id?: number;
}

type FilterProps = {
  categories: FilterCategory[];
  className?: string;
  show_all_option?: boolean;
  all_option_text?: string;
  active_index?: number;
};

const Filter = ({
  categories,
  className = "",
  show_all_option = true,
  all_option_text = "Semua",
  active_index = 0,
}: FilterProps) => {
  // Add "All" option if enabled
  const all_categories = show_all_option
    ? [
        {
          name: all_option_text,
          slug: "all",
          count: 0,
          post_count: 0,
          id: 0,
        },
        ...categories,
      ]
    : categories;

  return (
    <div className={cn("flex flex-wrap gap-3 justify-center mb-12", className)}>
      {all_categories.map((category, index) => {
        const is_active = index === active_index;
        const rotation_class =
          index % 3 === 0
            ? "rotate-1"
            : index % 3 === 1
            ? "-rotate-1"
            : "rotate-0";

        // Get count from either count or post_count property
        const item_count = category.count ?? category.post_count ?? 0;

        return (
          <Button
            key={category.slug}
            variant={is_active ? "default" : "neutral"}
            size="sm"
            className={cn(
              "font-bold border-2 border-border transition-all duration-300",
              "hover:shadow-[4px_4px] hover:-translate-y-1",
              !is_active && rotation_class,
              is_active && "rotate-0 shadow-[6px_6px]"
            )}
          >
            {category.name}
            {item_count > 0 && (
              <span
                className={cn(
                  "ml-2 px-2 py-0.5 text-xs font-black border border-border rounded",
                  is_active
                    ? "bg-background text-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {item_count}
              </span>
            )}
          </Button>
        );
      })}
    </div>
  );
};

export default Filter;
