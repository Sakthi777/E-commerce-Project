const express = require("express");
const pendingOrdersDatas = express.Router();
const { authenticate } = require("../middlewares/authMiddleWare");
const { postPendingOrdersControllers, getOrderDetailsController } = require("../controllers/pendingOrdersController");

pendingOrdersDatas.post("/postPendingOrders", authenticate, postPendingOrdersControllers);
//pendingOrdersDatas.get("/getOrderDetails", getOrderDetailsController);

module.exports = pendingOrdersDatas;
