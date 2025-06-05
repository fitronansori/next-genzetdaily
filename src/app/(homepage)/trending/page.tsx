import TrendingSection from "@/components/layouts/homepage/Trending";
import Title from "@/components/common/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trending Banget - GenZet Daily",
  description:
    "Berita trending terkini yang lagi viral di kalangan Gen Z. Fresh, hot, dan up-to-date!",
};

const TrendingPage = () => {
  return (
    <div className="py-10 lg:py-20">
      <div className="container">
        {/* Title Section */}
        <Title
          main_text="TRENDING"
          highlighted_text="BANGET"
          second_line="HARI INI!"
          highlight_color="chart-1"
          highlight_rotation="rotate-3"
          subtitle="Berita-berita yang lagi super viral dan banyak dibahas Gen Z! Fresh dari oven, literally baru publish dan udah trending everywhere! 🔥"
        />

        {/* Interactive Trending Section */}
        <TrendingSection />
      </div>
    </div>
  );
};

export default TrendingPage;
