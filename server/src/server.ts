
import app from "./app.js";

const portValue = process.env.PORT;
const PORT = portValue === undefined ? 5000 : Number(portValue);

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535");
}

app.listen(PORT, () => {
  console.log(`UNInet server running on port ${PORT}`);
});
