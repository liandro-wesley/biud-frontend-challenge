import { makeLocalStorageAdapter } from "@main/factories/cache/local-storage-adapter-factory";
import { makeAuthentication } from "@main/factories/usecases/remote-authentication-factory";
import Signin from "@presentation/pages/signin";
import React from "react";

export const MakeSignin: React.FC = () => {
  return (
    <Signin storage={makeLocalStorageAdapter()} signin={makeAuthentication()} />
  );
};
