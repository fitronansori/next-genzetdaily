import Filter from "@/components/common/Filter";

interface ArticleCategory {
  id: number;
  name: string;
  slug: string;
  post_count: number;
}

type ArticlesFilterProps = {
  categories: ArticleCategory[];
};

const ArticlesFilter = ({ categories }: ArticlesFilterProps) => {
  return (
    <Filter
      categories={categories}
      show_all_option={true}
      all_option_text="Semua"
      active_index={0}
    />
  );
};

export default ArticlesFilter;
