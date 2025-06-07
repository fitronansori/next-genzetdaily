import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ToolbarButtonProps {
  icon: LucideIcon;
  onClick: () => void;
  is_active?: boolean;
  is_disabled?: boolean;
  title?: string;
  variant?: "default" | "neutral";
}

const ToolbarButton = ({
  icon: Icon,
  onClick,
  is_active = false,
  is_disabled = false,
  title,
  variant = "neutral",
}: ToolbarButtonProps) => {
  return (
    <Button
      type="button"
      variant={is_active ? "default" : variant}
      size="sm"
      onClick={onClick}
      disabled={is_disabled}
      title={title}
      className={cn(
        "h-8 w-8 p-0 transition-all duration-200",
        is_active && "bg-main text-main-foreground shadow-shadow",
        is_disabled && "opacity-50 cursor-not-allowed",
        !is_active && !is_disabled && "hover:bg-muted hover:scale-105"
      )}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
};

export default ToolbarButton;
