import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type AboutFeatureCardProps = {
  feature_title: string;
  feature_description: string;
  feature_icon: string;
  feature_color: string;
  card_rotation: string;
};

const AboutFeatureCard = ({
  feature_title,
  feature_description,
  feature_icon,
  feature_color,
  card_rotation,
}: AboutFeatureCardProps) => {
  return (
    <Card
      className={`bg-${feature_color} ${card_rotation} hover:shadow-[10px_10px_0px_0px_theme(colors.border)] hover:-translate-y-2 transition-all duration-300`}
    >
      <CardContent className="pt-6">
        <div className="text-5xl mb-4">{feature_icon}</div>
        <CardHeader className="px-0">
          <CardTitle className="text-2xl font-black text-foreground mb-4">
            {feature_title}
          </CardTitle>
        </CardHeader>

        <p className="leading-relaxed">{feature_description}</p>
      </CardContent>
    </Card>
  );
};

export default AboutFeatureCard;
