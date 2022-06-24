import { GetAllArticlesModel } from "../models/get-all-articles-model";

export interface GetAllArticles {
  search: () => Promise<GetAllArticlesModel>;
}
