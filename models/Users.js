const Mongoose = require("mongoose");
const Bcrypt = require("bcrypt");

const userSchema = new Mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    isLogin: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = Mongoose.model("users", userSchema);
