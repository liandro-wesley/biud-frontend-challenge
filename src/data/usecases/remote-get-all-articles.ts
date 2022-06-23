import { GetAllArticles } from "@domain/usecases/get-all-articles";
import { HttpClient } from "@data/protocols/http";
import { GetAllArticlesModel } from "@domain/models/get-all-articles-model";

export class RemoteGetAllArticles implements GetAllArticles {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<GetAllArticlesModel>
  ) {}

  async getAll(): Promise<GetAllArticlesModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
    });

    return httpResponse.body;
  }
}
