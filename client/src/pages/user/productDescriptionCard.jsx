import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDescriptionCard = ({ product, onClose }) => {
  const {
    imgSrc,
    imageSlider,
    rating,
    productName,
    oldPrice,
    newPrice,
    setNew,
    discountPercentage,
    productDetails,
  } = product;
  const [mainImage, setMainImage] = useState(imgSrc);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setSlidesToShow(4);
      } else if (window.innerWidth < 1100) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const slickSliderRef = useRef(null);
  const handleThumbnailClick = (image) => {
    setMainImage(image);
    slickSliderRef.current.slickNext();
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };




  return (
    <div className="helo">
      <div className="product-description-card">
        <div className="description-left">
          <div className="description-image">
            <img src={mainImage} alt={productName} />
            <span className={`new-label ${setNew ? "visible" : "hidden"}`}>
              New
            </span>
            <span className="discount-label">-{discountPercentage}%</span>
          </div>
          <div className="description-thumbnails">
            <Slider {...sliderSettings} ref={slickSliderRef}>
              {[...imageSlider].map((image, index) => (
                <div key={index} onClick={() => handleThumbnailClick(image)}>
                  <img src={image} alt={"product"} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="description-content">
          <div className="des-product-name">
            {productName}
            <p>
              SKU: 1234567 <span>BRAND: RADHUNI</span>
            </p>
          </div>
          <div className="des-product-rating">
            {Array.from({ length: rating }, (_, index) => (
              <FontAwesomeIcon
                icon={faStar}
                className="star-icon"
                key={index}
              />
            ))}
            <p>({rating} Reviews)</p>
          </div>
          <div className="des-product-price">
            <span className="oldPrice">${oldPrice}</span>
            <span className="newPrice">${newPrice}/piece</span>
          </div>
          <div className="des-product">
            <p>{productDetails}</p>
          </div>
          <div className="des-add-to-cart-icon">
            <FontAwesomeIcon icon={faShoppingBag} className="shop-icon" />
            <span>ADD TO CARD</span>
          </div>
          <div className="des-add-to-like-icon">
            <FontAwesomeIcon icon={faHeart} className="like" />
            <span>ADD TO WISH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionCard;
