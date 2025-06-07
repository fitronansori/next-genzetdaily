import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type CommentItemType = {
  id: number;
  author_name: string;
  author_avatar: string;
  content: string;
  article_title: string;
  created_date: string;
  status: "approved" | "pending";
};

type CommentItemProps = {
  comment: CommentItemType;
};

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <div className="flex gap-4 p-4 border-2 border-border rounded-base bg-background hover:bg-muted/30 transition-colors">
      {/* Avatar */}
      <Avatar>
        <AvatarImage src={comment.author_avatar} />
        <AvatarFallback>
          {comment.author_name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>

      {/* Comment Content */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-foreground">
              {comment.author_name}
            </span>
            <span
              className={`px-2 py-1 text-xs font-bold border-2 border-border rounded ${
                comment.status === "approved"
                  ? "bg-chart-4 text-main-foreground"
                  : "bg-chart-2 text-main-foreground"
              }`}
            >
              {comment.status === "approved" ? "Approved" : "Pending"}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            {comment.created_date}
          </span>
        </div>

        <p className="text-foreground leading-relaxed">{comment.content}</p>

        <div className="text-sm text-muted-foreground">
          On: <span className="font-medium">{comment.article_title}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {comment.status === "pending" && (
            <>
              <Button size="sm" variant="default">
                Approve
              </Button>
              <Button size="sm" variant="neutral">
                Reject
              </Button>
            </>
          )}
          <Button size="sm" variant="neutral">
            Reply
          </Button>
          <Button size="sm" variant="neutral">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
