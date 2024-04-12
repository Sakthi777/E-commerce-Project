const userDetails = require("../models/userDetailsSchema");
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
exports.getAddToCardDetailsControllers = async (req, res) => {
  try {
    const details = await userDetails.find();
    res.json({ status: "ok", data: details });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.json({ error: "Internal Server Error" });
  }
};
