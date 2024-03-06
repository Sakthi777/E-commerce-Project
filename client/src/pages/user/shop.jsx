import ProductCard from "../../pages/user/productCard";
import HeaderPage from "../../components/user/HeaderPage";
import banner from "../../assets/images/banner/single-banner.jpg";
import "../../styles/user/shop.css";
import shopImage from "../../assets/images/ProductImage/shopImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../pages/user/Footer";
const ShopPage = ({ products }) => {
  return (
    <>
      <HeaderPage />
      <div className="">
        <div className="offers-banner">
          <img src={banner} alt="Offer Banner" />
          <div className="offer-banner-content">
            <h1>SHOP</h1>
            <a href="/">Home</a>/<a href="/shop">Shop Grid</a>
          </div>
        </div>
        <div className="shop-container">
          <div className="filter-container">
            <div className="shop-image">
              <img src={shopImage} alt="shop Banner" />
            </div>
            <div className="filter-card">
              <span className="filter-tile">FILTER BY PRICE</span>
              <div className="filterHr"></div>
              <div className="filter-price-content">
                <div className="filter-input">
                  <input type="text" placeholder="Min-00" className="input1" />
                  <input type="text" placeholder="Max-5k" />
                </div>
                <div className="filter-search">
                  <FontAwesomeIcon icon={faSearch} />
                  <span>Search</span>
                </div>
              </div>
            </div>
            <div className="filter-card">
              <span className="filter-tile">FILTER BY RATING</span>
              <div className="filterHr"></div>
              {[1, 2, 3, 4, 5].map((star) => (
                <div className="filter-rating" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <div className="filter-star">
                    <label key={star} style={{ display: "flex", padding: "10px" }}>
                      <input type="checkbox" style={{ marginRight: "5px" }} />
                      <FontAwesomeIcon icon={faStar} style={{ color: 5 >= star ? "gold" : "gray", marginRight: "5px" }} />
                      <FontAwesomeIcon icon={faStar} style={{ color: 4 >= star ? "gold" : "gray", marginRight: "5px" }} />
                      <FontAwesomeIcon icon={faStar} style={{ color: 3 >= star ? "gold" : "gray", marginRight: "5px" }} />
                      <FontAwesomeIcon icon={faStar} style={{ color: 2 >= star ? "gold" : "gray", marginRight: "5px" }} />
                      <FontAwesomeIcon icon={faStar} style={{ color: 1 >= star ? "gold" : "gray", marginRight: "5px" }} />
                    </label>
                  </div>
                  <div className="ratingCount">
                    <p style={{ padding: "7px" }}>(13)</p>
                  </div>
                </div>
              ))}
              <div className="filter-search">
                <FontAwesomeIcon icon={faTrashAlt} />
                <span>Clear Filter</span>
              </div>
            </div>
            <div className="filter-card">
              <span className="filter-tile">FILTER BY TAG</span>
              <div className="filterHr"></div>
              <div className="filter-tag" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
                <div className="f-tag">
                  <input type="checkbox" style={{ marginRight: "10px" }} />
                  <span>New Item</span>
                </div>
                <div className="tag-count">
                  <span>(13)</span>
                </div>
              </div>
              <div className="filter-tag" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
                <div className="f-tag">
                  <input type="checkbox" style={{ marginRight: "10px" }} />
                  <span>Sale Item</span>
                </div>
                <div className="tag-count">
                  <span>(13)</span>
                </div>
              </div>
              <div className="filter-tag" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
                <div className="f-tag">
                  <input type="checkbox" style={{ marginRight: "10px" }} />
                  <span>Rating Item</span>
                </div>
                <div className="tag-count">
                  <span>(13)</span>
                </div>
              </div>
              <div className="filter-tag" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
                <div className="f-tag">
                  <input type="checkbox" style={{ marginRight: "10px" }} />
                  <span>Feature Item</span>
                </div>
                <div className="tag-count">
                  <span>(13)</span>
                </div>
              </div>
              <div className="filter-search">
                <FontAwesomeIcon icon={faTrashAlt} />
                <span>Clear Filter</span>
              </div>
            </div>
            <div className="filter-card">
              <span className="filter-tile">FILTER BY BRAND</span>
              <div className="filterSearchBar">
                <input type="text" placeholder="Search.." />
              </div>
              <div className="brand-content" style={{ height: "100px", overflow: "auto", marginTop: "20px", paddingRight: "10px" }}>
                <div className="filter-tag" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
                  <div className="f-tag">
                    <input type="checkbox" style={{ marginRight: "10px" }} />
                    <span>New Item</span>
                  </div>
                  <div className="tag-count">
                    <span>(13)</span>
                  </div>
                </div>
                <div className="filter-tag" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
                  <div className="f-tag">
                    <input type="checkbox" style={{ marginRight: "10px" }} />
                    <span>New Item</span>
                  </div>
                  <div className="tag-count">
                    <span>(13)</span>
                  </div>
                </div>
                <div className="filter-tag" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
                  <div className="f-tag">
                    <input type="checkbox" style={{ marginRight: "10px" }} />
                    <span>New Item</span>
                  </div>
                  <div className="tag-count">
                    <span>(13)</span>
                  </div>
                </div>
                <div className="filter-tag" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
                  <div className="f-tag">
                    <input type="checkbox" style={{ marginRight: "10px" }} />
                    <span>New Item</span>
                  </div>
                  <div className="tag-count">
                    <span>(13)</span>
                  </div>
                </div>
              </div>
              <div className="filter-search">
                <FontAwesomeIcon icon={faTrashAlt} />
                <span>Clear Filter</span>
              </div>
            </div>
            <div className="filter-card">
              <span className="filter-tile">FILTER BY CATEGORY</span>
              <div className="filterSearchBar">
                <input type="text" placeholder="Search.." />
              </div>
              <div className="brand-content" style={{ height: "100px", overflow: "auto", marginTop: "20px", paddingRight: "10px" }}>
                <div className="filter-tag" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
                  <div className="f-tag">
                    <input type="checkbox" style={{ marginRight: "10px" }} />
                    <span>New Item</span>
                  </div>
                  <div className="tag-count">
                    <span>(13)</span>
                  </div>
                </div>
                <div className="filter-tag" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
                  <div className="f-tag">
                    <input type="checkbox" style={{ marginRight: "10px" }} />
                    <span>New Item</span>
                  </div>
                  <div className="tag-count">
                    <span>(13)</span>
                  </div>
                </div>
                <div className="filter-tag" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
                  <div className="f-tag">
                    <input type="checkbox" style={{ marginRight: "10px" }} />
                    <span>New Item</span>
                  </div>
                  <div className="tag-count">
                    <span>(13)</span>
                  </div>
                </div>
                <div className="filter-tag" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "10px 0px" }}>
                  <div className="f-tag">
                    <input type="checkbox" style={{ marginRight: "10px" }} />
                    <span>New Item</span>
                  </div>
                  <div className="tag-count">
                    <span>(13)</span>
                  </div>
                </div>
              </div>
              <div className="filter-search">
                <FontAwesomeIcon icon={faTrashAlt} />
                <span>Clear Filter</span>
              </div>
            </div>
          </div>
          <div className="shop-page-product">
            <div className="shop-top">
              <div className="shop-top-1">
                <span> SHOW:</span>

                <select style={{ bordeRadius: "5px", backgroundColor: "transparent", border: "1px solid #ccc", outline: "none", padding: "8px", color: "#555", fontSize: "14px" }}>
                  <option value="">12</option>
                  <option value="option1A">24</option>
                  <option value="option1B">36</option>
                </select>
              </div>
              <div className="shop-top-2">
                <span> SORT BY:</span>
                <select style={{ bordeRadius: "5px", backgroundColor: "transparent", border: "1px solid #ccc", outline: "none", padding: "8px", color: "#555", fontSize: "14px" }}>
                  <option value="">Default</option>
                  <option value="option1A">Treading</option>
                  <option value="option1B">Featured</option>
                  <option value="option1B">Recommend</option>
                </select>
              </div>
            </div>
            <div className="shop-product">
              <div className="shop-product-grid">
                {products.map(
                  (product) =>
                    product.setNew && (
                      <ProductCard
                        key={product.id}
                        imgSrc={product.imgSrc}
                        imageSlider={product.imageSlider}
                        rating={product.rating}
                        productName={product.productName}
                        oldPrice={product.oldPrice}
                        newPrice={product.newPrice}
                        setNew={product.setNew}
                        setSale={product.setSale}
                        discountPercentage={product.discountPercentage}
                        productDetails={product.productDetails}
                      />
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
