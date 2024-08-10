const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const port = 3000;

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
// console.log(DB);

mongoose.connect(DB).then(() => {
  console.log("Data Base conneted successfully!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
