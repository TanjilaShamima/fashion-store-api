const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
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

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**=============Router call======================= */

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

/**=============app listen function======================= */

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
