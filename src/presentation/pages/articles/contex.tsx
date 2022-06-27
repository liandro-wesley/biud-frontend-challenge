import { GetAllCategoriesModel } from "@domain/models/get-all-categories-model";
import { GetArticlesByAuthorModel } from "@domain/models/get-articles-by-author-model";
import { GetAllCategories } from "@domain/usecases/get-all-categories";
import { GetArticlesByAuthor } from "@domain/usecases/get-articles-by-author";
import { LocalStorageAdapter } from "@infra/local-storage-adapter";
import { useNotification } from "@presentation/contexts/notification-context";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

export type ArticlesConsumerProps = {
  children: ReactNode;
  articlesByAuthor: GetArticlesByAuthor;
  allCategories: GetAllCategories;
  storage: LocalStorageAdapter;
};

type InitialContextProps = {
  loading: boolean;
  articles: GetArticlesByAuthorModel;
  categories: GetAllCategoriesModel;
};

export const ArticlesContext = createContext<InitialContextProps>(
  {} as InitialContextProps
);

export function useArticles() {
  return useContext(ArticlesContext);
}

export function ArticlesConsumer({
  children,
  storage,
  articlesByAuthor,
  allCategories,
}: ArticlesConsumerProps) {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<GetArticlesByAuthorModel>([]);
  const [categories, setCategories] = useState<GetAllCategoriesModel>(
    {} as GetAllCategoriesModel
  );
  const { setNotification } = useNotification();
  const navigate = useNavigate();

  const getAllCategories = async () => {
    try {
      const categoriesResponse = await allCategories.search();
      setCategories({ categories: categoriesResponse });
      return categoriesResponse;
    } catch (error) {
      setLoading(false);
      setNotification({
        open: true,
        type: "error",
        message: `${error}`,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = storage.get("token");

    if (!token) {
      navigate("/signin");
      setNotification({
        open: true,
        type: "warning",
        message:
          "Para acessar a página de minhas publicações você precisa estar autenticado!",
      });
    } else {
      const getArticlesByAuthor = async () => {
        try {
          setLoading(true);
          const articlesResponse = await articlesByAuthor.search();
          await getAllCategories();
          setArticles(articlesResponse);
          return articlesResponse;
        } catch (error) {
          setLoading(false);
          setNotification({
            open: true,
            type: "error",
            message: `${error}`,
          });
        } finally {
          setLoading(false);
        }
      };

      getArticlesByAuthor();
    }
  }, []);

  const value = {
    loading,
    articles,
    categories,
  };
  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
}
