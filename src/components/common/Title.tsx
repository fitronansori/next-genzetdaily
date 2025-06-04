import { cn } from "@/lib/utils";

type TitleProps = {
  main_text: string;
  highlighted_text: string;
  second_line?: string;
  highlight_color?: string;
  highlight_rotation?: string;
  subtitle?: string;
  className?: string;
};

const Title = ({
  main_text,
  highlighted_text,
  second_line,
  highlight_color = "chart-1",
  highlight_rotation = "rotate-2",
  subtitle,
  className,
}: TitleProps) => {
  return (
    <div className={cn("text-center mb-16", className)}>
      <div className="mb-6">
        <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tight">
          {main_text}
          <span
            className={`inline-block text-background bg-${highlight_color} border-2 border-border p-4 ${highlight_rotation} ml-4 shadow-shadow rounded-base`}
          >
            {highlighted_text}
          </span>
          {second_line && (
            <>
              <br />
              {second_line}
            </>
          )}
        </h2>
      </div>
      {subtitle && <p className="text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default Title;
