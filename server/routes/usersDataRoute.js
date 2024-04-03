const express = require("express");
const userDatas = express.Router();
const { userDatasControllers, loginUserControllers, logOutUserControllers, forgetUserControllers, changePasswordControllers, getUserDataControllers } = require("../controllers/usersDataControllers");

userDatas.route("/users").post(userDatasControllers);

userDatas.route("/loginUser").post(loginUserControllers);

userDatas.route("/getuser").get(getUserDataControllers);

userDatas.route("/logOutUser").post(logOutUserControllers);

userDatas.route("/forgetUser").post(forgetUserControllers);

userDatas.route("/changeUserPassword/:token").post(changePasswordControllers);

module.exports = userDatas;
