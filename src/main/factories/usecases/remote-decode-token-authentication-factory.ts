import { RemoteDecodeAuthentication } from "@data/usecases/remote-decode-authentication";
import { DecodeAuthentication } from "@domain/usecases/decode-authentication";
import { makeApiUrl } from "../http/api-url-factory";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeDecodeAuthentication = (): DecodeAuthentication => {
  return new RemoteDecodeAuthentication(
    makeApiUrl("/user/authenticate/decode"),
    makeAxiosHttpClient()
  );
};
