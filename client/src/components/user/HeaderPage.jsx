import React from "react";
import "../../styles/user/headerPage.css";
import image from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";
import { useState, useRef, useEffect } from "react";
import { IoIosSearch, IoIosCart } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderPage = () => {
	const [isFixed, setIsFixed] = useState(false);
	const [prevScrollY, setPrevScrollY] = useState(0);
	const cardRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const card = cardRef.current;
			const currentScrollY = window.scrollY;

			setIsFixed(currentScrollY > prevScrollY && currentScrollY > card.offsetTop);
			setPrevScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollY]);
	return (
		<>
			<div className="header-container">
				<div className="header-top">
					<p>Welcome to Ecomart in Your Dream Online Store!</p>
					<div className="right-span">
						<span className="need-help">Need Help</span>
						<span className="contact-us">Contact Us</span>
					</div>
				</div>
				<div className={`header-card-top ${isFixed ? "fixed" : ""}`} ref={cardRef}>
					<div className="alignItem">
						<div className="alignMyAccount">
							<img src={profile} alt="" />
						</div>
						<div className="alignlogo">
							<img src={image} alt="Greeny" />
						</div>
						<div className="alignSearch-icon">
							<IoIosSearch className="align-search" />
						</div>
					</div>
					<div className="logo">
						<img src={image} alt="" className="logo" />
					</div>
					<div className="myAccount">
						<img src={profile} alt="" className="profile-logo" />
						<p className="join">Join</p>
					</div>
					<div className="search-container">
						<input type="text" className="search-bar" placeholder="Search..." />
						<span className="search-icon">
							<IoIosSearch />
						</span>
					</div>

					<div className="card-container">
						<div className="cart-icon">
							<IoIosCart />
						</div>
						<div className="pop-up-item">
							<p>9+</p>
						</div>
					</div>
					<div className="price">
						<p>TOTAL PRICE</p>
						<h6>$345.00</h6>
					</div>
				</div>
				<div className="header-card-bottom">
					<div className="list-item">
						<ul>
							<li>
								Home <FiChevronDown />
							</li>
							<li>
								Shop <FiChevronDown />
							</li>
							<li>
								Category <FiChevronDown />
							</li>
							<li>
								Pages <FiChevronDown />
							</li>
							<li>
								Authentic <FiChevronDown />
							</li>
							<li>
								Blogs <FiChevronDown />
							</li>
						</ul>
					</div>
					<div className="contact-details">
						<div className="contact-item">
							<FaPhone className="icon" />
							<div className="phone">
								<p>Call Us</p>
								<span>(+880) 183 8288 389</span>
							</div>
						</div>
						<div className="contact-item">
							<FaEnvelope className="icon" />
							<div className="email">
								<p>Email Us</p>
								<span>support@example.com</span>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom-card">
					<div className="icon-container">
						<FaHome />
						<span>Home</span>
					</div>
					<div className="icon-container">
						<BiSolidCategory />
						<span>Category</span>
					</div>
					<div className="icon-container">
						<FaShoppingCart />
						<span>Cart</span>
					</div>
				</div>
			</div>
			{/* <div className="product">
        <Link to="/product" id="link">
          Product Page
        </Link>
      </div> */}
		</>
	);
};

export default HeaderPage;
