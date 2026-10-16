
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

import healthRoutes from "./routes/healthRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import notFoundHandler from "./middleware/notFoundHandler.js";
import requestId from "./middleware/requestId.js";
import requestLogger from "./middleware/requestLogger.js";

dotenv.config();

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(requestId);
app.use(requestLogger);

app.get("/", (_req, res) => {
  res.json({ message: "UNInet API is running!" });
});

app.use("/api/health", healthRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
