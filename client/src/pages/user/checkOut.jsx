import banner from "../../assets/images/banner/single-banner.jpg";
import HeaderPage from "../../components/user/HeaderPage";
import "../../styles/user/checkout.css";

import payPal from "../../assets/images/payment-options/01.png";
import visa from "../../assets/images/payment-options/02.png";
import maestro from "../../assets/images/payment-options/03.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import Footer from "./Footer";
import products from "../../pages/user/productList";
import ProductDescriptionCard from "./productDescriptionCard";

function CheckOut() {
	const profiles = document.querySelectorAll(".profiles-content");

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
	const [showModal, setShowModal] = useState(false);

	// const toggleLike = () => {
	// 	setLiked(!liked);
	// };

	const toggleDescription = () => {
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

											<td>In Stock</td>
											<td className="wishlist-card">
												<div className="wishlist-add-to-cart">
													<span>Add To Card</span>
												</div>
											</td>
											<td>
												<FontAwesomeIcon icon={faEye} className="wishlist-view" onClick={toggleDescription} />
												<Modal show={showModal} className="model-container" onHide={closeModal} centered size="lg">
													<Modal.Header closeButton></Modal.Header>
													<Modal.Body>
														<ProductDescriptionCard
															product={{
																imgSrc: product.imgSrc,
																imageSlider: product.imageSlider,
																rating: product.rating,
																productName: product.productName,
																oldPrice: product.oldPrice,
																newPrice: product.newPrice,
																setSale: product.setSale,
																setNew: product.setNew,
																discountPercentage: product.discountPercentage,
																productDetails: product.productDetails,
															}}
															onClose={closeModal}
														/>
													</Modal.Body>
													<Modal.Footer>
														<Button variant="secondary" className="green-background-button" onClick={closeModal}>
															Close
														</Button>
													</Modal.Footer>
												</Modal>
												<FontAwesomeIcon icon={faTrash} className="wishlist-delete" />
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
								<h5>$567</h5>
							</span>
							<span>
								<h5>Delivery Fee</h5>
								<h5>$10</h5>
							</span>
							<span>
								<h5>Discount</h5>
								<h5>$0</h5>
							</span>
							<span style={{ color: "#119744" }}>
								<h5>Total(incl.VAT)</h5>
								<h5>$577</h5>
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
			<Footer />
		</>
	);
}

export default CheckOut;
