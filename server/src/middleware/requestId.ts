
import { randomUUID } from "node:crypto";
import type { RequestHandler } from "express";

const requestId: RequestHandler = (_req, res, next) => {
  const id = randomUUID();

  res.locals.requestId = id;
  res.setHeader("X-Request-ID", id);

  next();
};

export default requestId;
