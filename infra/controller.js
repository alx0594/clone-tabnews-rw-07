import { MethodNotAllowedError, InternaServerError } from "infra/error.js";

function onNoMatch(request, response) {
  const publicError = new MethodNotAllowedError();
  return response.status(publicError.statusCode).json(publicError);
}

function onError(error, request, response) {
  const publicError = new InternaServerError(error, error.status);
  return response.status(publicError.statusCode).json(publicError);
}

const controller = {
  errorHandlers: {
    onError,
    onNoMatch,
  },
};

export default controller;
