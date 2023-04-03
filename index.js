const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

/**=============MongoDb Connection======================= */

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection established");
  })
  .catch((err) => {
    console.log("Error connecting", err);
  });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**=============Router call======================= */

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
