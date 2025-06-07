interface WelcomeSectionProps {
  title: string;
  description: string;
}

const WelcomeSection = ({ title, description }: WelcomeSectionProps) => {
  return (
    <div className="bg-main rounded-base shadow-shadow border-2 border-border p-6">
      <h1 className="text-2xl font-heading text-main-foreground mb-2">
        {title}
      </h1>
      <p className="text-main-foreground/80 font-base">{description}</p>
    </div>
  );
};

export default WelcomeSection;
