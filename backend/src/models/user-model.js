const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },

    email: {
      type: String,
      required: [true, "Email ID is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    todos: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Todo",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
