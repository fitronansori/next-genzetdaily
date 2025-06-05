import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SearchProps = {
  placeholder?: string;
  className?: string;
  button_text?: string;
  is_form?: boolean;
};

const Search = ({
  placeholder = "Cari...",
  className = "",
  button_text = "🔍 CARI",
  is_form = true,
}: SearchProps) => {
  const content = (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder={placeholder}
          className="pr-8 border-2 border-border shadow-shadow font-bold"
          readOnly
        />
      </div>

      <Button
        type={is_form ? "submit" : "button"}
        size="sm"
        className="rotate-1 hover:rotate-0 transition-transform duration-300"
      >
        {button_text}
      </Button>
    </div>
  );

  return (
    <div className={cn("max-w-md mx-auto mb-8", className)}>
      {is_form ? <form>{content}</form> : content}
    </div>
  );
};

export default Search;
