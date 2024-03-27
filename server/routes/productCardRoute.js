const express = require("express");
const productCardDatas = express.Router();
const { postProductCardDetailsControllers, getProductCardDetailsControllers, deleteProductCardDetailsControllers } = require("../controllers/productCardControllers");
const upload = require("../middlewares/multerMiddleWare");

productCardDatas.post("/post-productDetails", upload.any(), postProductCardDetailsControllers);

productCardDatas.get("/get-productDetails", getProductCardDetailsControllers);

productCardDatas.delete("/delete-productDetails/:id", deleteProductCardDetailsControllers);

module.exports = productCardDatas;
