import { Button } from "@/components/ui/button";

const ArticleSocialShare = () => {
  return (
    <div className="flex items-center justify-between gap-4 mb-12 p-6 bg-muted/30 border-2 border-border rounded-lg">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Share artikel ini:</span>
        <Button size="sm" variant="neutral" className="rotate-1">
          📱 WhatsApp
        </Button>
        <Button size="sm" variant="neutral" className="-rotate-1">
          🐦 Twitter
        </Button>
        <Button size="sm" variant="neutral" className="rotate-1">
          📘 Facebook
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="neutral">
          ❤️ Like
        </Button>
        <Button size="sm" variant="neutral">
          🔖 Save
        </Button>
      </div>
    </div>
  );
};

export default ArticleSocialShare;
