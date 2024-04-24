const express = require("express");
const orderDetailsDatas = express.Router();
const { authenticate } = require("../middlewares/authMiddleWare");
const { postOrderDetailsControllers, getOrderDetailsController } = require("../controllers/orderDetailsController");

orderDetailsDatas.post("/orderDetails", authenticate, postOrderDetailsControllers);
orderDetailsDatas.get("/getOrderDetails", getOrderDetailsController);

module.exports = orderDetailsDatas;
