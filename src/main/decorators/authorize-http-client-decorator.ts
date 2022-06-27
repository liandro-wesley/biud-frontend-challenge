import { GetStorage } from "@data/protocols/cache/get-storage";
import { HttpClient, HttpRequest, HttpResponse } from "@data/protocols/http";

export class AuthorizeHttpClientDecorator implements HttpClient {
  constructor(
    private readonly getStorage: GetStorage,
    private readonly httpClient: HttpClient
  ) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const token = this.getStorage.get("token").token;
    if (token !== null) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          "x-access-token": token,
        }),
      });
    }
    const httpResponse = await this.httpClient.request(data);
    return httpResponse;
  }
}
