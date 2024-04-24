const orderDetails = require("../models/OrderDetailsSchema");
const asyncHandler = require("../middlewares/catchAsyncError");

exports.postOrderDetailsControllers = async (req, res) => {
  console.log(req.body);
  try {
    const { orderId, amount, paymentDate, productDetails, userDetails, contact, address } = req.body;
    const { id } = req.user;
    // Use Order.create to create and save a new Order document
    const Order = await orderDetails.create({
      token: id,
      orderId,
      amount,
      paymentDate: new Date(paymentDate),
      productDetails,
      userDetails,
      contact,
      address,
    });

    res.send(Order);
  } catch (error) {
    console.error("Error saving order details:", error);
    res.status(500).json({ error: "Failed to save order details" });
  }
};

exports.getOrderDetailsController = async (req, res) => {
  try {
    const orders = await orderDetails.find();
    res.send(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};
