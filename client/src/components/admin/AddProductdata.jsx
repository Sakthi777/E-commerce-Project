import React from "react";
import axios from "axios";
import { useState } from "react";
import "../../styles/admin/addProduct.css";
import upload from "../../../src/assets/images/AddProduct/upload.png";
import ipay from "../../../src/assets/images/AddProduct/applepay.svg";
// import bpay from "../../../src/assets/images/AddProduct/bitpay.svg";
import gpay from "../../../src/assets/images/AddProduct/googlepay.svg";
// import mcpay from "../../../src/assets/images/AddProduct/mc.svg";
// import paypalpay from "../../../src/assets/images/AddProduct/paypal.svg";
import vpay from "../../../src/assets/images/AddProduct/visa.svg";
import AdminHeader, { useOffCanvasContext } from "../../components/admin/adminHeader";

export default function AddProductdata() {
  const { showOffCanvas } = useOffCanvasContext();
  const [preImage, setPreImage] = useState(null);
  const [image, setImage] = useState(null);
  const [imageSlider, setImageSlider] = useState([]);
  const [fileName, setFileName] = useState("");
  const [ArrayOfimages, setArrayOfImages] = useState([upload, upload, upload, upload]);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);

    if (file) {
      const reader = new FileReader();
      console.log(reader);

      reader.onload = () => {
        setPreImage(reader.result);
      };
      // console.log(image);
      reader.readAsDataURL(file);
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
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("image", image);
    imageSlider.forEach((image) => {
      formData.append("images", image);
    });
    console.log(Object.fromEntries(formData));

    try {
      const response = axios.post("http://localhost:8000/post-image", formData);
      console.log("Upload success:", response);
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
                        <img key={index} src={image ? image : upload} alt={`Image ${index + 1}`} className="center-image" />
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
            <div className="hovering">
              <a href="..." className="text-a">
                More Gallery Options
              </a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quo itaque rem pariatur, eius tenetur architecto minus magnam repellendus, quis optio mollitia quaerat sequi sunt tempora quos cupiditate! Reiciendis, suscipit!</p>
              <a href="..." className="text-a">
                Attachment File
              </a>
            </div>
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

                <div className="kilo">
                  <p>Weight</p>
                  <input type="text" />
                </div>
              </div>
              <div class="description-box">
                <p>Description</p>
                <input type="text" />
              </div>
            </div>
          </div>
          <br />
          <div className="user-product">
            <div className="user-product-input pro-in">
              <label className="user-product-label">Product Name</label>
              <input type="text" placeholder="Enter Product Name"></input>
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
                <label>Regular Price</label>
                <input type="text" placeholder="Enter Regular Price"></input>
              </div>
              <div className="user-product-input">
                <label>Sale Price</label>
                <input type="text" placeholder="Enter Sale Price"></input>
              </div>
            </div>
            <div className="label-id">
              <div className="user-product-input label-id-input">
                <label>Schedule</label>
                <input type="date"></input>
              </div>

              <div className="user-product-input">
                <label>Promotion</label>
                <select className="select-wid" name="car" id="car">
                  <option value="volvo">Category1</option>
                  <option value="saab">Category2</option>
                  <option value="opel">Category3</option>
                  <option value="audi">Category4</option>
                </select>
              </div>
            </div>
            <div className="label-id">
              <div className="user-product-input">
                <label>Product Type</label>
                <select className="select-wid" name="cas" id="cas">
                  <option value="volvo">Simple Product</option>
                  <option value="saab">Grouped Product</option>
                  <option value="opel">Variable Product</option>
                  <option value="audi">Services product</option>
                </select>
              </div>
              <div className="user-product-input">
                <label>Stock Status</label>
                <select className="select-wid" name="car" id="car">
                  <option value="volvo">Low Inventory</option>
                  <option value="saab">On Demand</option>
                  <option value="opel">Out of Stock</option>
                  <option value="audi">In Stock</option>
                </select>
              </div>
            </div>
            <div className="label-id">
              <div className="user-product-input label-id-input">
                <label>Quantity in Stock</label>
                <input type="text"></input>
              </div>
              <div className="user-product-input">
                <label>Unit</label>
                <select className="select-wid" name="car" id="car">
                  <option value="volvo">Peices</option>
                  <option value="saab">Kilogram</option>
                  <option value="opel">Boxes</option>
                  <option value="audi">Bundle</option>
                </select>
              </div>
            </div>
            <div className="label-id payment-images">
              <div className="user-product-input label-id-input">
                <label>Payment Methods</label>
                <div className="payment-option">
                  <div className="payments">
                    <input class="hidden" type="radio" id="" value={""}></input>
                    <img src={ipay} alt="" width={"40px"} />
                  </div>
                  <div className="payments">
                    <input class="hidden" type="radio" id="" value={""}></input>
                    <img src={gpay} alt="" width={"40px"} />
                  </div>
                  {/* <div className="payments">
                  <input class="hidden" type="radio" id="" value={""}></input>
                  <img src={bpay} alt="" width={"40px"} />
                </div> */}
                  {/* <div className="payments">
                  <input class="hidden" type="radio" id="" value={""}></input>
                  <img src={paypalpay} alt="" width={"40px"} />
                </div> */}
                  <div className="payments">
                    <input class="hidden" type="radio" id="" value={""}></input>
                    <img src={vpay} alt="" width={"40px"} />
                  </div>
                  {/* <div className="payments">
                  <input class="hidden" type="radio" id="" value={""}></input>
                  <img src={mcpay} alt="" width={"40px"} />
                </div> */}
                </div>
              </div>
            </div>
            <div className="products-button">
              <div className="pro-btn">
                <button>Save to Drafts</button>
              </div>
              <div className="pro-btn">
                <button onClick={handleSubmit}>Publish Product</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
