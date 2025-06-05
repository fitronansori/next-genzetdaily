import Image from "next/image";

interface Author {
  name: string;
  avatar: string;
  bio: string;
}

interface ArticleAuthorProps {
  author: Author;
  published_date: string;
  read_time: string;
  views: string;
}

const ArticleAuthor = ({
  author,
  published_date,
  read_time,
  views,
}: ArticleAuthorProps) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
      <div className="flex items-center gap-3">
        <Image
          src={author.avatar}
          alt={author.name}
          width={48}
          height={48}
          className="rounded-full border-2 border-border"
        />
        <div>
          <p className="font-bold text-foreground">{author.name}</p>
          <p className="text-sm text-muted-foreground">{author.bio}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>📅 {published_date}</span>
        <span>⏱️ {read_time}</span>
        <span>👀 {views}</span>
      </div>
    </div>
  );
};

export default ArticleAuthor;
