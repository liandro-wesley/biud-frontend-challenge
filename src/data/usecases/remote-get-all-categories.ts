import { HttpClient } from "@data/protocols/http";
import validateResponse from "@data/protocols/http/delegate-transform-response";
import { GetAllCategories } from "@domain/usecases/get-all-categories";
import { GetAllArticlesModel } from "@domain/models/get-all-articles-model";

export class RemoteGetAllCategories implements GetAllCategories {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetAllArticlesModel>
  ) {}

  async search(): Promise<GetAllArticlesModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
    });

    return validateResponse.validate(httpResponse);
  }
}
