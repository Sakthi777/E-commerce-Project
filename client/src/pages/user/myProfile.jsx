import banner from "../../assets/images/banner/single-banner.jpg";
import HeaderPage from "../../components/user/HeaderPage";
import "../../styles/user/myProfile.css";
import profileImage from "../../assets/images/homePageImage/profile.png";
function MyProfile() {
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
							<div className="primary-number">
								<p>Primary Number</p>
								<p>+91 81845 12648</p>
							</div>
							<div className="secondary-number">
								<p>Secondary Number</p>
								<p>+91 81845 12648</p>
							</div>
							<div className="secondary-number">
								<p>Secondary Number</p>
								<p>+91 81845 12648</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MyProfile;
