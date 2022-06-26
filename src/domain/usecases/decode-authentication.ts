import { DecodeAuthenticationModel } from "@domain/models/decode-authentication-model";

export type Params = {
  token: string;
};

export interface DecodeAuthentication {
  decode: (params: Params) => Promise<DecodeAuthenticationModel>;
}
