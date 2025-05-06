import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  googleAuth,
  Login,
  Logout,
  Signup,
  updateUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.put("/update/:id", updateUser);
router.post("/google", googleAuth)

export default router;
