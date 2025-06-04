import Title from "@/components/common/Title";
import { categories } from "@/constants/data";
import CategoryCard from "./CategoryCard";
import CategoriesCTA from "./CategoriesCTA";

const Categories = () => {
  return (
    <section className="py-10 lg:py-20 bg-muted/30">
      <div className="container">
        <Title
          main_text="KATEGORI"
          highlighted_text="BERITA"
          highlight_color="chart-4"
          highlight_rotation="-rotate-2"
          subtitle="Silakan pilih kategori yang kamu prefer, mulai dari tech sampai lifestyle, semuanya available supaya kamu tetap stay updated!"
        />
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}{" "}
        </div>
        {/* Bottom CTA */}
        <CategoriesCTA card_rotation="rotate-1" />
      </div>
    </section>
  );
};

export default Categories;
