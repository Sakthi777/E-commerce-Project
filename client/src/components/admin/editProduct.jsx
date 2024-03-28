import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../styles/admin/addProduct.css";
import uploadImage from "../../../src/assets/images/AddProduct/upload.png";
import AdminHeader, { useOffCanvasContext } from "../../components/admin/adminHeader";
import { useLocation } from "react-router-dom";
const EditProduct = () => {
  const { showOffCanvas } = useOffCanvasContext();
  const [upload, setUpload] = useState(uploadImage);
  const [preImage, setPreImage] = useState(null);
  const [ArrayOfimages, setArrayOfImages] = useState([uploadImage, uploadImage, uploadImage, uploadImage]);
  const [fileName, setFileName] = useState("");
  const [image, setImage] = useState(null);
  const [imageSlider, setImageSlider] = useState([]);
  const [rating, setRating] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [sale, setSale] = useState(false);
  const [newProduct, setNewProduct] = useState(false);
  const [featuredItems, setFeaturedItems] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [productDetails, setProductDetails] = useState([]);
  const [productID, setProductID] = useState("");
  const location = useLocation();
  const { product } = location.state || {};
  //   console.log(product);

  useEffect(() => {
    if (product) {
      setRating(product.rating);
      setProductName(product.productName);
      setProductDescription(product.productDescription);
      setOldPrice(product.oldPrice);
      setNewPrice(product.newPrice);
      setDiscountPercentage(product.discountPercentage);
      setUpload(`http://localhost:8000/uploads/productImage/${product.image}`);
      const SliderImages = product.imageSlider.map((image) => `http://localhost:8000/uploads/productImage/${image}`);
      setArrayOfImages(SliderImages);
      setSale(product.sale);
      setNewProduct(product.newProduct);
      setFeaturedItems(product.featuredItems);
      setProductID(product._id);
    }
  }, [product]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
    if (file) {
      setPreImage(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };
  const handleImageSliderChange = (e) => {
    const fileList = e.target.files;
    const ArrayoffilleList = Array.from(fileList);
    console.log(ArrayoffilleList);
    setImageSlider(ArrayoffilleList);
    const newImages = ArrayoffilleList.map((file) => URL.createObjectURL(file));
    setArrayOfImages(newImages);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("rating", rating);
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("oldPrice", oldPrice);
    formData.append("newPrice", newPrice);
    formData.append("discountPercentage", discountPercentage);
    formData.append("sale", sale);
    formData.append("newProduct", newProduct);
    formData.append("featuredItems", featuredItems);

console.log([...formData]);

    // const formData = {
    //  rating,
    //  productName,
    //  productDescription,
    //  oldPrice,
    //  newPrice,
    //  discountPercentage,
    //  sale,
    //  newProduct,
    //  featuredItems
    // }
     axios.put(`http://localhost:8000/update-productDetails/${productID}`, formData).then((res)=>{
        console.log(res.data)
      }).catch((err)=>{
        console.log(err);
      })
   
  };

  const ImageDelete = (deleteImage) => {
    setArrayOfImages((ArrayOfimage) => ArrayOfimage.filter((image) => image !== deleteImage));
  };

  return (
    <>
      <AdminHeader />
      <div className={`adddata ${showOffCanvas ? "content-shifted" : ""} `} style={{ padding: "20px" }}>
        <div>
          <div className="head1">
            <h6>Product Settings</h6>
          </div>
          <div className="add-image-title">
            <p>Product Images</p>
            <div className="panel">
              <div className="image-upload-box">
                <div className="image-box">
                  <img src={preImage ? preImage : upload} alt="" className="center-image" />
                </div>
              </div>
              <div className="ImageFileName">{/* <p>{fileName}</p> */}</div>
              <div className="imageInputFiled">
                <label htmlFor="file-upload">Select Image</label>
                <input type="file" id="file-upload" style={{ display: "none" }} onChange={handleImageChange} accept="image/*" />
              </div>

              <div className="ImageSliderUpload">
                <p>Product Image Slider</p>

                <div className="image-grid">
                  {ArrayOfimages.map((image, index) => (
                    <div className="image-upload-box">
                      <div className="image-box">
                        <img key={index} src={image ? image : upload} alt={`product ${index + 1}`} className="center-image" />
                        <button className="imageDeleteButton" onClick={() => ImageDelete(image)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="imageInputFiled">
                  <label htmlFor="multi-file-upload">Select Images</label>
                  <input type="file" id="multi-file-upload" style={{ display: "none" }} onChange={handleImageSliderChange} accept="image/*" multiple />
                </div>
              </div>
            </div>
            <br />
            <div className="cont-attribute">
              <div className="pu-attribute">
                <div className="pu-attribute-input">
                  <p>Attributes</p>
                  <select className="select-wid" name="cars" id="cars">
                    <option value="volvo">Simple Product</option>
                    <option value="saab">Grouped Product</option>
                    <option value="opel">Variable Product</option>
                    <option value="audi">Services product</option>
                  </select>
                </div>
                <div className="rating">
                  <p>Rating*</p>
                  <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
                </div>
              </div>
              <div class="description-box">
                <p>Product Name*</p>
                <input type="text" placeholder="Enter Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
              </div>
            </div>
          </div>
          <br />
          <div className="user-product">
            <div className="user-product-input pro-in">
              <label className="user-product-label">Description*</label>
              <input type="text" placeholder="Enter Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)}></input>
            </div>
            <div className="label-id">
              <div className="user-product-input label-id-input">
                <label>Brand Name</label>
                <input type="text" placeholder="Enter Brand Name"></input>
              </div>
              <div className="user-product-input">
                <label>Category</label>
                <select className="select-wid" name="car" id="car">
                  <option value="volvo">Electric</option>
                  <option value="saab">Grocery</option>
                  <option value="opel">Steel</option>
                  <option value="audi">Services</option>
                </select>
              </div>
            </div>
            <div className="label-id">
              <div className="user-product-input">
                <label>Old Price*</label>
                <input type="text" placeholder="Enter Old Price" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)}></input>
              </div>
              <div className="user-product-input">
                <label>New Price*</label>
                <input type="text" placeholder="Enter New Price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}></input>
              </div>
            </div>
            <div className="label-id">
              <div className="user-product-input label-id-input">
                <label>Schedule</label>
                <input type="date"></input>
              </div>
              <div className="user-product-input">
                <label>setSale*</label>
                <select className="select-wid" name="car" id="car" value={sale} onChange={(e) => setSale(e.target.value === "true")}>
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
              </div>
            </div>
            <div className="label-id">
              <div className="user-product-input">
                <label>setNew*</label>
                <select className="select-wid" name="cas" id="cas" value={newProduct} onChange={(e) => setNewProduct(e.target.value === "true")}>
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
              </div>
              <div className="user-product-input">
                <label>FeaturedItems*</label>
                <select className="select-wid" name="car" id="car" value={featuredItems} onChange={(e) => setFeaturedItems(e.target.value === "true")}>
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
              </div>
            </div>
            <div className="label-id">
              <div className="user-product-input label-id-input">
                <label>Discount Percentage*</label>
                <input type="text" value={discountPercentage} onChange={(e) => setDiscountPercentage(e.target.value)}></input>
              </div>
              <div className="user-product-input">
                <label>Status</label>
                <select className="select-wid" name="car" id="car">
                  <option value="volvo">Completed</option>
                  <option value="saab">Pending</option>
                  <option value="opel">OnProcess</option>
                </select>
              </div>
            </div>

            <div className="products-button">
              <div className="pro-btn">
                <button>Save to Drafts</button>
              </div>
              <div className="pro-btn">
                <button onClick={handleSubmit}>Edit Product</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
