import { LocalStorageAdapter } from "@infra/local-storage-adapter";
import {
  GlobalContextConsumer,
  GlobalContextProps,
} from "@presentation/contexts/global-context";
import React from "react";
import { makeDecodeAuthentication } from "../usecases/remote-decode-token-authentication";

export const GlobalContext: React.FC<Pick<GlobalContextProps, "children">> = ({
  children,
}) => {
  return (
    <GlobalContextConsumer
      storage={new LocalStorageAdapter()}
      decodeToken={makeDecodeAuthentication()}
    >
      {children}
    </GlobalContextConsumer>
  );
};
