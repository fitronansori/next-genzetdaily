import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute top-20 left-10 w-32 h-32 bg-chart-1 rotate-12 border-2 border-border hero-bg-float rounded-base shadow-shadow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-chart-2 rotate-45 border-2 border-border hero-bg-bounce-delay rounded-base shadow-shadow"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-chart-3 -rotate-12 border-2 border-border hero-bg-ping rounded-base shadow-shadow"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-chart-4 rotate-45 border-2 border-border hero-bg-bounce-delay-700 rounded-base shadow-shadow"></div>
      </div>

      <div className="container relative z-10 flex items-center min-h-screen py-10">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8 hero-fade-in">
            <h1 className="text-6xl md:text-8xl font-black text-foreground mb-4 tracking-tight hero-slide-down">
              GEN ZET
              <span className="inline-block text-main bg-background border-2 border-border rounded-base p-4 -rotate-2 mt-2 shadow-shadow hero-title-span">
                DAILY
              </span>
            </h1>
          </div>
          {/* Subtitle */}
          <div className="mb-12 hero-fade-delay-300">
            <p className="text-xl md:text-2xl font-base text-foreground bg-chart-3 border-2 border-border p-6 rotate-1 inline-block shadow-shadow rounded-base max-w-2xl hero-subtitle">
              News kekinian banget buat Gen Z, totally fresh dan real, super
              relate sama daily life kamu, bro & sis!
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center hero-fade-delay-500">
            <Button size="lg" asChild>
              <Link href={"/"}>BACA BERITA TERBARU, GUYS</Link>
            </Button>

            <Button variant="neutral" size="lg">
              <Link href={"/"}>JOIN MEMBER, BIAR NGGAK FOMO</Link>
            </Button>
          </div>
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 hero-fade-delay-700">
            <div className="bg-chart-1 border-2 border-border p-6 rotate-2 shadow-shadow rounded-base hero-stat-card">
              <div className="text-3xl font-black text-main-foreground">
                1000+
              </div>
              <div className="text-sm font-base text-main-foreground">
                Berita up-to-date, no cap, always on point!
              </div>
            </div>

            <div className="bg-chart-2 border-2 border-border p-6 -rotate-1 shadow-shadow rounded-base hero-stat-card hero-stat-card-delay">
              <div className="text-3xl font-black text-main-foreground">
                50K+
              </div>
              <div className="text-sm font-base text-main-foreground">
                Pembaca aktif, literally banyak banget!
              </div>
            </div>

            <div className="bg-chart-4 border-2 border-border p-6 rotate-1 shadow-shadow rounded-base hero-stat-card hero-stat-card-delay-200">
              <div className="text-3xl font-black text-main-foreground">
                24/7
              </div>
              <div className="text-sm font-base text-main-foreground">
                Update real-time, gak pernah missed, always stay tuned!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
