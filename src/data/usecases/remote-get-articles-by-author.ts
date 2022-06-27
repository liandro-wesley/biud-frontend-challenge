import { HttpClient } from "@data/protocols/http";
import validateResponse from "@data/protocols/http/delegate-transform-response";
import { GetArticlesByAuthorModel } from "@domain/models/get-articles-by-author-model";
import { GetArticlesByAuthor } from "@domain/usecases/get-articles-by-author";

export class RemoteGetArticlesByAuthor implements GetArticlesByAuthor {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetArticlesByAuthorModel>
  ) {}

  async search(): Promise<GetArticlesByAuthorModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
    });

    return validateResponse.validate(httpResponse);
  }
}
