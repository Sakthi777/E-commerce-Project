const express = require("express");
const productCardDatas = express.Router();
const {
  postProductCardDetailsControllers,
  getProductCardDetailsControllers,
  deleteProductCardDetailsControllers,
  updateProductCardDetailsControllers,
  deleteProductSliderImageControllers,
  updateProductSliderImageControllers,
  deleteAllSliderImageControllers,
  editSliderImageControllers,
  updateProductMainImageControllers,
} = require("../controllers/productCardControllers");
const upload = require("../middlewares/multerMiddleWare");

productCardDatas.post("/post-productDetails", upload.any(), postProductCardDetailsControllers);

productCardDatas.get("/get-productDetails", getProductCardDetailsControllers);

productCardDatas.delete("/delete-productDetails/:id", deleteProductCardDetailsControllers);

productCardDatas.delete("/delete-productSliderImage/:id/:index", deleteProductSliderImageControllers);

productCardDatas.delete("/delete-allSliderImage/:id", deleteAllSliderImageControllers);

productCardDatas.put("/edit-productMainImage/:id", upload.any(), updateProductMainImageControllers);

productCardDatas.put("/update-productDetails/:id", upload.any(), updateProductCardDetailsControllers);

productCardDatas.put("/update-ProductSliderImage/:id", upload.any(), updateProductSliderImageControllers);

productCardDatas.put("/edit-SliderImage/:id/:editId", upload.any(), editSliderImageControllers);

http: module.exports = productCardDatas;
