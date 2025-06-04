import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type AboutMissionCardProps = {
  card_rotation?: string;
};

const AboutMissionCard = ({
  card_rotation = "rotate-2",
}: AboutMissionCardProps) => {
  return (
    <div className="text-center">
      <Card
        className={`bg-background border-4 border-border shadow-[8px_8px_0px_0px_theme(colors.border)] ${card_rotation} inline-block max-w-4xl`}
      >
        <CardContent className="pt-8 md:pt-12">
          <CardHeader className="px-0">
            <CardTitle className="text-3xl md:text-4xl font-black text-foreground mb-6">
              OUR MISSION: KEEP GEN Z INFORMED & ENTERTAINED! 🚀
            </CardTitle>
          </CardHeader>
          <p className="text-lg mb-8 leading-relaxed">
            Kita percaya kalau berita gak harus boring! GenZet Daily hadir buat
            ngebuat informasi jadi lebih accessible, relatable, dan tentunya fun
            buat dibaca. Because staying informed should be exciting, not
            exhausting!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={"/"}>KENALAN LEBIH DEKAT YUK! 👋</Link>
            </Button>
            <Button size="lg" variant="neutral" asChild>
              <Link href={"/"}>MEET THE TEAM 🔥</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutMissionCard;
