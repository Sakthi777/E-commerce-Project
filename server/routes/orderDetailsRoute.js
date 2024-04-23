const express = require("express");
const orderDetailsDatas = express.Router();
const { postOrderDetailsControllers, getOrderDetailsController } = require("../controllers/orderDetailsController");

orderDetailsDatas.post("/orderDetails", postOrderDetailsControllers);
orderDetailsDatas.get("/getOrderDetails", getOrderDetailsController);

module.exports = orderDetailsDatas;
