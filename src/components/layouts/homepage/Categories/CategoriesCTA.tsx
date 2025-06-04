import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type CategoriesCTAProps = {
  card_rotation?: string;
};

const CategoriesCTA = ({ card_rotation = "rotate-1" }: CategoriesCTAProps) => {
  return (
    <div className="text-center mt-16">
      <Card
        className={`bg-background border-2 border-border shadow-shadow ${card_rotation} inline-block max-w-4xl`}
      >
        <CardContent className="pt-8 md:pt-12">
          <CardHeader className="px-0">
            <CardTitle className="text-2xl md:text-3xl font-black text-foreground mb-4">
              Ada Kategori yang ingin kamu request, nggak? 🤔
            </CardTitle>
          </CardHeader>
          <p className="text-lg mb-8 leading-relaxed">
            Feel free buat drop saran kamu ya! Kita always open for your
            feedback, bestie!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Kasih Saran, dong! 💡</Link>
            </Button>
            <Button size="lg" variant="neutral" asChild>
              <Link href="/newsletter">Subscribe Newsletter 📧</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoriesCTA;
