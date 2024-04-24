const express = require("express");
const orderDetailsDatas = express.Router();
const { authenticate, authorized, authenticateParams } = require("../middlewares/authMiddleWare");
const { postOrderDetailsControllers, getOrderDetailsController, getSingleOrderDetailController } = require("../controllers/orderDetailsController");

orderDetailsDatas.post("/orderDetails", authenticate, postOrderDetailsControllers);
orderDetailsDatas.get("/getOrderDetails", getOrderDetailsController);
orderDetailsDatas.get("/getOrderDetails/:token", authenticateParams, getSingleOrderDetailController);
// getSingleOrderDetailController;

module.exports = orderDetailsDatas;
