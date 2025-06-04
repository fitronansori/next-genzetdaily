import { Button } from "@/components/ui/button";
import Title from "@/components/common/Title";
import FeaturedCard from "./FeaturedCard";
import { featured_news } from "@/constants/data";
import Link from "next/link";

const FeaturedNews = () => {
  return (
    <section className="py-10 lg:py-20 bg-background">
      <div className="container">
        <Title
          main_text="NEWS"
          highlighted_text="TERHOT"
          highlight_color="chart-1"
          highlight_rotation="rotate-2"
          subtitle="Latest news yang lagi super hype, bro! Fresh banget, literally baru keluar dari oven!"
        />

        {/* Featured News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <FeaturedCard news={featured_news[0]} variant="main" />
          </div>
          {/* Side Articles */}
          <div className="space-y-6">
            {featured_news.slice(1, 3).map((news) => (
              <FeaturedCard key={news.id} news={news} variant="side" />
            ))}
          </div>
        </div>
        {/* CTA to View All News */}
        <div className="flex items-center justify-center">
          <Button size="lg" variant="neutral" asChild>
            <Link href="/news">LIHAT SEMUA BERITA, BIAR GAK FOMO!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
