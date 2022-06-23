export class InvalidCredentials extends Error {
  constructor() {
    super("Acesso negado.");
    this.name = "AccessDeniedError";
  }
}
