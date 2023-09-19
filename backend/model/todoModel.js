const mongoose = require("mongoose");

const todoModel = mongoose.Schema(
  {
    title: {
      type: String,
      unique: [true, "unique title required"],
      required: [true, "title required"],
    },
    description: {
      type: String,
      unique: [true, "unique description required"],
      required: [true, "description required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("todo", todoModel);
