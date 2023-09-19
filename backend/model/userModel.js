const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username required"],
      unique: [true, "uniques username required"],
    },
    email: {
      type: String,
      required: [true, "email required"],
      unique: [true, "uniques email required"],
    },
    password: {
      type: String,
      required: [true, "password required"],
      unique: [true, "uniques password required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
