const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: String,
  country: String,
});

const Country = mongoose.model("Countrty", countrySchema);

module.exports = Country;
