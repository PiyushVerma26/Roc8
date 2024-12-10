import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    feature: String,
    date: Date,
    timeSpent: Number,
    gender: String,
    ageGroup: String,
  },
  { timestamps: true }
);

export default mongoose.model("Data", DataSchema);
