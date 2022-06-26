import { HttpClient } from "@data/protocols/http";
import { AuthenticationModel } from "@domain/models/authentication-model";
import { Authentication, Params } from "@domain/usecases/authentication";
import validateResponse from "@data/protocols/http/delegate-transform-response";

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<AuthenticationModel>
  ) {}

  async auth(params: Params): Promise<AuthenticationModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "post",
      body: params,
    });

    return validateResponse.validate(httpResponse);
  }
}
