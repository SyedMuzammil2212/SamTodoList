const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add username name"],
    },
    email: {
      type: String,
      required: [true, "Please add your  email"],
      unique: [true, "Already taken"],
    },
    password: {
      type: String,
      required: [true, "Please Enter the password"],
    },
    picture: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
