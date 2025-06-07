import {
  CommentHeader,
  CommentStats,
  CommentList,
} from "@/components/layouts/dashboard/Comment";
import { dashboard_comments_data } from "@/constants/data";

const CommentDashboardPage = () => {
  return (
    <div className="space-y-6">
      <CommentHeader />

      <CommentStats
        total_comments={89}
        pending_review={12}
        approved={77}
        spam_detected={0}
      />

      <CommentList comments_data={dashboard_comments_data} />
    </div>
  );
};

export default CommentDashboardPage;
