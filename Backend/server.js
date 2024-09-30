import express from "express";
import cors from "cors";
const app = express();
const PORT = 8000;

app.use(cors());

const server = app.listen(PORT, () => {
  console.log(`Backend is running on ${PORT}`);
});
