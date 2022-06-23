import { HttpStatusCode } from "@data/protocols/http";
import { InvalidCredentials } from "./invalid-credentials";
import { UnexpectedError } from "./unexpected-error";

export class DelegateRequestValidaion {
  constructor(
    private readonly statusCode: HttpStatusCode,
    private readonly body: any
  ) {}

  /**
   * Método usado para lidar com as respostas das requisições
   * @returns o body da request se tudo der certo, uma exceção se algo der errado
   */

  setValidation() {
    switch (this.statusCode) {
      case HttpStatusCode.ok:
        return this.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentials();
      default:
        throw new UnexpectedError();
    }
  }
}
