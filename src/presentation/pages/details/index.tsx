import React from "react";
import { GetArticleDetails } from "@domain/usecases/get-article-details";
import { DetailsConsumer } from "./context";
import ReadPost from "./ReadPost";

type HomeProps = {
  getArticleDetails: GetArticleDetails;
};

const Details: React.FC<HomeProps> = ({ getArticleDetails }) => {
  return (
    <DetailsConsumer getArticleDetails={getArticleDetails}>
      <ReadPost />
    </DetailsConsumer>
  );
};

export default Details;
