import { HttpClient } from "@data/protocols/http";
import { GetArticleDetailsModel } from "@domain/models/get-article-details-model";
import { GetArticleDetails } from "@domain/usecases/get-article-details";
import validateResponse from "@data/protocols/http/delegate-transform-response";

export class RemoteGetArticleDetails implements GetArticleDetails {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetArticleDetailsModel>
  ) {}

  async search(): Promise<GetArticleDetailsModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
    });

    return validateResponse.validate(httpResponse);
  }
}
