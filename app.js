const express = require("express");
const userRouter = require("./router/userRouter");
// const country = require("./dev-data/country.json");
// const Country = require("./Model/countryModel");
const app = express();

app.use("/api/users/", userRouter);

module.exports = app;

// const insertData = async (req, res) => {
//   try {
//     const data = await Country.insertMany(country);
//     return Promise.resolve(data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };
// insertData()
//   .then((docs) => {
//     console.log(docs);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
