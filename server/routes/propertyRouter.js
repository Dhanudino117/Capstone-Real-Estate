import express from "express";
const router = express.Router();

import {
  createProperty,
  getAllProperties,
} from "../controllers/properties.model.js";
import { verifyToken } from "../middleware/verifyToken.js";

router.get("/properties", verifyToken, getAllProperties);
router.post("/properties", verifyToken, createProperty);

export default router;
