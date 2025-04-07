import express from "express";
import dotenv from "dotenv/config";
import ConnectDb from "./connection/connectDb.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./controllers/auth.controller.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
ConnectDb();

app.use("/api/user", userRouter);
app.use("/api/auth/", authRouter);
// error handling
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port, () => {
  console.log(`Port is running on the http://localhost:${port}`);
});
