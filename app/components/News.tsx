import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link,
} from "@nextui-org/react";
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [news, setNews] = useState<NEWS[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NEWS | null>(null);

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

  const handleOpenModal = (article: NEWS) => {
    setSelectedArticle(article);
    onOpen();
  };

  return (
    <>
      <div className="grid-container">
        {error ? (
          <p>{error}</p>
        ) : (
          news.map((article, index) => (
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
              <div className="px-2 flex justify-between">
                <Button onPress={() => handleOpenModal(article)}>
                  Read more
                </Button>
                <Button>
                  <Link href={article.url} isExternal className="text-black">
                    Visit
                  </Link>
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>

      {selectedArticle && (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col py-0 pt-2">
                  {selectedArticle.title}
                </ModalHeader>
                <ModalBody>
                  <div className="max-w-sm">
                    <div className="flex justify-between align-middle">
                      <div>
                        <div className="pb-0 px-4 flex-col items-start">
                          <h4 className="text-default-600">
                            By: {selectedArticle.author || "Unknown Author"}
                          </h4>
                          <small className="text-default-500">
                            {selectedArticle.description ||
                              "No description available"}
                          </small>
                        </div>
                        <div className="flex justify-center align-middle py-2">
                             <div className="overflow-visible">
                          {selectedArticle.urlToImage && (
                            <Image
                              alt={selectedArticle.title || "News image"}
                              className="object-cover rounded-xl"
                              src={selectedArticle.urlToImage}
                              width={270}
                            />
                          )}
                        </div>
                        </div>
                       
                      </div>{" "}
                    </div>

                    <p>{selectedArticle.content}</p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button>
                    <Link
                      href={selectedArticle.url}
                      isExternal
                      className="text-black"
                    >
                      Visit
                    </Link>
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}

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
