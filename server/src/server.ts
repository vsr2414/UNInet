import healthRoutes from "./routes/healthRoutes.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorHandler.js";
import requestLogger from "./middleware/requestLogger.js";
import requestId from "./middleware/requestId.js";
import notFoundHandler from "./middleware/notFoundHandler.js";
import helmet from "helmet";

dotenv.config();

const app = express();

const portValue = process.env.PORT;
const PORT = portValue === undefined ? 5000 : Number(portValue);

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535");
}

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);
app.use(express.json({ limit: "10kb" }));
app.use(requestLogger);

app.get("/", (_req, res) => {
  res.json({ message: "UNInet API is running!" });
});

app.use("/api/health", healthRoutes);

// Handle requests to unknown routes
app.use(notFoundHandler);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`UNInet server running on port ${PORT}`);
});