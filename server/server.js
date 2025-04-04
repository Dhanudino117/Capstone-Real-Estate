import express from "express";
import dotenv from "dotenv/config";
import ConnectDb from "./connection/connectDb.js";
import userRouter from "./routes/user.route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
ConnectDb();

app.use("/api/user", userRouter);


app.listen(port, () => {
  console.log(`Port is running on the http://localhost:${port}`);
});
