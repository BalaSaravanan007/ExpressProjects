const express = require("express");
const router = express.Router();
const movieController = require("./../Controller/movieController");

router.route("/").get(movieController.GetAllMovies);

module.exports = router;
