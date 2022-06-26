import { HttpClient } from "@data/protocols/http";
import validateResponse from "@data/protocols/http/delegate-transform-response";
import {
  DecodeAuthentication,
  Params,
} from "@domain/usecases/decode-authentication";
import { DecodeAuthenticationModel } from "@domain/models/decode-authentication-model";

export class RemoteDecodeAuthentication implements DecodeAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<DecodeAuthenticationModel>
  ) {}

  async decode(params: Params): Promise<DecodeAuthenticationModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "post",
      body: params,
    });

    return validateResponse.validate(httpResponse);
  }
}
