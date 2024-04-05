import banner from "../../assets/images/banner/single-banner.jpg";
import HeaderPage from "../../components/user/HeaderPage";
import "../../styles/user/myProfile.css";
import profileImage from "../../assets/images/homePageImage/profile.png";
import payPal from "../../assets/images/payment-options/01.png";
import visa from "../../assets/images/payment-options/02.png";
import maestro from "../../assets/images/payment-options/03.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import Footer from "./Footer";

import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

import axios from "axios";

function MyProfile() {
  const url = "http://localhost:8000";

  const profiles = document.querySelectorAll(".profiles-content");

  // const profileData = useSelector((state) => state.userProfileDetails.profileData);
  const token = useSelector((state) => state.tokenDetails.token);

  profiles.forEach((profile) => {
    profile.addEventListener("click", () => {
      profiles.forEach((p) => p.classList.remove("active"));
      profile.classList.add("active");
    });
  });

  const [showProfile, setShowProfile] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files);
    setSelectedImages(imagesArray);
  };
  const handleProfileClose = async () => {
    setShowProfile(false);
    if (selectedImages.length > 0) {
      const formData = new FormData();
      selectedImages.forEach((image) => {
        formData.append("profileImage", image);
      });
      formData.append("token", token);
      console.log(Object.fromEntries(formData));
      try {
        const response = await axios.post(`${url}/profileData/postImage`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Upload successful:", response.data);
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    } else {
      console.log("No images selected.");
    }
  };
  const handleProfileShow = () => {
    setShowProfile(true);
  };
  const handleContactClose = () => {
    setShowContact(false);
    const contactType = document.getElementById("contactType").value;
    const contactNumber = document.getElementById("contact-number").value;
    const postData = {
      token: token,
      contactNumbers: [
        {
          contactType: contactType,
          contactNumber: contactNumber,
        },
      ],
    };
    console.log(postData);
    axios
      .post(`${url}/profileData/contact`, postData)
      .then((response) => {
        console.log("Data posted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };
  const handleContactShow = () => setShowContact(true);

  const handleAddressClose = () => {
    setShowAddress(false);
    const address = document.getElementById("contact-number").value;
    const addressType = document.getElementById("addressType").value;
    const postData = {
      token: token,
      addresses: [
        {
          address: address,
          addressType: addressType,
        },
      ],
    };

    axios
      .post(`${url}/profileData/address`, postData)
      .then((response) => {
        console.log("Address data posted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error posting address data:", error);
      });
  };

  const handleAddressShow = () => setShowAddress(true);

  const handleCardShow = () => setShowCard(true);
  const handleCardClose = () => {
    setShowCard(false);
    const cardType = document.getElementById("card-type").value;
    const cardNumber = document.getElementById("card-number").value;
    const cardOwnerName = document.getElementById("card-owner-name").value;
    const postData = {
      token: token,
      cardType: cardType,
      cardNumber: cardNumber,
      ownerName: cardOwnerName,
    };

    axios
      .post(`${url}/profileData/card`, postData)
      .then((response) => {
        console.log("Data posted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  const [userDetails, setUserDetails] = useState(null);
  const [contactDetails, setContactDetails] = useState([]);
  const [addressDetails, setAddressDetails] = useState([]);
  const [cardDetails, setCardDetails] = useState([]);
  const [profilePic, setProfilePic] = useState(profileImage);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileDataRes = await axios.get(`${url}/profileData/${token}`);
        // console.log(profileDataRes.data);
        setContactDetails(profileDataRes.data.contactNumbers);
        setAddressDetails(profileDataRes.data.addresses);
        setCardDetails(profileDataRes.data.cards);
        setProfilePic(profileDataRes.data.profilePicture);
        console.log(profileDataRes.data.profilePicture);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    const findUser = async () => {
      try {
        const id = jwtDecode(token).userId;
        const userData = await axios.get(`${url}/login/getuser/${id}`);
        setUserDetails(userData.data);
      } catch (error) {
        console.log(error);
      }
    };
    findUser();
    fetchData();
  }, []);

  const renderContactDetails = () => {
    return contactDetails.map((contact, index) => (
      <div className="primary-number profiles-content" key={index}>
        <h5>{contact.contactType}</h5>
        <p>{contact.contactNumber}</p>
        <button className="profile-action-del-btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    ));
  };

  const renderAddressDetails = () => {
    return addressDetails.map((address, index) => (
      <div className="delivery-primary-address profiles-content" key={index}>
        <h5>{address.addressType}</h5>
        <p>{address.address}</p>
        <button className="profile-action-del-btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    ));
  };

  const renderCardDetails = () => {
    return cardDetails.map((card, index) => {
      let cardImage;
      if (card.cardType === "paypal") {
        cardImage = payPal;
      } else if (card.cardType === "maestro") {
        cardImage = maestro;
      } else {
        cardImage = visa;
      }

      return (
        <div className="payment-card profiles-content" key={index}>
          <img src={cardImage} alt="" />
          <h5>
            Card Number <br />
            ************{card.cardNumber.slice(-4)}
          </h5>
          <p>{card.ownerName}</p>
          <button className="profile-action-del-btn">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      );
    });
  };

  return (
    <>
      <HeaderPage />

      <div className="edit-Profile-popup">
        <Modal show={showProfile} onHide={handleProfileClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile Picture</Modal.Title>
          </Modal.Header>
          <Modal.Body className="edit-profile-modal">
            <div>
              <label htmlFor="profilePicture">Select Image</label>
              <input id="profilePicture" type="file" accept="image/*" style={{ border: "none" }} onChange={handleImageChange} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleProfileClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="edit-contact-popup">
        <Modal show={showContact} onHide={handleContactClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body className="edit-contact-modal">
            <div>
              <select name="contactType" id="contactType">
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
              </select>
              <label htmlFor="profile-contact">Enter Number</label>
              <input type="number" id="contact-number" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleContactClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="edit-address-popup">
        <Modal show={showAddress} onHide={handleAddressClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Address</Modal.Title>
          </Modal.Header>
          <Modal.Body className="edit-address-modal">
            <div>
              <label htmlFor="profile-contact">Enter Address</label>
              <textarea style={{ width: "90%" }} type="number" id="contact-number" />
            </div>
            <div>
              <label htmlFor="adress-type">Adress Type</label>
              <select name="addressType" id="addressType">
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAddressClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="edit-card-popup">
        <Modal show={showCard} onHide={handleCardClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Prfofile</Modal.Title>
          </Modal.Header>
          <Modal.Body className="edit-address-modal">
            <div>
              <select name="card-type" id="card-type">
                <option value="visa">Visa</option>
                <option value="maestro">Mastero</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
            <div>
              <label htmlFor="profile-contact">Enter Card Number</label>
              <input type="text" id="card-number" />
            </div>
            <div>
              <label htmlFor="card-owner-name">Name</label>
              <input type="text" id="card-owner-name" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCardClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

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
              <button className="profile-head-btn add-contact" onClick={handleProfileShow}>
                Edit Profile
              </button>
            </div>
            <div className="yourprofile-content profiles-content-containers">
              {profilePic ? (
                <div className="profile-img">
                  <img src={`${url}/uploads/profilePicture/${profilePic}`} alt="" />
                </div>
              ) : (
                <div className="profile-img">
                  <img src={profileImage} alt="" />
                </div>
              )}

              {userDetails ? (
                <>
                  <div className="name-input">
                    <label htmlFor="profile-username">Name</label>
                    <input type="text" id="profile-username" value={userDetails.name} readOnly style={{ outline: "none" }} />
                  </div>
                  <div className="email-input">
                    <label htmlFor="profile-email">E-Mail</label>
                    <input type="email" id="profile-email" value={userDetails.email} readOnly style={{ outline: "none" }} />
                  </div>
                </>
              ) : (
                <>
                  <div className="name-input">
                    <label htmlFor="profile-username">Name</label>
                    <input type="text" id="profile-username" value="Name" readOnly style={{ outline: "none" }} />
                  </div>
                  <div className="email-input">
                    <label htmlFor="profile-email">E-Mail</label>
                    <input type="email" id="profile-email" value="Email" readOnly style={{ outline: "none" }} />
                  </div>
                </>
              )}
            </div>
            <div className="change-pass-btn">
              <button>Change Password</button>
            </div>
          </div>

          <div className="contact-details profile-element">
            <div className="contact-head myprofile-headers">
              <h2>Contact Details</h2>
              <button className="profile-head-btn add-contact" onClick={handleContactShow}>
                Add Contact
              </button>
            </div>
            <div className="contact-content profiles-content-containers">{renderContactDetails()}</div>
          </div>

          <div className="delivery-address profile-element">
            <div className="delivery-address-head myprofile-headers">
              <h2>Delivery Address</h2>
              <button className="profile-head-btn add-address" onClick={handleAddressShow}>
                Add Address
              </button>
            </div>
            <div className="delivery-address-content profiles-content-containers">{renderAddressDetails()}</div>
          </div>

          <div className="payment-option-profile profile-element">
            <div className="payment-option-head myprofile-headers">
              <h2>Payment Option</h2>
              <button className="profile-head-btn add-card" onClick={handleCardShow}>
                Add Card
              </button>
            </div>
            <div className="payment-option-content profiles-content-containers">{renderCardDetails()}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyProfile;
