import { AuthenticationModel } from "@domain/models/authentication-model";
import { Authentication, Params } from "@domain/usecases/authentication";
import { LocalStorageAdapter } from "@infra/local-storage-adapter";
import { useGlobalContext } from "@presentation/contexts/global-context";
import { useNotification } from "@presentation/contexts/notification-context";
import React, { createContext, useContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthenticationConsumerProps = {
  children: ReactNode;
  signin: Authentication;
  storage: LocalStorageAdapter;
};

type InitialContextProps = {
  loading: boolean;
  authenticate: (params: Params) => Promise<any>;
};

export const AuthenticationContext = createContext<InitialContextProps>(
  {} as InitialContextProps
);

export function useAuthentication() {
  return useContext(AuthenticationContext);
}

export function AuthenticationConsumer({
  children,
  signin,
  storage,
}: AuthenticationConsumerProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setNotification } = useNotification();
  const { decode } = useGlobalContext();

  const authenticate = async (params: Params) => {
    try {
      setLoading(true);
      const response = await signin.auth({
        email: params.email,
        password: params.password,
      });
      storage.set("token", { token: response.token });
      await decode();
      setNotification({
        open: true,
        type: "success",
        message: "Login efetuado com sucesso!",
      });
      navigate("/");
      return response;
    } catch (err: any) {
      setLoading(false);
      setNotification({
        open: true,
        type: "error",
        message: `${err}`,
      });
    } finally {
      setLoading(false);
    }
  };

  const value = {
    loading,
    authenticate,
  };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}
