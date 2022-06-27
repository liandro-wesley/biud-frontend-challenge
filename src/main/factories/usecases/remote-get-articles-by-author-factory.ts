import { RemoteGetArticlesByAuthor } from "@data/usecases/remote-get-articles-by-author";
import { GetArticlesByAuthor } from "@domain/usecases/get-articles-by-author";
import { makeAuthorizeHttpClientDecorator } from "../decorators/authorize-http-client-decorator-factory";
import { makeApiUrl } from "../http/api-url-factory";

export const makeRemoteGetArticlesByAuthor = (
  author: string
): GetArticlesByAuthor => {
  return new RemoteGetArticlesByAuthor(
    makeApiUrl(`/article/my-posts/${author}`),
    makeAuthorizeHttpClientDecorator()
  );
};
