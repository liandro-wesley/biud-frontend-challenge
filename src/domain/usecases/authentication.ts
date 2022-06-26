import { AuthenticationModel } from "@domain/models/authentication-model";

export type Params = {
  email: string;
  password: string;
};

export type DecodeParams = {
  token: string;
};

export interface Authentication {
  auth: (params: Params) => Promise<AuthenticationModel>;
}
