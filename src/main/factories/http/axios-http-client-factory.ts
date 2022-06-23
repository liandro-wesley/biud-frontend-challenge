import { AxiosHttpClient } from "@infra/axios-http-client";

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};
