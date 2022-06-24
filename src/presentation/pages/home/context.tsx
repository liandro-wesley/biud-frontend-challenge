import { GetAllArticlesModel } from "@domain/models/get-all-articles-model";
import { GetAllArticles } from "@domain/usecases/get-all-articles";
import { useNotification } from "@presentation/contexts/notification-context";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type HomeConsumerProps = {
  children: ReactNode;
  getAllArticles: GetAllArticles;
};

type InitialContextProps = {
  articles: GetAllArticlesModel;
  loading: boolean;
};

export const HomeContext = createContext<InitialContextProps>(
  {} as InitialContextProps
);

export function useHomeContext() {
  return useContext(HomeContext);
}

export function HomeConsumer({ children, getAllArticles }: HomeConsumerProps) {
  const { setNotification } = useNotification();
  const [articles, setArticles] = useState<GetAllArticlesModel>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const triggerToGetAllArticles = async () => {
      try {
        setLoading(true);
        const response = await getAllArticles.search();
        setArticles(response);
      } catch (err) {
        setLoading(false);
        setNotification({
          open: true,
          type: "error",
          message: `${err}`,
        });
      } finally {
        setLoading(false);
      }
    };
    triggerToGetAllArticles();
  }, [getAllArticles]);

  const value = {
    articles,
    loading,
  };
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
