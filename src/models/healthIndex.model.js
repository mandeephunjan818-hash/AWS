import mongoose from "mongoose";

const healthIndexSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  metaTitle: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
  metaKeywords: {
    type: String,
  },
});

const HealthIndex =
  mongoose.models.HealthIndex ||
  mongoose.model("HealthIndex", healthIndexSchema);

export default HealthIndex;
