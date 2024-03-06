const express = require("express");
const userDatas = express.Router();
const {userDatasControllers, loginUserControllers, logOutUserControllers, forgetUserControllers, changePasswordControllers} = require("../controllers/usersDataControllers");

userDatas.route("/users").post(userDatasControllers);

userDatas.route("/loginUser").post(loginUserControllers);

userDatas.route("/logOutUser").post(logOutUserControllers);

userDatas.route("/forgetUser").post(forgetUserControllers);

userDatas.route("/changeUserPassword/:token").post(changePasswordControllers);

module.exports = userDatas;
