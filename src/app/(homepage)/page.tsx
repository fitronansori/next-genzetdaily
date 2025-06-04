import Hero from "@/components/layouts/homepage/Hero";
import FeaturedNews from "@/components/layouts/homepage/FeaturedNews";
import Categories from "@/components/layouts/homepage/Categories";
import About from "@/components/layouts/homepage/About";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedNews />
      <Categories />
      <About />
    </>
  );
};

export default HomePage;
