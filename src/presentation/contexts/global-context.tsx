import { DecodeAuthenticationResult } from "@data/models/decode-authentication-result";
import { DecodeAuthentication } from "@domain/usecases/decode-authentication";
import { LocalStorageAdapter } from "@infra/local-storage-adapter";
import React, { createContext, useContext, ReactNode, useState } from "react";

export type GlobalContextProps = {
  children: ReactNode;
  storage: LocalStorageAdapter;
  decodeToken: DecodeAuthentication;
};

type InitialContextProps = {
  loading: boolean;
  decode: () => Promise<any>;
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
      await storage.set("userProperties", {
        userProperties: response,
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
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
