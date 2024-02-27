import banner from "../../assets/images/banner/single-banner.jpg";
import HeaderPage from "../../components/user/HeaderPage";
import "../../styles/user/myProfile.css";

import payPal from "../../assets/images/payment-options/01.png";
import visa from "../../assets/images/payment-options/02.png";
import maestro from "../../assets/images/payment-options/03.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import Footer from "./Footer";

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

	return (
		<>
			<HeaderPage />
			<div className="profile-popup-message">{popup()}</div>

			<div className="myprofile-section">
				<div className="myprofile-banner">
					<img src={banner} alt="Banner" />
					<div className="myprofile-banner-content">
						<h1>MY PROFILE</h1>
					</div>
					<div className="myprofile-banner-anchors">
						<p>
							<a href="/">Home</a> / Checkout
						</p>
					</div>
				</div>

				<div className="myprofile-details">
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
