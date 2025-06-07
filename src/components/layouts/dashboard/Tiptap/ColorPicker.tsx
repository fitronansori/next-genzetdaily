import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Palette, Highlighter } from "lucide-react";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  onTextColorChange: (color: string) => void;
  onHighlightColorChange: (color: string) => void;
}

const COLOR_PALETTE = [
  "#000000",
  "#e60000",
  "#ff9900",
  "#ffcc00",
  "#008a00",
  "#0066cc",
  "#9933ff",
  "#ffffff",
  "#facccc",
  "#ffebcc",
  "#ffffcc",
  "#cce8cc",
  "#cce0f5",
  "#ebd6ff",
  "#bbbbbb",
  "#f06666",
  "#ffc266",
  "#ffff66",
  "#66b966",
  "#66a3e0",
  "#c285ff",
  "#888888",
  "#a10000",
  "#b26b00",
  "#b2b200",
  "#006100",
  "#0047b2",
  "#6b24b2",
  "#444444",
  "#5c0000",
  "#663d00",
  "#666600",
  "#003700",
  "#002966",
  "#3d1466",
];

const ColorPicker = ({
  onTextColorChange,
  onHighlightColorChange,
}: ColorPickerProps) => {
  const [show_text_palette, setShowTextPalette] = useState(false);
  const [show_highlight_palette, setShowHighlightPalette] = useState(false);
  const text_ref = useRef<HTMLDivElement>(null);
  const highlight_ref = useRef<HTMLDivElement>(null);

  // Close palettes when clicking outside
  useEffect(() => {
    const handle_click_outside = (event: MouseEvent) => {
      if (
        text_ref.current &&
        !text_ref.current.contains(event.target as Node)
      ) {
        setShowTextPalette(false);
      }
      if (
        highlight_ref.current &&
        !highlight_ref.current.contains(event.target as Node)
      ) {
        setShowHighlightPalette(false);
      }
    };

    document.addEventListener("mousedown", handle_click_outside);
    return () =>
      document.removeEventListener("mousedown", handle_click_outside);
  }, []);

  const handle_custom_text_color = () => {
    const color = window.prompt("Masukkan kode warna hex (contoh: #ff0000)");
    if (color && /^#[0-9A-Fa-f]{6}$/.test(color)) {
      onTextColorChange(color);
    }
  };

  const handle_custom_highlight_color = () => {
    const color = window.prompt(
      "Masukkan kode warna highlight (contoh: #ffff00)"
    );
    if (color && /^#[0-9A-Fa-f]{6}$/.test(color)) {
      onHighlightColorChange(color);
    }
  };
  return (
    <div className="flex gap-1 relative">
      {/* Text Color Button */}
      <div className="relative" ref={text_ref}>
        <Button
          type="button"
          variant="neutral"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => setShowTextPalette(!show_text_palette)}
          title="Pilih warna text"
        >
          <Palette className="h-4 w-4" />
        </Button>
        {show_text_palette && (
          <div className="absolute top-10 left-0 z-50 bg-background border-2 border-border rounded-lg p-2 shadow-lg">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {COLOR_PALETTE.map((color) => (
                <button
                  type="button"
                  key={`text-${color}`}
                  onClick={() => {
                    onTextColorChange(color);
                    setShowTextPalette(false);
                  }}
                  className="w-6 h-6 rounded border border-border hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                  title={`Set text color to ${color}`}
                />
              ))}
            </div>
            <Button
              type="button"
              variant="neutral"
              size="sm"
              onClick={() => {
                handle_custom_text_color();
                setShowTextPalette(false);
              }}
              className="w-full text-xs"
            >
              Custom Color
            </Button>
          </div>
        )}
      </div>
      {/* Highlight Color Button */}
      <div className="relative" ref={highlight_ref}>
        <Button
          type="button"
          variant="neutral"
          size="sm"
          className="h-8 w-8 p-0"
          onClick={() => setShowHighlightPalette(!show_highlight_palette)}
          title="Pilih warna highlight"
        >
          <Highlighter className="h-4 w-4" />
        </Button>
        {show_highlight_palette && (
          <div className="absolute top-10 left-0 z-50 bg-background border-2 border-border rounded-lg p-2 shadow-lg">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {COLOR_PALETTE.map((color) => (
                <button
                  type="button"
                  key={`highlight-${color}`}
                  onClick={() => {
                    onHighlightColorChange(color);
                    setShowHighlightPalette(false);
                  }}
                  className="w-6 h-6 rounded border border-border hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                  title={`Set highlight color to ${color}`}
                />
              ))}
            </div>
            <Button
              type="button"
              variant="neutral"
              size="sm"
              onClick={() => {
                handle_custom_highlight_color();
                setShowHighlightPalette(false);
              }}
              className="w-full text-xs"
            >
              Custom Color
            </Button>
          </div>
        )}
      </div>
      {/* Quick Color Buttons */}
      <div className="flex gap-1 ml-2">
        {COLOR_PALETTE.slice(0, 8).map((color) => (
          <button
            type="button"
            key={`quick-${color}`}
            onClick={() => onTextColorChange(color)}
            className={cn(
              "w-6 h-6 rounded border-2 border-border hover:scale-110 transition-transform",
              "shadow-sm hover:shadow-shadow"
            )}
            style={{ backgroundColor: color }}
            title={`Quick set text color to ${color}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
