import { RemoteGetArticleDetails } from "@data/usecases/remote-get-article-details";
import { GetArticleDetails } from "@domain/usecases/get-article-details";
import { makeApiUrl } from "../http/api-url-factory";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeRemoteGetArticleDetails = (
  slug: string
): GetArticleDetails => {
  return new RemoteGetArticleDetails(
    makeApiUrl(`/article/details/${slug}`),
    makeAxiosHttpClient()
  );
};
