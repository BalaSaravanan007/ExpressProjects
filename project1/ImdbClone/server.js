const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const port = 3000;
// const insert_data = require("./Controller/movieController");

dotenv.config({ path: "./config.env" });
app.use(cors());

// console.log(process.env.DATABASE);

mongoose.connect(process.env.DATABASE).then(() => {
  console.log("DB connected successfully!");
});

// insert_data()
//   .then((docs) => {
//     console.log(docs);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
