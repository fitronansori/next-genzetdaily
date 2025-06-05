import Title from "@/components/common/Title";
import { features, about_stats } from "@/constants/data";
import AboutFeatureCard from "./AboutFeatureCard";
import AboutStatsCard from "./AboutStatsCard";
import AboutMissionCard from "./AboutMissionCard";

const About = () => {
  return (
    <section id="about" className="py-10 lg:py-20 bg-background">
      <div className="container">
        <Title
          main_text="KENAPA"
          highlighted_text="GENZER"
          second_line="PILIH KITA?"
          highlight_color="chart-2"
          highlight_rotation="rotate-3"
          subtitle="GenZet Daily tuh bukan sekadar media berita biasa, sih. Kita platform yang emang didesain khusus buat Gen Z, dari Gen Z juga, dengan vibes yang beda banget sama media mainstream lainnya."
        />
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <AboutFeatureCard
              key={feature.id}
              feature_title={feature.title}
              feature_description={feature.description}
              feature_icon={feature.icon}
              feature_color={feature.color}
              card_rotation={index % 2 === 0 ? "rotate-1" : "-rotate-1"}
            />
          ))}
        </div>
        {/* Stats Section */}
        <AboutStatsCard
          stats_title="NUMBERS DON'T LIE, BESTIE! 📊"
          stats_subtitle="Data real yang membuktikan kenapa GenZet Daily is the real deal!"
          stats_data={about_stats}
          card_rotation="-rotate-1"
        />
        {/* Mission Statement */}
        <AboutMissionCard card_rotation="rotate-2" />
      </div>
    </section>
  );
};

export default About;
