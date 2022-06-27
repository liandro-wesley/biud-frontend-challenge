import { AuthorizeHttpClientDecorator } from "@main/decorators/authorize-http-client-decorator";
import { makeAxiosHttpClient } from "@main/factories/http/axios-http-client-factory";
import { HttpClient } from "@data/protocols/http";
import { LocalStorageAdapter } from "@infra/local-storage-adapter";

export const makeAuthorizeHttpClientDecorator = (): HttpClient => {
  return new AuthorizeHttpClientDecorator(
    new LocalStorageAdapter(),
    makeAxiosHttpClient()
  );
};
