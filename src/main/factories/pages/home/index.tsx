import Home from "@presentation/pages/home";
import React from "react";
import { makeGetAllArticles } from "../../usecases/remote-get-all-articles-factory";

export const MakeHome: React.FC = () => {
  return <Home getAllArticles={makeGetAllArticles()} />;
};
