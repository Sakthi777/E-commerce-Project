import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate, useNavigate } from "react-router-dom";
// import { FaEye } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import "../../styles/user/productCard.css";
import "../../styles/user/productDescriptionCard.css";
import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDescriptionCard from "../../pages/user/productDescriptionCard";
import { useDispatch, useSelector } from "react-redux";
import { setWishLength } from "../../features/slice/wishlistLength";
import { useSlider } from "../../pages/user/home";
import axios from "axios";
const ProductCard = ({ liked, imgSrc, imageSlider, rating, productName, oldPrice, newPrice, setSale, setNew, discountPercentage, productDetails, product }) => {
	// const [liked, setLiked] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [productList, setProductList] = useState("");
	const [backToCart, setBacktoCart] = useState(false);
	const token = useSelector((state) => state.tokenDetails.token);
	const { isSidebarOpen, setSidebarOpen, userCartItem, setUserCartItem } = useSlider();
	const dispatch = useDispatch();
	const wishLength = useSelector((state) => state.wishLength.length);
	// const [ref, setRef] = useState(false);
	useEffect(() => {
		fetchUserCartDetails();
	}, []);
	const fetchUserCartDetails = async () => {
		try {
			const response = await axios.get(`http://localhost:8000/get-userCartDetails/${token}`);
			if (response.data.AddtoCardItems) {
				setUserCartItem(response.data.AddtoCardItems);
			}
		} catch (error) {
			console.log("Error fetching user cart details:", error);
		}
	};
	useEffect(() => {
		userCartItem.map((prod) => {
			// setBacktoCart(false);
			if (prod.productID === product._id) {
				setBacktoCart(true);
				// console.log(prod.productID);
			}
		});
	}, [userCartItem, isSidebarOpen]);
	const url = `http://localhost:8000`;
	const toggleLike = async () => {
		// setLiked(!liked);
		if (liked) {
			dispatch(setWishLength(wishLength - 1));
		} else {
			dispatch(setWishLength(wishLength + 1));
		}
		const wishListPostData = {
			token: token,
			productId: product._id,
		};
		await axios
			.post(`${url}/wishlist/`, wishListPostData)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const handleGoCartClick = () => {
		setSidebarOpen(true);
	};

	const handleClick = (product) => {
		if (backToCart) {
			handleGoCartClick();
		} else {
			handleAddToCard(product);
		}
	};
	const toggleDescription = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};
	const handleAddToCard = (prod) => {
		console.log(prod._id);
		console.log(token);
		const productID = prod._id;
		if (token !== "") {
			axios
				.post("http://localhost:8000/post-AddToCardDetails", { productID, token })
				.then((response) => {
					console.log("Product added to cart:", response.data);
					setUserCartItem(response.data);
				})
				.catch((error) => {
					console.error("Error adding product to cart:", error);
				});

			// setBacktoCart(true);
		} else {
			Navigate("/login");
		}
	};
	return (
		<div className="product-card">
			<div className={`productLike ${liked ? "liked" : ""}`} onClick={toggleLike}>
				<AiFillHeart className="icon" style={{ verticalAlign: "unset" }} />
			</div>
			<div className="product-img-container">
				<span className={`sale-label ${setSale ? "visible" : "hidden"}`}>Sale</span>
				<span className={`new-label ${setNew ? "visible" : "hidden"}`}>New</span>
				<img src={`http://localhost:8000/uploads/productImage/${imgSrc}`} alt={productName} className="product-img" />
				<div className="viewIcon" onClick={toggleDescription}>
					<FontAwesomeIcon icon={faEye} />
				</div>
			</div>
			<Modal show={showModal} className="model-container" onHide={closeModal} centered size="lg">
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<ProductDescriptionCard
						product={{
							imgSrc: imgSrc,
							imageSlider: imageSlider,
							rating: rating,
							productName: productName,
							oldPrice: oldPrice,
							newPrice: newPrice,
							setSale: setSale,
							setNew: setNew,
							discountPercentage: discountPercentage,
							productDetails: productDetails,
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
			<div class="product-line"></div>
			<div className="product-rating">
				{Array.from({ length: rating }, (_, index) => (
					<FontAwesomeIcon icon={faStar} className="icon" key={index} />
				))}
				<p>({rating})</p>
			</div>
			<div className="product-name">{productName}</div>
			<div className="product-price">
				<span className="oldPrice">{oldPrice}</span>
				<span className="newPrice">{newPrice}/piece</span>
			</div>
			<div
				className="add-to-cart-icon"
				onClick={() => {
					handleClick(product);
				}}>
				<FontAwesomeIcon icon={faShoppingBag} className="card-icon" />
				{backToCart ? <span>Go Cart</span> : <span>Add</span>}
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	imageSlider: PropTypes.arrayOf(PropTypes.string).isRequired,
	rating: PropTypes.number.isRequired,
	productName: PropTypes.string.isRequired,
	oldPrice: PropTypes.number.isRequired,
	newPrice: PropTypes.number.isRequired,
	setSale: PropTypes.bool.isRequired,
	setNew: PropTypes.bool.isRequired,
	discountPercentage: PropTypes.number.isRequired,
	productDetails: PropTypes.string.isRequired,
};

export default ProductCard;
