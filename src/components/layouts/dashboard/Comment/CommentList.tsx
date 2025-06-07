import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CommentItem, { CommentItemType } from "./CommentItem";

type CommentListProps = {
  comments_data: CommentItemType[];
};

const CommentList = ({ comments_data }: CommentListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-black">Recent Comments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {comments_data.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </CardContent>
    </Card>
  );
};

export default CommentList;
