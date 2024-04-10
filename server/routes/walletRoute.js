const express = require("express");
const { postWalletData, getWalletData } = require("../controllers/walletDataController");
const walletRouter = express.Router();

walletRouter.post("/", postWalletData);

walletRouter.get("/:token", getWalletData);

module.exports = walletRouter;
