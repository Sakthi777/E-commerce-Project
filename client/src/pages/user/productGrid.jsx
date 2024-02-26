import React from "react";
import ProductCard from "../../pages/user/productCard";
import HeaderPage from "../../components/user/HeaderPage";
import { FaArrowCircleDown } from "react-icons/fa";
import image1 from "../../assets/images/homePageImage/home-page-img1.jpg";
import image2 from "../../assets/images/homePageImage/home-page-img2.jpg";
import image3 from "../../assets/images/homePageImage/home-page-img3.jpg";
import FeaturedItems from "./featuredItems";
import "../../styles/user/featuredItem.css";

const ProductGrid = ({ products }) => {
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
        <img src={image1} alt="product-Image" className="homepage-image-1" />
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
        <img src={image1} alt="product-Image" className="homepage-image-1" />
      </div>
    </div>
  );
};

export default ProductGrid;
