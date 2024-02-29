import React from "react";
import "../../styles/admin/addProduct.css";
import upload from "../../../src/assets/images/AddProduct/upload.png";
import ipay from "../../../src/assets/images/AddProduct/applepay.svg";
// import bpay from "../../../src/assets/images/AddProduct/bitpay.svg";
import gpay from "../../../src/assets/images/AddProduct/googlepay.svg";
// import mcpay from "../../../src/assets/images/AddProduct/mc.svg";
// import paypalpay from "../../../src/assets/images/AddProduct/paypal.svg";
import vpay from "../../../src/assets/images/AddProduct/visa.svg";

export default function AddProductdata() {
  return (
    <div className="adddata" style={{padding: "20px"}}>
      <div>
        <div className="head1">
          <h6>Product Settings</h6>
        </div>
        <div className="add-image-title">
          <p>Product Images</p>
          <div className="panel">
            <div className="image-input-img">
              <img src={upload} alt="" width={"30px"} />
              <div>
                <label htmlFor="category-image">
                  <span style={{ color: "#009f7f" }}>Upload image</span>
                </label>
              </div>

              <input
                type="file"
                name="category-image"
                id="category-image"
                style={{ display: "none" }}
              />
            </div>
            <div className="image-input-img">
              <img src={upload} alt="" width={"30px"} />
              <div>
                <label htmlFor="category-image">
                  <span style={{ color: "#009f7f" }}>Upload image</span>
                </label>
              </div>

              <input
                type="file"
                name="category-image"
                id="category-image"
                style={{ display: "none" }}
              />
            </div>
            <div className="image-input-img">
              <img src={upload} alt="" width={"30px"} />
              <div>
                <label htmlFor="category-image">
                  <span style={{ color: "#009f7f" }}>Upload image</span>
                </label>
              </div>

              <input
                type="file"
                name="category-image"
                id="category-image"
                style={{ display: "none" }}
              />
            </div>
            <div className="image-input-img">
              <img src={upload} alt="" width={"30px"} />
              <div>
                <label htmlFor="category-image">
                  <span style={{ color: "#009f7f" }}>Upload image</span>
                </label>
              </div>

              <input
                type="file"
                name="category-image"
                id="category-image"
                style={{ display: "none" }}
              />
            </div>
          </div>
          <br />
          <div className="hovering">
            <a href="..." className="text-a">
              More Gallery Options
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quo itaque rem pariatur, eius tenetur architecto minus magnam
              repellendus, quis optio mollitia quaerat sequi sunt tempora quos
              cupiditate! Reiciendis, suscipit!
            </p>
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
              <button>Publish Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
