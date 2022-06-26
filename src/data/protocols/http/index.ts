type HttpRequestHeaders = {
  [key: string]: string;
};

export type HttpRequest = {
  url: string;
  method: HtppMethod;
  body?: any;
  params?: any;
  headers?: HttpRequestHeaders;
};

export type HtppMethod = "get" | "post" | "put" | "delete";

export enum HttpStatusCode {
  ok = 200,
  created = 201,
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body: T;
};

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}
