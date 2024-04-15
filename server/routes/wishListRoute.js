const express = require("express");
const { postWishListController, getWishListController, deleteWishListController } = require("../controllers/wishListController");

const wishListRouter = express.Router();

wishListRouter.get("/:token", getWishListController);

wishListRouter.post("/", postWishListController);

wishListRouter.delete("/:token/:id", deleteWishListController);

module.exports = wishListRouter;
