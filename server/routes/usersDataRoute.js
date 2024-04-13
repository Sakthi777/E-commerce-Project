const express = require("express");
const userDatas = express.Router();
const { userDatasControllers, loginUserControllers, logOutUserControllers, forgetUserControllers, changePasswordControllers, getUserDataController, getUserDataControllers, getSingleUserDataControllers, CountdownTimedate, getCountdownDate } = require("../controllers/usersDataControllers");

userDatas.route("/users").post(userDatasControllers);

userDatas.route("/loginUser").post(loginUserControllers);

userDatas.route("/userData/:email").get(getUserDataController);

userDatas.route("/getuser").get(getUserDataControllers);

userDatas.route("/getuser/:id").get(getSingleUserDataControllers);

userDatas.route("/logOutUser").post(logOutUserControllers);

userDatas.route("/forgetUser").post(forgetUserControllers);

userDatas.route("/changeUserPassword/:token").post(changePasswordControllers);

userDatas.route("/countdown").post(CountdownTimedate);

userDatas.route("/getCountdown").get(getCountdownDate);

module.exports = userDatas;
