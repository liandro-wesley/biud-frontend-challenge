import Header from "@presentation/components/Header";
import DefaultLayout from "@presentation/layouts/DefaultLayout";
import React from "react";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <DefaultLayout>
        <AppRoutes />
      </DefaultLayout>
    </>
  );
};

export default App;
