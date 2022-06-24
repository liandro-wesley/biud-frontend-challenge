import { GetAllArticlesModel } from "@domain/models/get-all-articles-model";
import { GetAllArticles } from "@domain/usecases/get-all-articles";
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
  const [articles, setArticles] = useState<GetAllArticlesModel>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const triggerToGetAllArticles = async () => {
    try {
      setLoading(true);
      const response = await getAllArticles.getAll();
      setArticles(response);
    } catch (err) {
      setLoading(false);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    triggerToGetAllArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    articles,
    loading,
  };
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
