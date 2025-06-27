export class MethodNotAllowedError extends Error {
  constructor() {
    super("Método HTTP não permitido.");
    this.name = "MethodNotAllowed";
    this.action = "Verificar método HTTP utilizado";
    this.statusCode = 405;
  }

  toJSON() {
    return {
      name: this.name,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}

export class InternaServerError extends Error {
  constructor({ cause, statusCode }) {
    super("Um erro inesperado ocorreu.", {
      cause,
    });
    this.name = "InternaServerError";
    this.action = "Contatar a equipe de suporte.";
    this.statusCode = statusCode || 500;
  }

  toJSON() {
    return {
      name: this.name,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
