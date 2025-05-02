import Listing from "../Models/Properties.model.js";
import { validationResult } from "express-validator";

// To get All the properties
export const getAllProperties = async (req, res, next) => {
  try {
    const properties = await Listing.find();
    res.status(200).json({
      success: true,
      count: properties.length,
      data: properties,
    });
  } catch (error) {
    next(error);
  }
};

// Database read-write - createproperty

export const createProperty = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const property = new Listing(req.body);
    const savedProperty = await property.save();
    res.status(201).json({
      success: true,
      data: savedProperty,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProperty = async (req, res, next) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedProperty = await Listing.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedProperty) {
      return res
        .status(404)
        .json({ success: false, message: "Property not found" });
    }

    res.status(200).json({
      success: true,
      message: "Property updated successfully",
      data: updatedProperty,
    });
  } catch (error) {
    next(error);
  }
};
