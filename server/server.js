import express from "express";
import dotenv from "dotenv/config";
import ConnectDb from "./connection/connectDb.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
ConnectDb()
app.get("/", (req, res) => {
  res.send("Hello, Dino! Your server using ES Modules is running 🚀");
});

app.listen(port, () => {
  console.log(`Port is running on the http://localhost:${port}`);
});
