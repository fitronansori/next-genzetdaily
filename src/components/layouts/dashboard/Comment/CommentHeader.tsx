import { Button } from "@/components/ui/button";

const CommentHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-black text-foreground">Comments</h1>
        <p className="text-muted-foreground">Kelola komentar dari pembaca</p>
      </div>
      <div className="flex gap-3">
        <Button variant="neutral" size="sm">
          Filter
        </Button>
        <Button size="sm">Moderation Settings</Button>
      </div>
    </div>
  );
};

export default CommentHeader;
