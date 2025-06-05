import ArticleCard from "./ArticleCard";
import ArticlesSearch from "./ArticlesSearch";
import ArticlesFilter from "./ArticlesFilter";
import ArticlesPagination from "./ArticlesPagination";
import { all_articles, categories } from "@/constants/data";

const Articles = () => {
  return (
    <>
      {/* Search Section */}
      <ArticlesSearch placeholder="Cari artikel yang kamu mau... 🔍" />

      {/* Filter Section */}
      <ArticlesFilter categories={categories} />

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {all_articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </div>

      {/* Pagination */}
      <ArticlesPagination />
    </>
  );
};

export default Articles;
