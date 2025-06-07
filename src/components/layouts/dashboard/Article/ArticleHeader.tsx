import { Button } from "@/components/ui/button";

const ArticleHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-black text-foreground">Articles</h1>
        <p className="text-muted-foreground">Kelola artikel dan konten</p>
      </div>
      <div className="flex gap-3">
        <Button variant="neutral" size="sm">
          Filter
        </Button>
        <Button size="sm">Create Article</Button>
      </div>
    </div>
  );
};

export default ArticleHeader;
