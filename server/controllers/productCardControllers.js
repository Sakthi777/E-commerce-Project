const userProductDetails = require("../models/userProductCardDetails");
const fs = require("fs");
//const upload = require("../middlewares/multerMiddleWare");
exports.postProductCardDetailsControllers = async (req, res) => {
  const rating = req.body.rating;
  const productName = req.body.productName;
  const productDescription = req.body.productDescription;
  const oldPrice = req.body.oldPrice;
  const newPrice = req.body.newPrice;
  const sale = req.body.sale;
  const newProduct = req.body.newProduct;
  const featuredItems = req.body.featuredItems;
  const discountPercentage = req.body.discountPercentage;
  console.log(sale, newProduct, featuredItems);

  let images = [];

  try {
    if (req.file) {
      const image = req.file.filename;
      console.log("Image received:", image);
    } else if (req.files) {
      images = req.files.map((file) => file.filename);
    }
    console.log("Images received:", images);

    userProductDetails.create({
      image: images.shift(),
      imageSlider: images,
      rating: rating,
      productName: productName,
      productDescription: productDescription,
      oldPrice: oldPrice,
      newPrice: newPrice,
      sale: sale,
      newProduct: newProduct,
      featuredItems: featuredItems,
      discountPercentage: discountPercentage,
    });
  } catch (error) {
    console.error("Error uploading images:", error);
  }
};

exports.getProductCardDetailsControllers = async (req, res) => {
  try {
    const products = await userProductDetails.find();
    res.json({ status: "ok", data: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteProductCardDetailsControllers = async (req, res) => {
  try {
    const productDetails = await userProductDetails.findById(req.params.id);
    if (productDetails.image) {
      fs.unlinkSync("./uploads/productImage/" + productDetails.image);
    }
    if (productDetails.imageSlider && productDetails.imageSlider.length > 0) {
      productDetails.imageSlider.forEach((img) => {
        fs.unlinkSync("./uploads/productImage/" + img);
        console.log("Deleted Image: " + img);
      });
    }
    const deletedProduct = await userProductDetails.findByIdAndDelete(req.params.id);
    console.log("deleted product " + deletedProduct);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.log(err);
  }
};

exports.updateProductCardDetailsControllers = async (req, res) => {
  const rating = req.body.rating;
  const productName = req.body.productName;
  const productDescription = req.body.productDescription;
  const oldPrice = req.body.oldPrice;
  const newPrice = req.body.newPrice;
  const sale = req.body.sale;
  const newProduct = req.body.newProduct;
  const featuredItems = req.body.featuredItems;
  const discountPercentage = req.body.discountPercentage;
  console.log(req.params.id);
  console.log(rating, productName, productDescription, oldPrice, newPrice, sale, newProduct, featuredItems, discountPercentage);
  

};


