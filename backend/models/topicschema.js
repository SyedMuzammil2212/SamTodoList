const mongoose = require("mongoose");

const topic = new mongoose.Schema({
  name: String,
  age: Number,
  data: String,
});

module.exports = mongoose.model("topic", topic);
