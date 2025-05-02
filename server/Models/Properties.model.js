import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    address: { type: String, required: true },
    regularprice: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    furnished: { type: Boolean, required: true },
    type: { type: String, required: true },
    parking: { type: Boolean, required: true },
    offer: { type: Boolean, required: true },
    location: { type: String, required: true },
    images: { type: Array, required: true },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", PropertySchema);

export default Listing;
