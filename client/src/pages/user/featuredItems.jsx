// FeaturedItems.js
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import "../../styles/user/productCard.css";
import ProductDescriptionCard from "./productDescriptionCard";
import "../../styles/user/productDescriptionCard.css";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <Modal
          show={showModal}
          onHide={closeModal}
          className="model-container"
          centered
          size="lg"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
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
              onClose={closeModal}
            />
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
      </div>
      <div class="feature-line"></div>
      <div className="featureItem-card-right">
        <div className="feature-name">{productName}</div>
        <div className="feature-rating">
          {Array.from({ length: rating }, (_, index) => (
            <FontAwesomeIcon icon={faStar} className="star-icon" key={index} />
          ))}
          <p>({rating})</p>
        </div>
        <div className="feature-price">
          <span className="oldPrice">{oldPrice}</span>
          <span className="newPrice">{newPrice}/piece</span>
        </div>
        <div className="feature-des">{productDetails}</div>
        <div className="add-to-cart-icon">
          <FontAwesomeIcon icon={faShoppingBag} className="icon" />
          <span>Add</span>
        </div>
      </div>
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
