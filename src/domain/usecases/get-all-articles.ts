import { GetAllArticlesModel } from "../models/get-all-articles-model";

export interface GetAllArticles {
  getAll: () => Promise<GetAllArticlesModel>;
}
