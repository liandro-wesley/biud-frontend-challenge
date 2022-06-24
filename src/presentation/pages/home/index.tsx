import React from "react";
import { GetAllArticles } from "@domain/usecases/get-all-articles";
import { HomeConsumer } from "./context";
import CardList from "./components/CardList";

type HomeProps = {
  getAllArticles: GetAllArticles;
};

const Home: React.FC<HomeProps> = ({ getAllArticles }) => {
  return (
    <HomeConsumer getAllArticles={getAllArticles}>
      <CardList />
    </HomeConsumer>
  );
};

export default Home;
