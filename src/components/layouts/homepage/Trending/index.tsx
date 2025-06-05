import { trending_news, trending_categories } from "@/constants/data";
import TrendingCard from "./TrendingCard";
import TrendingFilter from "./TrendingFilter";
import TrendingSearch from "./TrendingSearch";

const TrendingSection = () => {
  // Static data for display
  const top_trending = trending_news.slice(0, 3);
  const remaining_trending = trending_news.slice(3);

  return (
    <>
      {/* Search Bar */}
      <TrendingSearch placeholder="Cari trending news yang kamu mau..." />

      {/* Filter Buttons */}
      <TrendingFilter categories={trending_categories} />

      {/* Top Trending Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">
            🏆 TOP 3 TRENDING HARI INI
          </h3>
          <p className="text-muted-foreground">
            Yang paling banyak dibaca, di-share, dan dibahas netizen!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {top_trending.map((news) => (
            <TrendingCard key={news.id} news={news} />
          ))}
        </div>
      </div>

      {/* More Trending Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">
            📈 TRENDING LAINNYA
          </h3>
          <p className="text-muted-foreground">
            Masih hot dan viral, jangan sampai ketinggalan!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remaining_trending.map((news) => (
            <TrendingCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingSection;
