const express = require("express");
const userDatas = express.Router();
const {userDatasControllers, loginUserControllers, logOutUserControllers} = require("../controllers/usersDataControllers");

userDatas.route("/users").post(userDatasControllers);

userDatas.route("/loginUser").post(loginUserControllers);

userDatas.route("/logOutUser").post(logOutUserControllers);


module.exports = userDatas;
