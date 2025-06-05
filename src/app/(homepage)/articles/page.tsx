import Title from "@/components/common/Title";
import Articles from "@/components/layouts/homepage/Articles";

const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container py-10 lg:py-20">
        {/* Header Section */}
        <Title
          main_text="SEMUA"
          highlighted_text="ARTICLES"
          highlight_color="chart-1"
          highlight_rotation="rotate-2"
          subtitle="Koleksi lengkap artikel terbaru dari GenZet Daily! Mulai dari tech update sampai lifestyle tips, semuanya ada di sini, bestie!"
        />

        {/* Articles Components */}
        <Articles />
      </div>
    </div>
  );
};

export default ArticlesPage;
