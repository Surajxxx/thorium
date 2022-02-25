const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: String,
    age: Number,
    gender: {
      type: String,
      enum: ["Male", "Female", "others"],
      required: true,
    },
    mobile: {
      type: String,
      unique: true,
      required: true,
    },
    isIndian: Boolean,
    Cars: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema )