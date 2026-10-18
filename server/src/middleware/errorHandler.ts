
import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const statusCode =
    typeof err.status === "number" &&
    err.status >= 400 &&
    err.status < 600
      ? err.status
      : typeof err.statusCode === "number" &&
          err.statusCode >= 400 &&
          err.statusCode < 600
        ? err.statusCode
        : 500;

  if (statusCode >= 500) {
    console.error(err);
  }

  res.status(statusCode).json({
    status: "error",
    message:
      statusCode === 413
        ? "Request body is too large"
        : statusCode === 400
          ? "Invalid request body"
          : statusCode === 500
            ? "Internal server error"
            : "Request failed",
  });
};

export default errorHandler;
