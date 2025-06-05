import Filter from "@/components/common/Filter";

interface TrendingCategory {
  name: string;
  slug: string;
  count: number;
}

type TrendingFilterProps = {
  categories: TrendingCategory[];
};

const TrendingFilter = ({ categories }: TrendingFilterProps) => {
  return (
    <Filter categories={categories} show_all_option={false} active_index={-1} />
  );
};

export default TrendingFilter;
