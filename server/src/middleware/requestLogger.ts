
import type { RequestHandler } from "express";

const requestLogger: RequestHandler = (req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
};

export default requestLogger;
