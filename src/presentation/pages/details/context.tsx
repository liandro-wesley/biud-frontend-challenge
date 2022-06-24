import { GetArticleDetailsResult } from "@data/models/get-article-details-result";
import { GetArticleDetailsModel } from "@domain/models/get-article-details-model";
import { GetArticleDetails } from "@domain/usecases/get-article-details";
import { useNotification } from "@presentation/contexts/notification-context";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

type DetailsConsumerProps = {
  children: ReactNode;
  getArticleDetails: GetArticleDetails;
};

type InitialContextProps = {
  article: GetArticleDetailsModel;
  loading: boolean;
};

export const DetailsContext = createContext<InitialContextProps>(
  {} as InitialContextProps
);

export function useDetailsContext() {
  return useContext(DetailsContext);
}

export function DetailsConsumer({
  children,
  getArticleDetails,
}: DetailsConsumerProps) {
  const navigate = useNavigate();
  const { setNotification } = useNotification();
  const [article, setArticle] = useState<GetArticleDetailsModel>(
    {} as GetArticleDetailsResult
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const triggerToGetAllArticles = async () => {
      try {
        setLoading(true);
        const response = await getArticleDetails.search();
        setArticle(response);
      } catch (err) {
        setLoading(false);
        setNotification({
          open: true,
          type: "error",
          message: `${err} asad`,
        });
        return navigate("/");
      } finally {
        setLoading(false);
      }
    };
    triggerToGetAllArticles();
  }, [getArticleDetails]);

  const value = {
    article,
    loading,
  };
  return (
    <DetailsContext.Provider value={value}>{children}</DetailsContext.Provider>
  );
}
