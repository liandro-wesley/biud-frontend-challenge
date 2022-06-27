export type Params = {
  author: string;
};

export interface GetArticlesByAuthor {
  search: () => Promise<any>;
}
