import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import "../../styles/user/productCard.css";
import "../../styles/user/productDescriptionCard.css";
import { Modal, Button } from "react-bootstrap";

import { useState, useEffect, useRef } from "react";
import {
  faShoppingBag,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const [liked, setLiked] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleDescription = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
      <Modal
        show={showModal}
        className="model-container"
        onHide={closeModal}
        centered
        size="lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
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
                    <div
                      key={index}
                      onClick={() => handleThumbnailClick(image)}
                    >
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
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="green-background-button"
            onClick={closeModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div class="product-line"></div>
      <div className="product-rating">
        {Array.from({ length: rating }, (_, index) => (
          <FontAwesomeIcon icon={faStar} className="icon" key={index} />
        ))}
        <p>({rating})</p>
      </div>
      <div className="product-name">{productName}</div>
      <div className="product-price">
        <span className="oldPrice">{oldPrice}</span>
        <span className="newPrice">{newPrice}/piece</span>
      </div>
      <div className="add-to-cart-icon">
        <FontAwesomeIcon icon={faShoppingBag} className="card-icon" />
        <span>Add</span>
      </div>
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
