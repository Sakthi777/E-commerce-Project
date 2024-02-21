// FeaturedItems.js
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import "../../styles/user/productCard.css";
import ProductDescriptionCard from "../../pages/user/productDescriptionCard";
import "../../styles/user/productDescriptionCard.css";

const FeaturedItems = ({
  imgSrc,
  imageSlider,
  rating,
  productName,
  oldPrice,
  newPrice,
  setSale,
  setNew,
  discountPercentage,
  featuredItem,
  productDetails,
}) => {
  const [liked, setLiked] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  useEffect(() => {
    const body = document.body;

    // Apply styles based on showDescription
    if (showDescription) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [showDescription]);

  return (
    <div className="featuredItem-card">
      <div className="featureItem-card-left">
        <div
          className={`featureLike ${liked ? "liked" : ""}`}
          onClick={toggleLike}
        >
          <AiFillHeart className="icon" />
        </div>
        <div className="label">
          <span className="feature-label">Feature</span>
        </div>

        <img src={imgSrc} alt={productName} className="feature-img" />
        <div className="viewIcon" onClick={toggleDescription}>
          <FaEye />
        </div>
      </div>
      <div class="feature-line"></div>
      <div className="featureItem-card-right">
        <div className="feature-name">{productName}</div>
        <div className="feature-rating">
          {Array.from({ length: rating }, (_, index) => (
            <AiFillStar key={index} />
          ))}
          <p>({rating})</p>
        </div>
        <div className="feature-price">
          <span className="oldPrice">{oldPrice}</span>
          <span className="newPrice">{newPrice}/piece</span>
        </div>
        <div className="feature-des">{productDetails}</div>
        <div className="add-to-cart-icon">
          <FaShoppingCart />
          <span>Add</span>
        </div>

        {/* Right content goes here */}
      </div>

      {showDescription && (
        <ProductDescriptionCard
          product={{
            imgSrc: imgSrc,
            imageSlider: imageSlider,
            rating: rating,
            productName: productName,
            oldPrice: oldPrice,
            newPrice: newPrice,
            setSale: setSale,
            setNew: setNew,
            discountPercentage: discountPercentage,
            productDetails: productDetails,
          }}
          onClose={toggleDescription}
        />
      )}
    </div>
  );
};

FeaturedItems.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imageSlider: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  oldPrice: PropTypes.number.isRequired,
  newPrice: PropTypes.number.isRequired,
  setSale: PropTypes.bool.isRequired,
  setNew: PropTypes.bool.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  featuredItem: PropTypes.bool.isRequired,
  productDetails: PropTypes.string.isRequired,
};

export default FeaturedItems;
