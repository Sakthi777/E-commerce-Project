import React from "react";
import { createContext, useContext } from "react";
import ProductCard from "../../pages/user/productCard";
import HeaderPage from "../../components/user/HeaderPage";
import { FaArrowCircleDown } from "react-icons/fa";
import image1 from "../../assets/images/homePageImage/home-page-img1.jpg";
import countdownImage from "../../assets/images/homePageImage/countdown.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../pages/user/Footer";
import { faShoppingBag, faStar, faPercent } from "@fortawesome/free-solid-svg-icons";
import FeaturedItems from "./featuredItems";
import "../../styles/user/featuredItem.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Highlight } from "../../components/user/homePageCarousels";
import { useSelector } from "react-redux";
// import Cookies from "js-cookie";
//import products from "./productList";
const url = "http:localhost:8000";

export const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const [userCartItem, setUserCartItem] = useState([]);
	const [productDetails, setProductDetails] = useState([]);

	return <SliderContext.Provider value={{ isSidebarOpen, setSidebarOpen, userCartItem, setUserCartItem, productDetails, setProductDetails }}>{children}</SliderContext.Provider>;
};

export const useSlider = () => useContext(SliderContext);

const ProductGrid = ({ products }) => {
	const token = useSelector((state) => state.tokenDetails.token);
	const [selectedOption, setSelectedOption] = useState("Top Order");
	const [wishList, setWishList] = useState([]);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};

	// const cookie = Cookies.get("LoginToken");

	function timeout(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	const [productDetails, setProductDetails] = useState([]);
	useEffect(() => {
		axios
			.get(`http://localhost:8000/get-productDetails`)
			.then((response) => {
				setProductDetails(response.data.data);
			})
			.catch((error) => {
				console.error("Error fetching product data:", error);
			});
	}, []);

	const fetchWishList = async () => {
		await axios.get(`http://localhost:8000/wishlist/${token}`).then((res) => {
			setWishList(res.data.productID);
		});
	};
	useEffect(() => {
		fetchWishList();
	}, []);

	//CountDown Time start

	const [seconds, setSeconds] = useState(24 * 60 * 60);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((prevSeconds) => {
				if (prevSeconds === 0) {
					clearInterval(interval);
				}
				return prevSeconds - 1;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = seconds % 60;

	//CountDown Time end

	return (
		<>
			<HeaderPage />
			<Highlight />
			{/* <Foods /> */}

			<div className="product-container">
				<div className="productTitle">Recently Sold Items</div>
				<div className="product-grid">
					{productDetails.map((product) => (
						<ProductCard
							liked={() => {
								return wishList.includes(product._id) ? true : false;
							}}
							key={product._id}
							imgSrc={product.image}
							imageSlider={product.imageSlider}
							rating={product.rating}
							productName={product.productName}
							oldPrice={product.oldPrice}
							newPrice={product.newPrice}
							setNew={product.newProduct}
							setSale={product.sale}
							discountPercentage={product.discountPercentage}
							productDetails={product.productDescription}
							product={product}
						/>
					))}
				</div>
				<div className="showMoreButton">
					<button className="show-more-button">
						<FaArrowCircleDown className="showmore-icon" />
						SHOW MORE
					</button>
				</div>
				<div className="homePage-imageBox">
					<img src={image1} alt="product" className="homepage-image-1" />
				</div>
				<div className="productTitle">Our Featured Items</div>
				<div className="featuredItem-grid">
					{productDetails.map(
						(product) =>
							product.featuredItems && (
								<FeaturedItems
									key={product._id}
									imgSrc={product.image}
									imageSlider={product.imageSlider}
									rating={product.rating}
									productName={product.productName}
									oldPrice={product.oldPrice}
									newPrice={product.newPrice}
									setNew={product.newProduct}
									setSale={product.sale}
									discountPercentage={product.discountPercentage}
									productDetails={product.productDescription}
									product={product}
								/>
							),
					)}
				</div>
				<div className="showMoreButton">
					<button className="show-more-button">
						<FaArrowCircleDown className="showmore-icon" />
						SHOW MORE
					</button>
				</div>
				<div className="specialDiscount">
					<div className="discountContent">
						<h1>SPECIAL DISCOUNT OFFER FOR VEGETABLE ITEMS</h1>
						<p>Reprehenderit sed quod autem molestiae aut modi minus veritatis iste dolorum suscipit quis voluptatum fugiat mollitia quia minima</p>
						<div className="countdown specialdiscount">
							<div className="days">
								<span className="countdown-time">
									00
									<span>:</span>
								</span>
								<p>days</p>
							</div>

							<div className="hours">
								<span className="countdown-time">
									{hours}
									<span>:</span>
								</span>
								<p>hours</p>
							</div>

							<div className="minutes">
								<span className="countdown-time">
									{minutes}
									<span>:</span>
								</span>
								<p>minutes</p>
							</div>

							<div className="seconds">
								<span className="countdown-time">{remainingSeconds}</span>
								<p>seconds</p>
							</div>
						</div>
						<div className="showNowButton">
							<button className="show-now-button">
								<FontAwesomeIcon icon={faShoppingBag} className="shop-icon" />
								SHOW NOW
							</button>
						</div>
					</div>
					<div className="discountImage">
						<div className="discount-percent">
							<h1>20%</h1>
							<h1>OFF</h1>
						</div>
						<img src={countdownImage} alt="product" className="countdownImage" />
					</div>
				</div>
				<div className="productTitle">Collected New Items</div>
				{/* {console.log(productDetails)} */}
				<div className="product-grid">
					{productDetails.map(
						(product) =>
							product.newProduct && (
								<ProductCard
									key={product._id}
									imgSrc={product.image}
									imageSlider={product.imageSlider}
									rating={product.rating}
									productName={product.productName}
									oldPrice={product.oldPrice}
									newPrice={product.newPrice}
									setNew={product.newProduct}
									setSale={product.sale}
									discountPercentage={product.discountPercentage}
									productDetails={product.productDescription}
									product={product}
								/>
							),
					)}
				</div>
				<div className="showMoreButton">
					<button className="show-more-button">
						<FaArrowCircleDown className="showmore-icon" />
						SHOW MORE
					</button>
				</div>
				<div className="homePage-imageBox">
					<img src={image1} alt="product" className="homepage-image-1" />
				</div>
				<div className="productTitle">Browse By Top Niche</div>
				<div className="topNiche-card">
					<ul className="topNiche-list">
						<li className={`item-1 ${selectedOption === "Top Order" ? "active" : ""}`} onClick={() => handleOptionClick("Top Order")}>
							<FontAwesomeIcon icon={faShoppingBag} />
							TOP ORDER
						</li>
						<li className={`item-2 ${selectedOption === "Top Rating" ? "active" : ""}`} onClick={() => handleOptionClick("Top Rating")}>
							<FontAwesomeIcon icon={faStar} />
							TOP RATING
						</li>
						<li className={`item-3 ${selectedOption === "Top Discount" ? "active" : ""}`} onClick={() => handleOptionClick("Top Discount")}>
							<FontAwesomeIcon icon={faPercent} />
							TOP DISCOUNT
						</li>
					</ul>
				</div>
				<div className="topNiche">
					{selectedOption === "Top Order" && (
						<div className="product-grid">
							{productDetails.map(
								(product) =>
									product.sale && (
										<ProductCard
											key={product._id}
											imgSrc={product.image}
											imageSlider={product.imageSlider}
											rating={product.rating}
											productName={product.productName}
											oldPrice={product.oldPrice}
											newPrice={product.newPrice}
											setNew={product.newProduct}
											setSale={product.sale}
											discountPercentage={product.discountPercentage}
											productDetails={product.productDescription}
											product={product}
										/>
									),
							)}
						</div>
					)}

					{selectedOption === "Top Rating" && (
						<div className="featuredItem-grid">
							{productDetails.map(
								(product) =>
									product.featuredItems && (
										<FeaturedItems
											key={product._id}
											imgSrc={product.image}
											imageSlider={product.imageSlider}
											rating={product.rating}
											productName={product.productName}
											oldPrice={product.oldPrice}
											newPrice={product.newPrice}
											setNew={product.newProduct}
											setSale={product.sale}
											discountPercentage={product.discountPercentage}
											productDetails={product.productDescription}
											product={product}
										/>
									),
							)}
						</div>
					)}
					{selectedOption === "Top Discount" && (
						<div className="product-grid">
							{productDetails.map(
								(product) =>
									product.newProduct && (
										<ProductCard
											key={product._id}
											imgSrc={product.image}
											imageSlider={product.imageSlider}
											rating={product.rating}
											productName={product.productName}
											oldPrice={product.oldPrice}
											newPrice={product.newPrice}
											setNew={product.newProduct}
											setSale={product.sale}
											discountPercentage={product.discountPercentage}
											productDetails={product.productDescription}
											product={product}
										/>
									),
							)}
						</div>
					)}
				</div>
				<div className="showMoreButton">
					<button className="show-more-button">
						<FaArrowCircleDown className="showmore-icon" />
						SHOW MORE
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ProductGrid;
