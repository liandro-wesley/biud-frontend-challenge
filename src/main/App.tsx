import Header from "@presentation/components/Header";
import { NotificationConsumer } from "@presentation/contexts/notification-context";
import DefaultLayout from "@presentation/layouts/DefaultLayout";
import React from "react";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <NotificationConsumer>
      <Header />
      <DefaultLayout>
        <AppRoutes />
      </DefaultLayout>
    </NotificationConsumer>
  );
};

export default App;
