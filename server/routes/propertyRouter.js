import express from "express";
const router = express.Router();

import {
  createProperty,
  getAllProperties,
} from "../controllers/properties.model.js";

router.get("/properties", getAllProperties);
router.post("/properties", createProperty);

export default router;
