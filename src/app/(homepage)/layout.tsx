import Footer from "@/components/layouts/homepage/Footer";
import Header from "@/components/layouts/homepage/Header";

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default HomeLayout;
