import banner from "../../assets/images/banner/single-banner.jpg";
import HeaderPage from "../../components/user/HeaderPage";
import "../../styles/user/myProfile.css";
import profileImage from "../../assets/images/homePageImage/profile.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

function MyProfile() {
	const profiles = document.querySelectorAll(".profiles-content");

	profiles.forEach((profile) => {
		profile.addEventListener("click", () => {
			profiles.forEach((p) => p.classList.remove("active"));
			profile.classList.add("active");
		});
	});

	const actionButtons = () => {
		return (
			<div className="profile-action-buttons">
				<button className="profile-action-edit-btn">
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
			<div className="myprofile-section">
				<div className="myprofile-banner">
					<img src={banner} alt="Banner" />
					<div className="myprofile-banner-content">
						<h1>MY PROFILE</h1>
					</div>
					<div className="myprofile-banner-anchors">
						<p>
							<a href="/">Home</a> / Wallet
						</p>
					</div>
				</div>

				<div className="myprofile-details">
					<div className="yourprofile profile-element">
						<div className="yourprofile-head myprofile-headers">
							<h2>Your Profile</h2>
							<button className="profile-head-btn edit-profile">Edit Profile</button>
						</div>
						<div className="yourprofile-content profiles-content-containers">
							<div className="profile-img">
								<img src={profileImage} alt="" />
							</div>
							<div className="name-input">
								<label htmlFor="profile-username">Name</label>
								<input type="text" id="profile-username" placeholder="Your Name" />
							</div>
							<div className="email-input">
								<label htmlFor="profile-email">E-Mail</label>
								<input type="email" id="profile-email" placeholder="Your Email" />
							</div>
							<button className="change-pass-btn">Change Password</button>
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
							<div className="delivery-home-address profiles-content">
								<h5>Home</h5>
								<p>Jalkuri, Fatullah, Narayanganj-1420. Word No-09, Road No-17/A</p>
								{actionButtons()}
							</div>
							<div className="delivery-office-adress profiles-content">
								<h5>Office</h5>
								<p>East Tejturi Bazar, Dhaka-1200. Word No-04, Road No-13/C, House No-4/B</p>
								{actionButtons()}
							</div>
							<div className="deliver-business-address profiles-content">
								<h5>Business</h5>
								<p>Kawran Bazar, Dhaka-1100. Word No-02, Road No-13/D, House No-7/M</p>
								{actionButtons()}
							</div>
							<div className="deliver-business-address profiles-content">
								<h5>Business</h5>
								<p>Kawran Bazar, Dhaka-1100. Word No-02, Road No-13/D, House No-7/M</p>
								{actionButtons()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MyProfile;
