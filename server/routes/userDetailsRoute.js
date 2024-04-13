const express = require("express");
const userDetailsDatas = express.Router();
const { postAddToCardDetailsControllers, getAddToCardDetailsControllers, IncrementAddToCartProductQuantity, DecrementAddToCartProductQuantity, DeleteProductFromCartController } = require("../controllers/userDetailsControllers");

userDetailsDatas.post("/post-AddToCardDetails", postAddToCardDetailsControllers);

userDetailsDatas.get("/get-userCartDetails/:userID", getAddToCardDetailsControllers);

userDetailsDatas.put("/IncrementAddToCartProductQuantity/:productID/:userID", IncrementAddToCartProductQuantity);

userDetailsDatas.put("/DecrementAddToCartProductQuantity/:productID/:userID", DecrementAddToCartProductQuantity);

userDetailsDatas.delete("/DeleteProductFromCart/:productID/:userID", DeleteProductFromCartController);

module.exports = userDetailsDatas;
