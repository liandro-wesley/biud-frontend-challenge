import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MakeHome } from "../factories/pages/home";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MakeHome />} />
      <Route path="details/:moveId" element={<h1>...</h1>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
