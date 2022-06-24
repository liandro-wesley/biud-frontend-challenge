import Header from "@presentation/components/Header";
import DefaultLayout from "@presentation/layouts/DefaultLayout";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MakeHome } from "../factories/pages/home";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Header />
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<MakeHome />} />
        <Route path="details/:moveId" element={<h1>...</h1>} />
      </Routes>
    </DefaultLayout>
  </BrowserRouter>
);

export default AppRoutes;
