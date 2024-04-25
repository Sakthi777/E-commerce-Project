const express = require("express");
const orderDetailsDatas = express.Router();
const { authenticate, authorized, authenticateParams } = require("../middlewares/authMiddleWare");
const {
  postOrderDetailsControllers,
  getOrderDetailsController,
  editDispatchOrderDetailsController,
  editDispatchCancelOrderDetailsController,
  getSingleOrderDetailController,
  editOrderDetailsController,
  editCancelOrderDetailsController,
} = require("../controllers/orderDetailsController");

orderDetailsDatas.post("/orderDetails", authenticate, postOrderDetailsControllers);
orderDetailsDatas.get("/getOrderDetails", getOrderDetailsController);
orderDetailsDatas.put("/editOrderDetails/:orderId", editOrderDetailsController);
orderDetailsDatas.put("/editCancelOrderDetails/:orderId", editCancelOrderDetailsController);
orderDetailsDatas.get("/getOrderDetails/:token", authenticateParams, getSingleOrderDetailController);
orderDetailsDatas.put("/editDispatchOrderDetails/:orderId", editDispatchOrderDetailsController);
orderDetailsDatas.put("/editDispatchCancelOrderDetails/:orderId", editDispatchCancelOrderDetailsController);

// getSingleOrderDetailController;

module.exports = orderDetailsDatas;
