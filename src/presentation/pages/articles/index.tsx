import React from "react";
import ArticlesList from "./components/ArticlesList";
import { ArticlesConsumer, ArticlesConsumerProps } from "./contex";

const Articles: React.FC<
  Pick<ArticlesConsumerProps, "articlesByAuthor" | "storage" | "allCategories">
> = ({ articlesByAuthor, storage, allCategories }) => {
  return (
    <ArticlesConsumer
      allCategories={allCategories}
      storage={storage}
      articlesByAuthor={articlesByAuthor}
    >
      <ArticlesList />
    </ArticlesConsumer>
  );
};

export default Articles;
