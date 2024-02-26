import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import "../../styles/user/productCard.css";
import "../../styles/user/productDescriptionCard.css";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductDescriptionCard from "../../pages/user/productDescriptionCard";

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
