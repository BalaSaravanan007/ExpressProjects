const express = require("express");
const userRouter = require("./Router/userRouter");
// const users = require("./dev-data/data.json");
const app = express();

app.use("/users", userRouter);

// const insertData = async () => {
//   try {
//     const user = await User.insertMany(users);
//     return Promise.resolve(user);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// insertData()
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = app;
