// ProductDescription.js
import { AiFillStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const ProductDescriptionCard = ({ product, onClose }) => {
  const {
    imgSrc,
    // imageSlider,
    rating,
    productName,
    oldPrice,
    newPrice,
    setSale,
    setNew,
    productDetails,
  } = product;

  return (
    <div className="overlay">
      <div className="product-description-card">
        <div className="description-image">
          <span className={`sale-label ${setSale ? "visible" : "hidden"}`}>
            Sale
          </span>
          <span className={`new-label ${setNew ? "visible" : "hidden"}`}>
            New
          </span>
          <img src={imgSrc} alt={productName} />
        </div>
        <div className="description-content">
          <div className="product-name">{productName}</div>
          <div className="product-rating">
            {Array.from({ length: rating }, (_, index) => (
              <AiFillStar key={index} />
            ))}
            <p>({rating})</p>
          </div>
          <div className="product-price">
            <span className="oldPrice">${oldPrice}</span>
            <span className="newPrice">${newPrice}/piece</span>
          </div>
          <div className="product-des">
            <p>{productDetails}</p>
          </div>
          <div className="add-to-cart-icon">
            <FaShoppingCart />
            <span>Add</span>
          </div>
          <div className="productLike">
            <AiFillHeart className="icon" />
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
