const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  address: String,
  phonenumbers: [String],
});

const User_Info = mongoose.model("User_Info", userSchema);

module.exports = User_Info;
