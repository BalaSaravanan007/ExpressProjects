const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Movie must have a name!"],
  },
  img: {
    type: String,
    required: [true, "A Movie must have a img!"],
  },
  year: {
    type: Number,
    required: [true, "A Movie must have a release year!"],
  },
  genre: {
    type: [String],
    required: [true, "A Movie must have a genre!"],
  },
  rating: {
    type: Number,
    required: [true, "A Movie must have a rating!"],
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
