const express = require("express");
const userDetailsDatas = express.Router();
const { postAddToCardDetailsControllers, getAddToCardDetailsControllers } = require("../controllers/userDetailsControllers");

userDetailsDatas.post("/post-AddToCardDetails", postAddToCardDetailsControllers);

userDetailsDatas.get("/get-userDetails", getAddToCardDetailsControllers);

module.exports = userDetailsDatas;
