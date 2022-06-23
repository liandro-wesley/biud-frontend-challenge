import { RemoteGetAllArticles } from "@data/usecases/remote-get-all-articles";
import { GetAllArticles } from "@domain/usecases/get-all-articles";
import { makeApiUrl } from "../http/api-url-factory";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeGetAllArticles = (): GetAllArticles => {
  return new RemoteGetAllArticles(
    makeApiUrl("/articles"),
    makeAxiosHttpClient()
  );
};
