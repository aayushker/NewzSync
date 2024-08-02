import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { getNews } from "@/app/fetchNews";

interface NEWS {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const News = () => {
  const [news, setNews] = useState<NEWS[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await getNews();
        console.log("Fetched articles:", articles);
        setNews(articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news. Please try again later.");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid-container">
        {error ? (
          <p>{error}</p>
        ) : (
          news.map(
            (article, index) => (
              console.log(article.content),
              (
                <Card className="py-4 max-w-sm" key={index}>
                  <div className="flex justify-between align-middle">
                    <div>
                      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <h4 className="font-bold text-large">
                          {article.author || "Unknown Author"}
                        </h4>
                        <small className="text-default-500">
                          {article.description || "No description available"}
                        </small>
                      </CardHeader>
                    </div>
                  </div>

                  <CardBody className="overflow-visible py-2">
                    {article.urlToImage && (
                      <Image
                        alt={article.title || "News image"}
                        className="object-cover rounded-xl"
                        src={article.urlToImage}
                        width={270}
                      />
                    )}
                  </CardBody>
                </Card>
              )
            )
          )
        )}
      </div>

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 16px;
        }
      `}</style>
    </>
  );
};

export default News;
