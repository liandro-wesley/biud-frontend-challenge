import { RemoteAuthentication } from "@data/usecases/remote-authentication";
import { Authentication } from "@domain/usecases/authentication";
import { makeApiUrl } from "../http/api-url-factory";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeAuthentication = (): Authentication => {
  return new RemoteAuthentication(
    makeApiUrl("/user/authenticate/signin"),
    makeAxiosHttpClient()
  );
};
