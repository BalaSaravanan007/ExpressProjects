const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
const port = 5500;

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;
mongoose.connect(DB).then(() => {
  console.log("Data Base connected Successfully!");
});

console.log(process.env.DATABASE);

app.listen(process.env.PORT || port, () => {
  console.log(`Server running of port ${port}`);
});
