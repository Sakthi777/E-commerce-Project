// ProductDescription.js
import { AiFillStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";

const ProductDescriptionCard = ({ product, onClose }) => {
  const {
    imgSrc,
    imageSlider,
    rating,
    productName,
    oldPrice,
    newPrice,
    setNew,
    setSale,
    discountPercentage,
    productDetails,
  } = product;
  console.log(discountPercentage);
  const [mainImage, setMainImage] = useState(imgSrc);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 520) {
        setSlidesToShow(4);
      } else if (window.innerWidth < 720) {
        setSlidesToShow(4);
      } else if (window.innerWidth < 820) {
        setSlidesToShow(4);
      } else if (window.innerWidth < 990) {
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
    <div className="overlay-1">
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
              <AiFillStar key={index} />
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
            <FaShoppingCart className="card" />
            <span>ADD TO CARD</span>
          </div>
          <div className="des-add-to-like-icon">
            <AiFillHeart className="like" />
            <span>ADD TO WISH</span>
          </div>

          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionCard;
