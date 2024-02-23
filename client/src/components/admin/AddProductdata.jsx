import React from 'react'
import "../../styles/admin/addProduct.css";
import upload from '../../../src/assets/images/AddProduct/upload.png'

export default function AddProductdata() {
  return (
    <div>
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
                <p style={{ color: "#009f7f" }}>Upload image</p>
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
              <select className="selector" name="cars" id="cars">
                <option value="volvo">Simple Product</option>
                <option value="saab">Grouped Product</option>
                <option value="opel">Variable Product</option>
                <option value="audi">Services product</option>
              </select>
            </div>
            &nbsp; &nbsp;
            <div className="kilo">
              <p>Weight</p>
              <input type="text"></input>
            </div>
          </div>
          <div class="description-box">
            <p>Description</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
