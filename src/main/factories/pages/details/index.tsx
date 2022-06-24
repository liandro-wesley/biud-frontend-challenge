import Details from "@presentation/pages/details";
import React from "react";
import { useParams } from "react-router-dom";
import { makeRemoteGetArticleDetails } from "../../usecases/remote-get-article-details-factory";

export const MakeDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);
  return <Details getArticleDetails={makeRemoteGetArticleDetails(`${slug}`)} />;
};
