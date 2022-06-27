import { makeLocalStorageAdapter } from "@main/factories/cache/local-storage-adapter-factory";
import { makeRemoteGetAllCategory } from "@main/factories/usecases/remote-get-all-categories-factory";
import { makeRemoteGetArticlesByAuthor } from "@main/factories/usecases/remote-get-articles-by-author-factory";
import Articles from "@presentation/pages/articles";
import React from "react";

export const MakeArticles: React.FC = () => {
  const storage = makeLocalStorageAdapter();
  const author =
    storage.get("userProperties") !== null
      ? storage.get("userProperties").userProperties.id
      : "";
  return (
    <Articles
      storage={makeLocalStorageAdapter()}
      allCategories={makeRemoteGetAllCategory()}
      articlesByAuthor={makeRemoteGetArticlesByAuthor(author)}
    />
  );
};
