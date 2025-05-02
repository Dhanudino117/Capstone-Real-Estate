import express from "express";
const router = express.Router();

import {
  createProperty,
  getAllProperties,
  updateProperty,
} from "../controllers/properties.model.js";

router.get("/properties",  getAllProperties);
router.post("/properties",  createProperty);
router.put('/update/:id', updateProperty )

export default router;
