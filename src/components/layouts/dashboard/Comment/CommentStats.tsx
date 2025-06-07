import { Card, CardContent } from "@/components/ui/card";

type CommentStatsProps = {
  total_comments: number;
  pending_review: number;
  approved: number;
  spam_detected: number;
};

const CommentStats = ({
  total_comments,
  pending_review,
  approved,
  spam_detected,
}: CommentStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="bg-chart-1">
        <CardContent className="p-4">
          <div className="text-2xl font-black text-main-foreground">
            {total_comments}
          </div>
          <div className="text-sm text-main-foreground">Total Comments</div>
        </CardContent>
      </Card>
      <Card className="bg-chart-2">
        <CardContent className="p-4">
          <div className="text-2xl font-black text-main-foreground">
            {pending_review}
          </div>
          <div className="text-sm text-main-foreground">Pending Review</div>
        </CardContent>
      </Card>
      <Card className="bg-chart-3">
        <CardContent className="p-4">
          <div className="text-2xl font-black text-main-foreground">
            {approved}
          </div>
          <div className="text-sm text-main-foreground">Approved</div>
        </CardContent>
      </Card>
      <Card className="bg-chart-4">
        <CardContent className="p-4">
          <div className="text-2xl font-black text-main-foreground">
            {spam_detected}
          </div>
          <div className="text-sm text-main-foreground">Spam Detected</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentStats;
