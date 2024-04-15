import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../styles/admin/addProduct.css";
import upload from "../../../src/assets/images/AddProduct/upload.png";
// import ipay from "../../../src/assets/images/AddProduct/applepay.svg";
// import bpay from "../../../src/assets/images/AddProduct/bitpay.svg";
// import gpay from "../../../src/assets/images/AddProduct/googlepay.svg";
// import mcpay from "../../../src/assets/images/AddProduct/mc.svg";
// import paypalpay from "../../../src/assets/images/AddProduct/paypal.svg";
// import vpay from "../../../src/assets/images/AddProduct/visa.svg";
import AdminHeader, { useOffCanvasContext } from "../../components/admin/adminHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProductdata() {
  const { showOffCanvas } = useOffCanvasContext();
  const [preImage, setPreImage] = useState(null);
  const [ArrayOfimages, setArrayOfImages] = useState([upload, upload, upload, upload]);
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
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/get-productDetails`)
      .then((response) => {
        setProductDetails(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [setProductDetails]);

  // productDetails.map((product) => {
  //   console.log(product.image);
  // });

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
  const handlePublish = () => {
    handleSubmit();
    successNotify();
  };

  const successNotify = () => {
    toast.success("Product successfully Published ", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setPreImage(null);
    setArrayOfImages([upload, upload, upload, upload]);
    setFileName("");
    setImage(null);
    setImageSlider([]);
    setRating("");
    setProductName("");
    setProductDescription("");
    setOldPrice("");
    setNewPrice("");
    setSale(false);
    setNewProduct(false);
    setFeaturedItems(false);
    setDiscountPercentage("");
    // setTimeout(() => {
    //   window.location.reload();
    // }, 3000);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("rating", rating);
    formData.append("productName", productName);
    formData.append("productDescription", productDescription);
    formData.append("oldPrice", oldPrice);
    formData.append("newPrice", newPrice);
    formData.append("discountPercentage", discountPercentage);
    formData.append("sale", sale);
    formData.append("newProduct", newProduct);
    formData.append("featuredItems", featuredItems);

    imageSlider.forEach((image) => {
      formData.append("imageSlider", image);
    });
    console.log(Object.fromEntries(formData));

    try {
      axios.post("http://localhost:8000/post-productDetails", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Upload error:", error);
    }
  };
  return (
    <>
      <AdminHeader />
      <div className={`adddata ${showOffCanvas ? "content-shifted" : ""} `} style={{ padding: "20px" }}>
        <div>
          <div className="head1">
            <h6>Add New</h6>
          </div>
          <div className="add-image-title">
            <p>Create Product</p>
            {/* <div className="panel">
              <div className="image-upload-box">
                <div className="image-box">
                  <img src={preImage ? preImage : upload} alt="" className="center-image" />
                </div>
              </div>
              <div className="ImageFileName">
                <p>{fileName}</p>
              </div>
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
                      </div>
                    </div>
                  ))}
                </div>
                <div className="imageInputFiled">
                  <label htmlFor="multi-file-upload">Select Images</label>
                  <input type="file" id="multi-file-upload" style={{ display: "none" }} onChange={handleImageSliderChange} accept="image/*" multiple />
                </div>
              </div>
            </div> */}
            {/* <br /> */}
            <div className="cont-attribute">
              {/* <div className="pu-attribute">
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
              </div> */}
              {/* <div class="description-box">
                <p>Product Title*</p>
                <input type="text" placeholder="Enter Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                <p>Do not exceed 20 characters when entering the product name.</p>
              </div> */}
              {/* <div className="description-box">
                <p>Product Code</p>
                <input type="text" value='TWT145015' disabled required />
                <p>Code will be generated automatically</p>
              </div> */}
            </div>
            <br />
            <div className="user-product">
              {/* <div className="user-product-input pro-in">
                <label className="user-product-label">Description*</label>
                <input type="text" placeholder="Enter Description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)}></input>
              </div> */}
              <div className="label-id">
                {/* <div className="user-product-input label-id-input">
                <label>Brand Name</label>
                <input type="text" placeholder="Enter Brand Name"></input>
              </div> */}
                {/* <div className="user-product-input">
                <label>Category</label>
                <select className="select-wid" name="car" id="car">
                  <option value="volvo">Electric</option>
                  <option value="saab">Grocery</option>
                  <option value="opel">Steel</option>
                  <option value="audi">Services</option>
                </select>
              </div> */}
              </div>
              {/* <div className="label-id">
                <div className="user-product-input">
                  <label>Old Price*</label>
                  <input type="text" placeholder="Enter Old Price" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)}></input>
                </div>
                <div className="user-product-input">
                  <label>New Price*</label>
                  <input type="text" placeholder="Enter New Price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}></input>
                </div>
              </div> */}
              {/* <div className="label-id">
                <div className="user-product-input label-id-input">
                <label>Schedule</label>
                <input type="date"></input>
              </div>
                <div className="user-product-input">
                  <label>setSale*</label>
                  <select className="select-wid" name="car" id="car" onChange={(e) => setSale(e.target.value === "true")}>
                    <option value="false">False</option>
                    <option value="true">True</option>
                  </select>
                </div>
              </div> */}
              {/* <div className="label-id">
                <div className="user-product-input">
                  <label>setNew*</label>
                  <select className="select-wid" name="cas" id="cas" onChange={(e) => setNewProduct(e.target.value === "true")}>
                    <option value="false">False</option>
                    <option value="true">True</option>
                  </select>
                </div>
                <div className="user-product-input">
                  <label>FeaturedItems*</label>
                  <select className="select-wid" name="car" id="car" onChange={(e) => setFeaturedItems(e.target.value === "true")}>
                    <option value="false">False</option>
                    <option value="true">True</option>
                  </select>
                </div>
              </div> */}
              <div className="label-id">
              <div className="user-product-input">
                  <label htmlFor="Quantity">Product Title</label>
                  <input type="text" placeholder='Product title' required />
                  <label>Do not exceed 20 characters when entering the product name.</label>
                </div>
                <div className="user-product-input">
                  <label htmlFor="Quantity">Product Code</label>
                  <input type="text" value='TWT145015' disabled required />
                  <label>Code will be generated automatically</label>
                </div>
              </div>
              <div className="label-id">
                <div className="user-product-input">
                  <label htmlFor="Quantity">Quantity</label>
                  <input type="number" placeholder='Quantity' required />
                </div>
                <div className="user-product-input">
                  <label htmlFor="SKU">SKU</label>
                  <input type="text" value='TWT-LP-ALU-08' required disabled/>
                </div>
                <div className="user-product-input">
                  <label htmlFor="">Brand</label>
                  <input type="text" placeholder='Brand' required />
                </div>
              </div>
              <div className="label-id">
                {/* <div className="user-product-input label-id-input">
                  <label>Discount Percentage*</label>
                  <input type="text" value={discountPercentage} onChange={(e) => setDiscountPercentage(e.target.value)}></input>
                </div> */}

                <div className="user-product-input">
                  <label>Category</label>
                  <select className="select-wid" name="car" id="car">
                    <option value="volvo">Grocery</option>
                    <option value="saab">Kitchen</option>
                    <option value="opel">Home</option>
                  </select>
                </div>
                <div className="user-product-input">
                  <label>Product Type</label>
                  <select className="select-wid" name="car" id="car">
                    <option value="volvo">Boxed</option>
                    <option value="saab">Single</option>
                    <option value="opel">Unit</option>
                  </select>
                </div>
                <div className="user-product-input">
                  <label>Gender</label>
                  <select className="select-wid" name="car" id="car">
                    <option value="volvo">Male</option>
                    <option value="saab">Female</option>
                    <option value="opel">Others</option>
                  </select>
                </div>
              </div>
              <div className="label-id ">
              <div className="user-product-input checkboxmodel">
                  <label htmlFor="Quantity">Color Varient</label>
                  <input type="checkbox" required />
                  <input type="checkbox" required />
                  <input type="checkbox" required />
                  <input type="checkbox" required />
                  <input type="checkbox" required />
                  <input type="checkbox" required />
                  <input type="checkbox" required />
                </div>
                <div className="user-product-input checkboxsize ">
                  <label htmlFor="Quantity">Size</label>
                  <input type="checkbox" required />
                  <input type="checkbox" required />
                  <input type="checkbox" required />
                  <input type="checkbox" required />
                  <input type="checkbox" required />
                  <input type="checkbox" required />
                  <input type="checkbox" required />
                </div>
              </div>
            </div>

            <div className="label-id payment-images">
              <div className="user-product-input label-id-input">
                {/* <label>Payment Methods</label> */}
                <div className="payment-option">
                  {/* <div className="payments">
                    <input class="hidden" type="radio" id="" value={""}></input>
                    <img src={ipay} alt="" width={"40px"} />
                  </div> */}
                  {/* <div className="payments">
                    <input class="hidden" type="radio" id="" value={""}></input>
                    <img src={gpay} alt="" width={"40px"} />
                  </div> */}
                  {/* <div className="payments">
                  <input class="hidden" type="radio" id="" value={""}></input>
                  <img src={bpay} alt="" width={"40px"} />
                </div> */}
                  {/* <div className="payments">
                  <input class="hidden" type="radio" id="" value={""}></input>
                  <img src={paypalpay} alt="" width={"40px"} />
                </div> */}
                  {/* <div className="payments">
                    <input class="hidden" type="radio" id="" value={""}></input>
                    <img src={vpay} alt="" width={"40px"} />
                  </div> */}
                  {/* <div className="payments">
                  <input class="hidden" type="radio" id="" value={""}></input>
                  <img src={mcpay} alt="" width={"40px"} />
                </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="products-button">
            {/* <div className="pro-btn">
                <button>Save to Drafts</button>
              </div> */}
            <div className="pro-btn">
              <button onClick={handlePublish}>Publish Product</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
