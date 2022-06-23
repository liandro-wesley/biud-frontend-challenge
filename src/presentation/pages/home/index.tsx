import React from "react";
import { GetAllArticles } from "@domain/usecases/get-all-articles";

type HomeProps = {
  getAllArticles: GetAllArticles;
};

const Home: React.FC<HomeProps> = ({ getAllArticles }) => {
  return <h1>Lista todos os posts</h1>;
};

export default Home;
