const express = require("express");
const movieRouter = require("./router/movieRouter");
const app = express();

app.use("/movies", movieRouter);

module.exports = app;
