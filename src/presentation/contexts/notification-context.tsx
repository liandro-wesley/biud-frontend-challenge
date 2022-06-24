import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type NotificationBehaviorProps = {
  type: "success" | "info" | "warning" | "error";
  message: string;
  open: boolean;
};

type NotificationConsumerProps = {
  children: ReactNode;
};

type InitialContextProps = {
  setNotification: Dispatch<SetStateAction<NotificationBehaviorProps>>;
  notification: NotificationBehaviorProps;
};

export const NotificationContext = createContext<InitialContextProps>(
  {} as InitialContextProps
);

export function useNotification() {
  return useContext(NotificationContext);
}

export function NotificationConsumer({ children }: NotificationConsumerProps) {
  const [notification, setNotification] = useState(
    {} as NotificationBehaviorProps
  );

  const value = {
    notification,
    setNotification,
  };
  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
