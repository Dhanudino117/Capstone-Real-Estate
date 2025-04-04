import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello, Dino! Your server using ES Modules is running 🚀");
});




export default router;