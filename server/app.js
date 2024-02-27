const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

// backend configuration

dotenv.config({path:path.join(__dirname, "config/config.env")});

const mongoose = require("mongoose");
const userDatas = require("./routes/usersDataRoute");

mongoose.set("strictQuery", true);

// middlewares

app.use(express.json());

app.use(cookieParser());

// Routes

app.use("/userDatas", userDatas);

// mongodb connection

const db = process.env.MONGODB_URL;

mongoose.connect(db, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB connected Successfully !");
}).catch((err)=>{
    console.log(err);
})

// server

const port = process.env.port

app.listen(port, ()=>{
    console.log(`Server connected in port ${port} in ${process.env.NODE_ENV}`);
})

