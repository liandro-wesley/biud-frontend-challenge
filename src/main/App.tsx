import { NotificationConsumer } from "@presentation/contexts/notification-context";
import React from "react";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <NotificationConsumer>
      <AppRoutes />
    </NotificationConsumer>
  );
};

export default App;
