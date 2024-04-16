import banner from "../../assets/images/banner/single-banner.jpg";
import HeaderPage from "../../components/user/HeaderPage";
import "../../styles/user/checkout.css";

import payPal from "../../assets/images/payment-options/01.png";
import visa from "../../assets/images/payment-options/02.png";
import maestro from "../../assets/images/payment-options/03.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import Footer from "./Footer";
import products from "../../pages/user/productList";
import ProductDescriptionCard from "./productDescriptionCard";
import { useSelector, useDispatch } from "react-redux";
import { useSlider } from "../../pages/user/home";
import axios from "axios";

function CheckOut() {
  const profiles = document.querySelectorAll(".profiles-content");
  const token = useSelector((state) => state.tokenDetails.token);
  const { isSidebarOpen, setSidebarOpen, userCartItem, setUserCartItem, productDetails, setProductDetails } = useSlider();
  let responseUserArray = [];

  const [totalCardPrice, setTotalCardPrice] = useState(0);
  const [totalCartItem, setTotalCartItem] = useState(0);

  useEffect(() => {
    console.log(userCartItem);
    if (userCartItem.length == 0) {
      setTotalCardPrice(0);
      setTotalCartItem(0);
    }
    userCartItem.map((items) => {
      const productID = items.productID;
      console.log(items);
      axios
        .get(`http://localhost:8000/get-userDetails/${productID}`)
        .then((response) => {
          console.log(response.data.data);
          const productResponse = response.data.data;
          const userItem = {
            productdetail: productResponse,
            quantity: items.quantity,
          };
          responseUserArray.push(userItem);
          console.log(responseUserArray);
          let totalPrice = 0;
          let count = 0;

          responseUserArray.forEach((product) => {
            totalPrice += product.productdetail.newPrice * product.quantity;
            count = count + 1;
          });
          console.log("Price" + totalPrice);
          setTotalCardPrice(totalPrice);
          console.log("product count " + count);
          setTotalCartItem(count);
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    });

    setProductDetails(responseUserArray);
  }, [userCartItem]);

  const DeleteCartProduct = (product) => {
    console.log(product.productdetail._id);
    const id = product.productdetail._id;
    try {
      axios.delete(`http://localhost:8000/DeleteProductFromCart/${id}/${token}`).then((res) => {
        console.log(res.data);
        setUserCartItem(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  profiles.forEach((profile) => {
    profile.addEventListener("click", () => {
      profiles.forEach((p) => p.classList.remove("active"));
      profile.classList.add("active");
    });
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const popup = () => {
    return (
      <Modal show={show} onHide={handleClose} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Modal.Header closeButton>
          <Modal.Title>Edit info</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-popup">
          <select name="type" id="type">
            <option value="1">Primary</option>
            <option value="2">Secondary</option>
            <option value="3">Others</option>
          </select>
          <label htmlFor="update-profile-info">Enter the new information</label>
          <input type="text" id="update-profile-info" />
          <Button variant="secondary">Update</Button>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  };

  const actionButtons = () => {
    return (
      <div className="profile-action-buttons">
        <button className="profile-action-edit-btn" variant="primary" onClick={handleShow}>
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className="profile-action-del-btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    );
  };

  // const [liked, setLiked] = useState(false);

  // const toggleLike = () => {
  // 	setLiked(!liked);
  // };
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleDescription = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <HeaderPage />

      <div className="profile-popup-message">{popup()}</div>
      <div className="myprofile-banner">
        <img src={banner} alt="Banner" />
        <div className="myprofile-banner-content">
          <h1>CHECKOUT</h1>
        </div>
        <div className="myprofile-banner-anchors">
          <p>
            <a href="/">Home</a> / Checkout
          </p>
        </div>
      </div>

      <div className="myprofile-section">
        <div className="myprofile-details">
          <div className="returning-customer">
            <p>
              Returning Customer? <a href="...">Click here to login</a>
            </p>
          </div>

          <div className="checkout profile-element">
            <div className="contact-head myprofile-headers">
              <h2>Your Order</h2>
            </div>
            <div className="wishlist-table-container">
              <table className="wishlist-table">
                <thead>
                  <tr>
                    <th>Serial</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productDetails.map((product, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <img src={`http://localhost:8000/uploads/productImage/${product.productdetail.image}`} alt="empty" />
                      </td>
                      <td>{product.productdetail.productName}</td>
                      <td>{product.productdetail.newPrice}</td>

                      <td>{product.quantity}</td>
                      <td>${product.productdetail.newPrice * product.quantity}</td>
                      <td>
                        <FontAwesomeIcon icon={faEye} className="wishlist-view" onClick={() => toggleDescription(product)} />

                        <FontAwesomeIcon
                          icon={faTrash}
                          className="wishlist-delete"
                          onClick={() => {
                            DeleteCartProduct(product);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="checkout-summary" style={{ textAlign: "center" }}>
              <a href="..." style={{ color: "#119744" }}>
                Do you have a coupon code?
              </a>

              <span>
                <h5>Sub Total</h5>
                <h5>{totalCardPrice}</h5>
              </span>
              <span>
                <h5>Delivery Fee</h5>
                <h5>$0</h5>
              </span>
              <span>
                <h5>Discount</h5>
                <h5>$0</h5>
              </span>
              <span style={{ color: "#119744" }}>
                <h5>Total(incl.VAT)</h5>
                <h5>{totalCardPrice}</h5>
              </span>
            </div>
          </div>

          <div className="contact-details profile-element">
            <div className="contact-head myprofile-headers">
              <h2>Contact Number</h2>
              <button className="profile-head-btn add-contact">Add Contact</button>
            </div>
            <div className="contact-content profiles-content-containers">
              <div className="primary-number profiles-content">
                <h5>Primary Number</h5>
                <p>+91 81845 12648</p>
                {actionButtons()}
              </div>
              <div className="secondary-number profiles-content">
                <h5>Secondary Number</h5>
                <p>+91 81845 12648</p>
                {actionButtons()}
              </div>
              <div className="secondary-number profiles-content">
                <h5>Secondary Number</h5>
                <p>+91 81845 12648</p>
                {actionButtons()}
              </div>
            </div>
          </div>

          <div className="delivery-address profile-element">
            <div className="delivery-address-head myprofile-headers">
              <h2>Delivery Address</h2>
              <button className="profile-head-btn add-address">Add Address</button>
            </div>
            <div className="delivery-address-content profiles-content-containers">
              <div className="delivery-primary-address profiles-content">
                <h5>Home</h5>
                <p>Jalkuri, Fatullah, Narayanganj-1420. Word No-09, Road No-17/A</p>
                {actionButtons()}
              </div>
              <div className="delivery-secondary-adress profiles-content">
                <h5>Office</h5>
                <p>East Tejturi Bazar, Dhaka-1200. Word No-04, Road No-13/C, House No-4/B</p>
                {actionButtons()}
              </div>
              <div className="delivery-secondary-address profiles-content">
                <h5>Business</h5>
                <p>Kawran Bazar, Dhaka-1100. Word No-02, Road No-13/D, House No-7/M</p>
                {actionButtons()}
              </div>
            </div>
          </div>

          <div className="payment-option-profile profile-element">
            <div className="payment-option-head myprofile-headers">
              <h2>Payment Option</h2>
              <button className="profile-head-btn add-card">Add Card</button>
            </div>
            <div className="payment-option-content profiles-content-containers">
              <div className="payment-card profiles-content">
                <img src={visa} alt="" />
                <h5>
                  Card Number <br />
                  ************1876
                </h5>
                <p>Name</p>
                {actionButtons()}
              </div>
              <div className="profiles-content">
                <img src={payPal} alt="" />
                <h5>
                  Card Number <br />
                  ************1876
                </h5>
                <p>Name</p>
                {actionButtons()}
              </div>
              <div className="profiles-content">
                <img src={maestro} alt="" />
                <h5>
                  Card Number <br />
                  ************1876
                </h5>
                <p>Name</p>
                {actionButtons()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} className="model-container" onHide={closeModal} centered size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {selectedProduct && selectedProduct.productdetail && (
            <ProductDescriptionCard
              product={{
                imgSrc: selectedProduct.productdetail.image,
                imageSlider: selectedProduct.productdetail.imageSlider,
                rating: selectedProduct.productdetail.rating,
                productName: selectedProduct.productdetail.productName,
                oldPrice: selectedProduct.productdetail.oldPrice,
                newPrice: selectedProduct.productdetail.newPrice,
                setSale: selectedProduct.productdetail.sale,
                setNew: selectedProduct.productdetail.newProduct,
                discountPercentage: selectedProduct.productdetail.discountPercentage,
                productDetails: selectedProduct.productdetail.productDescription,
              }}
              onClose={closeModal}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="green-background-button" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}

export default CheckOut;
