const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const multer = require("multer");

// backend configuration
dotenv.config({ path: path.join(__dirname, "config/config.env") });

const mongoose = require("mongoose");
// const {userDatas, login, logOut} = require("./routes/usersDataRoute");
const userDatas = require("./routes/usersDataRoute");

// const{ getProductcard , postProductCard } = require("./routes/productCardRoute");

const productCardDatas = require("./routes/productCardRoute");

mongoose.set("strictQuery", true);

// middlewares

app.use(express.json());

app.use(cookieParser());

app.use(cors());

// Routes

app.use("/userDatas", userDatas);

app.use("/login", userDatas);

app.use("/logOut", userDatas);

app.use("/forgetPassword", userDatas);

app.use("/changePassword", userDatas);

app.use(userDatas);

app.use(productCardDatas);

// mongodb connection

const db = process.env.MONGODB_URL;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected Successfully !");
  })
  .catch((err) => {
    console.log(err);
  });

// server

const port = process.env.port;

app.use("/uploads/productImage", express.static(path.join(__dirname, "uploads", "productImage")));

app.listen(port, () => {
  console.log(`Server connected in port ${port} in ${process.env.NODE_ENV}`);
});

////////////////////////////////////////////////////  MULTER    //////////////////////////////////////////////
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqSuffix = Date.now();
//     cb(null, uniqSuffix + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

app.post("/update-productDetails/:productID", (req, res) => {
  const productID = req.params.productID;
  const formData = req.body.productName; // Form data is available in req.body

  // Process the form data as needed
  console.log(formData);
  console.log(productID);

  // Respond to the client
  res.send("Form data received successfully");
});
