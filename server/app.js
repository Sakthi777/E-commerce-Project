const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");

// backend configuration

dotenv.config({ path: path.join(__dirname, "config/config.env") });

const mongoose = require("mongoose");
// const {userDatas, login, logOut} = require("./routes/usersDataRoute");
const userDatas = require("./routes/usersDataRoute");

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

app.listen(port, () => {
  console.log(`Server connected in port ${port} in ${process.env.NODE_ENV}`);
});

////////////////////////////////////////////////////  MULTER    //////////////////////////////////////////////
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqSuffix = Date.now();
    cb(null, uniqSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/post-image", upload.any(), async (req, res) => {
  try {
    let images = [];
    if (req.file) {
      const image = req.file.filename;
      console.log("Image received:", image);
    } else if (req.files) {
      images = req.files.map((file) => file.filename);
    }
    console.log("Images received:", images);
    res.json({ status: "ok", message: "Images uploaded successfully", images });
  } catch (error) {
    console.error("Error uploading images:", error);
    res.status(500).json({ status: "error", message: "Failed to upload images", error: error.message });
  }
});
