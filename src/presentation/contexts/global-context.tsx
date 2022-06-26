import { DecodeAuthenticationModel } from "@domain/models/decode-authentication-model";
import { DecodeAuthentication } from "@domain/usecases/decode-authentication";
import { LocalStorageAdapter } from "@infra/local-storage-adapter";
import React, { createContext, useContext, ReactNode, useState } from "react";
import { NotificationConsumer } from "./notification-context";

export type GlobalContextProps = {
  children: ReactNode;
  storage: LocalStorageAdapter;
  decodeToken: DecodeAuthentication;
};

type InitialContextProps = {
  loading: boolean;
  decode: () => Promise<DecodeAuthenticationModel | undefined>;
  storage: LocalStorageAdapter;
};

const GlobalContext = createContext<InitialContextProps>(
  {} as InitialContextProps
);

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function GlobalContextConsumer({
  children,
  decodeToken,
  storage,
}: GlobalContextProps) {
  const [loading, setLoading] = useState(false);

  const decode = async () => {
    try {
      setLoading(true);
      const token = storage.get("token");
      const response = await decodeToken.decode(token);
      storage.set("userProperties", {
        userProperties: {
          id: response.id,
          email: response.email,
          name: response.name,
        },
      });
      return response;
    } catch (err) {
      setLoading(false);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    decode,
    loading,
    storage,
  };
  return (
    <GlobalContext.Provider value={value}>
      <NotificationConsumer>{children}</NotificationConsumer>
    </GlobalContext.Provider>
  );
}
