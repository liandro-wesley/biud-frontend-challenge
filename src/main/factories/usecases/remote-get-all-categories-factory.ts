import { RemoteGetAllArticles } from "@data/usecases/remote-get-all-articles";
import { GetAllCategories } from "@domain/usecases/get-all-categories";
import { makeAuthorizeHttpClientDecorator } from "../decorators/authorize-http-client-decorator-factory";
import { makeApiUrl } from "../http/api-url-factory";

export const makeRemoteGetAllCategory = (): GetAllCategories => {
  return new RemoteGetAllArticles(
    makeApiUrl("/category"),
    makeAuthorizeHttpClientDecorator()
  );
};
