
import type { RequestHandler } from "express";

const requestLogger: RequestHandler = (req, res, next) => {
  const id = res.locals.requestId ?? "no-request-id";

  console.log(
    `[${new Date().toISOString()}] [${id}] ${req.method} ${req.originalUrl}`
  );

  next();
};

export default requestLogger;
