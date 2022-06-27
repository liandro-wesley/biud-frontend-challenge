import { GlobalContext } from "@main/factories/contexts/global-context";
import { MakeArticles } from "@main/factories/pages/articles";
import { MakeSignin } from "@main/factories/pages/signin";
import Header from "@presentation/components/Header";
import DefaultLayout from "@presentation/layouts/DefaultLayout";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MakeDetails } from "../factories/pages/details";
import { MakeHome } from "../factories/pages/home";

const AppRoutes: React.FC = () => (
  <GlobalContext>
    <BrowserRouter>
      <Header />
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<MakeHome />} />
          <Route path="details/:slug" element={<MakeDetails />} />
          <Route path="signin" element={<MakeSignin />} />
          <Route path="my-posts" element={<MakeArticles />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  </GlobalContext>
);

export default AppRoutes;
