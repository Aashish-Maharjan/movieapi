const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  duration: { type: Number, required: true },
  year: { type: Number, required: true },
  rating: { type: Number, required: true },
});

module.exports = mongoose.model("Movie", MovieSchema);
