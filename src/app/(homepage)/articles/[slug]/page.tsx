import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ArticleAuthor from "@/components/layouts/homepage/Articles/ArticleAuthor";
import ArticleSocialShare from "@/components/layouts/homepage/Articles/ArticleSocialShare";
import ArticleRelated from "@/components/layouts/homepage/Articles/ArticleRelated";

const ArticlePage = () => {
  // Static article data for UI demonstration
  const article = {
    id: 1,
    title: "iPhone 16 Bocor Lagi! Fitur AI-nya Bikin Speechless, Sih",
    excerpt:
      "Rumor iPhone 16 yang bakal drop tahun depan, guys. Katanya AI features-nya next level banget, auto mindblown!",
    category: "Tech & Gadget",
    read_time: "8 min read",
    image_url: "/images/placeholder.webp",
    is_trending: true,
    views: "2.3M",
    published_date: "2 jam lalu",
    author: {
      name: "Sarah Gen Z",
      avatar: "/images/placeholder.webp",
      bio: "Tech enthusiast yang selalu update sama gadget terbaru!",
    },
  };

  const related_articles = [
    {
      id: 2,
      title: "Samsung Galaxy S25 Ultra Specs Leaked!",
      image_url: "/images/placeholder.webp",
      category: "Tech",
      read_time: "5 min read",
    },
    {
      id: 3,
      title: "Google Pixel 9 Review: Worth It or Not?",
      image_url: "/images/placeholder.webp",
      category: "Tech",
      read_time: "6 min read",
    },
    {
      id: 4,
      title: "Best Budget Smartphones 2025",
      image_url: "/images/placeholder.webp",
      category: "Tech",
      read_time: "4 min read",
    },
  ];

  return (
    <div className="min-h-screen py-10 lg:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        {/* Article Header */}
        <div className="mb-8">
          {/* Category & Meta Info */}
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-chart-1 text-foreground font-bold border-2 border-border px-3 py-1 text-sm">
              {article.category}
            </span>
            {article.is_trending && (
              <span className="bg-main text-main-foreground font-bold border-2 border-border px-3 py-1 text-sm rotate-1">
                🔥 TRENDING
              </span>
            )}
          </div>
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
            {article.title}
          </h1>
          {/* Excerpt */}
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {article.excerpt}
          </p>{" "}
          {/* Author & Meta */}
          <ArticleAuthor
            author={article.author}
            published_date={article.published_date}
            read_time={article.read_time}
            views={article.views}
          />
        </div>
        {/* Featured Image */}
        <div className="aspect-video relative overflow-hidden bg-chart-2 rounded-lg border-2 border-border mb-8">
          <Image
            src={article.image_url}
            alt={article.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="leading-relaxed space-y-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            necessitatibus commodi maxime molestias, dignissimos illo eligendi,
            quae ex ut alias laudantium dolores voluptatum corporis dolore?
            Nulla libero eveniet dolore distinctio aspernatur nemo mollitia iure
            ipsa. Alias distinctio quae repudiandae veritatis similique odit?
            Deserunt error, pariatur quod, soluta facilis illo culpa ad iusto
            non neque ipsa odio maiores, itaque qui veniam aliquam nemo eos? Id
            illum quod, commodi numquam possimus nobis blanditiis, dolor
            asperiores odit pariatur quam? Consequuntur hic unde obcaecati quae
            esse totam dicta quasi debitis quidem! Iste accusantium eos sed
            delectus laboriosam provident quisquam perferendis quo, ipsum
            debitis architecto! Distinctio impedit laborum eos hic! Nobis iste,
            laudantium suscipit in iusto architecto ipsam, facere similique, at
            voluptatem ab dicta. Soluta totam dignissimos sunt, atque eius
            itaque fugit fugiat rem quisquam. Illo recusandae magni ratione
            quidem. Eligendi minima suscipit ab repellendus excepturi iure? At
            iusto, non magni repellendus mollitia dolorum odit laborum officia
            aut consequatur iste blanditiis neque voluptatibus minima modi
            distinctio dolorem est cum impedit sit autem voluptate laboriosam?
            Eum earum iusto harum eveniet voluptatibus fugiat fugit repellendus
            iure nemo porro id, maiores reprehenderit, est odio doloremque
            molestiae, veritatis repellat. Quia ab obcaecati dolorem vitae sed,
            et, illum ipsum eum labore atque eius similique est. Maiores
            laudantium fugit aliquid saepe rerum autem commodi dicta recusandae
            praesentium, est quisquam ipsum sit dignissimos veniam illum aut
            incidunt molestias fugiat quia et consequuntur alias. Placeat
            repudiandae laudantium assumenda ut quibusdam sit rem temporibus ab
            in modi minus maxime fugiat eaque dicta sequi eligendi tenetur est
            saepe, atque tempora impedit ad! Amet vel praesentium ullam, ratione
            inventore fugiat. Neque, atque. Dolor delectus ducimus et sunt
            sequi? Ullam voluptates ipsum sunt fuga officia voluptatem, magnam
            ad. Laboriosam consequatur at tempore debitis beatae unde
            praesentium sit sequi, voluptatibus non esse dolore, vel est eum ex
            impedit.
          </div>
        </div>
        {/* Social Share & Actions */}
        <ArticleSocialShare /> {/* Related Articles */}
        <ArticleRelated related_articles={related_articles} />
        {/* Back to Articles */}
        <div className="text-center mb-12">
          <Button
            asChild
            size="lg"
            className="rotate-1 hover:rotate-0 transition-transform"
          >
            <Link href="/articles">← Kembali ke Semua Artikel</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
