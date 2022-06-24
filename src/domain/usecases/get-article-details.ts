import { GetArticleDetailsModel } from "@domain/models/get-article-details-model";

export interface GetArticleDetails {
  search: () => Promise<GetArticleDetailsModel>;
}
