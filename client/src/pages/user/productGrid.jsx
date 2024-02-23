import React from "react";
import ProductCard from "../../pages/user/productCard";
import HeaderPage from "../../components/user/HeaderPage";
import { FaArrowCircleDown } from "react-icons/fa";
import image1 from "../../assets/images/homePageImage/home-page-img1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../pages/user/Footer";
import {
  faShoppingBag,
  faStar,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";
import FeaturedItems from "./featuredItems";
import "../../styles/user/featuredItem.css";
import { useState } from "react";

const ProductGrid = ({ products }) => {
  const [selectedOption, setSelectedOption] = useState("Top Order");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="product-container">
      <HeaderPage />
      <div className="productTitle">Recently Sold Items</div>
      <div className="product-grid">
        {products.map((product) => (
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
        ))}
      </div>
      <div className="showMoreButton">
        <button className="show-more-button">
          <FaArrowCircleDown className="showmore-icon" />
          SHOW MORE
        </button>
      </div>
      <div className="homePage-imageBox">
        <img src={image1} alt="product" className="homepage-image-1" />
      </div>
      <div className="productTitle">Our Featured Items</div>
      <div className="featuredItem-grid">
        {products.map(
          (product) =>
            product.featuredItems && (
              <FeaturedItems
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
      <div className="showMoreButton">
        <button className="show-more-button">
          <FaArrowCircleDown className="showmore-icon" />
          SHOW MORE
        </button>
      </div>

      <div className="productTitle">Collected New Items</div>
      <div className="product-grid">
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
      <div className="showMoreButton">
        <button className="show-more-button">
          <FaArrowCircleDown className="showmore-icon" />
          SHOW MORE
        </button>
      </div>
      <div className="homePage-imageBox">
        <img src={image1} alt="product" className="homepage-image-1" />
      </div>
      <div className="productTitle">Browse By Top Niche</div>
      <div className="topNiche-card">
        <ul className="topNiche-list">
          <li
            className={`item-1 ${
              selectedOption === "Top Order" ? "active" : ""
            }`}
            onClick={() => handleOptionClick("Top Order")}
          >
            <FontAwesomeIcon icon={faShoppingBag} />
            TOP ORDER
          </li>
          <li
            className={`item-2 ${
              selectedOption === "Top Rating" ? "active" : ""
            }`}
            onClick={() => handleOptionClick("Top Rating")}
          >
            <FontAwesomeIcon icon={faStar} />
            TOP RATING
          </li>
          <li
            className={`item-3 ${
              selectedOption === "Top Discount" ? "active" : ""
            }`}
            onClick={() => handleOptionClick("Top Discount")}
          >
            <FontAwesomeIcon icon={faPercent} />
            TOP DISCOUNT
          </li>
        </ul>
      </div>
      <div className="topNiche">
        {selectedOption === "Top Order" && (
          <div className="product-grid">
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
        )}

        {selectedOption === "Top Rating" && (
          <div className="featuredItem-grid">
            {products.map(
              (product) =>
                product.featuredItems && (
                  <FeaturedItems
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
        )}
        {selectedOption === "Top Discount" && (
          <div className="product-grid">
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
        )}
      </div>
      <div className="showMoreButton">
        <button className="show-more-button">
          <FaArrowCircleDown className="showmore-icon" />
          SHOW MORE
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductGrid;
