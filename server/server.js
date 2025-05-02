import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./connection/connectDb.js";
import userRouter from "./routes/user.route.js";
import authRoutes from "./routes/auth.router.js";
import propertyRoutes from "./routes/propertyRouter.js";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
ConnectDb();

app.use("/api/user", userRouter);
app.use("/api/auth", authRoutes);
app.use("/api", propertyRoutes);

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

app.get("/", (req, res) => {
  res.send("Server is running on the post 5000");
});

app.listen(port, () => {
  console.log(`Port is running on the http://localhost:${port}`);
});
