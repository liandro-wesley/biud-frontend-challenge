import { Authentication } from "@domain/usecases/authentication";
import { LocalStorageAdapter } from "@infra/local-storage-adapter";
import React from "react";
import Form from "./components/Form";
import { AuthenticationConsumer } from "./context";

type SignInProps = {
  signin: Authentication;
  storage: LocalStorageAdapter;
};

const Signin: React.FC<SignInProps> = ({ signin, storage }) => {
  return (
    <AuthenticationConsumer storage={storage} signin={signin}>
      <Form />
    </AuthenticationConsumer>
  );
};

export default Signin;
