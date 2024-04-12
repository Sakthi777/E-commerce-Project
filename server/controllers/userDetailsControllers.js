const userDetails = require("../models/userDetailsSchema");
const asyncHandler = require("../middlewares/catchAsyncError");

exports.postAddToCardDetailsControllers = async (req, res) => {
  try {
    const { productID, token } = req.body;

    console.log("Received product:", productID);
    console.log("Received token:", token);
    let user = await userDetails.findOne({ userID: token });

    if (!user) {
      const user = await userDetails.create({
        userID: token,
        AddtoCardItems: [{ productID, quantity: 1 }],
      });
    } else {
      user.AddtoCardItems.push({ productID });
      await user.save();
      res.json({ message: "Product ID added to user document successfully" });
    }
  } catch (error) {
    console.error("Error uploading images:", error);
  }
};
exports.getAddToCardDetailsControllers = asyncHandler(async (req, res, next) => {
  try {
    const { userID } = req.params;
    console.log("hello ..." + userID);
    const details = await userDetails.findOne({ userID: userID });
    res.send(details);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.json({ error: "hello error" });
  }
});

exports.IncrementAddToCartProductQuantity = asyncHandler(async (req, res, next) => {
  try {
    const { productID, userID } = req.params;
    console.log(productID + "    " + userID);
    const doc = await userDetails.findOne({ userID: userID });
    console.log(doc);
    const updatedItems = doc.AddtoCardItems.map((product) => {
      if (product.productID === productID) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    doc.AddtoCardItems = updatedItems;
    await doc.save();
    console.log(doc);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.json({ error: "hello error" });
  }
});
exports.DecrementAddToCartProductQuantity = asyncHandler(async (req, res, next) => {
  try {
    const { productID, userID } = req.params;
    console.log(productID + "    " + userID);
    const doc = await userDetails.findOne({ userID: userID });
    console.log(doc);
    const updatedItems = doc.AddtoCardItems.map((product) => {
      if (product.productID === productID) {
        if (product.quantity >= 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
      }
      return product;
    });
    doc.AddtoCardItems = updatedItems;
    await doc.save();
    console.log(doc);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.json({ error: "hello error" });
  }
});
