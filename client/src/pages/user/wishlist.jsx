import "../../styles/user/wishlist.css";
import product1Image from "../../assets/images/ProductImage/product1.jpg";
import product2Image from "../../assets/images/ProductImage//product2.jpg";
import product3Image from "../../assets/images/ProductImage//product3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderPage from "../../components/user/HeaderPage";
import Footer from "./Footer";
import banner from "../../assets/images/banner/single-banner.jpg";
import products from "../../pages/user/productList";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../styles/user/productCard.css";
import "../../styles/user/productDescriptionCard.css";
import ProductDescriptionCard from "../../pages/user/productDescriptionCard";
const Wishlist = () => {
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
    <div className="wishlist-container">
      <HeaderPage />
      <div className="offers-banner">
        <img src={banner} alt="Offer Banner" />
        <div className="offer-banner-content">
          <h1>WISHLIST</h1>
          <a href="/">Home</a>/<a href="...">Shop Grid</a>/
          <a href="...">Wishlist</a>
        </div>
      </div>
      <div className="wishlist-table-container">
        <table className="wishlist-table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Status</th>
              <th>Shopping </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>
                  <img src={product.imgSrc} alt="" />
                </td>
                <td>{product.productName}</td>
                <td>{product.newPrice}</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
                <td>In Stock</td>
                <td className="wishlist-card">
                  <div className="wishlist-add-to-cart">
                    <span>Add To Card</span>
                  </div>
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faEye}
                    className="wishlist-view"
                    onClick={toggleDescription}
                  />
                  <FontAwesomeIcon icon={faTrash} className="wishlist-delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="showMoreButton">
        <button className="show-more-button">LOAD MORE ITEMS</button>
      </div>
      <Footer />
      <Modal
        show={showModal}
        className="model-container"
        onHide={closeModal}
        centered
        size="lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          
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
  );
};

export default Wishlist;
