const express = require("express");
const userDatas = express.Router();
const upload = require("../middlewares/multerMiddleWare");
const { userDatasControllers, loginUserControllers, logOutUserControllers, forgetUserControllers, changePasswordControllers, productDetailsControllers, getProductDetailsControllers } = require("../controllers/usersDataControllers");

userDatas.route("/users").post(userDatasControllers);

userDatas.route("/loginUser").post(loginUserControllers);

userDatas.route("/logOutUser").post(logOutUserControllers);

userDatas.route("/forgetUser").post(forgetUserControllers);

userDatas.route("/changeUserPassword/:token").post(changePasswordControllers);

userDatas.post("/post-productDetails", upload.any(), productDetailsControllers);

userDatas.get("/get-productDetails", getProductDetailsControllers);

module.exports = userDatas;
