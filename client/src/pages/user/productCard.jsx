import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import "../../styles/user/productCard.css";
import ProductDescriptionCard from "../../pages/user/productDescriptionCard";
import "../../styles/user/productDescriptionCard.css";

const ProductCard = ({
  imgSrc,
  imageSlider,
  rating,
  productName,
  oldPrice,
  newPrice,
  setSale,
  setNew,
  discountPercentage,
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
    <div className="product-card">
      <div
        className={`productLike ${liked ? "liked" : ""}`}
        onClick={toggleLike}
      >
        <AiFillHeart className="icon" />
      </div>

      <span className={`sale-label ${setSale ? "visible" : "hidden"}`}>
        Sale
      </span>
      <span className={`new-label ${setNew ? "visible" : "hidden"}`}>New</span>
      <img src={imgSrc} alt={productName} className="product-img" />
      <div className="viewIcon" onClick={toggleDescription}>
        <FaEye />
      </div>
      <div class="product-line"></div>
      <div className="product-rating">
        {Array.from({ length: rating }, (_, index) => (
          <AiFillStar key={index} />
        ))}
        <p>({rating})</p>
      </div>
      <div className="product-name">{productName}</div>
      <div className="product-price">
        <span className="oldPrice">{oldPrice}</span>
        <span className="newPrice">{newPrice}/piece</span>
      </div>
      <div className="add-to-cart-icon">
        <FaShoppingCart />
        <span>Add</span>
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

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imageSlider: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  oldPrice: PropTypes.number.isRequired,
  newPrice: PropTypes.number.isRequired,
  setSale: PropTypes.bool.isRequired,
  setNew: PropTypes.bool.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  productDetails: PropTypes.string.isRequired,
};

export default ProductCard;
