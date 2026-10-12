import healthRoutes from "./routes/healthRoutes.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "UNInet API is running!" });
});

app.use("/api/health", healthRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`UNInet server running on port ${PORT}`);
});
