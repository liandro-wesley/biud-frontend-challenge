import { HttpClient } from "@data/protocols/http";
import { GetArticleDetailsModel } from "@domain/models/get-article-details-model";
import { GetArticleDetails } from "@domain/usecases/get-article-details";

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

    return httpResponse.body;
  }
}
