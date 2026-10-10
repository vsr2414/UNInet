
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "UNInet API is running!" });
});

app.listen(PORT, () => {
  console.log(`UNInet server running on port ${PORT}`);
});
