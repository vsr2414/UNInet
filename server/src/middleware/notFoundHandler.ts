import type { RequestHandler } from "express";

const notFoundHandler: RequestHandler = (req, res) => {
  res.status(404).json({
    status: "error",
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
};

export default notFoundHandler;