import { articles } from "@/constants/data";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ArticleProps {
  id: number;
  title: string;
  imageUrl: string;
}

const Article: React.FC<{ article: ArticleProps }> = ({ article }) => {
  return (
    <div key={article.id} className="space-y-4">
      <Image
        src={article.imageUrl}
        alt={article.imageUrl}
        width={330}
        height={325}
      />
      <div className="space-y-2">
        <p className="font-semibold text-lg">{article.title}</p>
        <span className="text-xs font-medium flex items-center flex-row gap-x-1 underline">
          Read more <ArrowRight size={14} />
        </span>
      </div>
    </div>
  );
};

const LatestArticles: React.FC = () => {
  return (
    <section className="h-[80vh]">
      <MaxWidthWrapper className="px-20 py-10 space-y-10">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-semibold">Latest Articles</h3>
          <span>View more</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {articles.map((article: ArticleProps) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default LatestArticles;
