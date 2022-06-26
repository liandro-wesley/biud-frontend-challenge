import { LocalStorageAdapter } from "@infra/local-storage-adapter";
import { makeAuthentication } from "@main/factories/usecases/remote-authentication";
import Signin from "@presentation/pages/signin";
import React from "react";

export const MakeSignin: React.FC = () => {
  return (
    <Signin storage={new LocalStorageAdapter()} signin={makeAuthentication()} />
  );
};
