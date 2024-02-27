const express = require("express");
const userDatas = express.Router();
const {userDatasControllers} = require("../controllers/usersDataControllers");

userDatas.route("/users").post(userDatasControllers);


module.exports = userDatas;